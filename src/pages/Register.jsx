import { useState } from 'react'
import { useRegister } from '../hooks/useRegister'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'

const Register = () => {
    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const { register } = useRegister()
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
        if (formData.password != formData.confirmPassword) {
            toast.error('Passwords to not match')
        } else {
            const res = await register(formData)

            if (res?.status === 400) {
                toast.error(res.message)
            }

            if (res?.token) {
                setToken(res?.token)
                toast.success('Welcome!')
                navigate('/welcome')
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h1>Welcome!</h1>
            <label htmlFor='fName'>First</label>
            <input
                type="text"
                name='fName'
                placeholder="First Name"
                onChange={handleChange}
                value={formData.fName}
                required
            />
            <label htmlFor='lName'>Last</label>
            <input
                type="text"
                name='lName'
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lName}
                required
            />
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
            <label htmlFor='confirmPassword'>Confirm</label>
            <input
                type="password"
                name='confirmPassword'
                placeholder="Confirm Password"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
            />

            <button>Register</button>
        </form>
    )
}

export default Register