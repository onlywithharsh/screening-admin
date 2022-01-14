import React from 'react'
import Navbar from './Navbar'
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreateEvent } from './components/CreateEvent';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<CreateEvent/>}/>
          {/* <Route path="/create" element={<Create />}/>
          <Route path="/blogs/:id" element={<BlogDetails />}/> */}
        </Routes>
      </div>
    </div>
  </Router>
  );
}

export default App;
