
import { useState } from 'react';
import './App.css'
import SideBar from './layouts/sidebar';
import Dashboard from './pages/dashboard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layouts/Header';
import Customers from './pages/customers';

function App() {
    const [menu, setMenu] = useState(false);
console.log(menu)

  return (
    <BrowserRouter>
       <div className='flex'>
          <SideBar menu={menu} setMenu={setMenu} />
          <section id="center">
                    <Header menu={menu} setMenu={setMenu} />

            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customers" element={<Customers />} />   
            </Routes>
           


            
          </section>
          
        </div>
    </BrowserRouter>
 
  )
  
}

export default App
