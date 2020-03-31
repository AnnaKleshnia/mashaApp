import React, { useEffect, Fragment }from 'react';
import Navbar from './components/layout/Navbar';
import Journals from './components/journals/Journals';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StepTwo from './components/layout/StepTwo';
import StepFour from './components/layout/StepFour';
import Begrunn from './components/layout/Begrunn';


import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="App">
    <Navbar />
    <Switch> 
      <Route exact path="/" render={props => (
        <Fragment>
          <Journals/>
          </Fragment>
      )} />
      <Route exact path="/steptwo" component={StepTwo}/>
      <Route exact path="/begrunn" component={Begrunn}/>
      <Route exact path="/stepfour" component={StepFour}/>
    </Switch>
      {/* <Journals/> */}
    </div>
    </Provider>
    </BrowserRouter>
  );
}

export default App;
