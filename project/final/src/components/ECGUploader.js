// ECGUploader.js
import React, { useState } from 'react';

const ECGUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = () => {
        // Handle file upload logic here
        if (selectedFile) {
            console.log('Selected file:', selectedFile);
            // Add your file upload logic here (e.g., upload to server, process the file, etc.)
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div className="ecg-uploader">
            <h2>Upload ECG Image</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ECGUploader;
