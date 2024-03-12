import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom' 
import Login from './components/Login'
import Signup from './components/Signup'
import Error from './components/Error'
import Hero from './components/Hero'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path='/' element={<Hero/>}/> 
          <Route path='/login' element={<Login/>}/> 
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='*' element={<Error/>}/> 
        </Routes>
      </Router>

    </>
  )
}

export default App;
