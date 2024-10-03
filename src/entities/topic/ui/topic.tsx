const Topic = () => {
    return (
        <>
            {Array.from({ length: 50 }).map((_, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl "
                >
                    <span className="text-brown-100 text-2xl md:text-5xl font-bold p-2 rounded text-center">
                        Тема {index + 1}
                    </span>
                </div>
            ))}
            <div className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl ">
                <span className="text-brown-100 text-2xl md:text-5xl font-bold p-2 rounded">
                    Закладки
                </span>
            </div>
        </>
    );
};
export default Topic;
