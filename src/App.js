import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Create from './components/create';

function App() {
  return (
    <Router> {/* Wrap everything with Router */}
      <div>
        <Header/>
        <Routes>
          {/* Main page route */}
          <Route path="/" element={<Main />} />
          {/* Create page route */}
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;