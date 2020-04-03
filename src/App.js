import React, { useEffect, Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import Journals from './components/journals/Journals';

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import { Comments } from './components/comments/Comments';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <div className="App">
      <Navbar />
      <Journals />
      <Comments />
    </div>
  );
};

export default App;
