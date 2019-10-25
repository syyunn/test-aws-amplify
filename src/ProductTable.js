import React, {Component} from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends Component {

    render() {
        const filterText = this.props.filterText;
        const rows = [];
        const inStockOnly = this.props.inStockOnly;
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            lastCategory = product.category;
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly) {
                if (product.stocked) {
                    rows.push(<ProductRow product={product} key={product.name}/>);
                }
            } else {
                rows.push(<ProductRow product={product} key={product.name}/>);
            }
            });

        return (
        <table>
            <thead>
                <th>Name</th>
                <th>Price</th>
            </thead>
            <tbody>{rows}</tbody>
        </table>
        );
    }

}
export default ProductTable;