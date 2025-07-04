import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Suivi des Compétences
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">
            Liste
          </Link>
          <Link to="/add" className="hover:underline">
            Ajouter
          </Link>
        </div>
      </div>
    </nav>
  );
}