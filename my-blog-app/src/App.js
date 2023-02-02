import logo from './Logo/logo.svg';
import './CSS/App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainLayout from './Components/MainLayout';
import MainBody from './Pages/MainBody';
import NotFound from './Pages/NotFound';
import Andromeda from './Pages/Andromeda';


function App() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' element={<MainBody />} />
          <Route path='/Andromeda' element={<Andromeda />} />
        </Route>

        <Route path="*" element={<NotFound />} />  
      </Routes>
    
    </>
  );
}

export default App;
