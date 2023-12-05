import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './components/About';
import UserDetails from './components/UserDetails';

function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Routes>
                <Route path={'/'} element={<Navigate to={'/contacts/list'}/>} />
                <Route path={'/contacts/list'} element={<UserList/>}/>
                <Route path={'/contacts/:id'} element={<UserDetails/>}/>
                <Route path={'/about'} element={<About/>}/>
            </Routes>
        </React.Fragment>
    );
}

export default App;
