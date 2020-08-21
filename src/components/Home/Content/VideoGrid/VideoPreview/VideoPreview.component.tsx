import React from 'react';
import { Image } from 'semantic-ui-react';
import './VideoPreview.css'
import { Video } from '../../../../../store/types';
import { formatShortString } from '../../../../../utils/number';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import { formatTimeString } from '../../../../../utils/timeformat';

TimeAgo.addLocale(en);

const timeAgo: TimeAgo = new TimeAgo();

interface IVideoPreview {
    video: Video;
    isVertical?: boolean;
}

export const VideoPreview = (props: IVideoPreview) => {
    const infoClass: string = (props.isVertical) ? 'verticalList' : 'video_info';
    return <div className="video_preview">
        <div className="video_image">
            <Image src={props.video.snippet?.thumbnails?.medium?.url} />
            <div className="video_timestamp">
                <span>{(!props.video.contentDetails) ? null : formatTimeString(props.video.contentDetails?.duration!)}</span>
            </div>
        </div>
        <div className={infoClass}>
            <div className="video_info_title">{props.video.snippet?.title}</div>
            <div className="video_basic_info">
                <div className="video_channel">{props.video.snippet?.channelTitle}</div>
                <div className="video_view_time">{(!props.video.statistics) ? null : (`${formatShortString(props.video.statistics?.viewCount!)} views • ${timeAgo.format(new Date(props.video.snippet?.publishedAt!))}`)}</div>
                {props.isVertical && <div className="video_info_title">{props.video.snippet?.description}</div>}
            </div>
        </div>

    </div>
}