import React from 'react';
import { VideoPreview } from './VideoPreview/VideoPreview.component';

export const VideoGrid = () => {

    let previews = Array.apply(null,new Array(5)).map(() =><VideoPreview /> );
    return <>{previews}</>
}