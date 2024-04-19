import { Outlet } from "react-router-dom";
import Header from "./Header";

const Main = () => {
    return (
        <div>
            <h1 className="text-2xl">Hello world</h1>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;