import { Outlet } from 'react-router-dom'
import Header from "./Header"

const DashLayout = () => {
    return (
        <>
            
            <div className="dash-container">
                <Outlet />
            </div>
        
        </>
    )
}
export default DashLayout