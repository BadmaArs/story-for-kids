import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectSlide } from "@/entities/slide";
import { selectIndexCurrentSlide } from "@/features/quiz-navigation";
import { setIndexCurrentSlide } from "@/features/quiz-navigation/model/slice";

// Топ бар панель для навигации по слайдам
// Изменяет состояние индекса в store

const Steps = () => {
    const dispatch = useAppDispatch();
    const currentQuiz = useAppSelector(selectSlide);
    const currentSlideIndex = useAppSelector(selectIndexCurrentSlide);
    const handleSetIndex = (index: number) => {
        dispatch(setIndexCurrentSlide({ indexCurrentSlide: index }));
    };

    return (
        <div className="flex py-3 overflow-x-auto md:py-10 gap-3 md:gap-5">
            <div className="join">
                {currentQuiz.slides.map((_, index) => (
                    <button
                        key={index}
                        className={`join-item btn btn-lg ${currentSlideIndex === index ? "btn-active" : ""}`}
                        onClick={() => handleSetIndex(index)}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default Steps;
