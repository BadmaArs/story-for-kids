import { Link } from "react-router-dom";
import { Loader } from "@/shared/ui/loader";
import { useGetLessonsQuery } from "../api/lessons-api";

const Topic = () => {
    let bookId: number | null = null;
    const url = window.location.href;
    const match = url.match(/\/(\d+)$/);

    if (match) {
        const lastDigit = match[1];
        bookId = Number(lastDigit);
        console.log(lastDigit);
    }

    const { data: lessons, isLoading, error } = useGetLessonsQuery({ bookId });

    if (isLoading) return <Loader />;
    if (error) return <div>Error occurred</div>;
    if (!lessons || lessons.data.lessons.length === 0) return <div>No lessons found</div>;

    const lessonsCollection = lessons.data.lessons;
    console.log(lessons);

    return (
        <>
            {lessonsCollection.map((lesson, index) => (
                <Link
                    to={`/quiz/${lesson.id}`}
                    key={lesson.id}
                    // onClick={() => handleSlide(lesson)}
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
