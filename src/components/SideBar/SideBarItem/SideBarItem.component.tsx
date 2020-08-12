import React from 'react';
import { Item, Icon, SemanticICONS } from 'semantic-ui-react';

import './SideBarItem.css';

interface ISideBarItem {
    icon: SemanticICONS;
    label: string;
    selected : boolean;
}

export const SideBarItem = (props: ISideBarItem) => {

    const highlightClass = props.selected ? 'highlight_menu' : null;

    return (
        <Item className={['sidebar_item',highlightClass].join(' ')}>
            <div>
                <span><Icon size="large" name={props.icon} /></span>
                <span>{props.label}</span>
            </div>
        </Item>
    )
}