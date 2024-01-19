import React, { useState } from 'react';

const DocumentRepository = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [accessControl, setAccessControl] = useState('public');
  const [searchQuery, setSearchQuery] = useState('');
  const [documentList, setDocumentList] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showVersionHistory, setShowVersionHistory] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleAccessControlChange = (event) => {
    setAccessControl(event.target.value);
  };

  const handleSearch = () => {
    // Implement search functionality based on searchQuery
    // Update documentList based on search results
    // Example: Call an API to fetch documents based on the search query
    // setDocumentList(updatedDocumentList);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('accessControl', accessControl);
  
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
  
        if (response.ok) {
          // Handle successful upload
          console.log('File uploaded successfully');
          // Optionally, update the documentList with the newly uploaded file
        } else {
          // Handle upload error
          console.error('Failed to upload file');
        }
      } catch (error) {
        // Handle network or fetch API error
        console.error('Error uploading file:', error);
      }
    } else {
      // Handle case where no file is selected
      console.error('No file selected for upload');
    }
  };

  const handleDocumentSelect = (document) => {
    setSelectedDocument(document);
    // Fetch and set version history for the selected document
    // Example: Call an API to fetch the version history for the selected document
    setShowVersionHistory(true);
  };

  const handleVersionSelect = (version) => {
    // Implement logic to display the selected version of the document
    // Example: Set the selected version for display
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensures the container takes up the full viewport height
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>Document Repository</h2>
      <div style={{ marginBottom: '20px' }}>
        <input type="file" onChange={handleFileChange} />
        <select value={accessControl} onChange={handleAccessControlChange}>
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
        <button onClick={handleUpload} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none' }}>Upload</button>
      </div>
      <div style={{marginBottom: '20px'}}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search documents"
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '8px 16px', backgroundColor: '#28a745', color: '#fff', border: 'none' }}>Search</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h3>Document List</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {documentList.map((document) => (
            <li key={document.id} onClick={() => handleDocumentSelect(document)} style={{ cursor: 'pointer', backgroundColor: '#f4f4f4', padding: '8px', marginBottom: '5px' }}>
              {document.name}
            </li>
          ))}
        </ul>
      </div>
      {selectedDocument && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Selected Document: {selectedDocument.name}</h3>
          <button onClick={() => setShowVersionHistory(!showVersionHistory)} style={{ padding: '8px 16px', backgroundColor: '#dc3545', color: '#fff', border: 'none', marginBottom: '10px' }}>
            {showVersionHistory ? 'Hide Version History' : 'Show Version History'}
          </button>
          {showVersionHistory && (
            <div>
              <h4>Version History</h4>
              <ul style={{ listStyleType: 'none', padding: 0 }}>
                {selectedDocument.versions.map((version) => (
                  <li key={version.id} onClick={() => handleVersionSelect(version)} style={{ cursor: 'pointer', backgroundColor: '#f4f4f4', padding: '8px', marginBottom: '5px' }}>
                    Version {version.number}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DocumentRepository;