import { useState } from "react";
import { Link } from "react-router-dom";
import { Lesson } from "../model/types";
import { setQuiz } from "@/entities/slide/model/slice";
import { useGetPostsQuery } from "../api/posts-api";
import { useAppDispatch } from "@/app/hooks@depercated";
import { Loader } from "@/shared/ui/loader";

const Topic = () => {
    const dispatch = useAppDispatch();
    const { data: lessons, isLoading, error } = useGetPostsQuery();
    const [lesson, setLesson] = useState<Lesson | null>(null);

    if (isLoading) return <Loader />;
    if (error) return <div>Error occurred</div>;
    if (!lessons || lessons.length === 0) return <div>No lessons found</div>;

    const handleSlide = (lesson: Lesson) => {
        setLesson(lesson);
        dispatch(setQuiz(lesson));
    };

    return (
        <>
            {lessons.map((lesson, index) => (
                <Link
                    to={`/quiz/${lesson.id}`}
                    key={lesson.id}
                    onClick={() => handleSlide(lesson)}
                >
                    <div className="flex justify-center items-center w-full">
                        <button className="btn btn-lg w-full">
                            Тема {index + 1}
                        </button>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default Topic;
