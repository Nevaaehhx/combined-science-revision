/* AQA Combined Science Trilogy, Foundation tier, Biology content (B1-B7).
   Lessons and questions to be populated against the AQA 8464 specification. */
window.CONTENT_BIOLOGY = (function () {
  const topics = [
    { id: 'b1', code: 'B1', name: 'Cell biology', sub: 'Cell structure, transport, division' },
    { id: 'b2', code: 'B2', name: 'Organisation', sub: 'Tissues, digestion, blood, plants' },
    { id: 'b3', code: 'B3', name: 'Infection & response', sub: 'Pathogens, immunity, vaccines, drugs' },
    { id: 'b4', code: 'B4', name: 'Bioenergetics', sub: 'Photosynthesis and respiration' },
    { id: 'b5', code: 'B5', name: 'Homeostasis & response', sub: 'Nervous system, hormones, control' },
    { id: 'b6', code: 'B6', name: 'Inheritance, variation & evolution', sub: 'DNA, genetics, evolution' },
    { id: 'b7', code: 'B7', name: 'Ecology', sub: 'Ecosystems, biodiversity, human impact' }
  ];

  const lessons = {};
  const questions = [];

  return { topics, lessons, questions };
})();
