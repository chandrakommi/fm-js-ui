import { Route, Routes } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from './pages/Home'
import { Dashboard, DashboardMain } from './pages/Dashboard'
const app = () => {
  return (
    <>
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

export default app
