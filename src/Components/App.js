import React, { Component } from 'react'
import ADD from './add';
import Edit from './edit';
import Header from './Header';
import ProductList from './productlist';

export default class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pName: '',
    //         pCount: 0,
    //         products: [
    //             { productName: 'hola1', productCount: '1', productImage: './images/hat.jpg' },
    //             { productName: 'hola2', productCount: '2', productImage: './images/hat.jpg' },
    //             { productName: 'hola3', productCount: '3', productImage: './images/hat.jpg' },
    //         ],
    //     }
    //     this.handlePName = this.handlePName.bind(this)
    //     this.handlePCount = this.handlePCount.bind(this)
    //     this.add = this.add.bind(this)
    // }
    state = {
        products: [
            { productName: 'hola1', productCount: '1', productImage: './images/hat.jpg' },
            { productName: 'hola2', productCount: '2', productImage: './images/hat.jpg' },
            { productName: 'hola3', productCount: '3', productImage: './images/hat.jpg' },
        ],
        editProduct: { productName: 'hola1', productCount: '1' },
    }

    add = (prod) => {
        let array = [...this.state.products]
        array.push({ productName: prod.pName, productCount: prod.pCount, productImage: './images/hat.jpg' })
        this.setState({
            products: array
        })
        // console.log(this.state.products)
    }
    handleItemDelete = (product) => {
        // console.log(product)
        const products = this.state.products.filter((p) => p.productName !== product.productName)
        this.setState({
            products
        })
    }
    handleItemEdit = (product) => {
        console.log(product)
        const products = [...this.state.products]
        console.log(products)
        for (let i = 0; i < this.state.products.length; i++) {
            if (products[i].productName === product.pName) {
                products[i].productName = product.pName;
                products[i].productCount = product.pCount;
            }
            this.setState({
                products
            })
        }
    }
    handleItemEditPass = (product) => {
        this.setState({
            editProduct: product
        })
    }
    render() {
        return (
            <div className='w-100'>
                <Header />
                <br />
                <h3>ADD</h3>
                <ADD
                    onAdd={this.add}
                />
                <br />
                <h3>Edit</h3>
                <Edit onEdit={this.handleItemEdit} product={this.state.editProduct} />
                <br />
                <ProductList products={this.state.products} onItemDelete={this.handleItemDelete} onItemEdit={this.handleItemEditPass} />
            </div>
        )
    }
}