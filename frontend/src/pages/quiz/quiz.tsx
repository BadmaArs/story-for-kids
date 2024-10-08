import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectSlide } from "@/entities/slide";
import { selectIndexCurrentSlide } from "@/features/quiz-navigation";
import { setIndexCurrentSlide } from "@/features/quiz-navigation/model/slice";
import { Next, Prev } from "@/shared/ui/kbd";
import { Content } from "@/widgets/content";
import { TopBarPanel } from "@/widgets/top-bar-panel";

// Страница Quiz
// Кнопки Prev и Next изменяют индекс который хранится в store
// В Content передаются данные о информации текущего слайда currentQuiz.slides[currentSlideIndex], получение с помощью индекса

const Quiz = () => {
    const dispatch = useAppDispatch();
    const currentQuiz = useAppSelector(selectSlide);
    const currentSlideIndex = useAppSelector(selectIndexCurrentSlide);

    const handleNext = () => {
        if (currentSlideIndex < currentQuiz.slides.length - 1) {
            dispatch(
                setIndexCurrentSlide({
                    indexCurrentSlide: currentSlideIndex + 1,
                }),
            );
        }
    };

    const handlePrev = () => {
        if (currentSlideIndex > 0) {
            dispatch(
                setIndexCurrentSlide({
                    indexCurrentSlide: currentSlideIndex - 1,
                }),
            );
        }
    };

    return (
        <div className="">
            <TopBarPanel />
            <Content slide={currentQuiz.slides[currentSlideIndex]} />
            <div className="flex justify-center gap-10 py-3">
                <Prev onClick={handlePrev} />
                <Next onClick={handleNext} />
            </div>
        </div>
    );
};
export default Quiz;
