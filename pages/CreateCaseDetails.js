import React, { useState } from 'react';

const CreateCaseDetails = () => {
  // State for managing case details
  const [caseDetails, setCaseDetails] = useState({
    caseID: '',
    caseType: '',
    caseDescription: '',
    caseStatus: '',
    assignedAttorneyParalegalID: '',
    clientName: '',
    clientContactInformation: '',
    dateCreated: new Date().toISOString().slice(0, 10), // Today's date
    caseDocuments: [],
    // Add more fields as needed
  });

  // Event handler for handling form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCaseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Event handler for submitting case details
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/case-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(caseDetails),
      });
      if (response.ok) {
        // Case details created successfully
        // Handle success feedback to the user
        console.log('Case details created successfully');
        // Log the response received from the server
        const responseData = await response.json();
        console.log('Response from server:', responseData);
        // Example: Show a success message to the user
      } else {
        // Handle error response from the backend
        if (response.status === 400) {
          // Handle 400 Bad Request error
          const errorData = await response.json();
          console.error('Bad Request Error:', errorData.message);
          // Example: Show an error message to the user
        } else if (response.status === 500) {
          // Handle 500 Internal Server Error
          console.error('Internal Server Error');
          // Example: Show an error message to the user
        } else {
          // Handle other error responses
          console.error('Error:', response.statusText);
          // Example: Show a generic error message to the user
        }
      }
    } catch (error) {
      // Handle network or server errors
      console.error('Network or server error:', error.message);
      // Example: Show a generic error message to the user
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Case Details</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caseID">Case ID:</label>
          <input
            type="text"
            id="caseID"
            name="caseID"
            value={caseDetails.caseID}
            onChange={handleInputChange}
            pattern="[0-9]{6}"
            title="Please enter a 6-digit number"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caseType">Case Type:</label>
          <select
            id="caseType"
            name="caseType"
            value={caseDetails.caseType}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Select a case type</option>
            <option value="corporate law">Corporate Law</option>
            <option value="family law">Family Law</option>
            <option value="real estate">Real Estate</option>
            <option value="litigation">Litigation</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caseDescription">Case Description:</label>
          <textarea
            id="caseDescription"
            name="caseDescription"
            value={caseDetails.caseDescription}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caseStatus">Case Status:</label>
          <select
            id="caseStatus"
            name="caseStatus"
            value={caseDetails.caseStatus}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          >
            <option value="">Select a case status</option>
            <option value="open">Open</option>
            <option value="closed">Closed</option>
            <option value="in progress">In Progress</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="assignedAttorneyParalegalID">Assigned Attorney or Paralegal ID:</label>
          <input
            type="text"
            id="assignedAttorneyParalegalID"
            name="assignedAttorneyParalegalID"
            value={caseDetails.assignedAttorneyParalegalID}
            onChange={handleInputChange}
            pattern="[0-9]{6}"
            title="Please enter a 6-digit number"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={caseDetails.clientName}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="clientContactInformation">Client Contact Information:</label>
          <input
            type="tel"
            id="clientContactInformation"
            name="clientContactInformation"
            value={caseDetails.clientContactInformation}
            onChange={handleInputChange}
            pattern="[0-9]{10}"
            title="Please enter a 10-digit phone number"
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="dateCreated">Date Created:</label>
          <input
            type="date"
            id="dateCreated"
            name="dateCreated"
            value={caseDetails.dateCreated}
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="caseDocuments">Case Documents:</label>
          <input
            type="file"
            id="caseDocuments"
            name="caseDocuments"
            onChange={handleInputChange}
            style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
        </div>
        {/* Add more form inputs for other case details */}
        <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none' }}>Save</button>
      </form>
    </div>
  );
};

export default CreateCaseDetails;