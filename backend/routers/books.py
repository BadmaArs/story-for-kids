from fastapi import APIRouter, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from backend.sql_app.database import get_db
from backend.sql_app.models import Book
from backend.schemas.schema import BookCreate, BookRead#, BookUpdate

router = APIRouter()


@router.post('/create_book', response_model=BookCreate)
async def create_book(book: BookCreate, db: AsyncSession = Depends(get_db)) -> Book:
	book = Book(book_name=book.book_name)
	db.add(book)
	await db.commit()
	await db.refresh(book)
	return book


@router.get("/{book_id}", response_model=BookRead)
async def get_book(book_id: int, db: AsyncSession = Depends(get_db)):
	book = await db.execute(select(Book).where(Book.id == book_id))
	return book.scalar_one_or_none()


# @router.patch("/{book_id}", response_model=Book)
# async def update_book(book_id: int, book: Book, db: AsyncSession = Depends(get_db)) -> Book:
# 	stored_book = await db.execute(select(Book).where(Book.id == book_id))
# 	stored_book = stored_book.scalar_one_or_none()
#
# 	if stored_book is None:
#         raise HTTPException(status_code=404, detail="Book not found")
#
#     # Создаем модель книги на основе существующих данных
#     stored_book_data = stored_book.__dict__
#
#     # Преобразуем данные для обновления, исключая unset-поля
#     update_data = book_update.dict(exclude_unset=True)
#
#     updated_book = Book(**stored_book_data)
#     updated_book = updated_book.copy(update=update_data)
#
#     # Преобразуем данные в формат, который можно сохранить в БД
#     encoded_book = jsonable_encoder(updated_book)
#
#     # Обновляем объект в базе данных
#     for key, value in encoded_book.items():
#         setattr(stored_book, key, value)
#
#     # Сохраняем изменения в базе данных
#     await db.commit()
#     await db.refresh(stored_book)
#
#     # Возвращаем обновленную книгу
#     return stored_book