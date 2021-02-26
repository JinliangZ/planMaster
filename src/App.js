import React,{useLayoutEffect, useState} from 'react';
import {  Switch, Route } from 'react-router-dom'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Navbar from './components/layout/Navbar'
import CreateProject from './components/projects/CreateProject';
import ProjectDetails from './components/projects/ProjectDetails';
import SimpleMenu from './components/layout/Menu';



function App() {
  const [deskWidth, setDeskWidth] = useState(document.documentElement.clientWidth);
  const handleSize =() => {
      setDeskWidth({
        deskWidth:document.documentElement.clientWidth,
      });
    }

  useLayoutEffect(() => {
      window.addEventListener('resize',handleSize);
  }, [deskWidth]);

  return (    
      <div className="App">
        {deskWidth != undefined && (deskWidth<=1000||deskWidth.deskWidth<=1000)  && (<SimpleMenu />)}        
        <Navbar />
        <Switch>
          <Route exact path='/' >
            <Dashboard />
          </Route>

          <Route path = '/project/:id' >
            <ProjectDetails />
          </Route>
            
          <Route path='/signin'>
            <SignIn />
          </Route>

          <Route path='/signup'>
            <SignUp />
          </Route>

            <Route path= '/create'>
              <CreateProject />
            </Route>

        </Switch>
      </div>  
  );
}

export default App;
