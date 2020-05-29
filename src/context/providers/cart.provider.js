import React, {createContext, useState, useEffect} from 'react';
import {addItemToCart, RemoveItemFromCart} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFormCart: () => {},
    cartItemsCount: 0,
});

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]) //default value here is the argument
    const [cartItemsCount, setCartItemsCount] = useState(0);

    const addItem = (item) => setCartItems(addItemToCart(cartItems, item))
    const toggleHidden = () => setHidden(!hidden);
   
    const contextValue = {
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount,
    }
    return <CartContext.Provider value = {contextValue} >
        {children}
        </CartContext.Provider>;
}


export default CartProvider;
