import React from 'react'
import '../Styles/Style.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'

function MainWrapper() {
  return (
    <div className='main-wrapper'>
      <Sidebar/>
      <ChatArea/>
    </div>
  )
}

export default MainWrapper