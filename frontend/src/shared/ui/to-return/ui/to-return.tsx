import { useAppDispatch } from "@/app/hooks@depercated";
import { setIndexCurrentSlide } from "@/features/quiz-navigation/model/slice";
import { Link } from "react-router-dom";

interface ToReturnProps {
    children: React.ReactNode;
    to: string;
}

const ToReturn: React.FC<ToReturnProps> = ({ children, to }) => {
    const dispatch = useAppDispatch();

    const handleResetIndex = () => {
        dispatch(
            setIndexCurrentSlide({
                indexCurrentSlide: 0,
            }),
        );
    };

    return (
        <>
            <Link to={to} onClick={() => handleResetIndex()}>
                {children}
            </Link>
        </>
    );
};
export default ToReturn;
