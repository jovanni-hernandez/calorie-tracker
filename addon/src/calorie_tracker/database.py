"""SQLAlchemy database setup."""

from collections.abc import Generator

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, Session, sessionmaker

from calorie_tracker.config import get_settings


class Base(DeclarativeBase):
    """Base class for ORM models."""


engine = create_engine(
    get_settings().database_url,
    connect_args={"check_same_thread": False}
    if get_settings().database_url.startswith("sqlite")
    else {},
)
SessionFactory = sessionmaker(bind=engine, expire_on_commit=False)


def get_session() -> Generator[Session, None, None]:
    """Yield a request-scoped database session."""
    with SessionFactory() as session:
        yield session
