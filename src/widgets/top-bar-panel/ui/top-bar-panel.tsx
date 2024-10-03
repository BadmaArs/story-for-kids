import { Steps } from "@/entities/steps";
import { Bookmark } from "@/features/bookmark";

const TopBarPanel = () => {
    return (
        <>
            <div className="flex justify-between px-5 md:px-10">
                <div className="flex items-center justify-center md:py-5">
                    <button className="btn">Вернуться</button>
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
