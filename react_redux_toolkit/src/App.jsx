import React from 'react'
// import Login from './features/counter/Auth/login'
import Todo from '../src/components/todo'
import { useDispatch, useSelector } from 'react-redux'
// import { increment, decrement, reset } from './features/counter/counterslice'
// import { login } from '../../../authsSlice'; // Make sure this path is correct
import { todofetch } from './todosSlice'
function App() {
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()

  // function handleincrease() {
  //   dispatch(increment())
  // }

  // function handledecrease() {
  //   dispatch(decrement())

  // }
  // function handlereset() {
  //   dispatch(reset())

  // }


  // let amount = Number(prompt('what is  the final amount '))
  // let dic = 0
  // if (amount > 0 && amount <= 5000) {
  //   dic = 0
  // } else if (amount > 5000 && amount <= 7000) {
  //   dic = 5
  // } else if (amount > 7000 && amount <= 9000) {
  //   dic = 10

  // }
  // console.log(amount - Math.floor((dic * amount) / 100));













  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  console.log(state);



  return (
    <div className=''>
      {/* <button className=' px-4 py-2 border cursor-pointer' onClick={handledecrease}>-</button>
      <p>count:{count}</p>
      <button className=' px-4 py-2 border cursor-pointer' onClick={handleincrease}>+</button>
      <button className=' px-4 py-2 border cursor-pointer' onClick={handlereset}>reset</button> */}

      {/* <Login /> */}
      {/* <Todo /> */}
      <button onClick={(e) => dispatch(todofetch())} className='cursor-pointer'>todosfetch</button>
      {state.todos?.data?.length > 0 ? (
        state.todos.data.map((e) => (
          <li key={e.id}>{e.title}</li>
        ))
      ) : (
        <p>No todos available</p>
      )}


    </div>
  )
}

export default App