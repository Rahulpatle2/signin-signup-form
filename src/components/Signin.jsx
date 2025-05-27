import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { usercontext } from '../UserContext';

export const Signin = () => {
    const {toggler, settoggler,users,setusers} = useContext(usercontext);
    const {register,handleSubmit,reset} = useForm();

  const submitHandler = (data) =>{
    const isUserExist = users.find(
      (user) =>  (user.email === data.email )
    );

    const isPasswordCorrect = users.find(
      (user) => (user.password === data.password)
    );

    
    if (isUserExist) {
      if(isPasswordCorrect){
        toast.success("User logged in successfully");
      }else{
        toast.error("Incorrect Password ");
      }
      
    } else {
      toast.error("User not find");
    }

    reset()
  }


     
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="lg:w-[60%] w-4/5 mx-auto mt-2 lg:mt-0 border lg:border-none p-10 lg:p-5 rounded border-white " >
        <h1 className="text-5xl lg:text-3xl font-black mb-7">Already Have an Account?</h1>
         
         <input type="text"
         {...register('name')}
         placeholder="john Doe"
         className="block focus:text-black font-thin mb-3 border rounded  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
         />
         <input type="email"
         {...register('email')}
         placeholder="abc123@gmail.com"
          className="block font-thin mb-3 border rounded focus:text-black  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
         />
         <input type="password"
         {...register('password')}
         placeholder="password"
          className="block font-thin mb-3 border rounded focus:text-black  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
         />
         <button className=" lg:bg-blue-500 bg-yellow-500  text-white cursor-pointer rounded px-3 py-1.5 hover:bg-amber-50 hover:text-gray-800 transition-all" >SignIn</button>
         <br />
        <small>
          create a new account ? 
          <button className="text-blue-500 pl-2" type="button" onClick={ () => {settoggler(!toggler)}} >SingUp</button>
        </small>
      </form>
  )
}
