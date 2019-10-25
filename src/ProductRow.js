import React, {Component} from 'react';

class ProductRow extends Component {
    render() {

        const stocked = this.props.product.stocked;
        const price = this.props.product.price;
        const name = stocked? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{price}</td>
            </tr>
        );
    }
}

export default ProductRow;