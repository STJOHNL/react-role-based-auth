import { useApi } from './useApi'

export const useLogin = () => {
    const { post } = useApi()

    const login = async (formData) => {
        try {
            const data = await post('/login', formData)
            return data
        } catch (error) {
            console.log(error)
        }
    }

    return {
        login
    }
}