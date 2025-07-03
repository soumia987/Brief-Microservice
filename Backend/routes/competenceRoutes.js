import express from 'express';
import {
  getCompetences,
  createCompetence,
  updateEvaluation,
  deleteCompetence
} from '../controllers/competenceController.js';

const router = express.Router();

router.route('/')
  .get(getCompetences)
  .post(createCompetence);

router.route('/:id/evaluation')
  .put(updateEvaluation);

router.route('/:id')
  .delete(deleteCompetence);

export default router;