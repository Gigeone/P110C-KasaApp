// import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About'
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Error from './Pages/Error'

import './App.scss'


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/about" element={<About />}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
