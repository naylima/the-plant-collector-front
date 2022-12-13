import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Landing, Launch, Home } from "./components";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/launch' element={<Launch/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
