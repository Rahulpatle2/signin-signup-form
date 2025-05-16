import React,{useContext, useState} from "react"
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import Users from "./components/Users";
import UserContext, { usercontext } from "./UserContext";







const App = () => {

  const {toggler} = useContext(usercontext);


  return(
    <div>
      {/* dark mode */}
      <div className="w-screen h-screen overflow-y-auto bg-gray-800 text-white lg:p-10 lg:flex  gap-5">
      <div className="w-full lg:w-[70%]">
        {toggler ? ( <Signin />
        ): ( <Signup />
        )}
      </div>

      <div className="w-full lg:w-[30%] flex items-center justify-center mt-3 lg:block">
        <Users />
      </div>
  
      </div>

      
    </div>

    
  )
}

export default App