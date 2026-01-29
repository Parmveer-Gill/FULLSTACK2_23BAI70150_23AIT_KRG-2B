import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Login from "./login";
import DashboardLayout from "./DashboardLayout";
import ProtectedRoute from "./ProtectedRoute";
import DashboardSummary from "./DashboardSummary";
import DashboardAnalytics from "./DashboardAnalytics";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardSummary />} />
            <Route path="/dashboard/analytics" element={<DashboardAnalytics />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
