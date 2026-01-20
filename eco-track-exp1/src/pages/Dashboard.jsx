import logs from "./data.js";
import Title from "./Title.jsx";
import Logs from "./Logs.jsx";

const total = logs.reduce((sum, log)=>(
    sum + log.carbon
),0);

function Dashboard(){

    return(
        <>
          <h1>Dashboard</h1>

          <h2>Sum of all carbon footprint: {total}</h2> 

          <Logs/>
        </>
    )
}

export default Dashboard;




