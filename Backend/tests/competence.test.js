// import request from 'supertest';
// import app from '../app.js';
// import Competence from './models/Competence.js';

// describe('Competence API', () => {
//   beforeAll(async () => {
//     // Nettoyer la base de données avant les tests
//     await Competence.deleteMany({});
//   });

//   describe('POST /api/competences', () => {
//     it('should create a new competence', async () => {
//       const res = await request(app)
//         .post('/api/competences')
//         .send({
//           code: 'C1',
//           name: 'Compétence 1',
//           subCompetences: [
//             { code: 'C1.1', name: 'Sous-compétence 1.1', validated: false },
//             { code: 'C1.2', name: 'Sous-compétence 1.2', validated: true }
//           ]
//         });

//       expect(res.statusCode).toEqual(201);
//       expect(res.body).toHaveProperty('code', 'C1');
//       expect(res.body.subCompetences).toHaveLength(2);
//     });

//     it('should return 400 for invalid competence data', async () => {
//       const res = await request(app)
//         .post('/api/competences')
//         .send({
//           code: 'CX', // Code invalide
//           name: '',
//           subCompetences: []
//         });

//       expect(res.statusCode).toEqual(400);
//     });
//   });

//   describe('GET /api/competences', () => {
//     it('should get all competences with status', async () => {
//       const res = await request(app).get('/api/competences');

//       expect(res.statusCode).toEqual(200);
//       expect(Array.isArray(res.body)).toBeTruthy();
//       expect(res.body[0]).toHaveProperty('status');
//     });
//   });

//   describe('PUT /api/competences/:id/evaluation', () => {
//     it('should update sub-competences validation status', async () => {
//       const competence = await Competence.findOne({ code: 'C1' });
      
//       const res = await request(app)
//         .put(`/api/competences/${competence._id}/evaluation`)
//         .send({
//           subCompetences: [
//             { code: 'C1.1', validated: true },
//             { code: 'C1.2', validated: true }
//           ]
//         });

//       expect(res.statusCode).toEqual(200);
//       expect(res.body.status).toBe(true);
//       expect(res.body.subCompetences.find(s => s.code === 'C1.1').validated).toBe(true);
//     });
//   });

//   describe('DELETE /api/competences/:id', () => {
//     it('should delete a competence', async () => {
//       const competence = await Competence.findOne({ code: 'C1' });
      
//       const res = await request(app)
//         .delete(`/api/competences/${competence._id}`);

//       expect(res.statusCode).toEqual(200);
      
//       const deletedCompetence = await Competence.findById(competence._id);
//       expect(deletedCompetence).toBeNull();
//     });
//   });
// });