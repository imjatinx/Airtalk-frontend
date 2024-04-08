import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import OutgoingMessage from './OutgoingMessage';
import IncomingMessage from './IncomingMessage';
import { useSelector } from 'react-redux';

function ChatArea({ props }) {
  const darkTheme = useSelector(state => state.themeReducer);
  return (
    <div className='chat-area-wrapper'>

      <div className={`chat-area-header ${darkTheme ? 'dark' : ''}`}>
        <p className={`chat-header-icon ${darkTheme ? 'dark-color' : ''}`}>B</p>
        <div className={`chat-header-text`}>
          <p className={`chat-header-title ${darkTheme ? 'dark-color' : ''}`}>Boys Locker Room</p>
          <p className={`chat-header-online ${darkTheme ? 'dark-color' : ''}`}>online</p>
        </div>
        <IconButton className={`${darkTheme ? 'dark-btn' : ''}`}>
          <DeleteIcon />
        </IconButton>
      </div>


      <div className='chat-message-wrapper'>
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
        <IncomingMessage />
        <OutgoingMessage />
      </div>

      <div className='chat-input-wrapper'>
        <input type="text" placeholder='Type a Message' className='chat-box' />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  )
}

export default ChatArea