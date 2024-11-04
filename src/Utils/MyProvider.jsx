import React, { createContext, useEffect } from 'react'
import { getItems } from './storeCardToLocalStorage'

export const MyContext = createContext()
export default function MyProvider({children}) {
    const [cartLength, setCartLength] = React.useState(0)
    const [wishLength, setWishLength] = React.useState(0)
   

useEffect(()=>{
  const cart = getItems('cart-list')
  const wistlist = getItems('wish-list');
  setCartLength(cart.length);
  setWishLength(wistlist.length);

},[])

  return (
    <MyContext.Provider value={{ cartLength, wishLength, setCartLength, setWishLength}}>
        {children}
    </MyContext.Provider>
  )
}
