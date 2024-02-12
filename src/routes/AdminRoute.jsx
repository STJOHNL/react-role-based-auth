import { Navigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext'

const AdminRoute = ({ children }) => {
    const { user } = useAuth()
    return user?.role === 'Admin' ? children : <Navigate to='/' />
}

export default AdminRoute