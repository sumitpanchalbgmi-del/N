// import React from 'react'

// const Child = ({ sayHello }) => {
//     console.log("Bacha render");
//   return (
//     <div>
//       <h2>i am bacha </h2>
//       <button onClick={sayHello}>click me</button>
//     </div>
//   )
// }

// export default Child




import React from 'react'
const Child = React.memo(({hello}) => {
  console.log("Child render");
  return (
    <button onClick={hello}>say hello</button>
  )
})

export default Child
