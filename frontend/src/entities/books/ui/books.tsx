import { Link } from "react-router-dom";

const Books = () => {
    return (
        <>
            <div className=" md:w-1/4 relative border cursor-pointer">
                <Link to="/lesson">
                    <img
                        className="border-4 border-black rounded-3xl "
                        src="./images/book.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-2 rounded">
                            5 Класс
                        </h1>
                    </div>
                </Link>
            </div>
            <div className=" md:w-1/4 relative border cursor-pointer">
                <Link to="/lesson">
                    <img
                        className="border-4 border-black rounded-3xl "
                        src="./images/book.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-2 rounded">
                            6 Класс
                        </h1>
                    </div>
                </Link>
            </div>
            <div className=" md:w-1/4 relative border cursor-pointer">
                <Link to="/lesson">
                    <img
                        className="border-4 border-black rounded-3xl "
                        src="./images/book.jpg"
                        alt=""
                    />
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white text-5xl font-bold bg-black bg-opacity-50 p-2 rounded">
                            7 Класс
                        </h1>
                    </div>
                </Link>
            </div>
        </>
    );
};
export default Books;
