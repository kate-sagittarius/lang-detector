import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from './components/Header';
import AppRouter from './Router';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Header/>
        <AppRouter/>
        <Footer/>
    </Router>
  );
}

export default App;
