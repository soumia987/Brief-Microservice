import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CompetenceList from './pages/CompetenceList';
import AddCompetence from './pages/AddCompetence';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<CompetenceList />} />
            <Route path="/add" element={<AddCompetence />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;