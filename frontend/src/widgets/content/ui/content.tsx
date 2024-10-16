import {
    ContentTextAndImage,
    ContentImage,
    ContentText,
    ContentVideo,
    ContentVideoAndText,
    ContentQuiz,
} from "@/shared/ui/content-type";

interface Image {
    url: string; 
}

interface Slide {
    id: number;        
    number: number;    
    text: string;      
    type_slide: string;
    img: Image[];      
}

interface Slides {
    data: Slide[]; 
}

const Content:React.FC<Slides> = ({ data }) => {
    const renderContent = () => {
        switch (data[0].type_slide) {
            case "text_and_img":
                return <ContentTextAndImage data={data} />;
            case "text":
                return <ContentText data={data} />;
            case "img":
                return <ContentImage data={data} />;
            case "video":
                return <ContentVideo data={data} />;
            case "video-text":
                return <ContentVideoAndText data={data} />;
            case "questions":
                return <ContentQuiz data={data} />;
        }
    };
    return (
        <div className="flex justify-center px-5 pt-5 pb-5 md:px-10">
            {renderContent()}
        </div>
    );
};
export default Content;
