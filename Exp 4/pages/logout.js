import { useAuth } from "../context/AuthContext";
import { useNavigate} from "react-router-dom";

const Logout =()=>{
    const {setIsAuthenticated}=useAuth();
    const navigate = useNavigate();


    const handleLogout=() => {
        setIsAuthenticated(false);
        navigate("/");
    };

    return (
        <div style={{padding:"1rem"}}>
            <h3>Logout Page</h3>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Logout;
