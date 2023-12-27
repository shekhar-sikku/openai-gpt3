import './Navbar.css';
import { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';

// BEM - Block Element Modifier

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <div className='gpt3__navbar'>

            {/* Desktop Menu */}

            <div className='gpt3__navbar-links'>
                <div className='gpt3__navbar-links_logo'>
                    <a href="#"><img src={logo} alt="gpt3-logo" /></a>
                </div>
                <div className='gpt3__navbar-links_container'>
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgpt3">What is GPT3?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
            <div className='gpt3__navbar-sign'>
                <p><a href="#">Sign In</a></p>
                <button type='button'>Sign Up</button>
            </div>


            {/* Mobile Menu */}

            <div className='gpt3__navbar-menu'>
                {toggle ? <RiCloseLine size={30} onClick={() => setToggle(false)} color='#fff' />
                    : <RiMenu3Line size={30} onClick={() => setToggle(true)} color='#fff' />}
                {toggle && (
                    <div className='scale-up-center gpt3__navbar-menu_container'>
                        <div className='gpt3__navbar-menu_container-links'>
                            <p><a href="#home">Home</a></p>
                            <p><a href="#wgpt3">What is GPT3?</a></p>
                            <p><a href="#possibility">Open AI</a></p>
                            <p><a href="#features">Case Studies</a></p>
                            <p><a href="#blog">Library</a></p>
                        </div>
                        <div className='gpt3__navbar-menu_container-links-sign'>
                            <p><a href="#">Sign In</a></p>
                            <button type='button'>Sign Up</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
