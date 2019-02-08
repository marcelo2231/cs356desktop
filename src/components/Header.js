import React, { Component } from 'react';
import logo from '../images/logo.png';

class Header extends Component {
    getOuterContainerStyle = () => {
        return {
            backgroundColor: '#ffffff',
            height: 55,
            paddingLeft: 10,
            paddingTop: 10,
            paddingRight: 10
        }
    }
    getHeaderStyle = () => {
        return {
            content: '',
            display: 'table',
            backgroundColor: '#3A3E45',
            clear: 'both',
            width: '100%',
            height: 45
        }
    }

    getImageStyle = () => {
        return {
            paddingTop: 5,
            paddingLeft: 15,
            height: 40,
            width: 60,
            float: 'left'
        }
    }

    getLogoutButtonStyle = () => {
        return {
            backgroundColor: "Transparent",
            borderColor: "#48AAB3",
            color: "#48AAB3",
            padding: 5,
            borderRadius: 14,
            float: 'right',
            marginTop: 7,
            marginRight: 30
        }
    }

    render() {
        return (
            <div style={this.getOuterContainerStyle()}>
                <div style={this.getHeaderStyle()}>
                    <img src={logo} alt="Logo" style={this.getImageStyle()} />
                    <button style= {this.getLogoutButtonStyle()}type="button">LOGOUT</button>
                </div>
            </div>
        );
    }
}

export default Header;
