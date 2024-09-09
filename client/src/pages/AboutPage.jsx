import React from 'react';
import { useAlert } from '../providers/AlertContext';
import { Button } from '@mui/material';

function AboutPage() {
  const { showAlert } = useAlert();

  const handleGoodAlert = () => {
    showAlert('This is a success message!', 'success');
  };

  const handleBadAlert = () => {
    showAlert('This is an error message!', 'error');
  };

  return (
    <div className="AboutPage">
      <h1>About Us</h1>
      <p>This is the About page of our simple React app.</p>
      <div style={{ marginTop: '20px' }}>
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleGoodAlert}
          style={{ marginRight: '10px' }}
        >
          Trigger Good Alert
        </Button>
        <Button 
          variant="contained" 
          color="error" 
          onClick={handleBadAlert}
        >
          Trigger Bad Alert
        </Button>
      </div>
    </div>
  );
}

export default AboutPage;