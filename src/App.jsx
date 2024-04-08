import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import MainWrapper from './Components/MainWrapper'
import Welcome from './Components/Welcome'
import ChatArea from './Components/ChatArea'
import PageNotFound from './Components/PageNotFound'

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='app' element={<MainWrapper />}>
          <Route path='' element={<Welcome />} />
          <Route path='chat' element={<ChatArea />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
