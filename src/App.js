import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearUsers, getUsers } from './redux/modules/users/actions'
import './App.css';

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector(state => state.users.users)
  const orders = useSelector(state => state.orders.orders)
  // const loading = useSelector(state => state.users.loading)
  // const error = useSelector(state => state.users.error)

  useEffect(() => {
    dispatch(getUsers())

    setTimeout(() => {
      dispatch(clearUsers())
    }, 4000)
  }, [])

  return (
    <>
      <h1>SAGA TEST</h1>
      <p>https://www.youtube.com/watch?v=1EVwGxXU84w</p>
      <pre>{JSON.stringify(orders, undefined, 4)}</pre>
      <pre>{JSON.stringify(users, undefined, 4)}</pre>
      {console.log(users)}
    </>
  )
}

export default App;
