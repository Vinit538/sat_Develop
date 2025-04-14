
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Details from './components/Details';
import './App.css';
// import { Box, Typography, Button } from '@mui/material';

function App() {
  return (
   <div>
     <Navbar/>
     <Home/>
     <Details />
     <Footer/>
   </div>
  );
}

export default App;
// <Box sx={{ height: '100vh', background: 'linear-gradient(to right, #6b21a8, #4338ca)', color: 'white', textAlign: 'center', pt: 15 }}>
    //   <Navbar />
    // //   <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
    // //     Welcome to Sat Academy
    // //   </Typography>
    // //   <Typography variant="h6" sx={{ mb: 4 }}>
    // //     This transparent navbar works great with hero sections.
    // //   </Typography>
    // //   <Button variant="contained" sx={{ bgcolor: 'white', color: 'indigo', '&:hover': { bgcolor: 'grey.100' }, px: 5, py: 2 }}>
    // //     Get Started
    // //   </Button>
    // // </Box>