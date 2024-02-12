import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useResetPassword } from '../hooks/useResetPassword'

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate()
    const { token } = useParams()
    const { resetPassword } = useResetPassword()

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
            const res = await resetPassword(formData)
            if (res?.status === 400) {
                toast.error('Invalid or expired token.')
            }
            if (res) {
                toast.success('Password has been updated!')
                navigate('/login')
            }
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h1>Create New Password</h1>
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
            />
            <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <button className='my-20'>Send Password Reset</button>
        </form>
    )
}

export default ResetPassword