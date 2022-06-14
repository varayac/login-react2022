export const firebaseErrors = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Usuario ya registrado'
    case 'auth/invalid-email':
      return 'Formato email invalido'
    default:
      return 'Ocurrio un error en el server'
  }
}
