import { useAppDispatch } from "@/app/hooks@depercated";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchLessons } from "../model/thunks";
import { selectLesson } from "../model/selectors";
import { Lesson } from "../model/types";
import { setQuiz } from "@/entities/slide/model/slice";

const Topic = () => {
    const dispatch = useAppDispatch();
    const { lessons } = useSelector(selectLesson);
    const [lesson, setLesson] = useState<Lesson | null>(null);

    useEffect(() => {
        dispatch(fetchLessons());
    }, [dispatch]);

    const handleSlide = (lesson: Lesson) => {
        setLesson(lesson);
        dispatch(setQuiz(lesson));
    };

    return (
        <>
            {lessons.map((lesson, index) => (
                <Link
                    to={`/quiz/${lesson.id}`}
                    key={index}
                    onClick={() => handleSlide(lesson)}
                >
                    <div
                        key={index}
                        className="flex justify-center items-center w-full"
                    >
                        {/* <span className="text-brown-100 text-lg md:text-3xl font-bold p-2 rounded text-center">
                            Тема {index + 1}
                        </span> */}
                        <button className="btn btn-lg w-full">
                            Тема {index + 1}
                        </button>
                    </div>
                </Link>
            ))}
            <div className="flex justify-center items-center">
                <button className="btn btn-lg w-full">Закладки</button>
            </div>
        </>
    );
};
export default Topic;
