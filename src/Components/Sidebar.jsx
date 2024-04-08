import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../Features/themeSlice';

function Sidebar() {

  const darkTheme = useSelector(state => state.themeReducer)
  const dispatch = useDispatch();

  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: 'Boys Locker Room',
      lastMessage: 'Anyone here...',
      timestamp: "2min"
    },
    {
      id: 2,
      name: 'Shaurya Agrawal',
      lastMessage: 'Hello',
      timestamp: "5min"
    },
    {
      id: 3,
      name: 'Harshita Tomar',
      lastMessage: 'Send you a photo.',
      timestamp: "3hr"
    },
    {
      id: 4,
      name: 'Deepak Kushwah',
      lastMessage: 'Send you a video.',
      timestamp: "today"
    },
  ])

  const navigate = useNavigate();
  return (
    <div className='sidebar-wrapper'>
      <div className={`sb-header ${darkTheme ? 'dark' : ''}`}>
        <div>
          <IconButton className={darkTheme ? 'dark-btn' : ''} onClick={() => {
            navigate('')
          }}>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton className={darkTheme ? 'dark-btn' : ''} >
            <PersonAddIcon />
          </IconButton>
          <IconButton className={darkTheme ? 'dark-btn' : ''} >
            <GroupAddIcon />
          </IconButton>
          <IconButton className={darkTheme ? 'dark-btn' : ''} >
            <AddCircleIcon />
          </IconButton>
          <IconButton className={darkTheme ? 'dark-btn' : ''} onClick={() => { dispatch(toggleTheme()) }}>
            {darkTheme ? <WbSunnyIcon /> : <DarkModeIcon />}
          </IconButton>
        </div>
      </div>
      <div className={`sb-search ${darkTheme ? 'dark' : ''}`}>
        <IconButton className={darkTheme ? 'dark-btn' : ''}>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search' className={`search-box ${darkTheme ? 'dark-inputs' : ''}`} />
      </div>
      <div className={`sb-conversations ${darkTheme ? 'dark' : ''}`}>
        {
          conversations.map(conversation => <ConversationItem props={conversation} dark={darkTheme} key={conversation.id} />)
        }
      </div>
    </div>
  )
}

export default Sidebar