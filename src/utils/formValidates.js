export const formValidates = getValues => {
  return {
    required: {
      value: true,
      message: 'Campo obbligatorio',
    },
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: 'Formato de mail incorrecto',
    },
    minLength: {
      value: 6,
      message: 'Minimo 6 caracteres',
    },
    validateTrim: {
      trim: v => (!v.trim() ? 'Complete campos' : true),
    },
    validateEquals(getValues) {
      return { equals: v => v === getValues('password') || 'No coinciden las contraseñas' }
    },
  }
}
