import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Dash from './components/dash';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/happymango" element={<Home />} />
          <Route path="/dash" element={<Dash />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
