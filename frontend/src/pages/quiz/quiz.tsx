import { Next, Prev } from "@/shared/ui/kbd";
import { Content } from "@/widgets/content";
import { TopBarPanel } from "@/widgets/top-bar-panel";

const Quiz = () => {
    return (
        <div className="">
            <TopBarPanel />
            <Content />
            <div className="flex justify-center gap-10 py-3">
                <Prev />
                <Next />
            </div>
        </div>
    );
};
export default Quiz;
