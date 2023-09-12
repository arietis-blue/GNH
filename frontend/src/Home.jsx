// import React, { useEffect } from 'react';
// import axios from 'axios';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from 'react-router-dom';
// import './index.css';

// // http://localhost:3000

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>Restaurant</h2>;
// }

// function Projects() {
//   return <h2>Morning</h2>;
// }

// function App() {

//   useEffect(() => {
//     axios.get('http://localhost:8000/hello')
//       .then(response => {
//         console.log(response.data);
//       })
//       .catch(error => {
//         console.error('There was an error!', error);
//       });
//   }, []);

//   return (
//     <Router>
//       <div className="bg-black h-screen flex flex-col">
//         <header className="bg-orange-500 text-black font-bold p-5 flex items-center justify-between"> {/* ← flex, items-center, and justify-between added */}
//           <h1 className="text-2xl">Kyoto Sight Info</h1>
//           <nav>
//             <ul className="flex space-x-4 ">
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">Restaurant</Link>
//               </li>
//               <li>
//                 <Link to="/projects">Morning</Link>
//               </li>
//             </ul>
//           </nav>
//         </header>
//         <main className="flex-grow p-5 text-white">
//           <Routes>
//             <Route path="/about" element={<About />} />
//             <Route path="/projects" element={<Projects />} />
//             <Route path="/" element={<Home />} />
//           </Routes>
//         </main>
//         <footer className="bg-orange-500 text-black font-bold p-5">
//           <p>© 2023 by Me. All rights reserved.</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }


// export default App;
