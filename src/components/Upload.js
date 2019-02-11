import React, { Component } from 'react';
import '../css/Upload.css';

class Upload extends Component {
    render() {
        return (
            <div className="WrapperStyle">
                <button className="ButtonStyle">Upload a file</button>
                <input type="file" name="myfile" />
            </div>
        );
    }
}

export default Upload;
