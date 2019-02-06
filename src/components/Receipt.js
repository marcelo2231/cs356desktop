import React, { Component } from 'react';
import ReceiptItem from './ReceiptItem';
import PropTypes from 'prop-types';

class Receipt extends Component {
    render() {
        return this.props.receipts.map((receipt) => (
            <ReceiptItem key={receipt.id} receipt={receipt}/>
        ));
    }
}

// PropTypes
Receipt.propTypes = {
    receipts: PropTypes.array.isRequired
}

export default Receipt;
