import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Topbar from "../src/components/topbar.js";
import Sidebar from './components/sidebar.js';

function App() {
  return (
   <Router>
    <Topbar />
    <Sidebar />
    </Router>
  );
}
export default App;