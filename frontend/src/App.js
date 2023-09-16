import React, { useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import Header from './Header'; 
import Footer from './Footer'; 
import GoogleMapComponent from './Map';

// http://localhost:3000

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>Restaurant</h2>;
// }

// function Projects() {
//   return <h2>Morning</h2>;
// }

function App() {

  useEffect(() => {
    axios.get('http://localhost:8000/hello')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <Router>
      <div className="bg-white h-screen flex flex-col">
        <Header />  
        <main className="flex-grow p-5  text-black">
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes> */}
          <GoogleMapComponent />
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
