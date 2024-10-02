import { useAppDispatch } from "@/app/hooks@depercated";
import { useSelector } from "react-redux";
import { selectCount } from "../model/selectors";
import { increment } from "../model/slice";

const Count = () => {
    const dispatch = useAppDispatch();
    const counter = useSelector(selectCount);
    return (
        <div className="flex justify-center flex-col items-center gap-5">
            <div className="">
                <button
                    className="btn btn-neutral"
                    onClick={() => dispatch(increment())}
                >
                    Neutral
                </button>
            </div>
            <div className="">
                <h1 className="text-3xl">{counter}</h1>
            </div>
        </div>
    );
};
export default Count;
