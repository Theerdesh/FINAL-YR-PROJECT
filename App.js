import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeartDiseaseForm from './components/heart';
import ECGUploader from './components/ECGUploader';
import LeftBundleBranchBlock from './components/Left Bundle Branch Block';
import PrematureAtrialContraction from './components/Premature Atrial Contraction';
import PrematureVentricularContraction from './components/Premature Ventricular Contraction';
import RightBundleBranchBlock from './components/Right Bundle Branch Block';
import VentricularFibrillation from './components/Ventricular Fibrillation';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HeartDiseaseForm />} />
          <Route path="/ECGUploader" element={<ECGUploader />} />
          <Route path="/LeftBundleBranchBlock" element={<LeftBundleBranchBlock />} />
          <Route path="/PrematureAtrialContraction" element={<PrematureAtrialContraction />} />
          <Route path="/PrematureVentricularContraction" element={<PrematureVentricularContraction />} />
          <Route path="/RightBundleBranchBlock" element={<RightBundleBranchBlock />} />
          <Route path="/VentricularFibrillation" element={<VentricularFibrillation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
