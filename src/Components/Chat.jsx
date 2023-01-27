import React, { useContext } from 'react'
// import userimg from '../userImages/user1.jpg'
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext';

const Chat = () => {

  const {data} = useContext(ChatContext)
  return (
    <div style={{height:"100px"}} className='w-2/3  bg-transparent'>
      <div className="chatinfo bg-gray-200 grid grid-cols-2  place-content-arround px-4 h-20">
        <div className='flex items-center space-x-3'>
          <img src={data.user?.photoURL} className='w-12 h-12 rounded-full ' alt="" srcset="" />
          <span className='text-lg font-Poppins text-gray-700 font-semibold'>{data.user?.displayName}</span>
        </div>
        <div className="chaticon flex items-center space-x-2 justify-end">
          <div className='cursor-pointer'><svg className='h-8' viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M170.666667 256h469.333333c46.933333 0 85.333333 38.4 85.333333 85.333333v341.333334c0 46.933333-38.4 85.333333-85.333333 85.333333H170.666667c-46.933333 0-85.333333-38.4-85.333334-85.333333V341.333333c0-46.933333 38.4-85.333333 85.333334-85.333333z" fill="#934fab"></path><path d="M938.666667 746.666667l-213.333334-128V405.333333l213.333334-128z" fill="#40376d"></path></g></svg>
          </div>
          <div className='cursor-pointer'>
            <svg fill="#000000" viewBox="0 0 24 24" id="more-horizontal" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color h-10"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path id="secondary" d="M13.5,12A1.5,1.5,0,1,1,12,10.5,1.5,1.5,0,0,1,13.5,12ZM18,10.5A1.5,1.5,0,1,0,19.5,12,1.5,1.5,0,0,0,18,10.5Zm-12,0A1.5,1.5,0,1,0,7.5,12,1.5,1.5,0,0,0,6,10.5Z" style={{ fill: '#2ca9bc' }} /></g></svg>
          </div>
        </div>
      </div>
   
      <Messages />
    
      <Input />
    </div>
  )
}

export default Chat
