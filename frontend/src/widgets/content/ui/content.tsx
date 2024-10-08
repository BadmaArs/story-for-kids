import { Slide } from "@/entities/slide-content-type";
import {
    ContentTextAndImage,
    ContentImage,
    ContentText,
    ContentVideo,
    ContentVideoAndText,
    ContentQuiz,
} from "@/shared/ui/content-type";

interface Props {
    slide: Slide;
}

const Content: React.FC<Props> = ({ slide }) => {
    // const renderContent = () => {
    //     switch (slide.type_slide) {
    //         case "image-text":
    //             return <ContentTextAndImage />;
    //         case "text":
    //             return <ContentText />;
    //         case "image":
    //             return <ContentImage />;
    //         case "video":
    //             return <ContentVideo />;
    //         case "video-text":
    //             return <ContentVideoAndText />;
    //     }
    // };

    return (
        <div className="flex justify-center px-5 pt-5 pb-5 md:px-10">
            {/* {renderContent()} */}
            <ContentQuiz />
        </div>
    );
};
export default Content;
