import uvicorn
from fastapi import FastAPI, Depends
from typing_extensions import Annotated

from backend.sql_app import config
from backend.routers.books import router as books_router

app = FastAPI()
app.include_router(
	books_router, prefix='/books', tags=['books']
)


@app.get("/info")
async def info(settings: Annotated[config.Settings, Depends(config.get_settings)]):
	return {
		"DB_USER": settings.DB_USER,
		"DB_PASSWORD": settings.DB_PASSWORD,
		"DB_HOST": settings.DB_HOST,
		"DB_PORT": settings.DB_PORT,
		"DB_NAME": settings.DB_NAME,
	}


if __name__ == "__main__":
	uvicorn.run(app, host="0.0.0.0", port=8000)
