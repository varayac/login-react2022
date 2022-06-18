export const formValidates = getValues => {
  return {
    required: {
      value: true,
      message: 'Complete field',
    },
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: 'Wrong email format',
    },
    minLength: {
      value: 6,
      message: 'Min 6 alphanumeric characters',
    },
    validateTrim: {
      trim: v => (!v.trim() ? 'Complete field' : true),
    },
    validateEquals(value) {
      return { equals: v => v === value || 'No coinciden las contraseñas' }
    },
  }
}
