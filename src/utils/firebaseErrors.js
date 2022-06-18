export const firebaseErrors = code => {
  switch (code) {
    case 'auth/email-already-in-use':
      return {
        code: 'email',
        message: 'Email is invalid or already taken',
      }
    case 'auth/invalid-email':
      return {
        code: 'email',
        message: 'Email is invalid or already taken',
      }
    case 'auth/user-not-found':
      return {
        code: 'email',
        message: 'Incorrect username or password',
      }
    case 'auth/wrong-password':
      return {
        code: 'password',
        message: 'Incorrect username or password',
      }
    default:
      return {
        code: 'email',
        message: 'Server error',
      }
  }
}
