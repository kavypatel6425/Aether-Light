// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import Router from './Router';
import { Provider } from 'react-redux';
import { User_store } from './Store/User_store';

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <Provider store={User_store}>
      <Router />
    </Provider>
  </BrowserRouter>
)
