import React, { useState } from 'react';
import './heart.css'; // Import CSS file for styling

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
        oldpeak: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // You can perform further actions here, like sending the data to an API
    };

    return (
        <div className="heart-disease-form-container">
            <h2>Heart Disease Prediction Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="age">Age:</label>
                    <textarea id="age" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="sex">Sex:</label>
                    <textarea id="sex" name="sex" value={formData.sex} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="cp">Chest Pain Type (CP):</label>
                    <textarea id="cp" name="cp" value={formData.cp} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="trestbps">Resting Blood Pressure (trestbps):</label>
                    <textarea id="trestbps" name="trestbps" value={formData.trestbps} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="chol">Cholesterol (chol):</label>
                    <textarea id="chol" name="chol" value={formData.chol} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="fbs">Fasting Blood Sugar (fbs):</label>
                    <textarea id="fbs" name="fbs" value={formData.fbs} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="restecg">Resting Electrocardiographic Results (restecg):</label>
                    <textarea id="restecg" name="restecg" value={formData.restecg} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="thalach">Maximum Heart Rate Achieved (thalach):</label>
                    <textarea id="thalach" name="thalach" value={formData.thalach} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="exang">Exercise Induced Angina (exang):</label>
                    <textarea id="exang" name="exang" value={formData.exang} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="oldpeak">ST Depression Induced by Exercise Relative to Rest (oldpeak):</label>
                    <textarea id="oldpeak" name="oldpeak" value={formData.oldpeak} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default HeartDiseaseForm;
