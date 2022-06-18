import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidates } from '../utils/formValidates'

import FormErrors from '../components/FormErrors'
import FormImputs from '../components/FormImputs'
import Title from '../components/Title'
import Button from '../components/Button'

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
      <Title titleText="Sing in" />
      <div className="form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormImputs
            type="email"
            placeholder="Email"
            {...register('email', {
              required,
              pattern: patternEmail,
            })}
            label="Enter your email"
            error={errors.email}
          >
            <FormErrors error={errors.email} />
          </FormImputs>

          <FormImputs
            type="password"
            placeholder="Password"
            {...register('password', {
              minLength,
              validate: validateTrim,
            })}
            label="Enter your password"
            error={errors.password}
          >
            <FormErrors error={errors.password} />
          </FormImputs>

          <Button buttonText="Log In" type="submit" />
        </form>
      </div>
    </>
  )
}

export default Login
