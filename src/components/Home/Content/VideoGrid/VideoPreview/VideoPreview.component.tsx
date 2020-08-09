import React from 'react';
import {Image} from 'semantic-ui-react';
import PreviewImage from '../../../../../assets/images/preview.jpg'
import './VideoPreview.css'

export const VideoPreview = () => {
    return  <div className="video_preview"> 
        <div className="video_image">
            <Image src={PreviewImage} />
            <div className ="video_timestamp">
                <span>11:38</span>
            </div>
        </div>
        <div className="video_info">
            <div>Test Video</div>
            <div className="video_basic_info">
                <div className="video_channel">Ck Algos</div>
                <div className="video_view_time">14k Views . 33 Minutes Ago</div>
            </div>
        </div>
        
    </div>
}