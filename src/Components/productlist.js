import React, { Component } from 'react'
import Product from './product'

export default class ProductList extends Component {
    state = {

    }
    handleOnDelete = (product) => {
        // console.log(product)
        this.props.onItemDelete(product)
    }
    handleOnEdit = (product) => {
        this.props.onItemEdit(product)
    }
    render() {
        return (
            <ul className='w-100'>
                {this.props.products.map((product) => (
                    <li style={{ listStyleType: 'none' }} className='w-100' key={product.productName}><Product product={product} onDelete={this.handleOnDelete} onEdit={this.handleOnEdit} /></li>
                ))}
            </ul>
        )
    }
}