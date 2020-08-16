import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videosList, onVideoSelect }) => {
    
    const renderedList = videosList.map((video,i) => {
        return <div><VideoItem key={video.id.videoId} videos={video} onVideoSelect={onVideoSelect} /></div>
    });

    return(
        <div className="ui relaxed divided list">{renderedList}</div>
    );

}

export default VideoList;