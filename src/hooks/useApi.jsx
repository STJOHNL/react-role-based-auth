import axios from 'axios'
import { useAuth } from '../context/AuthContext'
import { toast } from 'react-hot-toast'

export const useApi = () => {

    const api = axios.create({
        baseURL: 'http://localhost:8000/api',
        // baseURL: 'https://mup-api.onrender.com', // Your API base URL
        withCredentials: true
    })

    // Error handling function
    const handleError = (error) => {
        if (error?.response?.data?.message) {
            toast.error(error?.response?.data?.message)
            console.error('Error:', error?.response?.data?.message)
            console.error('Status:', error?.response?.status)
        }
        if (error.response && error.response.status === 401) {
            toast.error('Error')
            // Dispatch LOGOUT action
            useAuth.logOut()
            window.location.href = '/' // Redirect to login
        } else {
            // Handle other errors
            toast.error('Error')
            console.error('API error:', error)
        }
    }

    // GET request
    const get = async (url) => {
        try {
            const { data } = await api.get(url)
            return data
        } catch (error) {
            handleError(error)
        }
    }

    // POST request
    const post = async (url, body) => {
        try {
            const { data } = await api.post(url, body)
            return data
        } catch (error) {
            handleError(error)
        }
    }

    // PUT request
    const put = async (url, body) => {
        try {
            const { data } = await api.put(url, body)
            return data
        } catch (error) {
            handleError(error)
        }
    }

    // DELETE request
    const del = async (url) => {
        try {
            const { data } = await api.delete(url)
            return data
        } catch (error) {
            handleError(error)
        }
    }

    return {
        get,
        post,
        put,
        del, // Using 'del' as 'delete' is a reserved word in JavaScript
    }
}
