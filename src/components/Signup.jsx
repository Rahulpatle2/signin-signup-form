import React from 'react';
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid'; 
import { toast } from 'react-toastify';

export const Signup = (props) => {
    const { toggler, settoggler, users, setusers } = props;
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
        <form onSubmit={handleSubmit(SubmitHandler)} className="w-[40%] mx-auto border-white">
            <h1 className="text-5xl font-black mb-7">Let's start the journey</h1>
            
            <input 
                type="text"
                {...register('name', { required: true })} 
                placeholder="John Doe"
                className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
            />
            <input 
                type="email"
                {...register('email', { required: true })}
                placeholder="abc123@gmail.com"
                className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
            />
            <input 
                type="password"
                {...register('password', { required: true })} 
                placeholder="Password"
                className="block font-thin mb-3 border-b outline-0 p-2 w-full text-2xl"
            />
            <button 
                type="submit" 
                className="border border-amber-50 rounded px-3 py-1.5 hover:bg-amber-50 hover:text-gray-800 transition-all"
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