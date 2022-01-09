import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import NovoProjeto from './components/pages/NovoProjeto'
import Projetos from './components/pages/Projetos'
import NavBar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import './index.css';

function App() {
  return (
    <div className="App">
      <Router  >
        <NavBar />
        <Container customClass="minHeight">
          <Routes >
              <Route  exact path="/"  element={<Home />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/empresa" element={<Empresa />} />
              <Route path="/novoprojeto" element={<NovoProjeto />} />
              <Route path="/projetos" element={<Projetos />} />
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
