import React, { useState, useEffect } from 'react';
import youtube from './api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from './hooks/useVideos';

const App = () => {
    const [ selectedVideo, setSelectedVideo ] = useState(null);
    const [ videos, search ] = useVideos('cute kids');

    useEffect(() => {
        setSelectedVideo(videos[0]);       
    }, [videos]);    
    
    return (
        <div className="ui container" >
            <SearchBar toReceive={search} />
            
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={setSelectedVideo} 
                            videosList={videos}
                        />
                    </div>
                </div>    
            </div>
        </div>
    );

}


export default App;