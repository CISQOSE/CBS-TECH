
import './App.css';
import { Home } from './sceens/Home';
import { Ressources } from './sceens/Ressources';
import { Contact } from './sceens/Contact';
import { Routes, Route, NavLink } from 'react-router-dom';
import "./sceens/css/styles.css"
import { SocialLinks } from './components/SocialLinks';
import "./sceens/css/header.css"

function App() {
  

  return (
  
    <section className='main-container'>

      <div className='justify main-container mt-10 bear-picture'>
        
         <header className='flex justify-between items-center mb-5'>
          <img className='mr-10 ml-20' src='images/Logo.jpeg' alt='Logo de CBS TECHNOLOGIE' width={150} />

          <nav className='flex justify-end container mr-10'>
            <NavLink className="text-[gray] hover:text-[#000000] mr-3 text-3xl" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/'>Accueil</NavLink><br></br> 
            <NavLink className="text-[gray] hover:text-[#000000] mr-3 text-3xl" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/ressources'>Ressources</NavLink><br></br>
            <NavLink className="text-[gray] hover:text-[#000000] mr-3 text-3xl" style={({isActive}) => ({fontWeight: isActive ? 'bold' : 'normal'})} to='/contact'>Contacts</NavLink>
          </nav>   
         </header>

         <Routes>
           <Route path='/' element={ <Home/> }/>
           <Route path='/ressources' element={ <Ressources/> }/>
           <Route path='/contact' element={ <Contact/> }/>
         </Routes>

         <footer className='mt-12'>
          
           <SocialLinks/>
           
         </footer>
      </div>  

    
      <p className='copyrighr align-center App text-[white]'>© 2023 CBS TECHNOLOGIE. Tous droits réservés | Par Babacar Mbemba Sylla CISSE </p>
    
    

    </section> 
  
  );
}

export default App;
