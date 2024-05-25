import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import { Quiz } from '@components/Quiz'
import { MainPage } from "@components/MainPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
