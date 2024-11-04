import React, { createContext } from 'react'

export const MyContext = createContext()
export default function MyProvider({children}) {
    const [data, setData] = React.useState({})
   
  return (
    <MyContext.Provider value={{data}}>
        {children}
    </MyContext.Provider>
  )
}
