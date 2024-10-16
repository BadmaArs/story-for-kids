import { useAppSelector } from "@/app/hooks@depercated";
import { Steps } from "@/entities/steps";
import { Bookmark } from "@/features/bookmark";
import { selectIndexBook } from "@/features/quiz-navigation/model/selectors";
import { ToReturn } from "@/shared/ui/to-return";

// В этом компоненте собираются все элементы топ бар в quiz/:id

interface Props {
    total: number
}

const TopBarPanel: React.FC<Props> = ({total}) => {
    const indexCurrentBook = useAppSelector(selectIndexBook);

    return (
        <>
            <div className="flex justify-between px-5 md:px-10">
                <div className="flex items-center justify-center md:py-5">
                    <ToReturn to={`/lesson/${indexCurrentBook}`}>
                        <button className="btn">Вернуться</button>
                    </ToReturn>
                </div>
                <div className="">
                    <Bookmark />
                </div>
            </div>
            <div className="px-5 md:px-10">
                <Steps total={total}/>
            </div>
        </>
    );
};
export default TopBarPanel;
