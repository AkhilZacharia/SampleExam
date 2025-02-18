import React from 'react'
import FormEmail from "./FormEmail";
import OtpForm from "./OtpForm";
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Success from './success';

const App = () => {
  const [view,setView] = useState(false);
  const myView = !view ? <FormEmail setView={setView} /> : <OtpForm />;

  return (
    <>
    <Routes>
          <Route path='/' element={myView}></Route>
          <Route path='/success' element={<Success />}></Route>
    </Routes>
    </>
  )
}

export default App