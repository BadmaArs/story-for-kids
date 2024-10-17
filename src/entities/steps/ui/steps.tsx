import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectIndexSlide } from "@/features/quiz-navigation";
import { setIndexCurrentSlide } from "@/features/quiz-navigation/model/slice";

interface Props {
    total: number;
}

const Steps: React.FC<Props> = ({ total }) => {
    const dispatch = useAppDispatch();
    const indexCurrentSlide = useAppSelector(selectIndexSlide);

    const handleSetIndexSlide = (index: number) => {
        dispatch(setIndexCurrentSlide(index));
    };

    return (
        <div className="flex py-3 overflow-x-auto md:py-10 gap-3 md:gap-5">
            <div className="join">
                {Array.from({ length: total }).map((_, index) => (
                    <button
                        key={index}
                        className={`join-item btn btn-lg ${indexCurrentSlide === index + 1 ? "btn-active" : ""}`}
                        onClick={() => handleSetIndexSlide(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Steps;
