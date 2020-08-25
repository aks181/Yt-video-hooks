import React, { useState, useEffect } from 'react';
import youtube from '../api/youtube';

const KEY = 'AIzaSyC9w3yeT6RWVn6gC-bfPgQH5IuyVo3g4SY';

const useVideos = (defaultSearchTerm) => {
    const [ videos, setVideos ] = useState([]);

    useEffect (() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (searchTerm) => {
        const response = await youtube.get("/search", {
            params: {
                q: searchTerm,
                part: "snippet",
                type: "video",
                maxResults: 7,
                key: KEY
            }
        });
        setVideos(response.data.items);
    };

    return [videos, search]; 
    // can be object also
}

export default useVideos;