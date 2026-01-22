import os
from sqlalchemy import text
from app.database import engine

def migrate_postgres():
    print("🚀 Starting Postgres Schema Migration...")
    
    # SQL commands to add missing columns if they don't exist
    # Note: Postgres doesn't have a simple 'ADD COLUMN IF NOT EXISTS' for columns 
    # without using a DO block or checking system tables.
    
    migrations = [
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS description TEXT;",
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS scheduled_publish_at TIMESTAMP;",
        "ALTER TABLE project ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP;"
    ]
    
    with engine.connect() as connection:
        for sql in migrations:
            print(f"Executing: {sql}")
            try:
                connection.execute(text(sql))
                connection.commit()
                print("✅ Success")
            except Exception as e:
                print(f"❌ Error: {e}")
                
    print("\n✅ Postgres migration attempt finished!")
    print("If you still see errors, check your Vercel Postgres logs.")

if __name__ == "__main__":
    migrate_postgres()
