import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function NavBar() {
  const { user, signOutUser } = useContext(UserContext)

  const handleLogOut = async () => {
    try {
      await signOutUser()
      console.log(`Sesion Cerrada ${user.email}`)
    } catch (error) {
      console.log(`ERROR: ${error.code}`)
    }
  }

  return (
    <nav>
      {user ? (
        <>
          <NavLink className="queso" to={'/'}>
            Home
          </NavLink>
          <button onClick={handleLogOut}>LogOut</button>
        </>
      ) : (
        <>
          <NavLink className="queso" to={'/login'}>
            Login
          </NavLink>
          <NavLink className="queso" to={'/register'}>
            Register
          </NavLink>
        </>
      )}
    </nav>
  )
}

export default NavBar
