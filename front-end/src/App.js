import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'components/Navbar/Navbar';
import { Box, Container } from "@mui/material";
import Footer from 'components/Footer/Footer';
import Home from 'Pages/Home/Home';
import About from 'Pages/About/About';
import Notes from 'Pages/Notes/Notes';
import CreateNote from 'Pages/CreateNote/CreateNote';
function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <Box className="app">
          <Navbar />
          <Box component="main" sx={{
            height: "calc(100vh - 64px)",
            mt: "64px"
          }}>
           
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="/create-note" element={<CreateNote />} />
                <Route path="/about" element={<About />} />
              </Routes>
           </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </>

  );
}

export default App;
