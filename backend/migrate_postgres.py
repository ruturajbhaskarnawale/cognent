import os
from dotenv import load_dotenv

# 1. Load the URL from .env
load_dotenv()
db_url = os.getenv("DATABASE_URL")

from sqlalchemy import text, create_engine

def migrate_postgres():
    print("🚀 PRODUCTION DATABASE MIGRATION")
    print("--------------------------------")
    
    if not db_url:
        print("❌ ERROR: DATABASE_URL not found in .env!")
        return

    # Check if we are accidentally hitting SQLite
    if "sqlite" in db_url.lower():
        print("⚠️ WARNING: Your DATABASE_URL is pointing to a LOCAL SQLite file.")
        print(f"Current URL: {db_url}")
        print("Please update your .env with the Vercel POSTGRES_URL first.")
        return

    print(f"Targeting Database: {db_url.split('@')[-1] if '@' in db_url else 'Remote Postgres'}")
    
    # Create engine specifically for this script
    engine = create_engine(db_url)
    
    migrations = [
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS description TEXT;",
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS scheduled_publish_at TIMESTAMP;",
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP;"
    ]
    
    try:
        with engine.connect() as connection:
            for sql in migrations:
                print(f"Executing: {sql}")
                try:
                    connection.execute(text(sql))
                    connection.commit()
                    print("✅ Success")
                except Exception as e:
                    if "already exists" in str(e).lower():
                        print("ℹ️ Column already exists, skipping.")
                    else:
                        print(f"❌ Error: {e}")
            
        print("\n🎉 ALL DONE! Your Vercel Postgres is now updated.")
        print("Now, go to the Admin Panel and try to Save Project again.")
    
    except Exception as e:
        print(f"❌ CONNECTION ERROR: {e}")

if __name__ == "__main__":
    migrate_postgres()
