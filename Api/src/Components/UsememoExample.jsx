import React, { useMemo,useState } from 'react'

const UsememoExample = () => {
    const [text,settext] = React.useState("");
    const [count,setcount] = React.useState(0);
    function ShowFunction(){
        console.log("heavy calcultion")
        let sum=0;
        for(let i=0;i<10000000;i++){
            sum+=i;
        }
        return sum;
    }
    const result=useMemo(()=>{
        return ShowFunction()
    });
  return (
    <div>UsememoExample
        <input type='text' value={text} onChange={(e) => settext(e.target.value)} />
        <h2>{count}</h2>
        <button onClick={() => setcount(count + 1)}>increase</button>
        <p>{result}</p>
    </div>
  )
}
      
export default UsememoExample
