import {Link} from 'react-router-dom';

const Header=()=>{

    return(
        <>
        <h2>Ecotrack</h2>
        <nav>
            <Link to="/">Dashboard</Link>
              <Link to="/">Logs</Link>
                <Link to="/">Login</Link>
                  <Link to="/">DashboardAnalysis</Link>
        </nav>
        </>
    )
}
export default Header;