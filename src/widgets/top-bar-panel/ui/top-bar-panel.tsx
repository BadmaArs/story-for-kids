import { Steps } from "@/entities/steps";
import { Bookmark } from "@/features/bookmark";

const TopBarPanel = () => {
    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                <Steps />
            </div>
            <div className="col-span-1">
                <Bookmark />
            </div>
        </div>
    );
};
export default TopBarPanel;
