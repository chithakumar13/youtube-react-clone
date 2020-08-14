import React from 'react';
import { Waypoint } from 'react-waypoint'

interface IInfiniteScroll {
    children: React.ReactElement;
    callBack(args: Waypoint.CallbackArgs): void
}
export const InfiniteScroll = (props: IInfiniteScroll) => {
    return <>
        {props.children}
        <Waypoint bottomOffset="-15px" onEnter={props.callBack}></Waypoint>
    </>
}