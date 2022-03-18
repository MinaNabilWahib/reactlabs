import React, { Component } from 'react'

export default class Product extends Component {

    state = {

    };
    getClasses() {
        return this.state.productCount === 0
            ? "badge badge-warning m-2"
            : "badge badge-primary m-2";
    }
    render() {
        return (

            <div className="card w-50 p-3 mb-2 bg-info text-white">
                <div className="card-body">
                    <span className='p-3'>{this.props.product.productName}</span>
                    <span className='p-3'>{this.props.product.productCount}</span>
                    <img src={this.props.product.productImage} className=' m-2' alt='holaimage' style={{ width: 40, borderRadius: 10 }}></img>
                    <span onClick={() => this.props.onDelete(this.props.product)}>
                        <i className='fas fa-trash m-2'></i>
                    </span>
                    <span onClick={() => this.props.onEdit(this.props.product)}>
                        <i className="fas fa-edit m-2"></i>
                    </span>
                </div>
            </div>

        )
    }
}