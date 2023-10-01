import React from 'react'
import { useFirebase } from './Context/firebase'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

function ProtectedRoute() {
    const {user } = useFirebase();
    const location = useLocation()
    
    if(user) {
        return <Outlet/>
    } else {
        return <Navigate to="/Signup" state={{from: location}} replace/>
    }
}

export default ProtectedRoute