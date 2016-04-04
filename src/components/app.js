import React from 'react'
import { Component } from 'react'
import YTS from 'youtube-api-search'
import _ from 'lodash';

import SearchBar from './search_bar'
import VideoList from './video_list'
import VideoDetail from './video_detail'

const API_KEY = 'AIzaSyAjcAgq1wH3V7IHYGYdcYYIZp1bZi1HjCY';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos : [] ,
            selectedVideo: null
        }
    }
    videoSearchTerm(term) {
        YTS({key: API_KEY, term: term}, (videos) => {
            var selectedVideo = videos[0];
            this.setState({videos, selectedVideo})}
        )
    }
    render() {
        const videoSearch = _.debounce((term) => this.videoSearchTerm(term), 300);
        return (
            <div>
                React simple starter
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onSelectVideo={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}
