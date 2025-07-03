import Competence from '../models/Competence.js';



export const getCompetences = async (req, res) => {
  try {
    const competences = await Competence.find({});
    
    const competencesWithStatus = competences.map(competence => {
      const status = competence.calculateStatus();
      return {
        ...competence.toObject(),
        status
      };
    });

    res.json(competencesWithStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const createCompetence = async (req, res) => {
  try {
    const { code, name, subCompetences } = req.body;
    
    const competence = new Competence({
      code: code.toUpperCase(),
      name,
      subCompetences: subCompetences.map(sub => ({
        ...sub,
        code: sub.code.toUpperCase()
      }))
    });

    const createdCompetence = await competence.save();
    res.status(201).json(createdCompetence);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


export const updateEvaluation = async (req, res) => {
  try {
    const { id } = req.params;
    const { subCompetences } = req.body;

    const competence = await Competence.findById(id);
    
    if (!competence) {
      return res.status(404).json({ message: 'Compétence non trouvée' });
    }

    // Mise a jour des validations
    competence.subCompetences = competence.subCompetences.map(sub => {
      const updatedSub = subCompetences.find(s => s.code === sub.code);
      return updatedSub ? { ...sub, validated: updatedSub.validated } : sub;
    });

    const updatedCompetence = await competence.save();
    const status = updatedCompetence.calculateStatus();

    res.json({
      ...updatedCompetence.toObject(),
      status
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



export const deleteCompetence = async (req, res) => {
  try {
    const { id } = req.params;
    
    const competence = await Competence.findByIdAndDelete(id);
    
    if (!competence) {
      return res.status(404).json({ message: 'Competence non trouvee' });
    }

    res.json({ message: 'Competence supprimee' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};