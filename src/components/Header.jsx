import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const { user, logOut } = useAuth()

    const logout = () => {
        logOut()
        toast.success('Logged out!')
        navigate('/')
    }

    return (
        <div>
            {user && <button onClick={() => logout()}>Log Out</button>}
        </div>
    )
}
export default Header