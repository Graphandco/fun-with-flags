import React, { useState } from 'react';
import './App.scss';
import Header from './Components/Header';
import FlagsList from './Components/FlagsList';
import { Switch, Route, useLocation } from 'react-router-dom';
import FlagSingle from './Components/FlagSingle';

function App() {
    const location = useLocation();
    //console.log(location);
    return (
        <div className='App'>
            <div className='container'>
                <Header />

                <Switch location={location}>
                    <Route path='/' exact>
                        <FlagsList />
                    </Route>
                    <Route path='/:name' exact>
                        <FlagSingle />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
