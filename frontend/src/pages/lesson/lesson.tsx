import { ToReturn } from "@/shared/ui/to-return";
import { LessonList } from "@/widgets/lesson-list";

const Lesson = () => {
    return (
        <div className="">
            <ToReturn to="/">
                <button className="btn mt-5 ml-3 md:ml-20 md:mt-10">
                    Вернуться
                </button>
            </ToReturn>
            <LessonList />
        </div>
    );
};
export default Lesson;
