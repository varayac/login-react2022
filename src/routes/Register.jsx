import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { firebaseErrors } from '../utils/firebaseErrors'
import { UserContext } from '../context/UserProvider'

import FormErrors from '../components/FormErrors'

function Register() {
  /* const [email, setEmail] = useState('va@test.com')
	const [password, setPassword] = useState('123123') */
  const navigate = useNavigate()
  const { registerUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm()

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      setError('firebase', {
        message: firebaseErrors(error.code),
      })
    }
  }

  /*
	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			await registerUser(email, password)
			console.log(`Usuario Creado: ${email} ${password}`)
			navigate('/')
		} catch (error) {
			console.log(`ERROR: ${error.code}`)
		}
	}
	*/

  return (
    <>
      <h2>Register</h2>
      <FormErrors error={errors.firebase} />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="ingrese email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
            {...register('email', {
              required: {
                value: true,
                message: 'Campo obligatorio',
              },
              pattern: {
                value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                message: 'Ingrese mail valido',
              },
            })}
          />
          <FormErrors error={errors.email} />
          <input
            type="password"
            placeholder="ingrese password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register('password', {
              minLength: {
                value: 6,
                message: 'Min. 6 digitos',
              },
              validate: {
                trim: v => (!v.trim() ? 'Complete campos' : true),
              },
            })}
          />
          <FormErrors error={errors.password} />
          <input
            type="password"
            placeholder="repita password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
            {...register('repassword', {
              validate: {
                equals: v => v === getValues('password') || 'No coinciden las contraseñas',
              },
            })}
          />
          <FormErrors error={errors.repassword} />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
