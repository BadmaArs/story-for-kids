import { Slide } from "@/entities/slide-content-type";
import {
    ContentTextAndImage,
    ContentImage,
    ContentText,
    ContentVideo,
    ContentVideoAndText,
    ContentQuiz,
} from "@/shared/ui/content-type";

// Логика отображения компонентов в зависимости от типа слайда 

interface Props {
    slide: Slide;
}

const Content: React.FC<Props> = ({ slide }) => {
    const renderContent = () => {
        switch (slide.type_slide) {
            case "image-text":
                return <ContentTextAndImage />;
            case "text":
                return <ContentText />;
            case "image":
                return <ContentImage />;
            case "video":
                return <ContentVideo />;
            case "video-text":
                return <ContentVideoAndText />;
            case "questions":
                return <ContentQuiz />;
        }
    };

    return (
        <div className="flex justify-center px-5 pt-5 pb-5 md:px-10">
            {renderContent()}
        </div>
    );
};
export default Content;
