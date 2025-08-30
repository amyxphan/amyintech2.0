// App.js
import './App.css';
import NavBar from './NavBar';
import About from './About';
import Work from './Work';
import Projects from './Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import olympicLoop from './backgroundScreens/olympicLoop.mp4';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar-fixed">
          <NavBar />
        </div>

        <main className="page">
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  {/* Hero Section */}
                  <section className="overlay-content">
                    <video className="hero-video" autoPlay loop muted>
                      <source src={olympicLoop} type="video/mp4" />
                    </video>

                    <header className="App-header">
                      <h2 className="hero-name">Amy Phan</h2>
                      <p className="hero-subtitle">Software Engineer @ JPMorgan Chase & Co.</p>
                      <p className="hero-subtitle">Graphic Design Coordinator @ Society of Asian Scientists and Engineers (SASE)</p>

                      <div>
                        <a className="logos" href="https://github.com/amyxphan" target="_blank" rel="noopener noreferrer">
                          <img src="/GitHub.png" alt="GitHub" style={{ height: '50px', paddingRight: '4px' }} />
                        </a>
                        <a className="logos" href="https://www.linkedin.com/in/amyphan2/" target="_blank" rel="noopener noreferrer">
                          <img src="/LinkedIn.webp" alt="LinkedIn" style={{ height: '50px' }} />
                        </a>
                        <a className="logos" href="https://drive.google.com/file/d/1OOr9WuLC4ZBiJG985fZDhA3rm3ZSh7Bj/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                          <img src="/Resume.png" alt="Resume" style={{ height: '50px' }} />
                        </a>
                      </div>
                    </header>
                  </section>
                </>
              }
            />

            {/* Other Routes */}
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
