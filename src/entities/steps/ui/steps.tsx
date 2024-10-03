const Steps = () => {
    return (
        <div className="flex py-3 overflow-x-auto md:py-10 gap-3 md:gap-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <button
                    key={index}
                    className="btn btn-outline btn-success w-16 h-16 text-lg md:w-16 md:h-16 md:text-lg flex items-center justify-center"
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};
export default Steps;
