import { useApi } from './useApi'

export const useForgotPassword = () => {
    const { post } = useApi()

    const forgotPassword = async (email) => {
        try {
            const data = await post('/forgot-password', { email: email })
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        forgotPassword
    }
}