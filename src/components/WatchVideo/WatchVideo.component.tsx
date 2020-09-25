import React from 'react';

import Video from "./Video/Video.component";

import "./WatchVideo.css";
import { RouteChildrenProps, withRouter } from 'react-router-dom';
import { params } from '../../store/types';
import { getParamValue } from "../../utils/uri";

interface IWatchVideo extends RouteChildrenProps<params> {

}

const WatchVideo = (props: IWatchVideo) => {

    const getVideoId = () => {
        return getParamValue(props.location, "v") || "";
    }
    return (<div className="watch_video">
        <Video videoId={getVideoId()} />
    </div>)
}

export default withRouter(WatchVideo);