import { db } from "../firebase"
import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import React from 'react'
import { useContext } from "react";
// import userimg from '../userImages/user1.jpg'
import { useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const Search = () => {
    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);
    const currentUser = useContext(AuthContext)
    const handleSearch = async () => {
        const q = query(collection(db, "user"),
            where("displayName", "==", username));
        //  console.log(displayName);
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data())
            });
        } catch (errr) {
            setErr(true);
        }
    };
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };
    const handleSelect = async () => {
        // check whether the group (chats in firebase) exists, if not create one.
        const combinedId = currentUser.uid > user.uid
            ? currentUser.uid + user.uid
            : user.uid + currentUser.uid;
            try {
                const res = await getDoc(doc(db, "chats", combinedId))
                if(!res.exists()){
                    // create a chat in chats collection
                    await setDoc(doc(db,"chats",combinedId),{ messages:[] });
                   

                    await updateDoc(doc(db,"userChats",currentUser.uid),{
                        [combinedId+ ".userInfo"]:{
                            uid:user.uid,
                            displayName:user.displayName,
                            photoURL:user.photoURL
                        },
                        [combinedId + ".date"]:serverTimestamp()
                    });
                    await updateDoc(doc(db,"userChats",user.uid),{
                        [combinedId+ ".userInfo"]:{
                            uid:currentUser.uid,
                            displayName:currentUser.displayName,
                            photoURL:currentUser.photoURL
                        },
                        [combinedId + ".date"]:serverTimestamp()
                    });
                    console.log(combinedId)
                }
            } catch (err) {
                console.log(err)
                // create user Chat
            }
            setUser(null)
            setUsername("")
    };

    return (
        <div>
            <div className="">
                <div className="mb-0.5">
                    <input onChange={(e) => setUsername(e.target.value)} onKeyDown={handleKey} value={username}  type="search" className="form-control block w-full  text-base font-normal text-gray-100 bg-transparent g border-b-2 border-opacity-75 border-gray-600 rounded transition  ease-in-out  focus:text-gray-100 focus:bg-transparent focus:border-blue-600 px-2 focus:outline-none placeholder-gray-400" id="exampleSearch2" placeholder="Enter Username & Press Enter" />
                </div>
                {err && <span className="py-2 text-red-700 text-sm">User Not Found</span>}
                {user && <div onClick={handleSelect} className='border-b-2 cursor-pointer border-gray-600 flex border-opacity-50 hover:bg-slate-500'>
                    <img src={user.photoURL} className='w-16 h-16 px-2 rounded-full py-2 ' alt='userimg' />
                    <p className=' mx-6 items-center text-center text-gray-200 flex text-lg font-Poppins'>{user.displayName}</p>
                </div>}
            </div>
        </div>
    )
}

export default Search
