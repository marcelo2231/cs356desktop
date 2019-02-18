import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ReceiptItem extends Component {
    getDivStyle = () => {
        return {
            background: '#ffffff',
            borderBottom: '1px #ccc dotted',
            borderTop: '1px #ccc dotted',
            borderRight: '1px #ccc dotted',
            borderLeft: '1px #ccc dotted',
            width: 230,
            height: 275,
            display: this.props.receipt.display
        }
    }

    getTitleStyle = () => {
        return {
            background: '#F2F6F9',
            height: 40,
            width: 230,
            textAlign: 'center',
            display: 'table'
            
        }
    }

    getSubjectLeftStyle = () => {
        return {
            background: '#3A3E45',
            height: 40,
            width: '50%',
            textAlign: 'left',
            paddingLeft: 10,
            paddingTop: 7,
            float: 'left'
        }
    }
    getSubjectRightStyle = () => {
        return {
            background: '#3A3E45',
            height: 40,
            width: '50%',
            textAlign: 'right',
            paddingRight: 10,
            paddingTop: 7,
            float: 'left'
        }
    }
    getRowStyle = () => {
        return {
            content: '', display: 'table', clear: 'both', width: 230
        }
    }

    getTaskStyle = () => {
        return {
            background: '#E4E8EB',
            height: 25,
            width: '41%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left',
            marginRight: 1
        }
    }

    getPriceStyle = () => {
        return {
            background: '#E4E8EB',
            height: 25,
            width: '20%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left',
            marginRight: 1
        }
    }

    getAmountStyle = () => {
        return {
            background: '#E4E8EB',
            height: 25,
            width: '17%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left',
            marginRight: 1
        }
    }

    getTotalStyle = () => {
        return {
            background: '#E4E8EB',
            height: 25,
            width: '20%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left'
        }
    }

    getTaskOneStyle = () => {
        return {
            height: 25,
            width: '41%',
            textAlign: 'left',
            paddingTop: 7,
            float: 'left',
            paddingLeft: 3,
            marginRight: 1
        }
    }

    getPriceOneStyle = () => {
        return {
            height: 25,
            width: '20%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left',
            paddingLeft: 3,
            marginRight: 1
        }
    }

    getAmountOneStyle = () => {
        return {
            height: 25,
            width: '17%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left',
            paddingLeft: 3,
            marginRight: 1
        }
    }

    getTotalOneStyle = () => {
        return {
            height: 25,
            width: '20%',
            textAlign: 'center',
            paddingTop: 7,
            float: 'left'
        }
    }

    render() {
        return (
            <div style={this.getDivStyle()}>
                <div style={this.getTitleStyle()}>
                    <p style={{ color: '#3A3E45', display: 'table-cell', verticalAlign: 'middle', fontFamily: '"Arial Black", Gadget, sans-serif', fontSize: 12}}>{this.props.receipt.title}</p>
                </div>
                <div style={this.getRowStyle()}>
                    <div style={this.getSubjectLeftStyle()}>
                        <p style={{ color: '#ffffff', fontSize: 9, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Subject</p>
                        <p style={{ color: '#ffffff', fontSize: 9, fontFamily: 'Arial, Helvetica, sans-serif'}}>HSA Receipt</p>
                    </div>
                    <div style={this.getSubjectRightStyle()}>
                    <p style={{ color: '#ffffff', fontSize: 9, fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Date</p>
                    <p style={{ color: '#ffffff', fontSize: 9, fontFamily: 'Arial, Helvetica, sans-serif' }}>25 February, 2019</p>
                    </div>
                </div>
                <div style={this.getRowStyle()}>
                    <div style={this.getTaskStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Task</p>
                    </div>
                    <div style={this.getPriceStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Price</p>
                    </div>
                    <div style={this.getAmountStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Amount</p>
                    </div>
                    <div style={this.getTotalStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Total</p>
                    </div>
                </div>
                <div style={this.getRowStyle()}>
                    <div style={this.getTaskOneStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>{this.props.receipt.task}</p>
                    </div>
                    <div style={this.getPriceOneStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>${this.props.receipt.price}</p>
                    </div>
                    <div style={this.getAmountOneStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>{this.props.receipt.amount}</p>
                    </div>
                    <div style={this.getTotalOneStyle()}>
                        <p style={{ color: '#3A3E45', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>${this.props.receipt.total}</p>
                    </div>
                </div>
                <div style={{ height: 105 }} />
                <div style={this.getRowStyle()}>
                    <div style={{ height: 40, width: '65%', backgroundColor: '#3A3E45', float: 'left'}}>
                    </div>
                    <div style={{ height: 40, width: '15%', backgroundColor: '#3A3E45', float: 'left', paddingTop:3}}>
                        <p style={{ color: '#ffffff', fontSize: 8, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>Total:</p>
                    </div>
                    <div style={{ height: 40, width: '20%', backgroundColor: '#3A3E45', float: 'left', paddingTop: 10}}>
                        <p style={{ color: '#ffffff', fontSize: 12, verticalAlign: 'middle', fontFamily: 'Arial, Helvetica, sans-serif', fontWeight: 'bold' }}>${this.props.receipt.total}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// PropTypes
ReceiptItem.propTypes = {
    receipt: PropTypes.array.isRequired
}

export default ReceiptItem;
