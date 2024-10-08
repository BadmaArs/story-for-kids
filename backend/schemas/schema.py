from pydantic import BaseModel, ConfigDict


class BookBase(BaseModel):
	book_name: str

	model_config = ConfigDict(from_attributes=True)


class BookCreate(BookBase):
	pass


class BookRead(BookBase):
	pass
