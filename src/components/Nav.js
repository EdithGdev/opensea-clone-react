import React from 'react'
import './Nav.css'
import SearchMag from '@mui/icons-material/Search';
import WalletIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import AccountIcon from '@mui/icons-material/AccountCircleOutlined';


const Nav = () => {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img className='boat' src='https://opensea.io/static/images/logos/opensea.svg' />
                <h1>OpenSea</h1>
            </div>
            <div className='searchBar'>
                <div className='inputContainer'>
                    <div className='searchIcon'>
                        <icon>
                            <SearchMag className='icon'/>
                        </icon>
                    </div>
                <input className='input' placeholder='Search items, collections, and accounts' />
                </div>   
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                        <a href='blank'>Explore</a>
                    </li>
                    <li>
                        <a href='blank'>Stats</a>
                    </li>
                    <li>
                        <a href='blank'>Resources</a>
                    </li>
                    <li>
                        <a href='blank'>Create</a>
                    </li>
                    <li>
                        <a href='blank'><AccountIcon className='icon' /></a>
                    </li>
                    <li>
                        <a href='blank'><WalletIcon className='icon' /></a>
                    </li>
                </ul>
                </div>                                                               
            </div>
    )
}

export default Nav
