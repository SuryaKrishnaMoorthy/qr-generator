import React from 'react';
import { Route, Switch } from "react-router-dom";

import './App.css';
import Nav from "./components/NavBar/NavBar";
import QrForm from "./components/QrForm/QrForm";
import QrCode from "./components/QrCode/QrCode";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={QrForm} />
        <Route path="/qr-code" component={QrCode} />
      </Switch>
    </div>
  )
  }
    

export default App;
