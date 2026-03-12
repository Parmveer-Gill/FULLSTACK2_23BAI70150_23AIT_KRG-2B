import React, {useContext} from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {AuthProvider, AuthContext} from "./AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";

function ProtectedRoute({children}) {
  const {isAuthenticated} = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App(){
  return (
    <AuthProvider>
      <BrowserRouter>

        <Routes>
 
          <Route path="/" element={<Navigate to="/login" />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;