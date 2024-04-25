from flask import Flask, request, jsonify
from tensorflow.keras import models
from tensorflow.keras import preprocessing
import numpy as np
import joblib
import pandas as pd
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained Random Forest model for heart disease prediction
heart_model = joblib.load('heart_prediction_model')

# Load the trained model for ECG image prediction
ecg_model = models.load_model('ECG.h5')

@app.route('/predict', methods=['POST'])
def predict_heart_disease():
    try:
        # Get data from request
        data = request.get_json()
        # Create DataFrame from the data
        new_data = pd.DataFrame(data, index=[0])
        # Make prediction for heart disease
        prediction = heart_model.predict(new_data)
        # Return the prediction
        print(int(prediction[0]))
        return jsonify({'prediction': int(prediction[0])}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

@app.route('/ecgpredict', methods=['POST'])
def predict_ecg_disease():
    try:
        # Get the image file from the request
        file = request.files['image']
        rand = str(random.randint(1,10000))
        filename = './uploads/' + rand + '.jpg'
        file.save(filename)
        # print(filename)
        # Load and preprocess the image
        img = preprocessing.image.load_img(filename, target_size=(64, 64))
        img_array = preprocessing.image.img_to_array(img)
        img_array = np.expand_dims(img_array, axis=0)
        # Predict the disease
        prediction = ecg_model.predict(img_array)
        # Get the predicted class index
        predicted_class_index = np.argmax(prediction)
        #index = np.argmax(index)
        # Define the class labels
        class_labels = ['Left Bundle Branch block',
                        'Premature Atrial Contraction',
                        'Premature Ventricular Contraction',
                        'Right Bundle Branch Block',
                        'Ventricular Fibrillation']
        # Get the predicted disease
        predicted_disease = class_labels[predicted_class_index]
        print(prediction)
        return jsonify({'ecg_prediction': predicted_disease}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
