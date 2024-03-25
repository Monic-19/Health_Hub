import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Appointment from './components/Appointment'
import DoctorDashboard from './components/doctors/DoctorDashboard'
import DoctorProfile from './components/doctors/DoctorProfile'
import DoctorInfo from './components/doctors/DoctorInfo'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/about' element={<About/>}/> 
          <Route path='/contact' element={<Contact/>}/> 
          <Route path='/appointment/:id' element={<Appointment/>}/> 
          <Route path='/doctor' element={<DoctorDashboard/>}>
               <Route path='profile' element={<DoctorProfile/>}></Route>
               <Route path='info' element={<DoctorInfo/>}></Route>
          </Route>
          <Route path='*' element={<Error/>}/> 
        </Routes>
      </Router>

    </>
  )
}

export default App;
