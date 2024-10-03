const Steps = () => {
    return (
        <div className="flex p-3 overflow-x-auto md:px-20 md:py-10 gap-3 md:gap-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <button
                    key={index}
                    className="btn btn-outline btn-success w-16 h-16 text-lg md:w-28 md:h-28 md:text-3xl flex items-center justify-center"
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
export default Steps;
