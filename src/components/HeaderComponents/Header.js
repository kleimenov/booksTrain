import React from 'react'
import Nav from './Nav'
import Authentication from './Authentification'

const Header = () => (
    <div className='NavWrapper'>
        <h3 className="custom-logo-font">booksTrain</h3>
        <Nav />
        <Authentication />
    </div>
)

export default Header