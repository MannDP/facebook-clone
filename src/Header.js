import React from 'react';
import {
    Flag as FlagIcon,
    Home as HomeIcon,
    Search as SearchIcon,
    Storefront as StorefrontIcon,
    Subscriptions as SubscriptionsIcon,
    SupervisedUserCircle as SupervisedUserCircleIcon,
    Add as AddIcon,
    Forum as ForumIcon,
    NotificationsActive as NotificationsActiveIcon,
    ExpandMore as ExpandMoreIcon
} from '@material-ui/icons';
import "./Header.css"
import {Avatar, IconButton} from "@material-ui/core";

function Header() {
    return <div className="header">
        <div className="header__left">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png"
                alt="">
            </img>
            <div className="header__input">
                <SearchIcon/>
                <input type="text" placeholder="Search Facebook"></input>
            </div>
        </div>

        <div className="header__center">
            <div className="header__option header__option--active ">
                <HomeIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <FlagIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <SubscriptionsIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <StorefrontIcon fontSize="large"/>
            </div>
            <div className="header__option">
                <SupervisedUserCircleIcon fontSize="large"/>
            </div>
        </div>

        <div className="header__right">
            <div className="header__info">
                <Avatar src="" />
                <h4>Mann Patel</h4>
            </div>
            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>;
}

export default Header;
