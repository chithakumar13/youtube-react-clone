import React, { useState } from 'react';
import { VideoGrid } from './VideoGrid/VideoGrid.component';
import './Content.css';
import { InfiniteScroll } from '../../InfiniteScroll/InfiniteScroll.component';

export const Content = () => {

    const [noOfGrids, setGrids] = useState(2);

    const grids = Array.apply(null, new Array(noOfGrids)).map((val, index) => <VideoGrid key={index} />);

    const onCallBack = () => {
        setGrids((currentState) => currentState + 1);
    }

    return <InfiniteScroll callBack={onCallBack}>
        <div className="video_content">
            <div className="video_content_container">
                {grids}
            </div>
        </div>
    </InfiniteScroll>
}