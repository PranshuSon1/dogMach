import SignIn from './login'
import React from "react";
import Home from './home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
