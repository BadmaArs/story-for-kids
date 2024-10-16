import { useEffect } from "react";
import { Next, Prev } from "@/shared/ui/kbd";
import { Content } from "@/widgets/content";
import { TopBarPanel } from "@/widgets/top-bar-panel";
import { useGetSlidesQuery } from "./api/slides-api";
import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectIndexSlide } from "@/features/quiz-navigation";
import {
    setIndexCurrentLesson,
    setIndexCurrentSlide,
} from "@/features/quiz-navigation/model/slice";
import { Loader } from "@/shared/ui/loader";

const Quiz = () => {
    const dispatch = useAppDispatch();
    const indexCurrentSlide = useAppSelector(selectIndexSlide);
    const url = window.location.href;

    const parts = url.split("/");
    const lessonId = Number(parts[parts.indexOf("quiz") + 1]);

    useEffect(() => {
        dispatch(setIndexCurrentLesson(lessonId));
    }, [lessonId, dispatch]);

    const {
        data: slides,
        isLoading,
        error,
    } = useGetSlidesQuery({
        lessonId,
        slideIdx: indexCurrentSlide,
    });

    const handleNext = () => {
        if (slides && indexCurrentSlide < slides.meta.pagination.total) {
            dispatch(setIndexCurrentSlide(indexCurrentSlide + 1));
        }
    };

    const handlePrev = () => {
        if (indexCurrentSlide > 0) {
            dispatch(setIndexCurrentSlide(indexCurrentSlide - 1));
        }
    };

    if (isLoading) return <Loader />;
    if (error) return <div>Произошла ошибка</div>;
    if (!slides) return <div>Слайды не найдены</div>;

    return (
        <div className="">
            <TopBarPanel total={slides.meta.pagination.total} />
            <Content data={slides.data} />
            <div className="flex justify-center gap-10 py-3">
                <Prev onClick={handlePrev} />
                <Next onClick={handleNext} />
            </div>
        </div>
    );
};
export default Quiz;
