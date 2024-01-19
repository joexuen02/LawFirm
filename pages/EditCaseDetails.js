import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const EditCaseDetails = ({ caseDetails, setIsEditMode }) => {
  const validationSchema = Yup.object().shape({
    caseID: Yup.string().matches(/^\d{6}$/, 'Case ID must be a 6-digit number').required('Case ID is required'),
    caseType: Yup.string().required('Case type is required'),
    caseDescription: Yup.string().required('Case description is required'),
    caseStatus: Yup.string().required('Case status is required'),
    assignedAttorneyParalegalID: Yup.string().matches(/^\d{6}$/, 'Attorney/Paralegal ID must be a 6-digit number').required('Attorney/Paralegal ID is required'),
    clientName: Yup.string().required('Client name is required'),
    clientContactInformation: Yup.string().matches(/^\d{10}$/, 'Client contact information must be a 10-digit number').required('Client contact information is required'),
    dateCreated: Yup.date().required('Date created is required'),
    // Add validation for other fields as needed
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    console.log('handleSubmit function called');
    // Update the existing case details
    try {
      const response = await fetch('/api/case-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values), // Include the case details in the request body
      });
      if (response.ok) {
        // Handle success feedback to the user
        setIsEditMode(false); // Switch back to view mode after successful submission
      } else {
        // Handle error feedback to the user
      }
    } catch (error) {
      // Handle network or fetch API error
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{ backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', maxWidth: '400px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>{caseDetails ? 'Edit Case Details' : 'Add New Case Details'}</h2>
      <Formik
        initialValues={caseDetails || { caseID: '', caseType: '', caseDescription: '', caseStatus: '', assignedAttorneyParalegalID: '', clientName: '', clientContactInformation: '', dateCreated: new Date().toISOString().slice(0, 10), caseDocuments: [] }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="caseID">Case ID:</label>
            <Field type="text" id="caseID" name="caseID" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="caseID" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="caseType">Case Type:</label>
            <Field as="select" id="caseType" name="caseType" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="">Select a case type</option>
              <option value="corporate law">Corporate Law</option>
              <option value="family law">Family Law</option>
              <option value="real estate">Real Estate</option>
              <option value="litigation">Litigation</option>
            </Field>
            <ErrorMessage name="caseType" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="caseDescription">Case Description:</label>
            <Field as="textarea" id="caseDescription" name="caseDescription" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="caseDescription" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="caseStatus">Case Status:</label>
            <Field as="select" id="caseStatus" name="caseStatus" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="">Select a case status</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="in progress">In Progress</option>
              <option value="pending">Pending</option>
            </Field>
            <ErrorMessage name="caseStatus" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="assignedAttorneyParalegalID">Assigned Attorney or Paralegal ID:</label>
            <Field type="text" id="assignedAttorneyParalegalID" name="assignedAttorneyParalegalID" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="assignedAttorneyParalegalID" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="clientName">Client Name:</label>
            <Field type="text" id="clientName" name="clientName" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="clientName" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="clientContactInformation">Client Contact Information:</label>
            <Field type="tel" id="clientContactInformation" name="clientContactInformation" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="clientContactInformation" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="dateCreated">Date Created:</label>
            <Field type="date" id="dateCreated" name="dateCreated" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="dateCreated" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="caseDocuments">Case Documents:</label>
            <Field type="file" id="caseDocuments" name="caseDocuments" style={{ width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} />
            <ErrorMessage name="caseDocuments" component="div" style={{ color: 'red', marginTop: '5px' }} />
          </div>
          <div style={{ marginTop: '20px' }}>
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none', marginRight: '10px' }}>{caseDetails ? 'Save Changes' : 'Save'}</button>
            {caseDetails && <button type="button" onClick={() => setIsEditMode(false)} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '10px 20px', borderRadius: '4px', border: 'none' }}>Cancel</button>}
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default EditCaseDetails;