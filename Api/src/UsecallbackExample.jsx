
import React, { useCallback, useState } from 'react'


import Child from './Child'
const UsecallbackExample = () => {
    const [count, setcount] = useState(0);
    
    const Hello = useCallback(() => {
       console.log("Hello");
    },[] );
  return (
    <div>
        <h1>Count</h1>
      <button onClick={()=>setcount(count+1)}>increase</button>
      <Child hello={Hello}/>
    </div>
  )
}

export default UsecallbackExample
