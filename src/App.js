import React, { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Chat from './Chat'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from './StateProvider'
function App() {

    const [{user}, dispatch] = useStateValue();

    return (
        <div>
            <Router>
                {!user ? (
                    <Login/>
                ):(
             <>
            <Header />
            <div className="app__body">
            <Sidebar/>
            <Switch>
                <Route path="/rooms/:roomId">
                <Chat/>

                </Route>
                <Route path="/rooms/:roomId">
                <h1>Welcome!</h1>

                </Route>
            </Switch>
            </div>
            </>
                )}
            </Router>
        </div>
    )
}

export default App
