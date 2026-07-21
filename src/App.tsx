
import { useState } from 'react';
import './App.css'
import SideBar from './layouts/sidebar';
import Dashboard from './pages/dashboard';
function App() {
    const [menu, setMenu] = useState(false);
console.log(menu)

  return (
    <div className='flex'>
    <SideBar menu={menu} setMenu={setMenu} />
      <section id="center">
      <Dashboard setMenu={setMenu} menu={menu} />
      </section>
      
    </div>
  )
  
}

export default App
