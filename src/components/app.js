import React from 'react'
import { Component } from 'react'
import YTS from 'youtube-api-search'
import _ from 'lodash';
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'

export default class App extends Component {
    render() {

        return (
            <div>
                Book list example
                <SearchBar />
                <WeatherList />
            </div>
        );
    }
}
