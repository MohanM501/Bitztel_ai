import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavbarComp= () => {
  return (
    <div>
        <Link to="/">
        <Button variant="text">Home</Button>
        </Link>
        <Link to="/login">
        <Button variant='contained'>Log In</Button>
        </Link>
        <Link to="/signup">
        <Button variant='contained'>Sign Up</Button>
        </Link>
    </div>
  )
}

export default NavbarComp