import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

// NOTE: no need for useAuthStatus as it's a duplicate of Redux state

const PrivateRoute = ({ children }) => {
  const { user } = useSelector((state) => state.auth)

  if (user) return children

  return <Navigate to='/login' />
}

export default PrivateRoute