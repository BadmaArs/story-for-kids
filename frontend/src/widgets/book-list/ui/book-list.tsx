import { Books } from "@/entities/books";

const BookList = () => {
    return (
        <div className="h-auto md:h-screen flex justify-center items-center gap-10 flex-col md:flex-row px-3 py-5">
            <Books />
        </div>
    );
};
export default BookList;
