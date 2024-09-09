import axios from 'axios';
import { getAuth } from 'firebase/auth';

const apiClient = axios.create({
    baseURL: 'http://localhost:5001/', 
});

// Set up an interceptor to inject the Firebase token into headers of each request
apiClient.interceptors.request.use(async (config) => {
    const auth = getAuth();
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken(true);
      config.headers.Authorization = `Bearer ${token}`;
      console.log('Token added to request:', token); // For debugging
    } else {
      console.log('No user logged in'); // For debugging
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });
  
  export default apiClient;
  