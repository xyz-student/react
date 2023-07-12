
import './App.css';
import Home from './RouterPage/Home'
import About from './RouterPage/About'
import Cards from './RouterPage/Cards'
//  <BrowserRouter> : uses regular URL paths
// router : communicate with your web server
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark  ">
        <div className="container-fluid">


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link   text-white mx-2" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link   text-white mx-2" to="About">About Us</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link   text-white mx-2" to="Cards">Cards</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>

        <Routes>
          {/* So exact keyword is used only when you want to render a component when there is an exact match of route. */}
          <Route exact path='/' element={<Home />}  ></Route>
          <Route path='about' element={<About />}  ></Route>
          <Route path='Cards' element={<Cards />}  ></Route>
        </Routes>
      </div>
    </Router>


  );
}

export default App;
