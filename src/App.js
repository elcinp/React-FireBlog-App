import React from 'react'
import './App.css';
import AppRouter from './app-router/AppRouter';
import AuthContextProvider from './contexts/AuthContext'
import { ToastContainer } from "react-toastify";
// import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   typography: {
//     fontFamily: [
      
//       'Girassol'
//     ].join(','),
//   },});

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <AuthContextProvider>
        <AppRouter />
        <ToastContainer/>
      </AuthContextProvider>
    // </ThemeProvider>
    
  );
}

export default App;
