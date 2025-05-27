import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { usercontext } from '../UserContext';

const Users = () => {
    const { users, setusers } = useContext(usercontext);

    const deleteHandler = (id) =>{
        const filteredusers = users.filter(
            (user) => (user.id != id)
        )

        setusers(filteredusers);

       toast.success('user deleted succesfully')

    }

    const userlist = users.map((user) => {
        return (
            <li  key={user.id}
                className='flex lg:text-black lg:font-bold items-center justify-between border-s-2 bg-gray-700 lg:rounded-3xl lg:flex-col lg:items-start p-2  mb-3 lg:border lg:border-white lg:p-7 lg:w-[40%] lg:bg-[url(https://i.pinimg.com/736x/10/0d/1c/100d1c26674b51b4390437a85c49bf67.jpg)] bg-[url(https://i.pinimg.com/736x/23/d7/4e/23d74e80f5d358a27ce7f32eefbfff17.jpg)] bg-cover rounded lg:bg-cover w-full'>
                <p>
                    <span className='block text-3xl mb-1'>{user.name}</span>
                    <small className='text-lg'>{user.email}</small>
                </p>

                {/* 2. Added arrow function to pass user.id */}
                <p className='text-red-400 cursor-pointer hover:text-red-300 transition-colors'
                    onClick={() => deleteHandler(user.id)}>
                    delete
                </p>
            </li>
        )
    })

    return (
        <div>
            <ul >
                {/* 3. Fixed strict inequality check */}
                {users.length !== 0 ? userlist : (
                    <h1 className='text-red-500'>Data is not available</h1>
                )}
            </ul>
        </div>
    )
}

export default Users