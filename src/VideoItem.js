import './VideoItem.css';
import React from 'react';

const VideoItem = ({ onVideoSelect,videos }) => {
    // console.log(props.video);
    return(
        <div>
            <div onClick={()=> onVideoSelect(videos)} className="video-item item">
                <img className="ui image" src= {videos.snippet.thumbnails.medium.url} alt={videos.snippet.title} />
                <div className="content">
                    <div className="header link">{videos.snippet.title}</div>
                    <div className="description">{videos.snippet.channelTitle}</div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default VideoItem;
