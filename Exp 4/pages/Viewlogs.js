import {useSelector,useDispatch } from "react-redux";
import { fetchLogs } from "../store/logsSlice";
import { useEffect } from "react";

const Viewlogs = () => {

    const dispatch = useDispatch();
    const {data,status,error}=useSelector((state)=>state.logs);

    useEffect(()=>{
        if(status === "idle"){
            dispatch(fetchLogs());
        }
    },[status,dispatch]);

    if(status === "loading"){
        return <p>Loading Logs</p>
    }

    if(status === "failed"){
        return <p>Error :{error}</p>
    }
    return (
        <div style={{padding:"1rem" }}>
            <h2>Experiment Logs</h2>
            <ul>
                {data.map((log) => (
                    <li key={log.id}>
                    {log.activity}: {log.carbon} kg CO2
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Viewlogs;