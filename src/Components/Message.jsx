import React from 'react'
import userimg from "../userImages/user1.jpg"
const Message = () => {
  return (
    <div className='bg-slate-200 flex  w-full'>
      <div className='messageInfo px-2  '>
        <img src={userimg} className='w-12 rounded-full' alt="" />
        <span className='text-xs text-gray-600'>just now</span>
      </div>    
      <div className='messageContent flex w-4/5 flex-col gap-6 '>
        <p className='text-lg  bg-white text-gray-800 rounded-b-lg rounded-tr-lg font-Poppins py-2 px-2'>Hello</p>
        {/* <img src={userimg} className='w-40' alt="" /> */}
        </div>    

    </div>
  )
}

export default Message
