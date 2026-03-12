import {Link} from "react-router-dom";


const Header = ({ title }) => {
    return (
        <header style= {{
            padding:"1rem",
            backgroundColor:"#27ae60",
            color:"white",
            textAlign:"center",
        }}>
            <h2>{title}</h2>
            <nav>
                <Link to="/" style={{marginRight:"1rem",color:"#79e44f"}}>
                Dashboard
                </Link>
                <Link to="/logs" style={{marginRight:"1rem",color:"#79e44f"}}>
                Logs
                </Link>
                <Link to="/login" style={{marginRight:"1rem",color:"#79e44f"}}>
                Login
                </Link>

                <Link to="/logout" style={{marginRight:"1rem",color:"#79e44f"}}>
                Logout
                </Link>
                
            </nav>
        </header>
    );
};

export default Header;