import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Topbar from "../src/components/topbar.js";
import Sidebar from '../src/components/sidebar.js';
import Header from '../src/components/header.js';
import Posts from '../src/components/posts.js';
function App() {
  return (
   <Router>
    <Topbar />
    <Header />
    <Sidebar />
    <Posts />
    </Router>
  );
}
export default App;