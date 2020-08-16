import React, { useState, useEffect } from 'react';
import { VideoGrid } from './VideoGrid/VideoGrid.component';
import './Content.css';
import { InfiniteScroll } from '../../InfiniteScroll/InfiniteScroll.component';
import { connect } from "react-redux";
import { IVideoState } from '../../../store/interfaces/IVideoState';
import { LoadPopularVideos } from '../../../store/action-creators/action-creator';
import { Video } from '../../../store/types';

interface IContent {
    isYoutubeClientLoaded: boolean;
    videos: Video[];
    LoadPopularVideos(): void
}

const Content = (props: IContent) => {

    const [noOfGrids, setGrids] = useState(2);

    console.log(JSON.stringify(props.videos));
    
    const grids = Array.apply(null, new Array(noOfGrids)).map((val, index) => <VideoGrid key={index} />);

    const onCallBack = () => {
        setGrids((currentState) => currentState + 1);
    }

    useEffect(() => {
        if (props.isYoutubeClientLoaded) {
            props.LoadPopularVideos();
        }
    }, [props.isYoutubeClientLoaded])

    return <InfiniteScroll callBack={onCallBack}>
        <div className="video_content">
            <div className="video_content_container">
                {grids}
            </div>
        </div>
    </InfiniteScroll>
}

const mapStateToProps = (state: IVideoState) => {
    return {
        isYoutubeClientLoaded: state.isYoutubeClientLoaded,
        videos: state.videos
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        LoadPopularVideos: () => dispatch(LoadPopularVideos())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)