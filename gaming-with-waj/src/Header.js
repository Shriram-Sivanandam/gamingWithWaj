import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import LocationSearchingIcon from '@material-ui/icons/LocationSearching';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import RedditIcon from '@material-ui/icons/Reddit';
import { Link } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function Header() {
    const [{ user }] = useStateValue();
    const [inputSearch, setInputSearch] = useState("");

    const login = () => {
        if(user) {
            auth.signOut();
        }
    }

    return ( 
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo" src={require('./images/google.png')} alt="logos" />
                </Link>
                {/*<img 
                className="header__logo" 
                src="https://en.wikipedia.org/wiki/File:Google_2015_logo.svg" 
                alt="logo" 
                />*/}
            </div>

            <div className="header__input">
                <input onChange={e => setInputSearch(e.target.value)} 
                vlaue={inputSearch} 
                placeholder="Search..." 
                type="text" 
                />
                <Link to={`/search/${inputSearch}`}>
                    <LocationSearchingIcon type="submit" className="header__inputBtn"/>
                </Link>
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <AccountCircleIcon className="header__user" />
                    <div onClick={login} className="header__option">
                        <span className="header__lineOne">Hello, {user?.email}</span>
                        <span className="header__lineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>
            </div>

            <div className="header__icons">
                <a href="https://www.instagram.com/ssshriram4/" 
                target="_blank" 
                rel = "noopener noreferrer">
                <InstagramIcon className="header__icon" />
                </a>
                {/* <Link to="https://www.instagram.com/ssshriram4/">
                    <InstagramIcon className="header__icon" />
                </Link> */}
                <a href="https://twitter.com/Shriram29301241" 
                target="_blank" 
                rel = "noopener noreferrer">
                <TwitterIcon className="header__icon" />
                </a>
                <a href="https://www.facebook.com/shriram.shri.336" 
                target="_blank" 
                rel = "noopener noreferrer">
                <FacebookIcon className="header__icon" />
                </a>
                <a href="https://www.reddit.com/user/proudsquid125/" 
                target="_blank" 
                rel = "noopener noreferrer">
                <RedditIcon className="header__icon" /> 
                </a>
            </div>
        </div>
    );
}

export default Header
