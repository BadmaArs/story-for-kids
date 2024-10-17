import { Link } from "react-router-dom";
import { useGetBooksQuery } from "../api/api-books";
import { Loader } from "@/shared/ui/loader";

const Books = () => {
    const { data: books, isLoading, isError } = useGetBooksQuery();

    const booksData = books?.data;

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        console.error("Error fetching books data.");
        return <p>Error fetching books data. Please try again later.</p>;
    }
    if (!Array.isArray(booksData)) {
        console.error("Invalid data format received from API.");
        return <p>Invalid data format received from API.</p>;
    }
    return (
        <>
            {booksData &&
                booksData.map((book, index) => (
                    <div
                        className=" md:w-1/4 relative border cursor-pointer"
                        key={index}
                    >
                        <Link to={`/lesson/${book.id}`}>
                            <img
                                className="border-4 border-black rounded-3xl "
                                src="./images/book.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 flex justify-center items-center">
                                <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-2 rounded">
                                    {book.book_name}
                                </h1>
                            </div>
                        </Link>
                    </div>
                ))}
        </>
    );
};
export default Books;
