import { createContext,useContext,useState } from "react";

const AuthContext = createContext(null); //Creating Default value of the authContext

export const AuthProvider=({children})=>{
    const[isAuthenticated, setIsAuthenticated]=useState(false);//Creating Usestate with passing the inital value of the state
}

return (
    //Pasing the context to all the children who are consuming it
    <AuthContext.Provider value={{isAuthenticated,setIsAuthenticated}}>
    {children}
    </AuthContext.Provider>
)

export const useAuth=()=> useContext(AuthContext);//Custom hook which is the medium of passing