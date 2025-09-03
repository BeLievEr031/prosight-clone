import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

function Root() {
    return (
        <main>
            <Navbar />
            <Outlet />
        </main>
    )
}

export default Root