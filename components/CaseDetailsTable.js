import React from 'react';

const CaseDetailsTable = ({ caseDetails, handleEdit, handleDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Case ID</th>
          <th>Case Type</th>
          <th>Case Description</th>
          <th>Case Status</th>
          <th>Assigned Attorney/Paralegal ID</th>
          <th>Client Name</th>
          <th>Client Contact Information</th>
          <th>Date Created</th>
          <th>Case Documents</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {caseDetails.map((individualCase) => (
          <tr key={individualCase.id}>
            <td>{individualCase.caseID}</td>
            <td>{individualCase.caseType}</td>
            <td>{individualCase.caseDescription}</td>
            <td>{individualCase.caseStatus}</td>
            <td>{individualCase.assignedAttorneyParalegalID}</td>
            <td>{individualCase.clientName}</td>
            <td>{individualCase.clientContactInformation}</td>
            <td>{individualCase.dateCreated}</td>
            <td>{individualCase.caseDocuments}</td>
            <td>
              <button onClick={() => handleEdit(individualCase)}>Edit</button>
              <button onClick={() => handleDelete(individualCase.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CaseDetailsTable;