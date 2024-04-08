import React from 'react'
import '../Styles/Style.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'
import { Outlet } from 'react-router-dom'

function MainWrapper() {
  return (
    <div className='main-wrapper'>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}

export default MainWrapper