import { Route, Routes } from 'react-router-dom';
import About from './pages/about/AboutPage';
import ContactPage from './pages/contact/ContactPage';
import PortfolioPage from './pages/portfolio/PortfolioPage';
import NotFoundPage from './pages/404/NotFoundPage';
import Home from './pages/home/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/portfolio' element={<PortfolioPage />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
