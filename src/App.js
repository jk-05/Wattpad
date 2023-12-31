import React from "react";
import {Route, Routes } from "react-router-dom";
import Llogin from "./Components/Llogin/Llogin";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Get from "./Components/Axios/Get";
import Register from "./Components/Register/Register";
function App() {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route  path="/Login" element={<Llogin />}></Route>
          <Route  path="/About" element={<About />}></Route>
          <Route  path="/Books" element={<Get />}></Route>
          <Route path="/Register" element = {<Register />}></Route>
         </Routes>
      </div>
    
  );
}
// import React from 'react';
// import { BrowserRouter as Router, Route, Routes , Link } from 'react-router-dom';
// import App1 from './App1';
// import App2 from './App2';
// import Home from './Home';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav style={{display:'flex'}}>
//           <ul>
           
//             <li>
//               <Link to="/app1" style={{ textDecoration: 'none' }}>Sum 1</Link>
//             </li>
//             <li>
//               <Link to="/app2" style={{ textDecoration: 'none' }}>Sum 2</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/app1" element={<App1 />} />
//         <Route path="/app2" element={<App2 />} />
//       </Routes>
//       </div>
//     </Router>
//     // <div>
//     //   <App1 />
//     //   <App2 />
//     // </div>
//   );
// };

export default App;