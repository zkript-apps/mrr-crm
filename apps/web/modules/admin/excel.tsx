"use client"
import React from 'react';
import * as XLSX from 'xlsx';

function Excel() {
  const [patterns, setPatterns] = React.useState(null);
  const [leadValues, setLeadValues] = React.useState(null);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target?.result, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName as string];
      const sheetData = XLSX.utils.sheet_to_json(sheet as any);
      const getPatterns = sheetData.length > 0 ? Object.keys(sheetData[0] as any) : []
      setPatterns(getPatterns as any);  
      setLeadValues(sheetData as any);
    };

    reader.readAsBinaryString(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {leadValues && patterns && (
        <div>
          <h2>Imported Data:</h2>
          <pre>{JSON.stringify(leadValues, null, 2)}</pre>
          <pre>{JSON.stringify(patterns, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Excel;