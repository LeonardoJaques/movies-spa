import { Header } from "~/components/Header";
import { Outlet } from "react-router";

function RootLayout() {
    return <>
        <Header />
        <Outlet />
    </>

}

export default RootLayout;