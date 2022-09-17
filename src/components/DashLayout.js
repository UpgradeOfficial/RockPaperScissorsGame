import { Outlet } from 'react-router-dom'
import Header from "./Header"

const DashLayout = () => {
    return (
        <>
            <Header/>
            <div className="dash-container">
                <Outlet />
            </div>
            <footer>
                This is the footer
            </footer>
        </>
    )
}
export default DashLayout