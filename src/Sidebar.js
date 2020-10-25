import React from 'react';
import SidebarRow from "./SidebarRow";
import {
    EmojiFlags as EmojiFlagsIcon,
    People as PeopleIcon,
    Chat as ChatIcon,
    Storefront as StorefrontIcon,
    VideoLibrary as VideoLibraryIcon,
    ExpandMore as ExpandMoreIcon,
    LocalHospital as HospitalIcon
} from "@material-ui/icons";
import "./Sidebar.css"

function Sidebar() {
    return <div className="sidebar">
        <SidebarRow
            src="https://media-exp1.licdn.com/dms/image/C5603AQHS_cWQTz4fxg/profile-displayphoto-shrink_400_400/0?e=1608768000&v=beta&t=2Wo-HhCeO95DduRrtGH2C8GQBft_dbBRFHQGqN2Bo_c"
            title="Mann Patel"/>
        <SidebarRow Icon={HospitalIcon} title="COVID-19 Information Center" />
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
        <SidebarRow Icon={PeopleIcon} title="Friends"/>
        <SidebarRow Icon={ChatIcon} title="Messenger"/>
        <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
        <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
        <SidebarRow Icon={ExpandMoreIcon} title="Marketplace"/>
    </div>
}

export default Sidebar;
