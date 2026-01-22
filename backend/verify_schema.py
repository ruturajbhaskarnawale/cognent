from dotenv import load_dotenv
load_dotenv()
from sqlalchemy import inspect
from app.database import engine

print("Verifying database schema...")

inspector = inspect(engine)
columns = inspector.get_columns('project')

print("\nProject table columns:")
for col in columns:
    print(f"  - {col['name']} ({col['type']})")

# Check for specific expected fields
column_names = [col['name'] for col in columns]
expected = ['description', 'scheduled_publish_at', 'updated_at']

print("\nMigration Check:")
for field in expected:
    status = "✅ Found" if field in column_names else "❌ Missing"
    print(f"  - {field}: {status}")

print("\n✅ Schema verification complete!")
