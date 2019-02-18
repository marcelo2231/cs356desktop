import React, { Component } from 'react';

class Footer extends Component {
    getOuterContainerStyle = () => {
        return {
            backgroundColor: '#ffffff',
            height: 55,
            paddingLeft: 10,
            paddingTop: 10,
            paddingRight: 10,
            bottom: 0,
            position: 'absolute',
            width: '100%',
            marginBottom: 10
        }
    }
    getHeaderStyle = () => {
        return {
            backgroundColor: '#3A3E45',
            clear: 'both',
            width: '100%',
            height: 45
        }
    }
    getCopyrightStyle    = () => {
        return {
            display: 'inline-block',
            fontFamily: 'Arial, Helvetica, sans-serif',
            fontSize: 8,
            color: '#ffffff',
            position: 'relative',
            display: 'inline-block',
            marginTop: 17,
            fontStyle: 'italic'
    }
    }
  
    render() {
        return (
            <div style={this.getOuterContainerStyle()}>
                <div style={{ textAlign: 'center' }}>
                    <div style={this.getHeaderStyle()}>
                        <p style={this.getCopyrightStyle()}>Copyright Ⓒ 2019 by Marcelo & Patrick. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
