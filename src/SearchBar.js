import React, {Component} from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleChangeV2 = this.handleChangeV2.bind(this);
    }

    handleClick() {
        this.setState({
            value: '',
        });
    }

    handleSubmit() {
        this.setState({});
    }

    handleTextChange(e) {
        this.props.onTextChange(e.target.value);
    }

    handleChangeV2(e) {
        this.props.onChange(e.target.checked);
    }


    render() {
        return (
            <form>
                <input type="text" placeholder="search..." onClick={this.handleClick}
                       style={{width: '150px', height: '20px'}}
                onChange={this.handleTextChange} name="value"/>
                <input type="submit" value="Search" onSubmit={this.handleSubmit}/>
                <p><input type="checkbox" checked={this.props.inStockOnly}
                          onChange={this.handleChangeV2} />Only show products in stock</p>
            </form>
        );
    }
}

export default SearchBar;