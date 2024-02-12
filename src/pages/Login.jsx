import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { login } = useLogin()
    const { setToken } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await login(formData)
        if (res.token) {
            setToken(res?.token)
            toast.success('Welcome!')
            navigate('/welcome')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h1>Welcome back!</h1>
            <label htmlFor='email'>Email</label>
            <input
                type="email"
                name='email'
                placeholder="john@email.com"
                onChange={handleChange}
                value={formData.email}
                required
            />
            <label htmlFor='password'>Password</label>
            <input
                type="password"
                name='password'
                placeholder="Password"
                onChange={handleChange}
                value={formData.password}
                required
            />

            <button>Login</button>
        </form>
    )
}

export default Login