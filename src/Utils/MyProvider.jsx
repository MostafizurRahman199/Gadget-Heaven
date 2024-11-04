import React, { createContext } from 'react'

export const MyContext = createContext()
export default function MyProvider({children}) {
   
  return (
    <MyContext.Provider>
        {children}
    </MyContext.Provider>
  )
}
