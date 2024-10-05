import { useAppDispatch } from "@/app/hooks@depercated";
import { RootState } from "@/app/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../model/thunks";

const Topic = () => {
    const dispatch = useAppDispatch();
    const { posts, loading, error } = useSelector(
        (state: RootState) => state.posts,
    );

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    console.log("posts: ", posts);
    return (
        <>
            {Array.from({ length: 50 }).map((_, index) => (
                <Link to="/quiz" key={index}>
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
