// import React, { useReducer, useState } from 'react'
// // import UserContext from './UserContext';
// // import Navbar from './Navbar';

// import products from './Product';
// import { CartReducer, initialState } from './CartReducer';
// import UsecallbackuseMemo from './Components/UsecallbackuseMemo';
// import UsememoExample from './Components/UsememoExample';
// const App = () => {
//   const [state, dispatch] = useReducer(CartReducer, initialState);
//   const [coupon, setCoupon] = useState("");
//   const [sort, setSort] = useState("");
  
     
 
//   const [sortOrder, setSortOrder] = useState("");

//   const getSortedProducts = () => {
//     const productsCopy = [...products];

//     if (sortOrder === "lowToHigh") {
//       return productsCopy.sort((a, b) => Number(a.price) - Number(b.price));
//     }
//     if (sortOrder === "highToLow") {
//       return productsCopy.sort((a, b) => Number(b.price) - Number(a.price));
//     }
    
//     return productsCopy; 
//   };
//   return (
//     <div>
//       <h1>Shopping Cart</h1>

//       <div style={{ marginBottom: 20 }}>
//         <input
//           type='number'
//           placeholder='Discount %'
//           min='0'
//           max='100'
//           value={coupon}
//           onChange={(e) => setCoupon(e.target.value)}
//           style={{ marginRight: 10 }}
//         />
//         <button
//           onClick={() =>
//             dispatch({
//               type: 'Apply_Coupon',
//               payload: Number(coupon)
//             })
//           }
//         >
          
//           Apply Coupon
//         </button>
//       </div>
//           <div>
//             <select
//               value={sortOrder}
//               onChange={(e) => setSortOrder(e.target.value)}
//             >
//               <option value="">Select Option</option>
//               <option value="lowToHigh">Price: Low to High</option>
//               <option value="highToLow">Price: High to Low</option>
//             </select>
//           </div>

//       <h2>Total : Rs {state.total}</h2>
//       <UsecallbackuseMemo />
//       <UsememoExample />
    
//       {getSortedProducts().map((product) => (
//         <div
//           key={product.id}
//           style={{
//             border: '1px solid gray',
//             padding: 15,
//             marginBottom: 15
//           }}
//         >
      

//           <h3>{product.name}</h3>
//           <p>{product.price}</p>
//           <button
//             onClick={() =>
//               dispatch({
//                 type: 'add item',
//                 payload: product
//               })
//             }
//           >
//             Add to Cart
//           </button>
//         </div>
//       ))}

//       <h2>Cart</h2>
//       {state.cart.map((item) => (
//         <div key={item.id} style={{ marginBottom: 10 }}>
//           {item.name} - Qty: {item.quantity}
//           <button
//             style={{ marginLeft: 10 }}
//             onClick={() =>
//               dispatch({
//                 type: 'increase_Qty',
//                 payload: item.id
//               })
//             }
//           >
//             +
//           </button>
//         </div>
//       ))}

//       <button
//         onClick={() =>
//           dispatch({
//             type: 'clean cart'
//           })
//         }
//         style={{ marginTop: 20 }}
//       >
//         Clean Cart
//       </button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import UsecallbackExample from './UsecallbackExample'

const App = () => {
  return (
    <div>
      <UsecallbackExample/>
    </div>
  )
}

export default App
