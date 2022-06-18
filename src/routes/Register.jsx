import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { firebaseErrors } from '../utils/firebaseErrors'
import { UserContext } from '../context/UserProvider'
import { formValidates } from '../utils/formValidates'

import FormErrors from '../components/FormErrors'
import FormImputs from '../components/FormImputs'
import Title from '../components/Title'
import Button from '../components/Button'

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
      <Title titleText="Register" />
      <FormErrors error={errors.firebase} />
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

          <FormImputs
            type="password"
            placeholder="Repeat password"
            {...register('repassword', {
              validate: validateEquals(getValues('password')),
            })}
            label="Repeat password"
            error={errors.repassword}
          >
            <FormErrors error={errors.repassword} />
          </FormImputs>

          <Button buttonText="Register" type="submit" />
        </form>
      </div>
    </>
  )
}

export default Register
