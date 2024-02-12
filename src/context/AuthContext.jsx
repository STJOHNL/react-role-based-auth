import { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const readUserFromToken = () => {
        const token = localStorage.getItem('token')
        if (token) {
            const payload = jwtDecode(token)
            if (Date.now() < payload.exp * 1000) {
                setUser(payload.user) // Set user directly from payload
            } else {
                localStorage.clear() // Token is expired
                setUser(null)
            }
        }
    }

    useEffect(() => {
        readUserFromToken() // Check token on mount
    }, [])

    const logOut = () => {
        localStorage.clear()
        setUser(null) // Update state to trigger re-renders
    }

    const setToken = (token) => {
        localStorage.setItem('token', token)
        readUserFromToken() // Update user state upon setting a new token
    }

    return (
        <AuthContext.Provider value={{ user, logOut, setToken }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)