import { Route, Routes, useNavigate } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/Home'
import { Dashboard, DashboardMain } from './pages/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkUserSignedIn, signOutUser } from './redux/actions/authActions'
const App = () => {
  const state = useSelector(state => state?.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(checkUserSignedIn())
  }, [])

  useEffect(() => {
    if (state.isAuthenticated) navigate('/dashboard')
  }, [state.isAuthenticated, navigate])
  return (
    <>
      <button
        className='btn btn-danger'
        onClick={() => {
          dispatch(signOutUser())
        }}>
        Sign Out
      </button>
      <code>{JSON.stringify(state)}</code>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Route>
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='' element={<DashboardMain />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
