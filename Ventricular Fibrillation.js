// VentricularFibrillation.js
import React from 'react';

const VentricularFibrillation = () => {
    return (
        <div className="ventricular-fibrillation">
            <div className="precautions">
                <h2>Precautions for Ventricular Fibrillation</h2>
                <ul>
                    <li>Seek immediate medical attention if you experience symptoms of ventricular fibrillation, such as sudden loss of consciousness, chest pain, or difficulty breathing.</li>
                    <li>Follow your doctor's recommendations for managing underlying heart conditions, such as coronary artery disease or heart failure.</li>
                    <li>Avoid activities that may trigger arrhythmias, such as excessive alcohol consumption or use of stimulant drugs.</li>
                </ul>
            </div>
            <div className="curing-procedure">
                <h2>Curing Procedure for Ventricular Fibrillation</h2>
                <ol>
                    <li>Emergency treatment for ventricular fibrillation involves immediate cardiopulmonary resuscitation (CPR) and use of a defibrillator to restore normal heart rhythm.</li>
                    <li>Long-term management may involve medications like antiarrhythmic drugs or implantable cardioverter-defibrillator (ICD) to prevent future episodes of ventricular fibrillation.</li>
                    <li>In some cases, catheter ablation or surgical procedures may be recommended to correct underlying heart abnormalities.</li>
                </ol>
            </div>
        </div>
    );
};

export default VentricularFibrillation;
