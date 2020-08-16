import React from 'react';
import youtube from './api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const KEY = 'AIzaSyC9w3yeT6RWVn6gC-bfPgQH5IuyVo3g4SY';

class App extends React.Component {

    state= { 
        videos: [],
        selectedVideo: null
    }
    
    componentDidMount() {
        this.onTermSubmit('cute kids');
    }

    onTermSubmit = async (searchTerm) => {
        const response = await youtube.get("/search", {
            params: {
                q: searchTerm,
                part: "snippet",
                type: "video",
                maxResults: 7,
                key: KEY
            }
        });
        this.setState({ 
            videos : response.data.items,
            selectedVideo: response.data.items[0]
        })
        // console.log(this.state.videos);
    }

    onVideoSelect = (userVideo) => {
        this.setState({ selectedVideo : userVideo})
    }



    render() {
        return (
            <div className="ui container" >
                <SearchBar toReceive={this.onTermSubmit} />
                
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videosList={this.state.videos}/>
                        </div>
                    </div>    
                </div>
            </div>
        );
    }
}

export default App;