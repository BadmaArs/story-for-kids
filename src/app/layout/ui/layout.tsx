import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="">
            <div className="">
                <Outlet />
            </div>
        </div>
    );
};
export default Layout;
