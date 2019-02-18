import React, { Component } from 'react';
import Receipt from './components/Receipt';
import Header from './components/Header';
import Upload from './components/Upload';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
    state = {
        receipts: [
            {
                id: 1,
                title: 'Orem Dentist Family',
                task: 'Root Canal',
                price: 532,
                amount: 1,
                total: 532,
                display: "block"
            },
            {
                id: 2,
                title: 'Utah Valley Regional MC',
                task: 'Foot Amputation',
                price: 1325,
                amount: 1,
                total: 1325,
                display: "block"
            },
            {
                id: 3,
                title: 'The Birth Center',
                task: 'Ultrasound',
                price: 135,
                amount: 1,
                total: 135,
                display: "none"
            },
            {
                id: 4,
                title: 'Better Birth LLC',
                task: 'Fetus Sickness Test',
                price: 242,
                amount: 1,
                total: 242,
                display: "none"

            }
        ]
    }
    getRowStyle = () => {
        return {
            content: '', display: 'table', clear: 'both',
            position: 'relative',
            display: 'inline-block'
            
        }
    }
    render() {
    return (
        <div className="App">
            <Header />
            <div className="UploadOutter">
                <div className="UploadStyle">
                    <div className="DescriptionDiv">
                        <p className="CompanyName">HSA Tracker </p>
                        <p className="Description">helps you to keep track of all of your HSA receipts for taxing purposes. Scan all of your receipts below!</p>
                    </div>
                    <Upload />
                </div>
            </div>
            <div style={{textAlign: 'center'}}>
                <div style={this.getRowStyle()}>
                    <Receipt receipts={this.state.receipts} />
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default App;
