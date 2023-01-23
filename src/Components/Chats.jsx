import { doc, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
// import userimg from '../userImages/user1.jpg'
import { useState } from 'react'
import { db } from '../firebase'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
const Chats = () => {
  const currentUser = useContext(AuthContext);
  const [chats, setChats] = useState([])
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
        // console.log("Current data: ", doc.data());
      });
      return () => {
        unsub();
      };
    };
    currentUser.uid && getChats()
  }, [currentUser.uid]);
  
  console.log(chats)
  return (
    <div className='chats'> 
      {/* {Object.entries(chats)?.map((chat) => ( */}
        
        {/* <div key=""><span className='text-lg text-white'></span></div> */}
        {/* ))}  */}
        {/* <div key={chat[0]} className='border-b-2 cursor-pointer border-gray-600 flex border-opacity-50 hover:bg-slate-500' > */}

          {/* <img src="" className='w-16 px-2 rounded-full py-2 ' alt='userimg' /> */}
          {/* <p className='mx-6 items-center text-center text-gray-200 flex text-lg font-Poppins'>h</p> */}
          {/* <p className=' mx-6 items-center text-center text-gray-200 flex text-lg font-Poppins'>{chat[1].userInfo.lastMessage?.text}</p> */}
        {/* </div> */}
    </div >
  )
}

export default Chats
