import {
    ContentTextAndImage,
    ContentImage,
    ContentText,
    ContentVideo,
} from "@/shared/ui/content-type";

const Content = () => {
    return (
        <div className="flex justify-center px-5 pt-5 pb-5 md:px-10">
            <ContentVideo />
        </div>
    );
};
export default Content;
