import React from 'react'

function IncomingMessage() {
  return (
    <div className='incoming-message-wrapper'>
        <p className='chat-header-icon'>R</p>
        <div className='incoming-message-box'>
            <p className='incoming-message-title'>Random User</p>
            <p className='incoming-message-text'>Namaste</p>
            <p className='incoming-message-timestamp'>12:00pm</p>
        </div>
    </div>
  )
}

export default IncomingMessage