import React, {Component} from 'react';
import { connect } from 'react-redux';
import {createStore} from 'redux'
import Chart from '../components/chart'
import Map from '../components/map'

class WeatherList extends Component {
    renderWeather(cityData){
        let name = cityData.city.name;
        let temp = cityData.list.map(weather => weather.main.temp)
        let pressure = cityData.list.map(weather => weather.main.pressure)
        let huminity = cityData.list.map(weather => weather.main.humidity)
        let {lat, lon} = cityData.city.coord;
        return (
            <tr key={name}>
                <td><Map lat={lat} lon={lon} /></td>
                <td><Chart data={temp}/></td>
                <td><Chart data={pressure}/></td>
                <td><Chart data={huminity}/></td>
            </tr>
        )

    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Location</th>
                        <th>Temp</th>
                        <th>Pressure</th>
                        <th>Huminity</th>
                    </tr>
                </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
        </table>
        )
    }
}


function mapStateToProps({weather}){
    return {weather};
}



export default connect(mapStateToProps)(WeatherList)