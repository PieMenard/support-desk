import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import Registerpage from './pages/RegisterPage'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<Registerpage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
