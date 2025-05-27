import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'; 
import { toast } from 'react-toastify';
import { usercontext } from '../UserContext';

export const Signup = () => {
    const {toggler, settoggler,users,setusers} = useContext(usercontext);
    const { register, handleSubmit, reset } = useForm(); 

    const SubmitHandler = (data) => {
        // data.id = nanoid();
        // setusers([...users, data]); 

        const isUserExist = users.find(
              (user) =>  (user.email === data.email )
            )
        
            
            if (isUserExist) {
              toast.error("User already exist or you can't create a account with this mail");
            } else {
              toast.success("User created succesfully");
               data.id = nanoid();
               setusers([...users, data]); 
            }
        
            reset()
    }

    console.log(users)

    return (
        <form onSubmit={handleSubmit(SubmitHandler)} className="lg:w-[60%] w-4/5 mx-auto mt-2 lg:mt-0 border lg:border-none p-10 lg:p-5 rounded border-white ">
            <h1 className="text-5xl lg:text-3xl font-black mb-7">Let's start the journey</h1>
            
            <input 
                type="text"
                {...register('name', { required: true })} 
                placeholder="John Doe"
                className="block focus:text-black font-thin mb-3 border rounded  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
            />
            <input 
                type="email"
                {...register('email', { required: true })}
                placeholder="abc123@gmail.com"
                className="block focus:text-black font-thin mb-3 border rounded  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
            />
            <input 
                type="password"
                {...register('password', { required: true })} 
                placeholder="Password"
                className="block focus:text-black font-thin mb-3 border rounded  p-2 w-full text-xl outline-amber-50  focus:outline-blue-500 my-1.5 focus:bg-white"
            />
            <button 
                type="submit" 
                className=" lg:bg-blue-500 bg-yellow-500 text-white cursor-pointer rounded px-3 py-1.5 hover:bg-amber-50 hover:text-gray-800 transition-all"
            >
                SignUp {/* Fixed typo */}
            </button>
            <br />
            <small>
                Already have an account? 
                <button 
                    className="text-blue-500 pl-2" 
                    type="button" 
                    onClick={() => settoggler(!toggler)}
                >
                    SignIn 
                </button>
            </small>
        </form>
    )
}