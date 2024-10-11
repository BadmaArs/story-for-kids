import { useAppSelector } from "@/app/hooks@depercated";
import { selectBookmark } from "../model/selectors";

const BookmarksCollection = () => {
    const bookmarks = useAppSelector(selectBookmark);

    if (bookmarks.length == 0) {
        return <div className="text-lg text-center">Здесь нет заметок</div>;
    } else {
        return (
            <div className="">
                {/* {bookmarks.map((item, index) => (
                    <ul className="list-disc ml-5 md:ml-10 text-lg" key={index}>
                        <li>
                            <a href={item.link}>
                                <p>
                                    {item.lessonName} слайд:{" "}
                                    {item.numberSlide + 1}
                                </p>
                            </a>
                        </li>
                    </ul>
                ))} */}
            </div>
        );
    }
};
export default BookmarksCollection;
