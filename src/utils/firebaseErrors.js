export const firebaseErrors = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return {
        code: 'email',
        message: 'Usuario ya registrado',
      }
    case 'auth/invalid-email':
      return {
        code: 'email',
        message: 'Formato email invalido',
      }
    case 'auth/user-not-found':
      return {
        code: 'email',
        message: 'Usuario no registrado',
      }
    case 'auth/wrong-password':
      return {
        code: 'password',
        message: 'Contraseña invalida',
      }
    default:
      return {
        code: 'email',
        message: 'Ocurrio un error en el server',
      }
  }
}
