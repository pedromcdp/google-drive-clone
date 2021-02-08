import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/Google_Drive_Logo.png'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const index = ({userPhoto}) => {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={GDriveLogo} alt="Google Drive Logo"/>
                <span>Drive</span>
            </div>
            <div className="header__searchController">
                <div className="header__searchBar">
                    <SearchIcon/>
                    <input type="text" placeholder="Pesquisar no Drive "/>
                    <ExpandMoreIcon/>
                </div>
            </div>
            <div className="header__icons">
                <span>
                    <HelpOutlineIcon/>
                    <SettingsIcon/>
                </span>
                <AppsIcon/>
                <img src={userPhoto} alt="Foto do Utilizador"/>
            </div>
        </div>
    )
}

export default index
