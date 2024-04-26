// ECGUploader.js
import React, { useState } from 'react';
import axios from 'axios';
import LeftBundleBranchBlock from './LeftBundleBranchBlock';
import VentricularFibrillation from './VentricularFibrillation';
import PrematureAtrialContraction from './PrematureAtrialContraction';
import PrematureVentricularContraction from './PrematureVentricularContraction';

const ECGUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageContent, setImageContent] = useState(null);
    const [predictedDisease, setPredictedDisease] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        const reader = new FileReader();
        reader.onload = () => {
            setImageContent(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleUpload = async () => {
        try {
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await axios.post('http://localhost:5000/ecgpredict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setPredictedDisease(response.data.ecg_prediction);
        } catch (error) {
            console.error('Prediction error:', error);
        }
    };

    let renderedComponent = null;
    if (predictedDisease) {
        switch (predictedDisease) {
            case 'Left Bundle Branch Block':
                renderedComponent = <LeftBundleBranchBlock />;
                break;
            case 'Ventricular Fibrillation':
                renderedComponent = <VentricularFibrillation />;
                break;
            case 'Premature Atrial Contraction':
                renderedComponent = <PrematureAtrialContraction />;
                break;
            case 'Premature Ventricular Contraction':
                renderedComponent = <PrematureVentricularContraction />;
                break;
            default:
                renderedComponent = <div>No specific component for this predicted disease</div>;
        }
    }

    return (
        <div className="ecg-uploader">
            <h2>ECG Image Uploader</h2>
            <form>
                <label htmlFor="ecg-image">Select ECG Image:</label>
                <input type="file" id="ecg-image" accept="image/*" onChange={handleFileChange} />
                {imageContent && (
                    <div style={{ border: '2px solid black', padding: '5px', display: 'inline-block' }}>
                        <h3>Selected Image:</h3>
                        <img src={imageContent} alt="Selected ECG" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}
                <button type="button" onClick={handleUpload}>Upload</button>
            </form>
            {renderedComponent && (
                <div>
                    <h2>Predicted Disease:</h2>
                    <p>{predictedDisease}</p>
                    {renderedComponent}
                </div>
            )}
        </div>
    );
};

export default ECGUploader;
