// ParentComponent.js
import React, { useState } from 'react';
import DataUpload from './DataUpload';
import DatasetDisplay from './DatasetDisplay';

function ParentComponent() {
    const [uploadedFileName, setUploadedFileName] = useState('');

    return (
        <div>
            <DataUpload onUploadSuccess={setUploadedFileName} />
            {uploadedFileName && <DatasetDisplay fileName={uploadedFileName} />}
        </div>
    );
}

export default ParentComponent;
