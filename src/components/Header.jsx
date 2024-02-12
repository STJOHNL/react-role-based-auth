import { useState, useEffect } from 'react'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    // const [user, setUser] = useState()
    const navigate = useNavigate()
    const { user, logOut } = useAuth()

    // useEffect(() => {
    //     const userData = getUser()
    //     setUser(userData)
    // }, [])

    const logout = () => {
        logOut()
        toast.success('Logged out!')
        navigate('/login')
    }

    return (
        <div>
            {user && <button onClick={() => logout()}>Log Out</button>}
        </div>
    )
}
export default Header