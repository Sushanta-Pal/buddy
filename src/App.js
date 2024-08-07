
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/ChatUI'
import Footer from './Components/Footer/Footer';


function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer/>
   </Router>
   </>
  );
}

export default App;
