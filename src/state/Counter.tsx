

import React, { useReducer } from 'react'

type CounterState ={
    count: number
}

// type CounterAction = {
//     type: 'increment' | 'decrement' | 'reset',
//     payload?: number
// }

type UpdateActions = {
    type: 'increment' | 'decrement' ,
    payload: number
}

type ResetAction = {
    type: 'reset'
}
// recommended approach for reducer
type CounterAction = UpdateActions | ResetAction

const initialState = {
    count: 0
}

const reducer = (state: CounterState, action: CounterAction)=>{
    switch(action.type){
        case 'increment':
            return {...state, count: state.count + action.payload}
        case 'decrement':
            return {...state, count: state.count - action.payload}
        case 'reset':
            return initialState
        default:
            return state;
    }
}

const Counter = () => {
    const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        COunter - {counter.count}
        <button onClick={()=> dispatch({type: 'increment', payload: 1})}>Increment</button>
        <button onClick={()=> dispatch({type: 'decrement', payload: 1})}>Decrement</button>
        <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter