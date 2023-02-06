import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {  
  Landing, 
  Launch, 
  Home, 
  Products, 
  PrivatePage, 
  Cart, 
  Payment,
  Success
} from './pages';

function App() {

  return (    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/launch' element={<Launch/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/products/:type_id' element={<Products/>} />
        <Route 
          path='/cart'  
          element={
            <PrivatePage>
              <Cart />
            </PrivatePage>
          }           
        />
        <Route 
          path='/payment'  
          element={
            <PrivatePage>
              <Payment />
            </PrivatePage>
          }           
        />
        <Route 
          path='/success'  
          element={
            <PrivatePage>
              <Success />
            </PrivatePage>
          }           
        />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
