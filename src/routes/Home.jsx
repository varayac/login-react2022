import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

function Home() {
  const { user } = useContext(UserContext)
  return (
    <>
      <h2>Bienvenido al Home</h2>
      <p>{user.email}</p>
    </>
  )
}

export default Home
