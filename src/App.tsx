
import './App.css'
import SideBar from './layouts/sidebar';
import Dashboard from './pages/dashboard';
function App() {


  return (
    <div className='flex'>
    <SideBar />
      <section id="center">
        <Dashboard/>
      </section>
      
    </div>
  )
}

export default App
