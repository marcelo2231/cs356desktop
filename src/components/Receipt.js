import React, { Component } from 'react';
import ReceiptItem from './ReceiptItem';
import PropTypes from 'prop-types';

class Receipt extends Component {
    getReceiptStyle = () => {
        return {
            textAlign: 'left',
            float: 'left',
            marginLeft: 10,
            marginTop: 10
        }
    }

    render() {
        return this.props.receipts.map((receipt) => (
            <div style={this.getReceiptStyle()}>
                <ReceiptItem key={receipt.id} receipt={receipt} />
            </div>
        ));
    }
}

// PropTypes
Receipt.propTypes = {
    receipts: PropTypes.array.isRequired
}

export default Receipt;
