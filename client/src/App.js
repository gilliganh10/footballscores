import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import ProgressPage from './pages/ProgressPage';
import CardsPage from './pages/CardsPage';
import ProtectedRoute from './components/ProtectedRoute';
import TablePage from './pages/TablePage';
import TestPage from './pages/TestPage';
import { ParentProvider } from './providers/ParentProvider';

import { app, analytics } from './firebase';
import './App.css';

function App() {
  return (
    <ParentProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              } />

              <Route path="/about" element={
                <ProtectedRoute>
                  <AboutPage />
                </ProtectedRoute>
              }/>
              <Route path="/progress" element={
                <ProtectedRoute>
                  <ProgressPage />
                </ProtectedRoute>
              } />
              <Route path="/cards" element={
                <ProtectedRoute>
                  <CardsPage />
                </ProtectedRoute>
              } />
              <Route path="/table" element={
                <ProtectedRoute>
                  <TablePage />
                </ProtectedRoute>
              } />
              <Route path="/test" element={
                <ProtectedRoute>
                  <TestPage/>
                  </ProtectedRoute>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ParentProvider>
  );
}

export default App;