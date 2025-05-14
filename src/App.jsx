import React,{useState} from "react"
import { Signin } from "./components/Signin";
import { Signup } from "./components/Signup";
import Users from "./components/Users";







const App = () => {

  const [toggler, settoggler] = useState(true);
  const [users, setusers] = useState([]);
  
  


  return(
    <div>
      {/* dark mode */}
      <div className="w-screen h-screen overflow-y-auto bg-gray-800 text-white lg:p-10 lg:flex  gap-5">
      <div className="w-full lg:w-[70%]">
        {toggler ? ( <Signin toggler = {toggler} settoggler = {settoggler} users = {users} setusers = {setusers} />
        ): ( <Signup toggler = {toggler} settoggler = {settoggler} users ={users} setusers ={setusers} />
        )}
      </div>

      <div className="w-full lg:w-[30%] flex items-center justify-center mt-3 lg:block">
        <Users users ={users} setusers = {setusers} />
      </div>
  
      </div>

      
    </div>

    
  )
}

export default App