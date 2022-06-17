import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidates } from '../utils/formValidates'

import FormErrors from '../components/FormErrors'
import FormImputs from '../components/FormImputs'

function Login() {
  const { loginUser } = useContext(UserContext)
  const navigate = useNavigate()
  const { required, patternEmail, minLength, validateTrim } = formValidates()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm()

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password)
      navigate('/')
    } catch (error) {
      console.log(error.code)
      const { code, message } = firebaseErrors(error.code)
      setError(code, { message })
    }
  }

  return (
    <>
      <h2>Login</h2>
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormImputs
            type="email"
            placeholder="Ingrese email"
            {...register('email', {
              required,
              pattern: patternEmail,
            })}
          >
            <FormErrors error={errors.email} />
          </FormImputs>

          <FormImputs
            type="password"
            placeholder="Ingrese password"
            {...register('password', {
              minLength,
              validate: validateTrim,
            })}
          >
            <FormErrors error={errors.password} />
          </FormImputs>

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
