import React from 'react'
import Slidebar from '../Components/Slidebar'
import Chat from '../Components/Chat'


const ChatSystem = () => {
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
