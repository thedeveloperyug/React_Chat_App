import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div style={{height:"448px"}} className='messages overflow-y-scroll ' >
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
      <Message/>
    </div>
  )
}

export default Messages
