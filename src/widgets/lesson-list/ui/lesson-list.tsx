import { Topic } from "@/entities/topic";

const LessonList = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-10 px-3 py-5 md:px-20 md:py-16">
            <Topic />
        </div>
    );
};
export default LessonList;
