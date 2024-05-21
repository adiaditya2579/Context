import React, { useState,createContext } from 'react'

export const UserContext = createContext()

function Context(props) {
  
  let [user,setuser] = useState([
    {id:1,name:"Aditya",city:"USA"},
    {id:2,name:"Anurag",city:"Pakistan"},
    {id:3,name:"sarthak",city:"USA"}
  ])


  return (

    <UserContext.Provider value={{user,setuser}}>
      {props.children}
    </UserContext.Provider>
  )
}

export default Context





