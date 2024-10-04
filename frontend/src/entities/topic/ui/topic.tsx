import { Link } from "react-router-dom";

const Topic = () => {
    return (
        <>
            {Array.from({ length: 50 }).map((_, index) => (
                <Link to="/quiz">
                    <div
                        key={index}
                        className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl "
                    >
                        <span className="text-brown-100 text-lg md:text-3xl font-bold p-2 rounded text-center">
                            Тема {index + 1}
                        </span>
                    </div>
                </Link>
            ))}
            <div className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl ">
                <span className="text-brown-100 text-lg md:text-lg font-bold p-2 rounded">
                    Закладки
                </span>
            </div>
        </>
    );
};
export default Topic;
