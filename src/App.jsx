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
      <div className="w-screen h-screen overflow-y-auto  lg:p-10 lg:flex bg-[url(https://i.pinimg.com/736x/4d/55/e6/4d55e6976d70678886c3396307992c4c.jpg)] lg:bg-[url(https://i.pinimg.com/736x/23/d7/4e/23d74e80f5d358a27ce7f32eefbfff17.jpg)] bg-cover gap-5 text-green-50 font-sans ">
      <div className="w-full lg:w-[40%] l lg:rounded lg:pt-4 lg:text-black   lg:bg-[#ffffff40] ">
        {toggler ? ( <Signin />
        ): ( <Signup />
        )}
      </div>

      <div className="w-full lg:w-[50%] flex lg:flex-wrap items-center justify-center mt-3 lg:block">
        <Users />
      </div>
  
      </div>

      
    </div>

    
  )
}

export default App