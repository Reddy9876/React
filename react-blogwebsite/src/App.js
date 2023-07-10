import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Topbar from "../src/components/topbar.js";

function App() {
  return (
   <Router>
    <Topbar />
    </Router>
  );
}
export default App;