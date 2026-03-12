
import Header from "./components/header";
import { Suspense, lazy } from "react";

import { BrowserRouter,Routes,Route } from "react-router-dom";

const Login = lazy(()=>import("./pages/login"))
const DashboardLayout = lazy(()=> import("./pages/DashboardLayout"))
const Viewlogs = lazy(()=>import("./pages/Viewlogs"))
const DashboardAnalytics = lazy(()=>import("./pages/DashboardAnalytics"))
const DashboardSummary = lazy(()=>import("./pages/DashboardSummary"))
const ProtectedRoute = lazy(()=>import("./routes/ProtectedRoutes"))
const Logout = lazy(()=>import("./pages/logout"))
const DashboardSettings = lazy(()=>import("./pages/DashboardSettings"))

function App (){
  return (
  <BrowserRouter>
    <Header title="Eco Track : Experiment 2 "/>
    <Suspense fallback={<h2>Loading...</h2>}>
      <Routes>
        <Route path= "login" element={<Login/>}/>
        <Route path= "/" element=
        {
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
        }>

        <Route index />
        <Route path="settings" element={<DashboardSettings />} />
        <Route path="Summary" element={<DashboardSummary/>}/>
        <Route path="Analytics" element={<DashboardAnalytics/>}/>
        <Route path="logs" element={<Viewlogs/>}/>

        

        </Route>
      </Routes>
      <Routes>
        <Route path="logout" element={<Logout/>}/>
      </Routes>

    </Suspense>  
    
  </BrowserRouter>
)
}
export default App;

