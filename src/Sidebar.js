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
import {useStateValue} from "./StateProvider";

function Sidebar() {
    const [{user}, dispatch] = useStateValue();

    return <div className="sidebar">
        <SidebarRow
            src={user.photoURL}
            title={user.displayName}/>
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
