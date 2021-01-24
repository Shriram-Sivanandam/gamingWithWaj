import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import './App.css';
import Header from './Header';
import './Checkbox';
import Sidebar from './Sidebar';
import Games from './Games';
import Liked from './Liked';
import Login from './Login';
import storage from 'local-storage-fallback';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#111' : '#EEE'};
  color: ${props => props.theme.mode === 'dark' ? '#EEE' : '#111'};
}
`

function getInitialTheme() {
  const savedTheme = storage.getItem('theme');
  return savedTheme ? JSON.parse(savedTheme) : { mode:'dark'};
}

function App() {

  const [{ user }, dispatch] = useStateValue();
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    storage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <ThemeProvider theme={ theme }>
      <>
      <GlobalStyle />
      <div className="app">
        <Router>
        <Header />
        <div className="toggle-container">
        <span><Brightness3Icon /></span>
        <span className="toggle">
          <input
            // checked={dark}
            onChange={e => setTheme(theme.mode === 'dark' ? {mode:'light'} : {mode:'dark'})}
            type="checkbox"
            className="checkbox"
            id="checkbox"
            name="mycheckbox"
          />
          <label htmlFor="checkbox" />
        </span>
        <span><WbSunnyIcon /></span>
        </div>
          <Switch>

            <Route path="/search/:searchterm">
            <div className="app__page">
              <Sidebar />
              <h1>Search Page</h1>
            </div>
            </Route>

            <Route path="/typing">
            <div className="app__page">
              <Sidebar />
              <h1>hi there</h1>
            </div>
            </Route>

            <Route path="/classic">
            <div className="app__page">
              <Sidebar />
              <h1>Classic Games</h1>
            </div>
            </Route>

            <Route path="/shooter">
            <div className="app__page">
              <Sidebar />
              <h1>Shooter Games</h1>
            </div>
            </Route>

            <Route path="/dualplayer">
            <div className="app__page">
              <Sidebar />
              <h1>Dual Player Games</h1>
            </div>
            </Route>

            <Route path="/liked">
            <div className="app__page">
              <Sidebar />
              <Liked />
            </div>
            </Route>

            <Route path="/aboutus">
            <div className="app__page">
              <Sidebar />
              <h1>About Us Page</h1>
            </div>
            </Route>

            <Route path="/copyright">
            <div className="app__page">
              <Sidebar />
              <h1>Copyright Page</h1>
            </div>
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/">
            <div className="app__page">
              <Sidebar />
              <Games />
            </div>
            </Route>

          </Switch>
        </Router>
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
