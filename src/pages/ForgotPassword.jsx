import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useForgotPassword } from '../hooks/useForgotPassword'

const ForgotPassword = () => {
    const [email, setEmail] = useState('')
    const navigate = useNavigate()
    const { forgotPassword } = useForgotPassword()

    const handleSubmit = async (e) => {
        e.preventDefault()

        const res = await forgotPassword(email)

        if (res?.status === 400) {
            toast.error(`A user with that email doesn't exist`)
        }

        if (res) {
            toast.success(`Email sent to ${email}`)
            navigate('/')
        }
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h1>Forgot Password</h1>
            <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button>Send Password Reset</button>
        </form>
    )
}

export default ForgotPassword