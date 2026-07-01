export const initialState = {
    cart: [],
    total: 0,
    discount: 0
};

const calculateTotal = (cart, discountPercent = 0) => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const safeDiscountPercent = Math.min(100, Math.max(0, discountPercent));
    return subtotal - (subtotal * safeDiscountPercent) / 100;
};

export function CartReducer(state, action) {
    switch (action.type) {
        case "add item": {
            const existingItem = state.cart.find((item) => item.id === action.payload.id);
            let updatedCart;

            if (existingItem) {
                updatedCart = state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedCart = [
                    ...state.cart,
                    {
                        ...action.payload,
                        quantity: 1
                    }
                ];
            }

            return {
                ...state,
                cart: updatedCart,
                total: calculateTotal(updatedCart, state.discount)
            };
        }

        case "increase_Qty": {
            const updatedCart = state.cart.map((item) =>
                item.id === action.payload
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );

            return {
                ...state,
                cart: updatedCart,
                total: calculateTotal(updatedCart, state.discount)
            };
        }

        case "Apply_Coupon": {
            const discount = action.payload || 0;
            return {
                ...state,
                discount,
                total: calculateTotal(state.cart, discount),
            };
        }
        
  
        case "clean cart": {
            return {
                cart: [],
                total: 0,
                discount: 0
            };
        }

        default:
            return state;
    }
}
    