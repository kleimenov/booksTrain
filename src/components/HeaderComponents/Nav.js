import React from 'react'

const Nav = (props) => (
    <div className='NavWrapper'>
        <h3>Hello { props.myName } books lover!</h3>
        <ul>
            <li>allBookes</li>
            <li>myBooks</li>
        </ul>
        <ul>
            <li>login</li>
            <li>logout</li>
        </ul>
    </div>
)

export default Nav