import { useAppSelector } from "@/app/hooks@depercated";
import { selectSlide } from "@/entities/slide";
import { QuizData, Slide } from "@/entities/slide-content-type";
import { Next, Prev } from "@/shared/ui/kbd";
import { Content } from "@/widgets/content";
import { TopBarPanel } from "@/widgets/top-bar-panel";
import { useState } from "react";

const Quiz = () => {
    const currentQuiz = useAppSelector(selectSlide);
    const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);

    const newSlides: Slide[] = [
        {
            type_slide: "image-text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage1",
        },
        {
            type_slide: "text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage2",
        },
        {
            type_slide: "image",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage3",
        },
        {
            type_slide: "video",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage4",
        },
        {
            type_slide: "video-text",
            type_content: ["image", "image_and_text", "text"],
            text: "asd",
            img: "nameImage5",
        },
    ];

    const extendedQuiz: QuizData = {
        ...currentQuiz,
        slides: [...newSlides],
    };

    const handleNext = () => {
        if (currentSlideIndex < extendedQuiz.slides.length - 1) {
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentSlideIndex > 0) {
            setCurrentSlideIndex(currentSlideIndex - 1);
        }
    };

    return (
        <div className="">
            <TopBarPanel />
            <Content slide={extendedQuiz.slides[currentSlideIndex]} />
            <div className="flex justify-center gap-10 py-3">
                <Prev onClick={handlePrev} />
                <Next onClick={handleNext} />
            </div>
        </div>
    );
};
export default Quiz;
