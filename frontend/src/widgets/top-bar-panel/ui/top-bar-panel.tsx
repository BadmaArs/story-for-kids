import { Steps } from "@/entities/steps";
import { Bookmark } from "@/features/bookmark";
import { ToReturn } from "@/shared/ui/to-return";

// В этом компоненте собираются все элементы топ бар в quiz/:id

const TopBarPanel = () => {
    return (
        <>
            <div className="flex justify-between px-5 md:px-10">
                <div className="flex items-center justify-center md:py-5">
                    <ToReturn to="/lesson">
                        <button className="btn">Вернуться</button>
                    </ToReturn>
                </div>
                <div className="">
                    <Bookmark />
                </div>
            </div>
            <div className="px-5 md:px-10">
                <Steps />
            </div>
        </>
    );
};
export default TopBarPanel;
