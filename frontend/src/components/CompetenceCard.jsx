import { useState } from 'react';
import StatusBadge from './StatusBadge';
import EvaluationModal from './EvaluationModal';

export default function CompetenceCard({ competence, onUpdate, onDelete }) {
  const [open, setOpen] = useState(false);

  const saveEvaluation = async (subs) => {
    await onUpdate(competence._id, subs);
    setOpen(false);
  };

  return (
    <div className="card">
      <div className="card-header">
        <div>
          <h3>{competence.code} - {competence.name}</h3>
          <StatusBadge isValidated={competence.status === 'validée'} />
        </div>
        <div>
          <button onClick={() => setOpen(true)}>Évaluer</button>
          <button onClick={() => onDelete(competence._id)}>Supprimer</button>
        </div>
      </div>

      <ul className="sub-list">
        {competence.subCompetences.map((sub, i) => (
          <li key={i}>
            <span className={sub.validated ? 'dot green' : 'dot red'}></span>
            {sub.name}
          </li>
        ))}
      </ul>

      <EvaluationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        subCompetences={competence.subCompetences}
        onSave={saveEvaluation}
      />
    </div>
  );
}
