import mongoose from 'mongoose';
// schema de sous competence
const subCompetenceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  validated: {
    type: Boolean,
    default: false
  }
}, { _id: false });

// schema de competence

const competenceSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    uppercase: true,
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  subCompetences: {
    type: [subCompetenceSchema],
    required: true,
    validate: {
      validator: (v) => Array.isArray(v) && v.length > 0,
      message: 'Au moins une sous-competence est requise'
    }
  }
});

// Méthode pour calculer le statut global
competenceSchema.methods.calculateStatus = function() {
  const { validated, nonValidated } = this.subCompetences.reduce(
    (acc, sub) => {
      sub.validated ? acc.validated++ : acc.nonValidated++;
      return acc;
    },
    { validated: 0, nonValidated: 0 }
  );
  
  return validated >= nonValidated;
};

const Competence = mongoose.model('Competence', competenceSchema);

export default Competence;