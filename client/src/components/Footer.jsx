
// Footer.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import FooterButton from './navigation/FooterButton';
import { useTheme } from '../providers/ThemeContext';
import DarkModeIcon from '@mui/icons-material/DarkMode';

function Footer() {
  const [value, setValue] = useState('/');
  const location = useLocation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // variable for setting the app theme, using the context store
  const { mode, toggleTheme } = useTheme();

  const renderButtons = () => {
    switch (location.pathname) {
      case '/':
      case '/about':

        return [
          <FooterButton key="home" label="Home" value="/" icon={<HomeIcon />} />,
          <FooterButton key="about" label="About" value="/about" icon={<InfoIcon />} />
        ];
      case '/quiz':
        return [
          <FooterButton
            key="guess"
            label="Guess"
            icon={<QuizIcon />}
            onClick={() => console.log('Guessed!')}
          />
        ];
      case '/chat':
        return [
          <FooterButton
            key="send"
            label="Send"
            icon={<ChatIcon />}
            onClick={() => console.log('Message sent!')}
          />
        ];
      default:
        return [];
    }
  };

  return (
    <footer className="Footer">
      <BottomNavigation sx={{ width: '50%', mx: 'auto'}} value={value} onChange={handleChange}>
        {renderButtons()}
      </BottomNavigation>
    </footer>
  );
}

export default Footer;