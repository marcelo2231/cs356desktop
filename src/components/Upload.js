import React, { Component } from 'react';
import '../css/Upload.css';

class Upload extends Component {
    render() {
        return (
            <div style={{ textAlign: 'center' }}>
                <div className="WrapperStyle">
                    <button className="ButtonStyle">Upload a receipt</button>
                    <input type="file" name="myfile" />
                 </div>
            </div>
        );
    }
}

export default Upload;
