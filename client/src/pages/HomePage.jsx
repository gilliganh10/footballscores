import React, { useState } from 'react';
import apiClient from '../api.js'; 
function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUserId] = useState(null);
  const [error, setError] = useState(null);

  const handleTestRequest = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await apiClient.post('/api/test');
      console.log('Response from /api/test:', response.data);
      setUserId(response.data); // The backend returns the user ID directly
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.response?.data || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="HomePage">
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>
      <p>This is the main page of our simple React app.</p>

      <button onClick={handleTestRequest} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Test API'}
      </button>
      {userId && <p>User ID: {userId}</p>}
      {error && <p style={{color: 'red'}}>Error: {error}</p>}
    </div>
  );
}

export default HomePage;