import { Link } from "react-router-dom";

interface ToReturnProps {
    children: React.ReactNode;
    to: string;
}

const ToReturn: React.FC<ToReturnProps> = ({ children, to }) => {
    return (
        <>
            <Link to={to}>{children}</Link>
        </>
    );
};
export default ToReturn;
