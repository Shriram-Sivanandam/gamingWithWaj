import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import GamepadOutlinedIcon from '@material-ui/icons/GamepadOutlined';
import SportsEsportsTwoToneIcon from '@material-ui/icons/SportsEsportsTwoTone';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CopyrightIcon from '@material-ui/icons/Copyright';
import InfoIcon from '@material-ui/icons/Info';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ liked }] = useStateValue();

console.log(liked);

    return (
        <div className="sidebar">
            <Link to="/" className="sidebar__icon" >
                <SidebarRow Icon={HomeIcon} title="Home"/>
            </Link>
            <Link to="/classic" className="sidebar__icon">
                <SidebarRow Icon={GamepadOutlinedIcon} title="Classic"/>
            </Link>
            <Link to="/shooter" className="sidebar__icon">
                <SidebarRow Icon={SportsEsportsTwoToneIcon} title="Shooter"/>
            </Link>
            <Link to="dualplayer" className="sidebar__icon">
                <SidebarRow Icon={VideogameAssetIcon} title="Dual Player"/>
            </Link>

            <hr />

            <Link to="/liked" className="sidebar__icon">
                <div className="sidebar__liked">
                    <SidebarRow Icon={FavoriteIcon} title="Liked"/>
                    <span className="sidebar__number">{ liked?.length }</span>
                </div>
            </Link>
            <Link to="/aboutus" className="sidebar__icon">
                <SidebarRow Icon={InfoIcon} title="About Us"/>
            </Link>
            <Link to="/copyright" className="sidebar__icon">
                <SidebarRow Icon={CopyrightIcon} title="Copyright"/>
            </Link>
        </div>
    )
}

export default Sidebar
