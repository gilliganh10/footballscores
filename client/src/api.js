import axios from 'axios';
import { auth } from './firebase';

const getBaseUrl = () => {
  if (process.env.NODE_ENV === 'production') {
    if (!process.env.REACT_APP_API_BASE_URL) {
      console.error('REACT_APP_API_BASE_URL environment variable is not set in production');
    }
    return process.env.REACT_APP_API_BASE_URL.replace(/\/$/, '');
  }
  return 'http://localhost:5001';
};

const apiClient = axios.create({
    baseURL: getBaseUrl(),
});

// Add a debug log to verify the baseURL being used
if (process.env.NODE_ENV === 'production') {
    console.log('API Base URL:', getBaseUrl());
}

// Request interceptor
apiClient.interceptors.request.use(async (config) => {
    const user = auth.currentUser;
    if (user) {
      try {
        const token = await user.getIdToken(true);
        config.headers.Authorization = `Bearer ${token}`;
        if (process.env.NODE_ENV !== 'production') {
          console.log('Token added to request (first 10 chars):', token.substr(0, 10) + '...');
        }
      } catch (error) {
        console.error('Failed to get user token');
      }
    } else if (process.env.NODE_ENV !== 'production') {
      console.log('No user logged in');
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log('API Response received');
    }
    return response;
  },
  (error) => {
    console.error('API Error:', error.message);
    return Promise.reject(error);
  }
);

// Secure debug logging for Firebase Auth state
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log('User signed in');
  } else {
    console.log('User signed out');
  }
});

export default apiClient;