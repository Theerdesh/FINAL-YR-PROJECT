import React, { useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './heart.css';

function HeartDiseaseForm() {
    const [formData, setFormData] = useState({
        age: '',
        sex: '',
        cp: '',
        trestbps: '',
        chol: '',
        fbs: '',
        restecg: '',
        thalach: '',
        exang: '',
        oldpeak: '',
        slope: '',
        ca: '',
        thal: ''
    });

    const [prediction, setPrediction] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/predict', formData);
            setPrediction(res.data.prediction);
            console.log(res.data.prediction);
        } catch (error) {
            console.error('Prediction error:', error);
        }
    };

    return (
        <div className="App">
            <h1>Heart Disease Prediction</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
                </div>
                <div>
                    <label htmlFor="sex">Sex (0: Female, 1: Male):</label>
                    <input type="number" name="sex" value={formData.sex} onChange={handleChange} placeholder="Sex" />
                </div>
                <div>
                    <label htmlFor="cp">Chest Pain Type:</label>
                    <input type="number" name="cp" value={formData.cp} onChange={handleChange} placeholder="Chest Pain Type" />
                </div>
                <div>
                    <label htmlFor="trestbps">Resting Blood Pressure:</label>
                    <input type="number" name="trestbps" value={formData.trestbps} onChange={handleChange} placeholder="Resting Blood Pressure" />
                </div>
                <div>
                    <label htmlFor="chol">Serum Cholesterol:</label>
                    <input type="number" name="chol" value={formData.chol} onChange={handleChange} placeholder="Serum Cholesterol" />
                </div>
                <div>
                    <label htmlFor="fbs">Fasting Blood Sugar :</label>
                    <input type="number" name="fbs" value={formData.fbs} onChange={handleChange} placeholder="Fasting Blood Sugar" />
                </div>
                <div>
                    <label htmlFor="restecg">Resting Electrocardiographic Results:</label>
                    <input type="number" name="restecg" value={formData.restecg} onChange={handleChange} placeholder="Resting Electrocardiographic Results" />
                </div>
                <div>
                    <label htmlFor="thalach">Maximum Heart Rate Achieved:</label>
                    <input type="number" name="thalach" value={formData.thalach} onChange={handleChange} placeholder="Maximum Heart Rate Achieved" />
                </div>
                <div>
                    <label htmlFor="exang">Exercise Induced Angina (0: No, 1: Yes):</label>
                    <input type="number" name="exang" value={formData.exang} onChange={handleChange} placeholder="Exercise Induced Angina" />
                </div>
                <div>
                    <label htmlFor="oldpeak">ST Depression Induced by Exercise Relative to Rest:</label>
                    <input type="number" name="oldpeak" value={formData.oldpeak} onChange={handleChange} placeholder="ST Depression" />
                </div>
                <div>
                    <label htmlFor="slope">Slope of the Peak Exercise ST Segment:</label>
                    <input type="number" name="slope" value={formData.slope} onChange={handleChange} placeholder="Slope" />
                </div>
                <div>
                    <label htmlFor="ca">Number of Major Vessels (0-3) Colored by Flourosopy:</label>
                    <input type="number" name="ca" value={formData.ca} onChange={handleChange} placeholder="Number of Major Vessels" />
                </div>
                <div>
                    <label htmlFor="thal">Thal:</label>
                    <input type="number" name="thal" value={formData.thal} onChange={handleChange} placeholder="Thal" />
                </div>
                <button type="submit">Predict</button>
            </form>
            {prediction !== null && (
                <div>
                    <h2>Prediction Result:</h2>
                    <p>{prediction ===1 ? 'Possibility of Heart Disease' : 'No Disease'}</p>
                    {prediction === 1 && <Link to="/ECGUploader"><button>Go to Disease Prediction</button></Link>}
                </div>
            )}
        </div>
    );
}

export default HeartDiseaseForm;
