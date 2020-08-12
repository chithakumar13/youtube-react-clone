import React from 'react';
import { VideoGrid } from './VideoGrid/VideoGrid.component';
import './Content.css';


export const Content = () => {
    return <div className="video_content">
        <div className="video_content_container">
            <VideoGrid /><VideoGrid />
        </div>
    </div>
}