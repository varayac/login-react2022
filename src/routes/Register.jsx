import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { firebaseErrors } from '../utils/firebaseErrors'
import { UserContext } from '../context/UserProvider'
import { formValidates } from '../utils/formValidates'

import FormErrors from '../components/FormErrors'
import FormImputs from '../components/FormImputs'

function Register() {
  const navigate = useNavigate()
  const { registerUser } = useContext(UserContext)
  const { required, patternEmail, minLength, validateTrim, validateEquals } = formValidates()

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
      const { code, message } = firebaseErrors(error.code)
      setError(code, { message })
    }
  }

  return (
    <>
      <h2>Register</h2>
      <FormErrors error={errors.firebase} />
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

          <FormImputs
            type="password"
            placeholder="Repita password"
            {...register('repassword', {
              validate: validateEquals(getValues),
            })}
          >
            <FormErrors error={errors.repassword} />
          </FormImputs>

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register
