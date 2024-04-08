import React from 'react'
import { useNavigate } from 'react-router-dom'

function ConversationItem({ props, dark }) {
  const navigate = useNavigate()
  return (
    <div className='conversation-wrapper' onClick={() => { navigate("chat") }}>
      <p className={`conversation-icon ${dark ? 'dark' : ''}`} conversation>{props.name[0]}</p>
      <p className={`conversation-title ${dark ? 'dark-color' : ''}`}>{props.name}</p>
      <p className={`conversation-lastMassage ${dark ? 'dark-color' : ''}`}>{props.lastMessage}</p>
      <p className={`conversation-timestamp ${dark ? 'dark-color' : ''}`}>{props.timestamp}</p>
    </div>
  )
}

export default ConversationItem