import { useState } from "react";
import bookmarkActiveIcon from "@/shared/assets/bookmark-active.svg";
import bookmarkNoActiveIcon from "@/shared/assets/bookmark-no-active.svg";

const Bookmark = () => {
    const [isActive, setIsActive] = useState(false);

    const handleToggleBookmark = () => {
        setIsActive(!isActive);
    };

    return (
        <div
            className="flex justify-end px-5 md:px-20 relative cursor-pointer"
            onClick={handleToggleBookmark}
        >
            <img
                src={isActive ? bookmarkActiveIcon : bookmarkNoActiveIcon}
                className="w-12 md:w-36 absolute -top-2 md:-top-7"
                alt={isActive ? "Active Bookmark" : "Inactive Bookmark"}
            />
        </div>
    );
};

export default Bookmark;
