from typing import List
from sqlalchemy import String, ForeignKey, Integer, JSON
from sqlalchemy.orm import Mapped, mapped_column, relationship

from .base import Base


class Book(Base):
    book_name: Mapped[str] = mapped_column(String(30))
    lessons: Mapped[List["Lesson"]] = relationship(
        "Lesson", back_populates="book", cascade="all, delete, delete-orphan"
    )


class Lesson(Base):
    # lesson_title: Mapped[str] = mapped_column(String(30))

    book_id: Mapped[int] = mapped_column(Integer, ForeignKey("books.id"))
    book: Mapped[Book] = relationship(
        "Book", back_populates="lessons"
    )

    slides: Mapped[List["Slide"]] = relationship(
        "Slide", back_populates="lesson", cascade="all, delete, delete-orphan"
    )


class Slide(Base):
    type_slide: Mapped[str] = mapped_column(String(30))
    type_content: Mapped[List[str]] = mapped_column(JSON, nullable=False)
    text: Mapped[str] = mapped_column(String, nullable=False)
    # img: Mapped[str] = mapped_column(String, nullable=True)
    links: Mapped[List[str]] = mapped_column(JSON, nullable=True)

    lesson_id: Mapped[int] = mapped_column(Integer, ForeignKey("lessons.id"))
    Lesson: Mapped["Lesson"] = relationship(
        "Lesson", back_populates="slides"
    )


