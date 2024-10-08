import enum
from typing import List, Optional

from sqlalchemy import String, ForeignKey, Integer, JSON, Enum, MetaData
from sqlalchemy.orm import Mapped, mapped_column, relationship, DeclarativeBase, declared_attr

metadata = MetaData()


class Base(DeclarativeBase):
	__abstract__ = True
	metadata = metadata

	@declared_attr.directive
	def __tablename__(cls):
		return f"{cls.__name__.lower()}s"

	id: Mapped[int] = mapped_column(primary_key=True)


class Book(Base):
	book_name: Mapped[str]
	lessons: Mapped[list["Lesson"]] = relationship(
		"Lesson", back_populates="book", cascade="all, delete, delete-orphan"
	)


class Lesson(Base):
	book_id: Mapped[int] = mapped_column(Integer, ForeignKey("books.id"))
	book: Mapped[Book] = relationship(
		"Book", back_populates="lessons"
	)

	# slides: Mapped[list["Slide"]] = relationship(
	# 	"Slide", back_populates="lesson", cascade="all, delete, delete-orphan"
	# )


# class Slide(Base):
# 	type_slide: Mapped[str] = mapped_column(String(30))
# 	type_content: Mapped[list[str]] = mapped_column(JSON, nullable=False)
# 	text: Mapped[str] = mapped_column(String, nullable=False)
# 	# img: Mapped[str] = mapped_column(String, nullable=True)
# 	links: Mapped[List[str]] = mapped_column(JSON, nullable=True)
#
# 	lesson_id: Mapped[int] = mapped_column(Integer, ForeignKey("lessons.id"))
# 	Lesson: Mapped["Lesson"] = relationship(
# 		"Lesson", back_populates="slides"
# 	)
