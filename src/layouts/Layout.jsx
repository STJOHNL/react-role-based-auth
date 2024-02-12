import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Header from "../components/Header"

const Layout = () => {
    return (
        <>
            <Header />
            <Toaster
                position="bottom-right"
                toastOptions={{ duration: 2000 }}
            />
            <Outlet />
        </>
    )
}
export default Layout