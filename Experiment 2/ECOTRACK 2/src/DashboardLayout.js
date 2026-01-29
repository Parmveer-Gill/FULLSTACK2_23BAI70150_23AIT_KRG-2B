import {Link, Outlet} from 'react-router-dom';

const DashboardLayout=()=>{
    return(
        <>
        <h3>DashBoard</h3>

        <nav>
            <Link to="summary">Summary</Link> |{" "}
            <Link to="Analytics"></Link> |{" "}
        </nav>
        <hr />
        <Outlet />
        </>
    )
}
export default DashboardLayout;