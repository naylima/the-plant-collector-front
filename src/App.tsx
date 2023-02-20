import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page } from './layouts/Page';
import {  
  Landing, 
  Launch, 
  Home, 
  Products, 
  ProductPage,
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

        <Route path='/plantshop' element={<Page />}>  
          <Route path='home' element={<Home/>} />
          <Route path='home/:type_id' element={<Products/>} />  
          <Route path=':type_id' element={<Products/>} />  
          <Route path=':type_id/:product_id' element={<ProductPage/>} /> 
          <Route path='product/:product_id' element={<ProductPage/>} />   
        </Route>
        
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
