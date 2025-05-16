import React, { createContext } from 'react'
import { useState } from 'react';
export const usercontext = createContext(null);
const UserContext = (props) => {
    const [toggler, settoggler] = useState(true);
    const [users, setusers] = useState([]);
  return (
   <usercontext.Provider value={{toggler,settoggler,users,setusers}}>{props.children}</usercontext.Provider>
  )
}

export default UserContext