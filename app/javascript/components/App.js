import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Helloworld from './Greeting.js';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path='/' element={<Helloworld greeting='Hello world!' />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
