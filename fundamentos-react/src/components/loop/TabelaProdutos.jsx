import React from 'react';
import './TabelaProdutos.css';
import Produtos from '../../data/produtos';

const gunStore = props => {
    const ProductsTr = Produtos.map((item, i)=> {
        const {id, productName, price} = item

        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'} key={id}>
                <td>{id}</td>
                <td>{productName}</td>
                <td>$ {price}</td>
            </tr>
        )
    })

    return (
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Product</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                {ProductsTr}
            </tbody>
        </table>
    )
}


export default gunStore;