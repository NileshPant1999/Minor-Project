import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  return (
    <Router>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/signin' component={SigninPage} exact/>
        </Switch>
    </Router>
     
  );
}

export default App;
