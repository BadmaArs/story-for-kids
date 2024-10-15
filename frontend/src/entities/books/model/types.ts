export interface IBook {
    book_name: string;
    createdAt: string;
    id: number;
    publishedAt: string;
    updatedAt: string;
}

export interface IBooks {
    data: IBook[];
}
