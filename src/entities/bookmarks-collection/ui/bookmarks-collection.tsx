import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import { selectBookmark } from "../model/selectors";
import {
    setIndexCurrentLesson,
    setIndexCurrentSlide,
} from "@/features/quiz-navigation/model/slice";

const BookmarksCollection = () => {
    const dispatch = useAppDispatch();
    const bookmarks = useAppSelector(selectBookmark);

    const handleSetIndex = (index: number) => {
        dispatch(setIndexCurrentLesson(bookmarks[index].selectedLesson));
        dispatch(setIndexCurrentSlide(bookmarks[index].selectedSlide));
    };

    if (bookmarks.length == 0) {
        return <div className="text-lg text-center">Здесь нет заметок</div>;
    } else {
        return (
            <div className="">
                {bookmarks.map((item, index) => (
                    <ul
                        className="list-disc ml-5 md:ml-10 text-lg"
                        key={index}
                        onClick={() => handleSetIndex(index)}
                    >
                        <li>
                            <Link to={`/${item.url}`}>
                                <p>
                                    {item.lesson_name} слайд:{" "}
                                    {item.selectedSlide}
                                </p>
                            </Link>
                        </li>
                    </ul>
                ))}
            </div>
        );
    }
};
export default BookmarksCollection;
