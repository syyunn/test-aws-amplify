import React from 'react';
import logo from './logo.svg';
import './App.css';

import awsconfig from './aws-exports';
import Amplify, { Storage } from 'aws-amplify';
import { withAuthenticator, S3Album } from 'aws-amplify-react';

import FilterableProductTable from './FilterableProductTable';

Amplify.configure(awsconfig);
Storage.configure({ level: 'private' });


const products =
    [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
        ];

function App() {
  return (
      <FilterableProductTable products={products} />
  );
}

export default withAuthenticator(App, true);
