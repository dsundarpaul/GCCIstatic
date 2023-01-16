import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import Events from './views/Events';
import Contactus from './views/Contactus';
import Offerings from './views/Offerings';

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <div className='bg-yellow-200 h-auto'>
        content
      </div>
      <Footer /> */}
      <BrowserRouter>
        <Container maxWidth="full" className='!p-0'>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home className='bg-[#f5f5f5]' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/offerings" element={<Offerings />} />
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
