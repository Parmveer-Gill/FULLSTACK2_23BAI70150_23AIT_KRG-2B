import { useAuth } from "../context/AuthContext";
import { useNavigate} from "react-router-dom";

const Login =()=>{
    const {setIsAuthenticated}=useAuth();
    const navigate = useNavigate();


    const handleLogin=() => {
        setIsAuthenticated(true);
        navigate("/");
    };

    return (
        <div style={{padding:"1rem"}}>
            <h3>Login Page</h3>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login;
