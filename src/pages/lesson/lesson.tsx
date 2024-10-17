import { ToReturn } from "@/shared/ui/to-return";
import { LessonList } from "@/widgets/lesson-list";
import { Link } from "react-router-dom";

const Lesson = () => {
    return (
        <div className="">
            <div className="flex justify-between">
                <ToReturn to="/">
                    <button className="btn text-lg mt-5 ml-3 md:ml-20 md:mt-10">
                        Вернуться
                    </button>
                </ToReturn>
                <Link to="/bookmarks">
                    <button className="btn text-lg mt-5 mr-3 md:mr-20 md:mt-10">
                        Закладки
                    </button>
                </Link>
            </div>
            <LessonList />
        </div>
    );
};
export default Lesson;
