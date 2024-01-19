import React, { useState } from 'react';

const CaseDetailsForm = ({ caseDetails, setIsEditMode, handleCancelEdit }) => {
  const [formData, setFormData] = useState(caseDetails); // Initialize form data with caseDetails

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission and update case details
    // Example: Call an API to update the case details
    // For demonstration purposes, we'll log the form data to the console
    console.log('Form data submitted:', formData);
    setIsEditMode(false); // Exit edit mode after successful submission
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <h3>Edit Case Details</h3>
      <form onSubmit={handleFormSubmit}>
        {/* Form fields for editing case details */}
        <div>
          <label htmlFor="caseID">Case ID:</label>
          <input type="text" id="caseID" name="caseID" value={formData.caseID} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="caseType">Case Type:</label>
          <select id="caseType" name="caseType" value={formData.caseType} onChange={handleInputChange}>
            <option value="">Select a case type</option>
            <option value="corporate law">Corporate Law</option>
            <option value="family law">Family Law</option>
            <option value="real estate">Real Estate</option>
            <option value="litigation">Litigation</option>
          </select>
        </div>
        <div>
          <label htmlFor="caseDescription">Case Description:</label>
          <textarea id="caseDescription" name="caseDescription" value={formData.caseDescription} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="caseStatus">Case Status:</label>
          <select id="caseStatus" name="caseStatus" value={formData.caseStatus} onChange={handleInputChange}>
            <option value="">Select a case status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="in progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div>
          <label htmlFor="assignedAttorneyParalegalID">Assigned Attorney or Paralegal ID:</label>
          <input type="text" id="assignedAttorneyParalegalID" name="assignedAttorneyParalegalID" value={formData.assignedAttorneyParalegalID} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="clientName">Client Name:</label>
          <input type="text" id="clientName" name="clientName" value={formData.clientName} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="clientContactInformation">Client Contact Information:</label>
          <input type="tel" id="clientContactInformation" name="clientContactInformation" value={formData.clientContactInformation} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="dateCreated">Date Created:</label>
          <input type="date" id="dateCreated" name="dateCreated" value={formData.dateCreated} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="caseDocuments">Case Documents:</label>
          <input type="file" id="caseDocuments" name="caseDocuments" onChange={handleInputChange} />
        </div>
        <button type="submit">Save Changes</button>
        <button type="button" onClick={handleCancelEdit}>Cancel</button>
      </form>
    </div>
  );
};

export default CaseDetailsForm;