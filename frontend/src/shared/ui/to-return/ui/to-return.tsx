import { Link } from "react-router-dom";
import { useAppDispatch } from "@/app/hooks@depercated";
import { setIndexCurrentSlide } from "@/features/quiz-navigation/model/slice";

// UI компонент для кнопки вернуться
// Также при выходе из слайда сьрасывает index в store, чтобы повторный заход начинался с 0 индекса

interface ToReturnProps {
    children: React.ReactNode;
    to: string;
}

const ToReturn: React.FC<ToReturnProps> = ({ children, to }) => {
    const dispatch = useAppDispatch();
    const handleResetIndex = () => {
        dispatch(setIndexCurrentSlide(1));
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
