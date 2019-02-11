import React, { Component } from 'react';
import Receipt from './components/Receipt';
import Header from './components/Header';
import Upload from './components/Upload';

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
                total: 532
            },
            {
                id: 2,
                title: 'Utah Valley Regional MC',
                task: 'Foot Amputation',
                price: 1325,
                amount: 1,
                total: 1325
            },
            {
                id: 3,
                title: 'The Birth Center',
                task: 'Ultrasound',
                price: 135,
                amount: 1,
                total: 135
            },
            {
                id: 4,
                title: 'Better Birth LLC',
                task: 'Fetus Sickness Test',
                price: 242,
                amount: 1,
                total: 242

            }
        ]
    }
    getRowStyle = () => {
        return {
            content: '', display: 'table', clear: 'both'
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
                        <p className="Description">helps you to keep track of all of your HSA receipts for taxing purposes. Scan your all of your receipts below!</p>
                    </div>
                    <Upload />
                </div>
            </div>
            <div style={this.getRowStyle()}>
                <Receipt receipts={this.state.receipts} />
            </div>
      </div>
    );
  }
}

export default App;
