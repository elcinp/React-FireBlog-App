import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import './App.css';
import AppRouter from './components/navbar/app-router/AppRouter';

function App() {
  return (
    <AppRouter/>
    
  );
}

export default App;
