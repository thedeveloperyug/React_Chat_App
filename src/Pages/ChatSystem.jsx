import React, { useContext } from 'react'
import Slidebar from '../Components/Slidebar'
import Chat from '../Components/Chat'
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router';



const ChatSystem = () => {
    const currentUser = useContext(AuthContext)
    const ProtectedRoute = ({ children }) => {
        if (!currentUser) {
            return <Navigate to="/" />
        }
        return children;
    }
    return (
      
        <div className='chatContainer'>
            <div className="chatBox">
                <Slidebar/>
                <Chat/>
            </div>
        </div>
        
    )
}

export default ChatSystem
