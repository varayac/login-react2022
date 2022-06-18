import Home from './routes/Home'
import Login from './routes/Login'
import NavBar from './components/NavBar'
import Register from './routes/Register'
import RequireAuth from './components/RequireAuth'
import LayoutContainerForm from './components/LayoutContainerForm'

import { Routes, Route } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'

export default function App() {
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

          <Route path="/" element={<LayoutContainerForm />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </div>
    </UserProvider>
  )
}
