import React from 'react'
import { Component } from 'react'
import YTS from 'youtube-api-search'
import _ from 'lodash';

export default class App extends Component {
    render() {

        return (
            <div>
                Book list example
                {this.props.children}
            </div>
        );
    }
}
