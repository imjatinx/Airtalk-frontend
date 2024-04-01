import React from 'react'

function ConversationItem({props}) {
  return (
    <div className='conversation-wrapper'>
      <p className='con-icon'>{props.name[0]}</p>
      <p className='con-title'>{props.name}</p>
      <p className='con-lastMassage'>{props.lastMessage}</p>
      <p className='con-timestamp'>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItem