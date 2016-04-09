import { Sparklines, SparklinesLine } from 'react-sparklines';
import React, {Component} from 'react';

export default class Chart extends Component {
    render(){
        return (
            <Sparklines data={this.props.data}>
                <SparklinesLine color="red" />
            </Sparklines>
        )
    }
}