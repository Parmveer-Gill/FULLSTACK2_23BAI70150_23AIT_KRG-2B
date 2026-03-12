import logs from '../data/logs'
import Header from '../components/header'
const totalCarbon = logs.reduce ((sum, log) => sum+log.carbon,0)

const Dashboard = () => {
    return (
    
    <div >
        <h2>{Header}</h2>
        <p style={{padding :"1rem",backgroundColor:"#3175a2",color:"#d6eaf8",textAlign:"center"}}>Total Carbon Footprint:{totalCarbon}</p>

        <ul style={{padding :"1rem",backgroundColor:"white",color:"#111",textAlign:"center"}}>
            {logs.map((log)=>(
                <li key ={log.id}>
                    {log.activity}:{log.carbon} kgs
                </li>
            ))}
        </ul>
    </div>
    
)
}
export default Dashboard;