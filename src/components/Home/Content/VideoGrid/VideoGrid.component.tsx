import React from 'react';
import { VideoPreview } from './VideoPreview/VideoPreview.component';
import {Divider} from 'semantic-ui-react'

import './VideoGrid.css'
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader.component';

export const VideoGrid = () => {

    let previews = Array.apply(null,new Array(15)).map(() =><VideoPreview /> );
    return <>
    <VideoGridHeader Title = "Test Title"></VideoGridHeader>
    <div className="video_grid">{previews}
    </div>
    <Divider />
    </>
}