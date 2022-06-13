import './styles.css'
import Home from './routes/Home'
import Login from './routes/Login'
import NavBar from './components/NavBar'
import Register from './routes/Register'
import RequireAuth from './components/RequireAuth'

import { Routes, Route } from 'react-router-dom'
import { UserProvider /* UserContext */ } from './context/UserProvider'
// import { useContext } from 'react'

export default function App() {
  /* 
  const { user } = useContext(UserContext)
	if (user === false) {
		return <p>Loading...</p>
	} 
  */

  return (
    <UserProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </UserProvider>
  )
}
