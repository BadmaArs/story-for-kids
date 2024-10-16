import { Link } from "react-router-dom";
import { Loader } from "@/shared/ui/loader";
import { useGetLessonsQuery } from "../api/lessons-api";
import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { setIndexCurrentBook } from "@/features/quiz-navigation/model/slice";
import { selectIndexBook } from "@/features/quiz-navigation/model/selectors";
import { useEffect } from "react";

const Topic = () => {
    const dispatch = useAppDispatch();
    const bookId = useAppSelector(selectIndexBook);
    const url = window.location.href;

    useEffect(() => {
        const match = url.match(/\/(\d+)$/);
        if (match) {
            const bookIdFromUrl = Number(match[1]);
            dispatch(setIndexCurrentBook(bookIdFromUrl));
        }
    }, [url, dispatch]);

    const {
        data: lessons,
        isLoading,
        error,
    } = useGetLessonsQuery({ bookId }, { skip: !bookId });

    if (isLoading) return <Loader />;
    if (error) return <div>Произошла ошибка</div>;
    if (!lessons?.data?.lessons?.length) return <div>Уроки не найдены</div>;

    const lessonsCollection = lessons.data.lessons;

    return (
        <>
            {lessonsCollection.map((lesson, index) => (
                <Link to={`/quiz/${lesson.id}`} key={lesson.id}>
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
