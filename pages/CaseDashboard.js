import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart from Chart.js library
import Link from 'next/link'; // Import Link from next/link for navigation

const CaseDashboard = () => {
  const [caseMetrics, setCaseMetrics] = useState({});
  const chartRef = useRef(null); // Create a ref to hold the chart instance

  // Fetch case metrics data from the backend API
  useEffect(() => {
    const fetchCaseMetrics = async () => {
      try {
        const response = await fetch('/api/case-metrics');
        if (response.ok) {
          const data = await response.json();
          setCaseMetrics(data);
        } else {
          console.error('Failed to fetch case metrics:', response.status);
        }
      } catch (error) {
        console.error('Error fetching case metrics:', error);
      }
    };
    fetchCaseMetrics();
  }, []);

  // Define the data and options for the bar chart
  const data = {
    labels: ['Open', 'Closed', 'Pending', 'In Progress'], // Removed "Resolved" from the labels
    datasets: [
      {
        label: 'Case Status Distribution',
        data: [caseMetrics.open, caseMetrics.closed, caseMetrics.pending, caseMetrics.inProgress], // Removed "resolved" from the data
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: 'y',
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  // Cleanup previous chart instance before rendering a new chart
  useEffect(() => {
    if (chartRef.current) {
      const chartInstance = new Chart(chartRef.current, {
        type: 'bar',
        data: data,
        options: options,
      });
      return () => {
        chartInstance.destroy();
      };
    }
  }, [caseMetrics]); // Re-render the chart when caseMetrics change

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Ensures the container takes up the full viewport height
      }}
    >
      <h1 style={{ fontSize: '2em' }}>Case Management</h1>
      <h2>Case Metrics Dashboard</h2>
      <div style={{ height: '400px', width: '600px' }}>
        <canvas ref={chartRef} />
      </div>
      <div style={{ marginTop: '20px' }}>
        <Link href="/CreateCaseDetails">
          <button style={{ backgroundColor: 'green', color: 'white', marginRight: '10px' }}>Create Case</button>
        </Link>
        <Link href="/EditCaseDetails">
          <button style={{ backgroundColor: 'blue', color: 'white', marginRight: '10px' }}>Edit Case</button>
        </Link>
        <Link href="/ManageCaseDetails">
          <button style={{ backgroundColor: 'orange', color: 'white', marginRight: '10px' }}>Manage Cases</button>
        </Link>
        <Link href="/DocumentRepository">
          <button style={{ backgroundColor: 'purple', color: 'white' }}>Document Repository</button>
        </Link>
      </div>
    </div>
  );
};

export default CaseDashboard;