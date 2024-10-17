import { useAppSelector } from "@/app/hooks@depercated";
import { selectIndexBook } from "@/features/quiz-navigation/model/selectors";
import { ToReturn } from "@/shared/ui/to-return";
import { BookmarksList } from "@/widgets/bookmarks-list";

const Bookmarks = () => {
    const indexCurrentBook = useAppSelector(selectIndexBook);
    console.log(indexCurrentBook);
    return (
        <div className="">
            <ToReturn to={`/lesson/${indexCurrentBook}`}>
                <button className="btn mt-5 ml-3 md:ml-20 md:mt-10">
                    Вернуться
                </button>
            </ToReturn>
            <div className="px-3 pt-5 md:pt-20 md:px-20">
                <BookmarksList />
            </div>
        </div>
    );
};
export default Bookmarks;
