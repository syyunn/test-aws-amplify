import React, {Component} from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import { S3Album } from 'aws-amplify-react';
import { Storage } from 'aws-amplify';

class FilterableProductTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.onChange = this.onChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onChange(booli) {
        this.setState({
            inStockOnly: booli
        });
    }

    uploadFile = (evt) => {
        const file = evt.target.files[0];
        const name = file.name;

        Storage.put(name, file).then(() => {
            this.setState({ file: name });
        })
    }

    onTextChange(text) {
        this.setState({filterText: text});
    }
    render() {
        return(
            <div className="App">
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly} onTextChange={this.onTextChange}
                           onChange={this.onChange} />
                <ProductTable products={this.props.products} inStockOnly={this.state.inStockOnly}
                              filterText={this.state.filterText} />
                <p> Pick a file</p>
                <input type="file" onChange={this.uploadFile} />
                <S3Album level="private" path='' />
            </div>
        );
    }
}

export default FilterableProductTable;
