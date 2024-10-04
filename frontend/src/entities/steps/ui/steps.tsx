const Steps = () => {
    return (
        <div className="flex py-3 overflow-x-auto md:py-10 gap-3 md:gap-5">
            <div className="join">
                {Array.from({ length: 10 }).map((_, index) => (
                    <button key={index} className="join-item btn btn-lg">
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Steps;

//   <button className="join-item btn btn-lg btn-active">2</button>
//   Активный элемент
