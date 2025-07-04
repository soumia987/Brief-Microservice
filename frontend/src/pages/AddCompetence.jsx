import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CompetenceForm from '../components/CompetenceForm';
import { createCompetence } from '../services/api';

export default function AddCompetence() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    try {
      await createCompetence(formData);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Ajouter une nouvelle compétence</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      <CompetenceForm onSubmit={handleSubmit} />
    </div>
  );
}