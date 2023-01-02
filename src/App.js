import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Events from './views/Events';
import Contactus from './views/Contactus';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <div className='bg-yellow-200 h-auto'>
        content
      </div>
      <Footer /> */}
      <BrowserRouter>
        <Container maxWidth="full">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact-us" element={<Contactus />} />
            {/* <Route path="/auth" exact element={<Auth />} />s */}
          </Routes>
          <Footer />
      </Container>
    </BrowserRouter>
    </div>
  );
}

export default App;
