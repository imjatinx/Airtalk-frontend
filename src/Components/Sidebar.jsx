import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import ConversationItem from './ConversationItem';

function Sidebar() {
  const [conversations, setConversations] = useState([
    {
      name: 'Ravi#1',
      lastMessage: 'Hello world.',
      timestamp: "today"
    },
    {
      name: 'Shaurya#2',
      lastMessage: 'Hello world.',
      timestamp: "today"
    },
    {
      name: 'Harshita#3',
      lastMessage: 'Hello world.',
      timestamp: "today"
    },
  ])
  return (
    <div className='sidebar-wrapper'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <DarkModeIcon />
          </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder='Search' className='search-box' />
      </div>
      <div className='sb-conversations'>
        {
          conversations.map(conversation=> <ConversationItem props={conversation} />)
        }
      </div>
    </div>
  )
}

export default Sidebar