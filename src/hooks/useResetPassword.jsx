import { useApi } from './useApi'

export const useResetPassword = () => {
    const { post } = useApi()

    const resetPassword = async (formData) => {
        try {
            const data = await post('/reset-password', formData)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        resetPassword
    }
}