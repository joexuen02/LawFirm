import React, { useState, useEffect } from 'react';
import CaseDetailsTable from '../components/CaseDetailsTable';
import CaseDetailsForm from '../components/CaseDetailsForm';

const ManageCaseDetails = () => {
  const [caseDetails, setCaseDetails] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // Fetch case details from the backend API
  useEffect(() => {
    const fetchCaseDetails = async () => {
      try {
        const response = await fetch('/api/case-details');
        if (response.ok) {
          const data = await response.json();
          setCaseDetails(data);
        } else {
          console.error('Failed to fetch case details:', response.status);
        }
      } catch (error) {
        console.error('Error fetching case details:', error);
      }
    };
    fetchCaseDetails();
  }, []);

  const handleEdit = (selectedCase) => {
    setSelectedCase(selectedCase);
    setIsEditMode(true);
  };

  const handleCancelEdit = () => {
    setSelectedCase(null);
    setIsEditMode(false);
  };

  const handleDelete = async (caseId) => {
    try {
      await fetch(`/api/case-details/${caseId}`, {
        method: 'DELETE',
      });
      setCaseDetails(caseDetails.filter((caseDetails) => caseDetails.id !== caseId));
    } catch (error) {
      console.error('Error deleting case details:', error);
    }
  };

  const containerStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    margin: '20px',
    width: '80%',
    margin: 'auto',
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: 'center' }}>Manage Case Details</h2>
      {isEditMode ? (
        <CaseDetailsForm
          caseDetails={selectedCase}
          setIsEditMode={setIsEditMode}
          handleCancelEdit={handleCancelEdit}
        />
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <CaseDetailsTable
            caseDetails={caseDetails}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </div>
      )}
    </div>
  );
};

export default ManageCaseDetails;