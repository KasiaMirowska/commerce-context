import React, {createContext, useState, useEffect} from 'react';
import {addItemToCart, removeItemFromCart, filterItemFromCart, getItemsCount, getCartTotal} from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartItemsTotal: 0,
});

const CartProvider = ({children}) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]) //default value here is the argument
    const [cartItemsCount, setCartItemsCount] = useState(0);
    const [cartItemsTotal, setCartItemsTotal] = useState(0)
    
    const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
    const removeItem = (item) => setCartItems(removeItemFromCart(cartItems, item))
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item));
    const toggleHidden = () => setHidden(!hidden);
   
    useEffect(() => {//to fire update to items like a lifecicle function
        setCartItemsCount(getItemsCount(cartItems));
    }, [cartItems])

    useEffect(() => {
        setCartItemsTotal(getCartTotal(cartItems))
    }, [cartItems])

    const contextValue = {
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartItemsTotal
    }
    return <CartContext.Provider value = {contextValue} >
        {children}
        </CartContext.Provider>;
}


export default CartProvider;
