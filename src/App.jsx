import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
