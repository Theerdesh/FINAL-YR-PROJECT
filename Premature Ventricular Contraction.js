// PrematureVentricularContraction.js
import React from 'react';

const PrematureVentricularContraction = () => {
    return (
        <div className="premature-ventricular-contraction">
            <div className="precautions">
                <h2>Precautions for Premature Ventricular Contraction</h2>
                <ul>
                    <li>Avoid excessive caffeine, alcohol, and tobacco use.</li>
                    <li>Manage stress and anxiety through relaxation techniques.</li>
                    <li>Maintain a healthy lifestyle with regular exercise and a balanced diet.</li>
                </ul>
            </div>
            <div className="curing-procedure">
                <h2>Curing Procedure for Premature Ventricular Contraction</h2>
                <ol>
                    <li>Treatment may not be necessary if PVCs are infrequent and not associated with underlying heart disease.</li>
                    <li>If PVCs are frequent or symptomatic, medications like beta-blockers or antiarrhythmic drugs may be prescribed.</li>
                    <li>In severe cases, catheter ablation or implantable cardioverter-defibrillator (ICD) may be recommended.</li>
                </ol>
            </div>
        </div>
    );
};

export default PrematureVentricularContraction;
