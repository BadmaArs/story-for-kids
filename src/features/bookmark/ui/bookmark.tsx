import { useEffect, useState } from "react";
import bookmarkActiveIcon from "@/shared/assets/bookmark-active.svg";
import bookmarkNoActiveIcon from "@/shared/assets/bookmark-no-active.svg";
import { useAppDispatch, useAppSelector } from "@/app/hooks@depercated";
import {
    selectIndexLesson,
    selectIndexSlide,
} from "@/features/quiz-navigation";
import {
    addNewBookmark,
    removeBookmark,
} from "@/entities/bookmarks-collection/model/slice";
import { selectBookmark } from "@/entities/bookmarks-collection";

interface Props {
    lesson_name: string;
}

const Bookmark: React.FC<Props> = ({ lesson_name }) => {
    const dispatch = useAppDispatch();
    const indexCurrentSlide = useAppSelector(selectIndexSlide);
    const indexCurrentLesson = useAppSelector(selectIndexLesson);
    const Bookmarks = useAppSelector(selectBookmark);

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const bookmarkInfo = {
            url: `quiz/${indexCurrentLesson}`,
            selectedSlide: indexCurrentSlide,
            selectedLesson: indexCurrentLesson,
            lesson_name: lesson_name,
        };

        const isBookmarkExists = Bookmarks.some(
            (bookmark) =>
                bookmark.url === bookmarkInfo.url &&
                bookmark.selectedSlide === bookmarkInfo.selectedSlide &&
                bookmark.selectedLesson === bookmarkInfo.selectedLesson &&
                bookmark.lesson_name === bookmarkInfo.lesson_name,
        );

        setIsActive(isBookmarkExists);
    }, [Bookmarks, indexCurrentSlide, indexCurrentLesson, lesson_name]);

    const handleToggleBookmark = () => {
        const bookmarkInfo = {
            url: `quiz/${indexCurrentLesson}`,
            selectedSlide: indexCurrentSlide,
            selectedLesson: indexCurrentLesson,
            lesson_name: lesson_name,
        };
        if (isActive) {
            dispatch(removeBookmark(bookmarkInfo));
        } else {
            dispatch(addNewBookmark(bookmarkInfo));
        }

        setIsActive(!isActive);
    };

    return (
        <div
            className="flex justify-end py-5 relative cursor-pointer"
            onClick={handleToggleBookmark}
        >
            <button className="btn btn-circle flex justify-center items-center px-3 md:px-5 md:w-16 md:h-16">
                <img
                    src={isActive ? bookmarkActiveIcon : bookmarkNoActiveIcon}
                    className="w-full"
                    alt={isActive ? "Active Bookmark" : "Inactive Bookmark"}
                />
            </button>
        </div>
    );
};

export default Bookmark;
