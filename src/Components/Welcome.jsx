import React from 'react';
import welcomeIcom from '../assets/welcome-chat.png';

function Welcome() {
  return (
    <div className='welcome-wrapper'>
        <div className='welcome-content'>
            <img src={welcomeIcom} alt="welcome" className='welcome-img' />
            <p className='welcome-text'>We chatted about old times. I had a chat with John.</p>
        </div>
    </div>
  )
}

export default Welcome