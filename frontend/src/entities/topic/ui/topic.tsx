import { Link } from "react-router-dom";

const Topic = () => {
    return (
        <>
            {Array.from({ length: 50 }).map((_, index) => (
                <Link to="/quiz">
                    <div
                        key={index}
                        className="flex justify-center items-center w-full"
                    >
                        {/* <span className="text-brown-100 text-lg md:text-3xl font-bold p-2 rounded text-center">
                            Тема {index + 1}
                        </span> */}
                        <button className="btn btn-lg w-full">
                            Тема {index + 1}
                        </button>
                    </div>
                </Link>
            ))}
            <div className="flex justify-center items-center">
                <button className="btn btn-lg w-full">Закладки</button>
            </div>
        </>
    );
};
export default Topic;
