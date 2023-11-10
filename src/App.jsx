import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/Home'
import { Dashboard, DashboardMain } from './pages/Dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkUserSignedIn } from './redux/actions/authActions'
const App = () => {
  const state = useSelector(state => state)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUserSignedIn())
  }, [])
  return (
    <>
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
