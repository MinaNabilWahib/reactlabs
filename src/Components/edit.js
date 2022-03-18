import React, { Component } from 'react'

export default class Edit extends Component {
    state = {
        pName: this.props.product.productName,
        pCount: this.props.product.productCount,

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
            <div>
                <div className='row w-75'>
                    <span>{this.props.product.productName}</span>
                    <span>{this.props.product.productCount}</span>
                </div>
                <div className='row w-75'>
                    <input type='text' value={this.state.pName} className='col' onChange={this.handlePName} />
                    <input type='text' value={this.state.pCount} className='col' onChange={this.handlePCount} />
                    <button className='btn btn-primary col' onClick={() => this.props.onEdit({ ...this.state })}> save</button>
                </div>
            </div>
        )
    }
}