import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CyberSecurityDetail from './pages/CyberSecurityDetail';
import PhotographyDetail from './pages/PhotographyDetail';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cybersecurity" element={<CyberSecurityDetail />} />
        <Route path="/photography" element={<PhotographyDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
