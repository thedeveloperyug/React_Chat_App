import React from 'react'
import userimg from '../userImages/user1.jpg'
const Chats = () => {
  return (
    <div>
       <div className='border-b-2 cursor-pointer border-gray-600 flex border-opacity-50 hover:bg-slate-500'>
                    <img src={userimg} className='w-16 px-2 rounded-full py-2 ' alt='userimg' />
                    <p className=' mx-6 items-center text-center text-gray-200 flex text-lg font-Poppins'>Jhon</p>
                </div>
    </div>
  )
}

export default Chats
