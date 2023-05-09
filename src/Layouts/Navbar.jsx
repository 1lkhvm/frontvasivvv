import React from 'react'
import { Link } from "react-router-dom";
import './navbar.scss'
import "../imgs/logo.png"
function Navbar() {

    return (
        <>
            <div className='navbar-container'>
                <nav>
                    <div className='navbar-logo'>
                        <Link className='nav' to={'/'}><img className='logonav' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTskF1ENMQmiosFwUfUir1_F_A9iymAa2w62A&usqp=CAU" alt="" /></Link>
                    </div>
                    <div className='navbar-menu'>
                        <Link className='nav' to={'/'}><span>Home</span></Link>


                        <Link className='nav' to={'/about'}><span>About</span></Link>

                    </div>
                </nav>

            </div>
        </>
    )
}

export default Navbar