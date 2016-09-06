import React from 'react';
import { Router, Route } from 'react-router';
import Main from '../components/Main';

module.exports = (
    <Router>
        <Route path="/" component={Main} />
    </Router>
);
