import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import { ToastContainer, toast } from 'react-toastify'
import viteLogo from '/vite.svg'

import { Outlet, useNavigate } from 'react-router-dom'
import Header from './components/header'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setIsLoggedIn(true);
      navigate('/home');
    }
  }, []);
  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogout = () => {
    navigate("/");
    setIsLoggedIn(false);
  }
  return (
    <>
      {isLoggedIn && <Header handleLogout={handleLogout} />}
      <Outlet context={{ handleLogin }} />
    </>
  )
}

export default App
