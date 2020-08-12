import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import { SideBarItem } from './SideBarItem/SideBarItem.component';

import './SideBar.css';

export const SideBar = () => {

    return <Menu borderless vertical fixed='left' className="side_bar">
        <SideBarItem label="Home" icon="home" selected />
        <SideBarItem label="Trending" icon="fire" selected={false} />
        <SideBarItem label="Subscription" icon="youtube" selected={false} />
        <Divider />
        <SideBarItem label="History" icon="history" selected={false} />
        <SideBarItem label="Library" icon="play" selected={false} />
    </Menu>
}