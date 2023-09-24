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
import Register from './Register';


// http://localhost:3000

function Home() {
  return (
      <GoogleMapComponent />
  );
}

// function About() {
//   return <h2>Restaurant</h2>;
// }

function Admin() {
  return (
      <Register />
  );
}

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
          <Routes>
            <Route path="/admin" element={<Admin />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />  
      </div>
    </Router>
  );
}

export default App;
