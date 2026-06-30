import React, { useReducer, useState } from 'react'
// import UserContext from './UserContext';
// import Navbar from './Navbar';

import products from './Product';
import { CartReducer, initialState } from './CartReducer';

const App = () => {
  const [state, dispatch] = useReducer(CartReducer, initialState);
  const [coupon, setCoupon] = useState("");

  return (
    <div>
      <h1>Shopping Cart</h1>

      <div style={{ marginBottom: 20 }}>
        <input
          type='number'
          placeholder='Discount %'
          min='0'
          max='100'
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          style={{ marginRight: 10 }}
        />
        <button
          onClick={() =>
            dispatch({
              type: 'Apply_Coupon',
              payload: Number(coupon)
            })
          }
        >
          Apply Coupon
        </button>
      </div>

      <h2>Total : Rs {state.total}</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: '1px solid gray',
            padding: 15,
            marginBottom: 15
          }}
        >
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button
            onClick={() =>
              dispatch({
                type: 'add item',
                payload: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart</h2>
      {state.cart.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          {item.name} - Qty: {item.quantity}
          <button
            style={{ marginLeft: 10 }}
            onClick={() =>
              dispatch({
                type: 'increase_Qty',
                payload: item.id
              })
            }
          >
            +
          </button>
        </div>
      ))}

      <button
        onClick={() =>
          dispatch({
            type: 'clean cart'
          })
        }
        style={{ marginTop: 20 }}
      >
        Clean Cart
      </button>
    </div>
  )
}

export default App
