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
                className='flex items-center justify-between bg-gray-700 rounded p-2 font-thin mb-3 border border-white w-full'>
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