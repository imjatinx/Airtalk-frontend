import { Button, TextField } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div className='login-wrapper'>
        <span className='login-text'>
        Application Login
        </span>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        <Button variant="contained">Login</Button>
    </div>
  )
}

export default Login