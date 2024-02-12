import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './routes/PrivateRoute'
import AdminRoute from './routes/AdminRoute'

// Layputs
import Layout from './layouts/Layout'

// Pages
import Login from './pages/Login'
import Welcome from './pages/Welcome'
import Admin from './pages/Admin'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'


function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path='/'
        element={<Layout />}
        errorElement={<Error />}
      >
        <Route
          index
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
        <Route
          path='/forgot-password'
          element={<ForgotPassword />}
        />
        <Route
          path='/reset-password/:token'
          element={<ResetPassword />}
        />

        {/* Private Routes */}
        <Route
          path='/welcome'
          element={
            <PrivateRoute>
              <Welcome />
            </PrivateRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path='/admin'
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* Catch all */}
        <Route
          path='/*'
          element={<NotFound />}
        />
      </Route>
    </Routes>
  )
}

export default App
