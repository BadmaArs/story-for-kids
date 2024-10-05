import { useAppDispatch } from "@/app/hooks@depercated";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchLessons } from "../model/thunks";
import { selectLesson } from "../model/selectors";

const Topic = () => {
    const dispatch = useAppDispatch();
    const { posts } = useSelector(selectLesson);

    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchLessons());
    }, [dispatch]);

    const handleSlide = () => {};
    return (
        <>
            {posts.map((post, index) => (
                <Link to={`/quiz/${post.id}`} key={index}>
                    <div className="flex justify-center items-center w-full">
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
