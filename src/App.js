import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import Navbar from './Layouts/Navbar/Navbar';
import About from './pages/public/About/About';
import ContactUs from './pages/public/Contact/ContactUs';
import LandingPage from './pages/public/LandingPage';
import Login from './pages/public/Login/Login';
import Signup from './pages/public/SignUp/Signup';

function App() {
  return (
    <div>
      {/* hello */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
      </Switch>
    </div>
  );
}

export default App;
