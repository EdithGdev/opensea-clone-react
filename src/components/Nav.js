import React from 'react'
import './Nav.css'

const Nav = () => {
    return (
        <div className='navbar'>
            <div className='logo'></div>
                <img src='https://miro.medium.com/max/640/0*Z4nSs0glhd6I0_yu.png' />
            <div className='inputContainer'>
            <input className='input' />  
            </div>   

            <div className='nav-items'>
                <div className='explore'><p>Explore</p></div>
                <div className='stats'><p>Stats</p></div>
                <div className='resources'><p>Resources</p></div>
                <div className='create'><p>Create</p></div>
                <div className='user'>
                    <div className='account'><p>Account</p></div>
                    <div className='wallet'><p>Wallet</p></div> 
                </div>                                                               
            </div>
        </div>
    )
}

export default Nav
