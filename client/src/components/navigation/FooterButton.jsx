// FooterButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

function FooterButton({ label, value, icon, onClick }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (value) {
      navigate(value);
    }
  };

  return (
    <BottomNavigationAction
      label={label}
      icon={icon}
      onClick={handleClick}
    />
  );
}

export default FooterButton;
