import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Registrasi from './pages/Registrasi'
import User from './pages/Users'
import RegistrasiPasien from './pages/RegistrasiPasien'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>\
          <Route path='/registrasi' element={<Registrasi/>}/>
          <Route path='/registrasiPasien' element={<RegistrasiPasien/>}/>
          <Route path='/users' element={<User/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App