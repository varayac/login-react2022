import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

function Login() {
  const [email, setEmail] = useState('va@test.com')
  const [password, setPassword] = useState('123123')

  const { loginUser } = useContext(UserContext)
  const navigate = useNavigate()

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await loginUser(email, password)
      console.log(`Usuario Logueado: ${email} ${password}`)
      navigate('/')
    } catch (error) {
      console.log(`ERROR: ${error.code}`)
    }
  }

  return (
    <>
      <h2>Login</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="ingrese email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="ingrese password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
