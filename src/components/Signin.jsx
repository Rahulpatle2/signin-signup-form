import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

export const Signin = (props) => {
    const {toggler, settoggler,users,setusers} = props;
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
    <form onSubmit={handleSubmit(submitHandler)} className="w-[40%] mx-auto border-white" >
        <h1 className="text-5xl font-black mb-7">Already Have an Account?</h1>
         
         <input type="text"
         {...register('name')}
         placeholder="john Doe"
         className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
         />
         <input type="email"
         {...register('email')}
         placeholder="abc123@gmail.com"
         className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
         />
         <input type="password"
         {...register('password')}
         placeholder="password"
         className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
         />
         <button className="border border-amber-50 rounded px-3 py-1.5 hover:bg-amber-50 hover:text-gray-800 transition-all" >SignIn</button>
         <br />
        <small>
          Already have an account ? 
          <button className="text-blue-500 pl-2" type="button" onClick={ () => {settoggler(!toggler)}} >SingUp</button>
        </small>
      </form>
  )
}
