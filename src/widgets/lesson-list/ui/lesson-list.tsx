const LessonList = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-10 px-3 py-5 md:px-20 md:py-16">
            {Array.from({ length: 50 }).map((_, index) => (
                <div
                    key={index}
                    className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl "
                >
                    <span className="text-brown-100 text-2xl md:text-5xl font-bold p-2 rounded">
                        Тема {index + 1}
                    </span>
                </div>
            ))}
            <div className="flex justify-center items-center bg-white h-32 w-full border-4 border-black rounded-3xl ">
                <span className="text-brown-100 text-2xl md:text-5xl font-bold p-2 rounded">
                    Закладки
                </span>
            </div>
        </div>
    );
};
export default LessonList;
