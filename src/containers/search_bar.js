import React, { Component } from 'react'
import { fetchWeather } from '../actions/index'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            term : ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    onChangeInput(ev){
        this.setState({
            term: ev.target.value
        })
    }
    submitForm(ev){
        ev.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({
            term:''
        })
    }
    render(){
        return (
            <form
                className="input-group"
                onSubmit={this.submitForm}
            >
                <input
                    placeholder="City name"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onChangeInput} />
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Submit</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch)
}

export default  connect(null, mapDispatchToProps)(SearchBar);