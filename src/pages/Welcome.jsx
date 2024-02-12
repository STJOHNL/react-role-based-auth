import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Welcome = () => {
    const navigate = useNavigate()
    const { user } = useAuth()

    return (
        <div>
            <h1>Welcome</h1>
            <p>Email: {user?.email}</p>
            <p>Role: {user?.role}</p>

            {(user?.role === 'Admin') &&
                <button
                    onClick={() => navigate('/admin')}
                >Admin Page</button>}
        </div>
    )
}
export default Welcome