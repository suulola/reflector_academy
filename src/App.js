import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './Layouts/Navbar/Navbar';
import About from './pages/public/About/About';
import Blog from './pages/public/Blog/Blog';
import BlogDetail from './pages/public/Blog/BlogDetail';
import ContactUs from './pages/public/Contact/ContactUs';
import Ebook from './pages/public/Ebook/Ebook';
import EventSignup from './pages/public/EventSignup/EventSignup';
import LandingPage from './pages/public/Landing/LandingPage';
import Login from './pages/public/Login/Login';
import MomentInPictures from './pages/public/MomentInPictures/MomentInPictures';
import MomentInPicturesDetails from './pages/public/MomentInPictures/MomentInPicturesDetails';
import Programmes from './pages/public/Programmes/Programmes';
import Signup from './pages/public/SignUp/Signup';
import SpecialProjects from './pages/public/SpecialProjects/SpecialProjects';
import VideoResource from './pages/public/VideoResources/VideoResource';
import ViewMembers from './pages/public/ViewMembers/ViewMembers';
import Courses from './pages/secured/Course/Courses';
import Profile from './pages/secured/Profile/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Signup} />
        <Route path="/event/new-year" component={EventSignup} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/profile" component={Profile} />
        <Route path="/library" component={Courses} />
        <Route path="/programmes" component={Programmes} />
        <Route path="/members" component={ViewMembers} />
        <Route path="/courses" component={Courses} />
        <Route path="/projects" component={SpecialProjects} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetail} />
        <Route exact path="/moments" component={MomentInPictures} />
        <Route path="/moments/:id" component={MomentInPicturesDetails} />
        <Route path="/ebook" component={Ebook} />
        <Route path="/video-resource" component={VideoResource} />
      </Switch>
    </>
  );
}

export default App;
