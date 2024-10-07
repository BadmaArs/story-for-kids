import { useAppSelector } from "@/app/hooks@depercated";
import { selectSlide } from "@/entities/slide";
import { Next, Prev } from "@/shared/ui/kbd";
import { Content } from "@/widgets/content";
import { TopBarPanel } from "@/widgets/top-bar-panel";

const Quiz = () => {
    const currentQuiz = useAppSelector(selectSlide);
    console.log(currentQuiz);
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
