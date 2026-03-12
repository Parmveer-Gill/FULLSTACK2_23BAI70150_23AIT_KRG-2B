import React, {useContext, useState} from "react";
import {AuthContext} from "./AuthContext";
import {useNavigate} from "react-router-dom";

function Login(){

  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = () => {
    if(username === "admin" && password === "123"){
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid login");
    }
  };

  return (
    <div>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />

      <br/><br/>

      <input
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />

      <br/><br/>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;