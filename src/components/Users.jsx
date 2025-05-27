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
                className='flex lg:text-black lg:font-bold items-center justify-between bg-gray-700 rounded-3xl lg:flex-col lg:items-start p-2  mb-3 border border-white lg:p-7 lg:w-[60%] lg:bg-[url(https://i.pinimg.com/736x/33/a1/9e/33a19ea904b1212e570e167c3386bb22.jpg)] lg:bg-cover w-full'>
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