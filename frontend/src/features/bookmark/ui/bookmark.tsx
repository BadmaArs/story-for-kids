import { useState } from "react";
import bookmarkActiveIcon from "@/shared/assets/bookmark-active.svg";
import bookmarkNoActiveIcon from "@/shared/assets/bookmark-no-active.svg";
import { useAppSelector } from "@/app/hooks@depercated";
import {
    selectIndexLesson,
    selectIndexSlide,
} from "@/features/quiz-navigation";

const Bookmark = () => {
    const indexCurrentSlide = useAppSelector(selectIndexSlide);
    const indexCurrentLesson = useAppSelector(selectIndexLesson);
    const [isActive, setIsActive] = useState(false);

    const handleToggleBookmark = () => {
        const url = {
            url: `quiz/${indexCurrentLesson}`,
            selectedSlide: indexCurrentSlide,
        };
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
