import React from 'react';
import labTestData from './lab_test.json'; 

const LabTestsTable = () => {
  return (
    <table style={{
      width: '85%',
      borderCollapse: 'separate',
      borderSpacing: '0px',
      marginBottom: '20px',
      margin: 'auto',
      color: '#333',
      fontSize: '1em',
      borderWidth: '1px', 
      borderColor: '#000', 
      borderStyle: 'outset'

    }}>
      <thead>
        <tr>
          <th style={{ textAlign: 'center', border: '1px outset black' }}>SI No.</th>
          <th style={{ textAlign: 'center', border: '1px outset black' }}>Instrument</th>
          <th style={{ textAlign: 'center', border: '1px outset black' }}>Description</th>
          <th style={{ textAlign: 'center', border: '1px outset black' }}>Cost Information</th>
        </tr>
      </thead>
      <tbody>
        {labTestData.map((item, index) => (
          <tr key={index}>
            <td style={{ padding: '10px', border: '1px outset black' }}>{item.si_no}</td>
            <td style={{ padding: '10px', border: '1px outset black' }}>{item.instrument}</td>
            <td style={{ padding: '10px', border: '1px outset black' }}>{item.description}</td>
            <td style={{ padding: '10px', border: '1px outset black' }}>{item.cost_information}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LabTestsTable;
