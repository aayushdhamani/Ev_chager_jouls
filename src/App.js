// import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import About from './components/About/about';
import Home from './components/home/home'
import Downloadapp from './components/download app/downloadapp'
import Blog from './components/blog/blog'
// import jouls from './jouls.png';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      {/* <a href="/home"><img src={jouls} alt="" /></a> */}
     {/*  */}
     <Route path='/home' element={<Home/>}/>
     <Route path='/Downloadapp' element ={<Downloadapp/>}/>
     
     {/* <Downloadapp></Downloadapp> */}
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/Blogs' element ={<Blog/>}/>
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    
    </>
  );
}

export default App;


