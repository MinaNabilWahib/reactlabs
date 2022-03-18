import React, { Component } from 'react'

export default class ADD extends Component {
    state = {
        pName: '',
        pCount: 0,

    }
    handlePName = (e) => {
        this.setState({
            pName: e.target.value
        })
    }
    handlePCount = (e) => {
        this.setState({
            pCount: e.target.value
        })
    }
    render() {
        return (
            <div className='row w-75'>
                <input type='text' value={this.state.pName} className='col' onChange={this.handlePName} />
                <input type='text' value={this.state.pCount} className='col' onChange={this.handlePCount} />
                <button className='btn btn-primary col' onClick={() => this.props.onAdd({ ...this.state })}> Add</button>
            </div>
        )
    }
}