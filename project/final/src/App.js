import React from 'react';

import LeftBundleBranchBlock from './components/LeftBundleBranchBlock';
import PrematureAtrialContraction from './components/PrematureAtrialContraction';
import PrematureVentricularContraction from './components/PrematureVentricularContraction';
import RightBundleBranchBlock from './components/RightBundleBranchBlock';
import VentricularFibrillation from './components/VentricularFibrillation';

import ECGUploader from './ECGUploader';

import HeartDiseaseForm from './components/heart'; // Adjust the path as per your folder structure



function App() {
  return (
    <div className="App">
      <HeartDiseaseForm />
      {/* Other components */}
    </div>
  );
}

export default App;