import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, signIn } from '../../actions'
import './index.css'

export default function Example() {
  const counter = useSelector((state) => state.counterReducer)
  const authCheck = useSelector((state) => state.authReducer)
  const dispatch = useDispatch()
  return (
    <div className="example">
      <p>Counter {counter} </p>
      <button onClick={() => dispatch(increment(5))}>+5</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(signIn())}>Toggle data</button>
      {authCheck && (
        <p>I am invisble you can't see me, unless you click the button.</p>
      )}
    </div>
  )
}
