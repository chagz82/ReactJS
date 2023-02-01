import Count from "./count";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import './CSS/styles.css';
import {Routes, Route, Link} from 'react-router-dom';
import AboutUs from "./Pages/AboutUs";
import MainPage from './Pages/MainPage';
import Project from './Pages/Project';
import NotFound from './Pages/NotFound';
import ViewProject from "./Pages/Projects";
import MainLayout from './Pages/Layout/MainLayout';
import SvcFooter from "./Pages/Services/SvcFooter";
import SvcHeader from "./Pages/Services/SvcHeader";
import SvcMain from "./Pages/Services/SvcMain";
import SvcLayOut from './Pages/Layout/SvcLayOut';

function App() {
  return (
    <>
      {/* <Link to="/" className='btn btn-primary'>Main</Link>
      <Link to="/AboutUs" className='btn btn-primary'>About Us</Link>   
      <Link to="/Project" className='btn btn-primary'>Project</Link>       */}


   

        <Routes>
          <Route element={<MainLayout />} >
            <Route path="/" element={<Main />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Projects/:id" element={<ViewProject />} />
          </Route>

          <Route element={<SvcLayOut />} >
            <Route path="/SvcMain" element={<SvcMain />} />
          </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>

      
    </>
  )
}

export default App;
