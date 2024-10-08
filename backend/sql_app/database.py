from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker

from backend.sql_app.config import get_db_url, get_settings
from backend.sql_app.models import Base


engine = create_async_engine(
    url=get_db_url(),
    echo=get_settings().DB_ECHO,
)
SessionLocal = async_sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False,
)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)


async def get_db():
    async with SessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()
