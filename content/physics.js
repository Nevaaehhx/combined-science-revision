/* AQA Combined Science Trilogy, Foundation tier, Physics content (P1-P7).
   Lessons and questions to be populated against the AQA 8464 specification. */
window.CONTENT_PHYSICS = (function () {
  const topics = [
    { id: 'p1', code: 'P1', name: 'Energy', sub: 'Stores, transfers, work, power, efficiency' },
    { id: 'p2', code: 'P2', name: 'Electricity', sub: 'Circuits, current, resistance, mains' },
    { id: 'p3', code: 'P3', name: 'Particle model of matter', sub: 'Density, states, internal energy' },
    { id: 'p4', code: 'P4', name: 'Atomic structure', sub: 'Atoms, radiation, half-life' },
    { id: 'p5', code: 'P5', name: 'Forces', sub: 'Vectors, motion, Newton, momentum' },
    { id: 'p6', code: 'P6', name: 'Waves', sub: 'Transverse, longitudinal, EM spectrum' },
    { id: 'p7', code: 'P7', name: 'Magnetism & electromagnetism', sub: 'Magnets, motor effect, generators' }
  ];

  const lessons = {};
  const questions = [];

  return { topics, lessons, questions };
})();
