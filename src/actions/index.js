const increment = (by) => ({ type: 'INCREMENT', payload: by })
const decrement = () => ({ type: 'DECREMENT' })
const signIn = () => ({ type: 'SIGN_IN' })

export { increment, decrement, signIn }
