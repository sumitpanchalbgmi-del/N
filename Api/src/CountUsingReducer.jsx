import React, { useReducer } from 'react'

const initialState = {
    count: 0
}

function reducer(State, action) {
    switch (action.type) {
        case "increment":
            return {
                count: State.count + 1
            }
        case "decrement":
            return {
                count: State.count - 1
            }
        default:
            return State
    }
}
const CountUsingReducer = () => {
    const [State, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>{State.count}</h1>
            <button onClick={() => dispatch({ type: "increment" })}>increment</button>
            <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
        </div>
    )
}

export default countUsingReducer;

