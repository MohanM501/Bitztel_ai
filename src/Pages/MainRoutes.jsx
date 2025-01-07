import React from 'react';
import {Routes,Route} from "react-router-dom"

import SignUp from './SignUp';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/login" element={<LoginPage/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="*" element={<h2>Page didn't found</h2>}></Route>
        </Routes>
    </div>
  )
}

export default MainRoutes