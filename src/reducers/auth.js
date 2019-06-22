const authReducer = (state = false, { type, payload }) => {
  switch (type) {
    case 'SIGN_IN':
      return !state

    default:
      return state
  }
}

export default authReducer
