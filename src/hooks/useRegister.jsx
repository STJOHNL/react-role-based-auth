import { useApi } from './useApi'

export const useRegister = () => {
    const { post } = useApi()

    const register = async (formData) => {
        try {
            const data = await post('/register', formData)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        register
    }
}