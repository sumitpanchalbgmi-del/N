import React from 'react'

const UsecallbackuseMemo = () => {
    const [count,setcount] = React.useState(0);
    console.log("change count");
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>increase</button>
    
    </div>
  )
}

export default UsecallbackuseMemo
