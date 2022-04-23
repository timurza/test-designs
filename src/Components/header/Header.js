import React from 'react';
import StyledButton from '../buttons/StyledButton';
import './header.scss';


function Header(){
    return(
        <header className='header'>
            <nav className='header__navigation'>
                    <button className='header__navigation-button'><span className='label'>women</span></button>
                    <button className='header__navigation-button'><span className='label'>men</span></button>
                    <button className='header__navigation-button'><span className='label'>kids</span></button>
                    <StyledButton/>
             </nav>
            <div className='header__logo'></div>
            <div className='header__actions'>
                <div className='header__actions-spacer'></div>
                <div className='header__actions-spacer'></div>
                <div className='header__actions-currency'></div>
                <div className='header__actions-vector'></div>
                <button className='header__actions-cart'></button>
            </div>
        </header>
    
        
    )
}

export default Header;