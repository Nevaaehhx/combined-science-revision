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

  const lessons = {
    b1: {
      intro: "Every living thing is made of cells. Some organisms are just one cell (bacteria, yeast). You're made of trillions of them, organised into tissues and organs. This topic covers what cells look like inside, how they divide to make more of themselves, and how substances get in and out.",
      sections: [
        { h: "Eukaryotic and prokaryotic cells",
          body: ["There are two big categories of cell:",
                 "<ul><li><strong>Eukaryotic cells</strong> have a <strong>nucleus</strong> that holds the genetic material. Animal cells, plant cells, fungal cells and protist cells are all eukaryotic.</li><li><strong>Prokaryotic cells</strong> do NOT have a nucleus. Their genetic material floats freely in the cytoplasm, plus there are smaller loops called <strong>plasmids</strong>. Bacteria are prokaryotic.</li></ul>",
                 "Prokaryotic cells are much <strong>smaller</strong> than eukaryotic cells. They're also much simpler inside."],
          callout: { type: 'key', label: 'Quick rule', text: "If it has a nucleus, it's eukaryotic. If it doesn't, it's prokaryotic. Bacteria are the main prokaryote you need to know." } },
        { h: "Animal cells",
          body: ["All animal cells contain these parts:",
                 "<ul><li><strong>Nucleus</strong>, holds the DNA, controls the cell</li><li><strong>Cytoplasm</strong>, jelly-like fluid where chemical reactions happen</li><li><strong>Cell membrane</strong>, thin layer around the outside, controls what goes in and out</li><li><strong>Mitochondria</strong>, where aerobic respiration happens, releases energy</li><li><strong>Ribosomes</strong>, where proteins are made</li></ul>"],
          diagram: {
            alt: 'Animal cell with labelled nucleus, cytoplasm, cell membrane, mitochondria and ribosomes',
            caption: 'Animal cell, with the five parts you must be able to label at Foundation tier.',
            svg: '<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg">' +
              '<ellipse cx="210" cy="130" rx="150" ry="100" fill="#fef3c7" stroke="#c2410c" stroke-width="2"/>' +
              '<circle cx="190" cy="130" r="36" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>' +
              '<circle cx="190" cy="130" r="6" fill="#c2410c"/>' +
              '<ellipse cx="260" cy="90" rx="22" ry="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
              '<path d="M242 90 Q252 85 262 90 Q272 95 278 90" stroke="#15803d" stroke-width="1" fill="none"/>' +
              '<ellipse cx="140" cy="180" rx="22" ry="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
              '<path d="M122 180 Q132 175 142 180 Q152 185 158 180" stroke="#15803d" stroke-width="1" fill="none"/>' +
              '<circle cx="265" cy="160" r="3" fill="#1d4ed8"/><circle cx="275" cy="170" r="3" fill="#1d4ed8"/>' +
              '<circle cx="255" cy="175" r="3" fill="#1d4ed8"/><circle cx="245" cy="180" r="3" fill="#1d4ed8"/>' +
              '<circle cx="270" cy="180" r="3" fill="#1d4ed8"/><circle cx="160" cy="100" r="3" fill="#1d4ed8"/>' +
              '<line x1="190" y1="130" x2="50" y2="50" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<text x="48" y="44" text-anchor="end" font-size="11" fill="#1a1f2e" font-weight="500">nucleus</text>' +
              '<line x1="260" y1="90" x2="400" y2="50" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<text x="402" y="44" font-size="11" fill="#15803d" font-weight="500">mitochondria</text>' +
              '<line x1="265" y1="160" x2="400" y2="180" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<text x="402" y="184" font-size="11" fill="#1d4ed8" font-weight="500">ribosomes</text>' +
              '<line x1="350" y1="130" x2="430" y2="120" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<text x="395" y="240" font-size="11" fill="#c2410c" font-weight="500">cell membrane</text>' +
              '<line x1="350" y1="130" x2="395" y2="235" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<line x1="220" y1="200" x2="120" y2="240" stroke="#1a1f2e" stroke-width="0.7"/>' +
              '<text x="118" y="244" text-anchor="end" font-size="11" fill="#1a1f2e" font-weight="500">cytoplasm</text>' +
            '</svg>'
          } },
        { h: "Plant cells",
          body: ["Plant cells have everything animal cells have, PLUS three extras:",
                 "<ul><li><strong>Cell wall</strong>, made of cellulose, gives the cell strength and shape</li><li><strong>Chloroplasts</strong>, where photosynthesis happens, contain the green pigment chlorophyll</li><li><strong>Permanent vacuole</strong>, filled with cell sap, keeps the cell rigid (turgid)</li></ul>",
                 "Bacterial (prokaryotic) cells also have a cell wall, but it's not made of cellulose, so don't mix them up."] },
        { h: "Specialised cells",
          body: ["Different cells are <strong>specialised</strong> for different jobs. They have features that suit their function.",
                 "<ul><li><strong>Sperm cell:</strong> long tail to swim, lots of mitochondria for energy, enzymes in the head to penetrate the egg</li><li><strong>Nerve cell (neurone):</strong> very long axon to carry signals, branched dendrites to connect to other neurones</li><li><strong>Muscle cell:</strong> long, lots of mitochondria for energy to contract</li><li><strong>Root hair cell:</strong> long extension to maximise surface area for absorbing water and minerals</li><li><strong>Xylem cell:</strong> hollow, dead, lined with strong lignin, transports water up through plants</li><li><strong>Phloem cell:</strong> living, with sieve plates between cells, transports sugars around the plant</li></ul>"] },
        { h: "Microscopes",
          body: ["A <strong>light microscope</strong> can magnify up to about 2000 times and lets you see whole cells and the nucleus.",
                 "An <strong>electron microscope</strong> has much higher magnification (about 2 million times) and much better <strong>resolution</strong> (how clear the image is). Electron microscopes can show tiny structures like ribosomes and the internal detail of mitochondria.",
                 "<strong>Magnification formula:</strong>",
                 "<strong>magnification = image size &divide; real size</strong>",
                 "Watch your units. Image size is usually in mm. Real size is often in micrometres (&micro;m). 1 mm = 1000 &micro;m."] },
        { h: "Cell division (mitosis)",
          body: ["Body cells divide by <strong>mitosis</strong> to grow, repair damage and replace dead cells.",
                 "The full process is called the <strong>cell cycle</strong>:",
                 "<ul><li><strong>Growth and DNA replication</strong>, the cell grows, makes more sub-cellular parts and copies its DNA so each chromosome has an identical copy</li><li><strong>Mitosis</strong>, the copied chromosomes are pulled to opposite ends of the cell, then the nucleus splits</li><li><strong>Cytokinesis</strong>, the cytoplasm and cell membrane split, leaving two daughter cells</li></ul>",
                 "Each daughter cell is <strong>genetically identical</strong> to the parent cell."],
          callout: { type: 'warn', label: 'Common slip', text: "Mitosis makes IDENTICAL cells. Meiosis (which makes gametes) makes DIFFERENT cells. Foundation only needs mitosis, but don't confuse the names." } },
        { h: "Stem cells",
          body: ["<strong>Stem cells</strong> are cells that haven't specialised yet. They can divide and turn into any type of cell.",
                 "<ul><li><strong>Embryonic stem cells</strong>, from very early embryos, can become any cell type</li><li><strong>Adult stem cells</strong>, found in bone marrow for example, can become a limited range of cell types (mainly blood cells)</li><li><strong>Plant meristem cells</strong>, found in the growing tips of roots and shoots, can become any plant cell type and can be used to clone plants quickly</li></ul>",
                 "<strong>Possible medical uses:</strong> growing replacement organs, treating diabetes (insulin-producing cells), paralysis (nerve cells), and more.",
                 "<strong>Ethical issues:</strong> embryonic stem cells come from embryos, which some people believe is wrong. There's also a risk of cells being rejected or carrying viruses."] },
        { h: "Diffusion",
          body: ["<strong>Diffusion</strong> is the net movement of particles from a high concentration to a low concentration. They move down the <strong>concentration gradient</strong>.",
                 "It's passive, no energy needed. The particles just bounce around randomly and spread out.",
                 "<strong>Examples:</strong>",
                 "<ul><li>Oxygen diffuses from the air in your lungs into your blood</li><li>Carbon dioxide diffuses out of your blood into the air to be breathed out</li><li>Digested food diffuses from the gut into the blood</li></ul>",
                 "<strong>Factors that speed up diffusion:</strong> bigger concentration gradient, higher temperature, larger surface area."] },
        { h: "Osmosis",
          body: ["<strong>Osmosis</strong> is the movement of WATER through a partially permeable membrane, from a region of higher water concentration (dilute solution) to a region of lower water concentration (concentrated solution).",
                 "Think of it as diffusion but for water specifically.",
                 "<strong>Required practical:</strong> investigating osmosis in plant tissue (usually potato cylinders). You cut potato cubes or cylinders, weigh them, leave them in different concentrations of sugar or salt solution, then weigh them again. Cubes in dilute solution gain mass (water moves in), cubes in concentrated solution lose mass (water moves out)."],
          callout: { type: 'key', label: 'Osmosis vs diffusion', text: "Diffusion = any particles moving down a gradient. Osmosis = specifically WATER moving through a partially permeable membrane. Don't say 'water diffuses', say 'water moves by osmosis'." } },
        { h: "Active transport",
          body: ["<strong>Active transport</strong> moves substances AGAINST the concentration gradient, from low to high. Because this is uphill, it <strong>uses energy</strong> from respiration (so it needs mitochondria).",
                 "<strong>Examples:</strong>",
                 "<ul><li>Root hair cells absorb mineral ions from soil into the plant, even though the soil has a lower mineral concentration than the cell</li><li>The small intestine absorbs sugar from the gut into the blood, even when blood sugar is higher than gut sugar</li></ul>"] }
      ],
      keyPoints: [
        "Eukaryotic cells have a nucleus, prokaryotic cells don't",
        "Animal cells: nucleus, cytoplasm, cell membrane, mitochondria, ribosomes",
        "Plant cells have all that PLUS cell wall (cellulose), chloroplasts, permanent vacuole",
        "Specialised cells have features suited to their function (sperm, nerve, muscle, root hair, xylem, phloem)",
        "Light microscopes magnify up to ~2000x; electron microscopes magnify millions of times with better resolution",
        "Magnification = image size &divide; real size",
        "Mitosis produces two genetically identical daughter cells",
        "Stem cells are undifferentiated and can become other cell types",
        "Diffusion: passive movement of particles from high to low concentration",
        "Osmosis: water moving through a partially permeable membrane from dilute to concentrated",
        "Active transport: against the concentration gradient, uses energy from respiration"
      ],
      mistakes: [
        "Saying bacteria are eukaryotic, they're prokaryotic (no nucleus)",
        "Forgetting that plant cells have everything animal cells have plus extras (not 'instead of')",
        "Saying 'water diffuses' instead of 'water moves by osmosis'",
        "Forgetting that active transport needs energy (so cells doing lots of it have lots of mitochondria)",
        "Mixing up resolution and magnification, magnification just makes things bigger, resolution is the clarity"
      ]
    },

    b2: {
      intro: "Cells don't work alone. They group into tissues, tissues form organs, and organs work together as systems. This topic covers the digestive system, the heart and blood, plants' transport tissues, and how lifestyle affects health.",
      sections: [
        { h: "Levels of organisation",
          body: ["From smallest to biggest:",
                 "<ul><li><strong>Cells</strong> &rarr; the basic building block</li><li><strong>Tissues</strong> &rarr; groups of similar cells doing a job (e.g. muscle tissue)</li><li><strong>Organs</strong> &rarr; groups of tissues doing a function (e.g. the stomach)</li><li><strong>Organ systems</strong> &rarr; groups of organs working together (e.g. the digestive system)</li><li><strong>Organism</strong> &rarr; the whole thing (e.g. you)</li></ul>"] },
        { h: "Enzymes",
          body: ["<strong>Enzymes</strong> are biological catalysts. They're proteins. They speed up reactions in the body without being used up.",
                 "Each enzyme has a specific shape on its <strong>active site</strong>. Only one shape of substrate fits, like a key in a lock. This is called the <strong>lock and key model</strong>.",
                 "<strong>Conditions affect enzymes:</strong>",
                 "<ul><li>Higher temperature speeds reactions up, up to a point. Beyond the optimum (around 37&deg;C in humans), the enzyme starts to <strong>denature</strong>, the active site loses its shape and the substrate no longer fits.</li><li>Each enzyme has an optimum pH. Most body enzymes work best around pH 7. The stomach has pH ~2 and uses pepsin, which is optimised for acidic conditions.</li></ul>"],
          callout: { type: 'warn', label: 'Denatured, not killed', text: "Enzymes are not alive, so they can't 'die'. They get denatured, meaning the active site shape is destroyed. Say 'denatured' in the exam." } },
        { h: "The digestive system",
          body: ["Food is broken down by enzymes so the nutrients can be absorbed into the blood.",
                 "<strong>Three main groups of digestive enzymes:</strong>",
                 "<ul><li><strong>Carbohydrases</strong> (e.g. amylase) break down carbohydrates into sugars. Made in the salivary glands, pancreas and small intestine.</li><li><strong>Proteases</strong> break down proteins into amino acids. Made in the stomach, pancreas and small intestine.</li><li><strong>Lipases</strong> break down lipids (fats) into fatty acids and glycerol. Made in the pancreas and small intestine.</li></ul>",
                 "<strong>Bile</strong> is made in the liver and stored in the gall bladder. It does two jobs: it neutralises the acid from the stomach (so enzymes in the small intestine work properly), and it <strong>emulsifies</strong> fats (breaks fat droplets into smaller droplets, increasing surface area for lipase)."] },
        { h: "Food tests",
          body: ["<strong>Required practical:</strong> testing for sugars, starch, protein and lipids.",
                 "<ul><li><strong>Starch:</strong> add iodine. Goes from orange/brown to blue-black if starch present.</li><li><strong>Reducing sugars</strong> (glucose): add Benedict's solution and warm. Goes from blue to brick-red / orange if sugar present.</li><li><strong>Proteins:</strong> add biuret solution. Goes from blue to purple/lilac if protein present.</li><li><strong>Lipids:</strong> add ethanol then water. Cloudy white emulsion forms if lipid present.</li></ul>"] },
        { h: "Heart and circulation",
          body: ["The heart is a double pump made of muscle. It has four chambers:",
                 "<ul><li><strong>Right atrium</strong> &rarr; receives deoxygenated blood from the body</li><li><strong>Right ventricle</strong> &rarr; pumps blood to the lungs</li><li><strong>Left atrium</strong> &rarr; receives oxygenated blood from the lungs</li><li><strong>Left ventricle</strong> &rarr; pumps blood around the body</li></ul>",
                 "The left ventricle has a thicker wall than the right because it has to pump blood much further (around the whole body, not just to the lungs).",
                 "Three types of blood vessel:",
                 "<ul><li><strong>Arteries</strong> carry blood AWAY from the heart. Thick muscular walls to withstand high pressure.</li><li><strong>Capillaries</strong> are tiny, with one-cell-thick walls. Substances diffuse in and out here.</li><li><strong>Veins</strong> carry blood BACK to the heart. Thinner walls, wider lumen, have valves to stop backflow.</li></ul>"],
          diagram: {
            alt: 'Heart with four chambers labelled and major vessels marked',
            caption: 'Heart in diagrammatic view: right side (deoxygenated, blue) sends blood to the lungs; left side (oxygenated, red) sends it round the body.',
            svg: '<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg">' +
              '<rect x="100" y="40" width="100" height="60" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<rect x="220" y="40" width="100" height="60" rx="6" fill="#fee2e2" stroke="#b91c1c" stroke-width="1.5"/>' +
              '<rect x="100" y="110" width="100" height="100" rx="6" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>' +
              '<rect x="220" y="110" width="100" height="100" rx="6" fill="#fecaca" stroke="#b91c1c" stroke-width="5"/>' +
              '<text x="150" y="75" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="600">Right atrium</text>' +
              '<text x="270" y="75" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="600">Left atrium</text>' +
              '<text x="150" y="155" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="600">Right</text>' +
              '<text x="150" y="170" text-anchor="middle" font-size="11" fill="#1d4ed8" font-weight="600">ventricle</text>' +
              '<text x="270" y="155" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="600">Left</text>' +
              '<text x="270" y="170" text-anchor="middle" font-size="11" fill="#b91c1c" font-weight="600">ventricle</text>' +
              '<text x="270" y="195" text-anchor="middle" font-size="9" fill="#b91c1c" font-style="italic">(thicker wall)</text>' +
              '<line x1="120" y1="40" x2="120" y2="20" stroke="#1d4ed8" stroke-width="3"/>' +
              '<text x="80" y="18" font-size="10" fill="#1d4ed8">from body</text>' +
              '<line x1="180" y1="40" x2="180" y2="20" stroke="#1d4ed8" stroke-width="3"/>' +
              '<text x="200" y="18" font-size="10" fill="#1d4ed8">to lungs</text>' +
              '<line x1="240" y1="40" x2="240" y2="20" stroke="#b91c1c" stroke-width="3"/>' +
              '<text x="220" y="18" font-size="10" fill="#b91c1c">from lungs</text>' +
              '<line x1="300" y1="40" x2="300" y2="20" stroke="#b91c1c" stroke-width="3"/>' +
              '<text x="316" y="18" font-size="10" fill="#b91c1c">to body</text>' +
              '<text x="210" y="245" text-anchor="middle" font-size="10" fill="#4a5165" font-style="italic">Left labels are on the right side of the diagram because the heart faces you.</text>' +
            '</svg>'
          } },
        { h: "Blood",
          body: ["Blood has four main components:",
                 "<ul><li><strong>Red blood cells</strong>, carry oxygen, have no nucleus to fit more haemoglobin, are biconcave for surface area</li><li><strong>White blood cells</strong>, fight infection, have a nucleus</li><li><strong>Platelets</strong>, small cell fragments that help clotting</li><li><strong>Plasma</strong>, the liquid part, carries CO<sub>2</sub>, urea, hormones, digested food and antibodies</li></ul>"] },
        { h: "Treating heart problems",
          body: ["<strong>Coronary heart disease</strong>: the coronary arteries (which supply the heart muscle itself) get blocked by fatty deposits.",
                 "<strong>Treatments:</strong>",
                 "<ul><li><strong>Stents</strong>, small mesh tubes inserted to hold an artery open. Lets blood through. Good long-term solution, can be done with a small incision.</li><li><strong>Statins</strong>, drugs that lower bad cholesterol in the blood, slowing fatty deposits. Taken regularly, can have side effects.</li><li><strong>Heart transplants and artificial hearts</strong> for failing hearts. Major surgery, risk of rejection or infection.</li><li><strong>Pacemakers</strong>, small electronic devices to correct heart rhythm.</li></ul>"] },
        { h: "Health and disease",
          body: ["<strong>Health</strong> is a state of physical and mental wellbeing. It's affected by:",
                 "<ul><li>Diseases (communicable and non-communicable)</li><li>Diet, stress, exercise</li><li>Life circumstances</li></ul>",
                 "<strong>Risk factors</strong> increase the chance of getting a disease but don't guarantee it.",
                 "<ul><li><strong>Smoking</strong> increases risk of lung cancer, cardiovascular disease and lung disease</li><li><strong>Obesity</strong> increases risk of type 2 diabetes and cardiovascular disease</li><li><strong>Alcohol</strong> increases risk of liver disease and brain damage</li><li><strong>Carcinogens</strong> (including ionising radiation) increase cancer risk</li></ul>"] },
        { h: "Cancer",
          body: ["<strong>Cancer</strong> is caused by changes in cells that lead to uncontrolled growth and division. The resulting mass of cells is a <strong>tumour</strong>.",
                 "<ul><li><strong>Benign tumours</strong> stay in one place, contained. Not usually life-threatening.</li><li><strong>Malignant tumours</strong> invade other tissues, can spread through the blood to other parts of the body (this is called metastasis), and form secondary tumours. Malignant tumours ARE cancers.</li></ul>"] },
        { h: "Plant tissues and transport",
          body: ["Plants have organs too: leaves (photosynthesis), stems (support and transport), roots (water and mineral absorption).",
                 "<strong>Two transport tissues:</strong>",
                 "<ul><li><strong>Xylem</strong> carries water and minerals UP from roots to leaves. Made of dead, hollow, lignified cells. Movement is called <strong>transpiration</strong>.</li><li><strong>Phloem</strong> carries dissolved sugars (food) from leaves to the rest of the plant. Made of living cells with sieve plates. Movement is called <strong>translocation</strong>.</li></ul>",
                 "Transpiration is faster when it's hot, dry, windy or bright. Plants lose water through tiny holes called <strong>stomata</strong>, mostly on the underside of leaves. Each stoma is surrounded by two <strong>guard cells</strong> that open and close to control water loss."] }
      ],
      keyPoints: [
        "Cells &rarr; tissues &rarr; organs &rarr; organ systems &rarr; organism",
        "Enzymes are biological catalysts, proteins with a specific active site (lock and key)",
        "Enzymes denature above their optimum temperature or outside their optimum pH",
        "Carbohydrases break carbs to sugars, proteases break proteins to amino acids, lipases break lipids to fatty acids + glycerol",
        "Bile neutralises stomach acid and emulsifies fats (increases surface area for lipase)",
        "Food tests: iodine for starch (blue-black), Benedict's for sugar (brick red), biuret for protein (purple), ethanol for lipids (cloudy)",
        "Heart: right side &rarr; lungs, left side &rarr; body. Left ventricle has thicker walls",
        "Arteries away from heart, veins back to heart, capillaries are tiny for diffusion",
        "Red blood cells have no nucleus and are biconcave; plasma carries CO2, urea, hormones, antibodies",
        "Stents hold arteries open, statins lower cholesterol",
        "Xylem carries water up (dead, lignified, transpiration), phloem carries sugar around (living, sieve plates, translocation)",
        "Stomata in the leaf control water loss and gas exchange"
      ],
      mistakes: [
        "Saying enzymes are 'killed' at high temperatures, they get DENATURED",
        "Forgetting that bile is made in the liver but stored in the gall bladder",
        "Confusing arteries and veins, arteries carry blood AWAY from the heart",
        "Saying red blood cells have a nucleus, they don't, that's why they can fit more haemoglobin",
        "Mixing up xylem and phloem, xylem = water (up), phloem = food (around)"
      ]
    },

    b3: {
      intro: "Pathogens are microorganisms that cause disease. This topic covers how they spread, how your body defends itself, and how we use vaccines and drugs to fight them.",
      sections: [
        { h: "Types of pathogen",
          body: ["A <strong>pathogen</strong> is a microorganism that causes infectious (communicable) disease. Four main types:",
                 "<ul><li><strong>Bacteria</strong>, e.g. <em>Salmonella</em> (food poisoning), gonorrhoea</li><li><strong>Viruses</strong>, e.g. measles, HIV, tobacco mosaic virus (in plants)</li><li><strong>Fungi</strong>, e.g. rose black spot</li><li><strong>Protists</strong>, e.g. the malaria parasite</li></ul>",
                 "Bacteria and viruses both reproduce inside the host but in different ways. Bacteria multiply in body fluids and release toxins that damage cells. Viruses live inside cells, take them over to make copies, and then burst out, destroying the cell."] },
        { h: "Specific examples to learn",
          body: ["<strong>Measles</strong> (virus): spread by droplets in coughs and sneezes. Fever, red skin rash. Can be serious. Vaccine via the MMR jab.",
                 "<strong>HIV</strong> (virus): spread by sexual contact or exchange of body fluids. Attacks immune system. Late-stage HIV is called AIDS. Treated with antiretroviral drugs.",
                 "<strong>Tobacco mosaic virus (TMV)</strong>: plant disease. Causes a mosaic pattern of discolouration on leaves. Reduces photosynthesis and so yield.",
                 "<strong>Salmonella</strong> (bacteria): food poisoning. From raw or undercooked meat and poultry. Causes fever, vomiting, diarrhoea. UK farmers vaccinate chickens to reduce it.",
                 "<strong>Gonorrhoea</strong> (bacteria): sexually transmitted. Yellow/green discharge, painful urination. Was easily treated with penicillin until resistant strains appeared. Use barrier contraception (condoms) to prevent.",
                 "<strong>Rose black spot</strong> (fungus): purple/black spots on rose leaves. Spread by wind and water. Treated with fungicides or by removing affected leaves.",
                 "<strong>Malaria</strong> (protist): spread by mosquitoes (vector). Causes fever, can be fatal. Prevent by avoiding bites (mosquito nets, repellents) and by killing mosquitoes."] },
        { h: "Reducing the spread of disease",
          body: ["<ul><li><strong>Hygiene:</strong> hand washing, food hygiene, disinfecting surfaces</li><li><strong>Isolating infected people</strong> so they can't pass it on</li><li><strong>Destroying vectors</strong> like mosquitoes</li><li><strong>Vaccination</strong> against specific diseases</li></ul>"] },
        { h: "Body defences",
          body: ["Your body has three lines of defence against pathogens:",
                 "<strong>1. Stopping them getting in:</strong>",
                 "<ul><li>Skin is a physical barrier and produces antimicrobial substances</li><li>Nose hairs and mucus trap pathogens</li><li>Trachea and bronchi produce mucus, which is moved up by cilia (tiny hairs) to be swallowed</li><li>Stomach acid kills swallowed pathogens</li></ul>",
                 "<strong>2. White blood cells (if pathogens get in):</strong>",
                 "<ul><li><strong>Phagocytosis</strong>: white blood cells engulf and digest pathogens</li><li><strong>Antibody production</strong>: each pathogen has unique markers (antigens). White blood cells make antibodies that lock onto those antigens and destroy the pathogen.</li><li><strong>Antitoxin production</strong>: antitoxins neutralise toxins released by bacteria.</li></ul>"],
          callout: { type: 'key', label: 'Specific antibodies', text: "Each antibody fits ONE specific antigen, like enzyme and substrate. That's why you need a different antibody for every pathogen." } },
        { h: "Vaccination",
          body: ["A <strong>vaccine</strong> contains small amounts of dead or weakened pathogen.",
                 "When injected, your white blood cells make antibodies to it without you actually getting ill. If the real pathogen attacks later, your body can make antibodies <strong>quickly</strong>, so you don't get sick.",
                 "<strong>Herd immunity:</strong> if enough people are vaccinated, the pathogen can't spread easily, protecting people who can't be vaccinated (babies, the immunocompromised)."] },
        { h: "Antibiotics and painkillers",
          body: ["<strong>Antibiotics</strong> (e.g. penicillin) kill bacteria inside the body. They do NOT work on viruses, because viruses live inside our cells, and any drug strong enough to kill the virus would also damage the cell.",
                 "Specific bacteria need specific antibiotics. Misuse of antibiotics has led to <strong>antibiotic-resistant bacteria</strong> like MRSA. The bacteria mutate, the resistant ones survive treatment and reproduce, and you end up with a strain that the antibiotic can't kill.",
                 "<strong>Painkillers</strong> (e.g. paracetamol) treat the symptoms of a disease but don't kill the pathogen.",
                 "<strong>How to slow antibiotic resistance:</strong> doctors should only prescribe antibiotics when needed, and patients should finish the full course every time."] },
        { h: "New drugs",
          body: ["<strong>Where drugs come from:</strong>",
                 "<ul><li>Many traditional drugs were extracted from plants (e.g. digitalis from foxgloves) or microorganisms (penicillin from <em>Penicillium</em> mould)</li><li>Most new drugs are now synthesised by chemists, but the starting point often comes from a natural source</li></ul>",
                 "<strong>Stages of drug testing:</strong>",
                 "<ul><li><strong>Preclinical</strong>: tested on cells, tissues, then live animals. Checks for toxicity and effectiveness.</li><li><strong>Clinical trials on healthy volunteers</strong>: starts with very low doses, checks safety and side effects.</li><li><strong>Clinical trials on patients</strong>: finds the right dose, checks effectiveness. Uses a <strong>double-blind, placebo-controlled</strong> design where possible (neither the patient nor the doctor knows who got the real drug).</li></ul>"] }
      ],
      keyPoints: [
        "Pathogens come in four types: bacteria, viruses, fungi, protists",
        "Bacteria multiply and release toxins; viruses take over cells and burst them",
        "Spread is reduced by hygiene, isolation, killing vectors, vaccination",
        "Skin, mucus, cilia and stomach acid keep most pathogens out",
        "White blood cells use phagocytosis, antibodies and antitoxins to fight infection",
        "Vaccines contain dead or weakened pathogen, prepare white blood cells to respond fast",
        "Antibiotics kill bacteria, not viruses",
        "Antibiotic resistance comes from over-use and incomplete courses",
        "Drug testing: preclinical (cells, tissues, animals) then clinical trials on humans (healthy then patients)",
        "Clinical trials use double-blind, placebo-controlled designs to avoid bias"
      ],
      mistakes: [
        "Saying antibiotics work on viruses, they do NOT, only on bacteria",
        "Calling vaccines 'antibodies', they're actually the dead/weakened pathogen that makes you produce antibodies",
        "Forgetting to mention 'dead or weakened' when defining a vaccine",
        "Saying painkillers cure infections, they only treat symptoms",
        "Saying antibiotic resistance evolves in YOU, it evolves in the BACTERIA"
      ]
    },

    b4: {
      intro: "Living things need energy to grow, move, repair and reproduce. Bioenergetics is about two opposite reactions: photosynthesis (where plants build glucose using light) and respiration (where every living thing releases energy from glucose).",
      sections: [
        { h: "Photosynthesis",
          body: ["Plants use light energy to combine carbon dioxide and water into glucose, releasing oxygen as a waste product.",
                 "<strong>Word equation:</strong>",
                 "<strong>carbon dioxide + water &rarr; glucose + oxygen</strong>",
                 "<strong>Symbol equation:</strong>",
                 "<strong>6CO<sub>2</sub> + 6H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub></strong> (light needed, chlorophyll catalyses)",
                 "Photosynthesis is <strong>endothermic</strong>, energy is taken IN from the surroundings (specifically from sunlight). It happens in the <strong>chloroplasts</strong>, mainly in leaf cells."] },
        { h: "Factors affecting photosynthesis",
          body: ["The rate of photosynthesis is limited by whichever of these is in shortest supply (the <strong>limiting factor</strong>):",
                 "<ul><li><strong>Light intensity</strong>, more light usually means more photosynthesis (up to a limit)</li><li><strong>Carbon dioxide concentration</strong>, more CO<sub>2</sub> usually speeds it up</li><li><strong>Temperature</strong>, warmer is faster, but too hot will denature the enzymes that drive the reaction</li><li><strong>Amount of chlorophyll</strong>, if leaves are damaged or pale, there's less chlorophyll to absorb light</li></ul>",
                 "Farmers use this in <strong>greenhouses</strong>: extra lighting, extra CO<sub>2</sub> and a controlled temperature all push photosynthesis higher, giving bigger yields. The cost has to be balanced against the extra produce."],
          callout: { type: 'key', label: 'Inverse square law (for light)', text: "Light intensity decreases as 1 &divide; distance<sup>2</sup>. Double the distance from a lamp, you get a quarter of the light. Worth knowing for the required practical." } },
        { h: "Uses of glucose in plants",
          body: ["The plant uses the glucose it makes in several ways:",
                 "<ul><li><strong>Respiration</strong>, to release energy</li><li><strong>Making cellulose</strong> for cell walls</li><li><strong>Making amino acids</strong>, by combining with nitrate ions from the soil. Amino acids are used to make proteins.</li><li><strong>Stored as starch</strong> in the leaves and other parts of the plant</li><li><strong>Stored as fats and oils</strong> in seeds</li></ul>"] },
        { h: "Respiration",
          body: ["Every living cell respires all the time. <strong>Respiration releases energy from glucose</strong>. It's exothermic (energy is given out).",
                 "The energy released is used for:",
                 "<ul><li>Movement, including muscle contraction</li><li>Keeping warm</li><li>Building larger molecules (e.g. proteins, lipids)</li><li>Active transport</li></ul>"] },
        { h: "Aerobic respiration",
          body: ["<strong>Aerobic</strong> means 'with oxygen'. It's the form of respiration that happens most of the time.",
                 "<strong>Word equation:</strong>",
                 "<strong>glucose + oxygen &rarr; carbon dioxide + water</strong>",
                 "<strong>Symbol equation:</strong>",
                 "<strong>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O</strong>",
                 "Notice this is the EXACT REVERSE of photosynthesis. Aerobic respiration happens mainly in the mitochondria."] },
        { h: "Anaerobic respiration",
          body: ["<strong>Anaerobic</strong> means 'without oxygen'. It happens when oxygen can't be supplied fast enough, for example during very intense exercise.",
                 "<strong>In animal cells (including yours, in muscle):</strong>",
                 "<strong>glucose &rarr; lactic acid</strong>",
                 "Lactic acid builds up in muscles and causes the burning, tired feeling. It must be broken down later, which needs oxygen (the <strong>oxygen debt</strong>).",
                 "<strong>In yeast and plant cells:</strong>",
                 "<strong>glucose &rarr; ethanol + carbon dioxide</strong>",
                 "This is called <strong>fermentation</strong>. It's used to make bread (the CO<sub>2</sub> makes dough rise) and alcoholic drinks (the ethanol)."],
          callout: { type: 'warn', label: 'Less efficient', text: "Anaerobic respiration releases far less energy per glucose molecule than aerobic. The body uses it only when forced to." } },
        { h: "Response to exercise",
          body: ["When you exercise:",
                 "<ul><li><strong>Heart rate increases</strong>, pumps blood faster</li><li><strong>Breathing rate and depth increase</strong>, more oxygen taken in, more CO<sub>2</sub> removed</li><li><strong>More glucose is used</strong>, supplied from the blood and from stored glycogen in muscles</li></ul>",
                 "If you can't supply oxygen fast enough, muscles start anaerobic respiration. Lactic acid builds up. After exercise, you keep breathing hard for a while, the <strong>oxygen debt</strong>, to take in extra oxygen to break down the lactic acid (into carbon dioxide and water)."] }
      ],
      keyPoints: [
        "Photosynthesis: CO2 + water &rarr; glucose + oxygen (endothermic, needs light)",
        "Symbol equation: 6CO2 + 6H2O &rarr; C6H12O6 + 6O2",
        "Happens in the chloroplasts using chlorophyll",
        "Limiting factors: light intensity, CO2, temperature, chlorophyll",
        "Greenhouses control light, CO2 and temperature to boost yields",
        "Glucose uses: respiration, cellulose, amino acids (with nitrates), starch storage, oils",
        "Respiration releases energy from glucose, exothermic, in all living cells",
        "Aerobic respiration: glucose + oxygen &rarr; CO2 + water (in mitochondria)",
        "Anaerobic in muscle: glucose &rarr; lactic acid (less energy, builds up)",
        "Anaerobic in yeast/plants: glucose &rarr; ethanol + CO2 (fermentation)",
        "Exercise raises heart rate, breathing rate, glucose use; oxygen debt is paid back after"
      ],
      mistakes: [
        "Confusing the equation for photosynthesis with respiration, they're opposites",
        "Saying photosynthesis is exothermic, it's endothermic (takes energy in from light)",
        "Forgetting that anaerobic respiration in muscle produces lactic ACID, not ethanol",
        "Saying 'creates energy', energy isn't created, it's transferred from one store to another",
        "Mixing up oxygen debt with carbon debt"
      ]
    },

    b5: {
      intro: "Homeostasis is keeping your internal conditions steady, even when the outside world changes. Your body controls temperature, water, glucose and many other things. This topic covers how the nervous system and the endocrine (hormone) system make all that happen.",
      sections: [
        { h: "What is homeostasis?",
          body: ["<strong>Homeostasis</strong> is the regulation of the internal conditions of a cell or organism to keep them within an optimal range, despite changes in the environment.",
                 "Things controlled include:",
                 "<ul><li>Body temperature (around 37&deg;C in humans)</li><li>Blood glucose concentration</li><li>Water and ion balance</li></ul>",
                 "All control systems include three parts:",
                 "<ul><li><strong>Receptors</strong> detect changes in the environment (the stimulus)</li><li><strong>Coordination centres</strong> (like the brain or pancreas) receive and process information</li><li><strong>Effectors</strong> (muscles or glands) bring about the response</li></ul>"] },
        { h: "The nervous system",
          body: ["The nervous system uses electrical signals carried by <strong>nerve cells (neurones)</strong>.",
                 "<strong>Reflex arc</strong> for an automatic, fast response (e.g. pulling your hand from a hot object):",
                 "<ul><li><strong>Stimulus</strong> &rarr; receptor (in the skin)</li><li>Signal travels along a <strong>sensory neurone</strong> to the spinal cord</li><li>A <strong>relay neurone</strong> in the spinal cord passes the signal to a <strong>motor neurone</strong></li><li>Motor neurone carries the signal to the muscle (effector)</li><li>Muscle contracts (response, e.g. pulling hand away)</li></ul>",
                 "Reflexes are <strong>automatic and rapid</strong> because the signal doesn't have to go to the brain, only to the spinal cord. This helps protect you from harm.",
                 "Between two neurones is a small gap called a <strong>synapse</strong>. The signal crosses the synapse using chemicals."],
          diagram: {
            alt: 'Reflex arc: stimulus to receptor to sensory neurone, relay neurone in spinal cord, motor neurone to effector',
            caption: 'Reflex arc: signal travels via the spinal cord, bypassing the brain for speed.',
            svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">' +
              '<text x="40" y="30" font-size="11" fill="#c2410c" font-weight="700">STIMULUS</text>' +
              '<text x="40" y="45" font-size="10" fill="#4a5165">(hot object)</text>' +
              '<circle cx="60" cy="80" r="10" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>' +
              '<text x="76" y="84" font-size="10" fill="#1a1f2e">receptor</text>' +
              '<path d="M 60 90 L 60 130 L 200 130" stroke="#1d4ed8" stroke-width="2" fill="none" marker-end="url(#arrow2)"/>' +
              '<defs><marker id="arrow2" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1d4ed8"/></marker></defs>' +
              '<text x="100" y="122" font-size="10" fill="#1d4ed8">sensory neurone</text>' +
              '<rect x="200" y="105" width="60" height="50" rx="6" fill="#dcfce7" stroke="#15803d" stroke-width="1.5"/>' +
              '<text x="230" y="128" text-anchor="middle" font-size="10" fill="#15803d" font-weight="600">spinal</text>' +
              '<text x="230" y="142" text-anchor="middle" font-size="10" fill="#15803d" font-weight="600">cord</text>' +
              '<text x="230" y="98" text-anchor="middle" font-size="9" fill="#15803d">(relay neurone)</text>' +
              '<path d="M 260 130 L 400 130 L 400 90" stroke="#c2410c" stroke-width="2" fill="none" marker-end="url(#arrow3)"/>' +
              '<defs><marker id="arrow3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#c2410c"/></marker></defs>' +
              '<text x="320" y="122" font-size="10" fill="#c2410c">motor neurone</text>' +
              '<circle cx="400" cy="80" r="10" fill="#fef3c7" stroke="#a16207" stroke-width="1.5"/>' +
              '<text x="384" y="84" text-anchor="end" font-size="10" fill="#1a1f2e">effector</text>' +
              '<text x="380" y="55" font-size="10" fill="#4a5165">(muscle)</text>' +
              '<text x="380" y="40" font-size="11" fill="#c2410c" font-weight="700">RESPONSE</text>' +
              '<text x="230" y="180" text-anchor="middle" font-size="10" fill="#4a5165" font-style="italic">brain not involved &mdash; reflex is fast and automatic</text>' +
            '</svg>'
          } },
        { h: "The brain and eye (overview)",
          body: ["The brain is the most complex organ. It has three main parts you should know:",
                 "<ul><li><strong>Cerebral cortex</strong>, the wrinkly outer layer, involved in language, memory, consciousness</li><li><strong>Cerebellum</strong>, at the back/bottom, controls balance and coordination of movements</li><li><strong>Medulla</strong>, deep down, controls unconscious actions like heartbeat and breathing</li></ul>",
                 "The eye is a sense organ containing <strong>light receptors</strong>. The pupil controls how much light gets in. The lens focuses light onto the retina."] },
        { h: "Hormones and the endocrine system",
          body: ["The <strong>endocrine system</strong> is glands that release chemicals called <strong>hormones</strong> directly into the blood. Hormones travel to target organs and produce an effect.",
                 "<strong>Nervous vs hormonal comparison:</strong>",
                 "<ul><li><strong>Nervous</strong>: electrical signal, very fast, short-lived effect, targets specific area</li><li><strong>Hormonal</strong>: chemical signal, slower, longer-lasting effect, affects any target with the right receptors</li></ul>",
                 "<strong>Key glands and what they make:</strong>",
                 "<ul><li><strong>Pituitary</strong> (master gland in the brain), releases hormones that control other glands</li><li><strong>Pancreas</strong>, insulin and glucagon (control blood glucose)</li><li><strong>Thyroid</strong>, thyroxine (controls metabolic rate)</li><li><strong>Adrenal glands</strong>, adrenaline (fight or flight)</li><li><strong>Ovaries and testes</strong>, sex hormones (oestrogen, testosterone)</li></ul>"] },
        { h: "Controlling blood glucose",
          body: ["After you eat, blood glucose rises. The pancreas detects this and releases <strong>insulin</strong>. Insulin causes glucose to move into liver and muscle cells, where it's stored as <strong>glycogen</strong>. Blood glucose drops back to normal.",
                 "When you haven't eaten for a while, blood glucose falls. The pancreas releases <strong>glucagon</strong>, which causes glycogen to be turned back into glucose and released into the blood. Blood glucose rises back to normal.",
                 "<strong>Diabetes</strong>:",
                 "<ul><li><strong>Type 1</strong>: pancreas doesn't produce enough insulin. Treated with insulin injections, usually starts in childhood.</li><li><strong>Type 2</strong>: body cells stop responding to insulin properly. Risk factors include obesity. Treated with diet, exercise and sometimes medication.</li></ul>"] },
        { h: "Hormones in reproduction",
          body: ["At puberty, reproductive hormones cause secondary sexual characteristics to develop.",
                 "<ul><li>In males, <strong>testosterone</strong> is made by the testes. Causes facial hair, voice changes, sperm production.</li><li>In females, <strong>oestrogen</strong> is made by the ovaries. Causes breast development, hip widening, the menstrual cycle.</li></ul>",
                 "<strong>The menstrual cycle</strong>: roughly 28 days. Four hormones interact (FSH, LH, oestrogen, progesterone) to control egg release and the uterus lining.",
                 "<strong>Contraception</strong> can be hormonal (the pill stops ovulation) or non-hormonal (condoms, diaphragms). Barrier methods also protect against sexually transmitted infections."] }
      ],
      keyPoints: [
        "Homeostasis keeps internal conditions stable (temperature, glucose, water)",
        "Control systems have receptors, coordination centres, effectors",
        "Nervous system uses neurones and electrical signals; fast, short-lived",
        "Reflex arc: stimulus &rarr; receptor &rarr; sensory neurone &rarr; relay (spinal cord) &rarr; motor neurone &rarr; effector",
        "Synapses are tiny gaps between neurones, crossed by chemicals",
        "Brain: cerebral cortex (consciousness), cerebellum (movement), medulla (unconscious)",
        "Endocrine system uses hormones in the blood; slower, longer-lasting",
        "Pancreas controls blood glucose with insulin (lowers) and glucagon (raises)",
        "Type 1 diabetes: no insulin, treated with injections",
        "Type 2 diabetes: poor response to insulin, linked to obesity, treated with diet/exercise",
        "Reproductive hormones: testosterone (males), oestrogen (females)"
      ],
      mistakes: [
        "Saying 'response' when you mean the whole reflex arc, the response is just the last step",
        "Saying reflexes go through the brain, they don't (that's what makes them fast)",
        "Confusing insulin and glucagon, insulin LOWERS blood glucose, glucagon RAISES it",
        "Mixing up Type 1 and Type 2 diabetes",
        "Calling oestrogen 'estrogen', AQA uses the British spelling"
      ]
    },

    b6: {
      intro: "This topic covers how characteristics are passed from parents to offspring (genetics), how living things vary, and how species evolve over long periods. It also covers classification and the impact of selective breeding and genetic engineering.",
      sections: [
        { h: "Sexual and asexual reproduction",
          body: ["<strong>Sexual reproduction</strong> involves two parents. Sex cells (gametes) from each parent fuse at fertilisation. Gametes are made by <strong>meiosis</strong>, which produces cells with half the normal number of chromosomes. Sexual reproduction creates <strong>variation</strong> in offspring because they get a mix of both parents' genes.",
                 "<strong>Asexual reproduction</strong> involves one parent. Offspring are <strong>genetically identical clones</strong> made by mitosis. Faster, no need to find a mate, but no variation.",
                 "<strong>Examples:</strong> bacteria reproduce asexually by splitting. Strawberry plants send out runners. Humans only reproduce sexually."] },
        { h: "DNA, genes, chromosomes",
          body: ["<strong>DNA</strong> is the molecule that carries genetic information. It's a long polymer of two strands twisted into a <strong>double helix</strong>.",
                 "DNA is organised into <strong>chromosomes</strong>. Humans have 23 pairs (46 chromosomes total) in every body cell. Gametes have 23 single chromosomes.",
                 "A <strong>gene</strong> is a short section of DNA that codes for a particular sequence of amino acids, which makes a particular protein. Different proteins do different jobs in the body, so genes ultimately decide what makes you 'you'.",
                 "The whole DNA in an organism is its <strong>genome</strong>. The human genome has been completely sequenced. This helps us understand inherited disorders and develop better treatments."],
          diagram: {
            alt: 'Hierarchy from cell to nucleus to chromosome to DNA double helix',
            caption: 'Body cell &rarr; nucleus &rarr; chromosome &rarr; DNA double helix. A gene is a short section of DNA.',
            svg: '<svg viewBox="0 0 440 220" xmlns="http://www.w3.org/2000/svg">' +
              '<ellipse cx="55" cy="110" rx="40" ry="30" fill="#fef3c7" stroke="#c2410c" stroke-width="1.5"/>' +
              '<circle cx="55" cy="110" r="14" fill="#fed7aa" stroke="#c2410c"/>' +
              '<text x="55" y="170" text-anchor="middle" font-size="10" fill="#1a1f2e">cell</text>' +
              '<path d="M 95 110 L 130 110" stroke="#4a5165" marker-end="url(#dna1)"/>' +
              '<defs><marker id="dna1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5165"/></marker></defs>' +
              '<circle cx="155" cy="110" r="22" fill="#fed7aa" stroke="#c2410c" stroke-width="1.5"/>' +
              '<path d="M 145 100 Q 155 90 165 100 Q 175 110 165 120 Q 155 130 145 120 Q 135 110 145 100" fill="none" stroke="#c2410c" stroke-width="1"/>' +
              '<text x="155" y="170" text-anchor="middle" font-size="10" fill="#1a1f2e">nucleus</text>' +
              '<path d="M 180 110 L 210 110" stroke="#4a5165" marker-end="url(#dna1)"/>' +
              '<path d="M 240 70 Q 230 110 240 150 M 240 70 Q 250 110 240 150" stroke="#1d4ed8" stroke-width="3" fill="none"/>' +
              '<text x="240" y="170" text-anchor="middle" font-size="10" fill="#1a1f2e">chromosome</text>' +
              '<path d="M 265 110 L 295 110" stroke="#4a5165" marker-end="url(#dna1)"/>' +
              '<path d="M 320 60 Q 335 80 320 100 Q 305 120 320 140 Q 335 160 320 180" stroke="#c2410c" stroke-width="2.5" fill="none"/>' +
              '<path d="M 360 60 Q 345 80 360 100 Q 375 120 360 140 Q 345 160 360 180" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>' +
              '<line x1="320" y1="60" x2="360" y2="60" stroke="#4a5165" stroke-width="1.5"/>' +
              '<line x1="333" y1="80" x2="347" y2="80" stroke="#4a5165" stroke-width="1"/>' +
              '<line x1="320" y1="100" x2="360" y2="100" stroke="#4a5165" stroke-width="1.5"/>' +
              '<line x1="333" y1="120" x2="347" y2="120" stroke="#4a5165" stroke-width="1"/>' +
              '<line x1="320" y1="140" x2="360" y2="140" stroke="#4a5165" stroke-width="1.5"/>' +
              '<line x1="333" y1="160" x2="347" y2="160" stroke="#4a5165" stroke-width="1"/>' +
              '<line x1="320" y1="180" x2="360" y2="180" stroke="#4a5165" stroke-width="1.5"/>' +
              '<text x="340" y="200" text-anchor="middle" font-size="10" fill="#1a1f2e">DNA double helix</text>' +
              '<text x="410" y="60" text-anchor="middle" font-size="10" fill="#15803d" font-weight="600">a gene</text>' +
              '<rect x="385" y="85" width="50" height="40" fill="none" stroke="#15803d" stroke-width="1.5" stroke-dasharray="3 2"/>' +
            '</svg>'
          } },
        { h: "Genetic inheritance",
          body: ["Each gene exists in different versions called <strong>alleles</strong>. You inherit one allele from each parent.",
                 "<ul><li><strong>Dominant</strong> alleles (capital letter, e.g. B) show up if even one copy is present.</li><li><strong>Recessive</strong> alleles (lower case, e.g. b) only show up if BOTH copies are recessive.</li><li><strong>Homozygous</strong>: two copies the same (BB or bb).</li><li><strong>Heterozygous</strong>: two different copies (Bb).</li></ul>",
                 "<strong>Genotype</strong>: the combination of alleles you have. <strong>Phenotype</strong>: the physical characteristic that results.",
                 "Use a <strong>Punnett square</strong> to predict offspring ratios. Cross Bb &times; Bb gives BB, Bb, Bb, bb. That's 1 BB : 2 Bb : 1 bb, or a 3 : 1 ratio of dominant : recessive phenotypes."] },
        { h: "Inherited disorders",
          body: ["Some disorders are caused by inheriting certain alleles:",
                 "<ul><li><strong>Cystic fibrosis</strong>, caused by a recessive allele. You need two copies (homozygous recessive) to have it. Affects cell membranes; thick mucus builds up in lungs and digestive system.</li><li><strong>Polydactyly</strong>, caused by a dominant allele. You only need one copy to have it. Causes extra fingers or toes; not usually serious.</li></ul>",
                 "<strong>Embryonic screening</strong> lets parents check whether an embryo carries an inherited disorder before implantation. Raises ethical questions about which embryos are selected."] },
        { h: "Sex determination",
          body: ["One of the 23 chromosome pairs decides biological sex.",
                 "<ul><li>Females have <strong>XX</strong></li><li>Males have <strong>XY</strong></li></ul>",
                 "Eggs always carry X. Sperm carry either X or Y. The sperm therefore determines the sex of the child. Punnett square gives a 50:50 ratio."] },
        { h: "Variation and evolution",
          body: ["<strong>Variation</strong> is differences between individuals. It comes from genetic causes (different alleles), environmental causes (e.g. tan from sun exposure), or a combination (height).",
                 "<strong>Mutations</strong> are random changes to DNA. Most have no effect, some are harmful, very rarely they're beneficial.",
                 "<strong>Evolution by natural selection</strong> (Darwin):",
                 "<ul><li>Variation exists in any population (much of it from mutations)</li><li>Some individuals have features that help them survive better in their environment</li><li>Those survivors are more likely to reproduce and pass their alleles on</li><li>Over many generations, the population becomes better suited to its environment</li></ul>"] },
        { h: "Speciation and extinction",
          body: ["If two populations of a species become isolated and adapt to different environments, they can change so much that they can no longer breed together. They become two different <strong>species</strong>.",
                 "<strong>Extinction</strong> happens when no individuals of a species remain. Causes include habitat destruction, climate change, new predators, new diseases and human activities."] },
        { h: "Selective breeding and genetic engineering",
          body: ["<strong>Selective breeding</strong> means humans choose which plants or animals breed, to pass on desirable features. Used for thousands of years.",
                 "<ul><li>Dog breeds, all from wolves</li><li>Cattle bred for more milk or more meat</li><li>Wheat bred for bigger yield or disease resistance</li></ul>",
                 "Risk: limits the gene pool, makes the population vulnerable to disease.",
                 "<strong>Genetic engineering</strong> takes a gene from one organism and inserts it into another. Examples: bacteria that make human insulin, crops resistant to insect pests (Bt cotton), golden rice (extra vitamin A).",
                 "Concerns: ethical issues, long-term safety, environmental impact, control of food supply."] }
      ],
      keyPoints: [
        "Sexual reproduction: 2 parents, meiosis, gametes, variation",
        "Asexual reproduction: 1 parent, mitosis, identical clones",
        "DNA is a double helix; genes are sections of DNA coding for proteins",
        "Humans have 23 pairs of chromosomes (46 in body cells, 23 in gametes)",
        "Alleles: dominant (capital) shown even if one copy; recessive (lowercase) needs two copies",
        "Use a Punnett square to predict offspring proportions",
        "XX female, XY male; sperm determines sex (50:50)",
        "Cystic fibrosis is recessive; polydactyly is dominant",
        "Variation: genetic, environmental, or both",
        "Natural selection: variation, differential survival, reproduction, change over generations",
        "Selective breeding chooses for traits; genetic engineering moves genes between species"
      ],
      mistakes: [
        "Mixing up alleles and chromosomes, an allele is a version of a gene, a chromosome is the whole structure",
        "Drawing Punnett squares with wrong labels, label parents' alleles on top and side",
        "Calling 'survival of the fittest' just about strength, fittest means best suited to the environment",
        "Saying evolution is goal-directed, it's not, mutations are random, the environment selects",
        "Saying species 'choose' to evolve, individuals don't change, populations change over generations"
      ]
    },

    b7: {
      intro: "Ecology is about how living things interact with each other and their environment. This topic covers food chains, the carbon and water cycles, biodiversity, and the effect humans have on the planet.",
      sections: [
        { h: "Ecosystems",
          body: ["An <strong>ecosystem</strong> is the interaction between a community of living organisms (the biotic part) and their non-living environment (the abiotic part).",
                 "<ul><li><strong>Habitat</strong>: the place an organism lives</li><li><strong>Population</strong>: all the individuals of one species in a habitat</li><li><strong>Community</strong>: all the populations of different species in a habitat</li><li><strong>Ecosystem</strong>: community + abiotic environment</li></ul>",
                 "Organisms compete for resources (food, water, light, mates). They depend on each other (<strong>interdependence</strong>). A stable community is one where all species and environmental factors are roughly balanced."] },
        { h: "Abiotic and biotic factors",
          body: ["<strong>Abiotic (non-living) factors:</strong>",
                 "<ul><li>Light intensity</li><li>Temperature</li><li>Moisture / soil pH / mineral content</li><li>Wind intensity and direction</li><li>CO<sub>2</sub> levels (for plants), O<sub>2</sub> levels (for aquatic animals)</li></ul>",
                 "<strong>Biotic (living) factors:</strong>",
                 "<ul><li>Availability of food</li><li>New predators</li><li>New pathogens (disease)</li><li>Competition between species</li></ul>"] },
        { h: "Adaptations",
          body: ["Organisms have features that help them survive in their environment. Three types of adaptation:",
                 "<ul><li><strong>Structural</strong>, body parts (e.g. polar bear's thick fur and white camouflage)</li><li><strong>Behavioural</strong>, things they do (e.g. birds migrating)</li><li><strong>Functional</strong>, body processes (e.g. desert animals producing very concentrated urine)</li></ul>",
                 "<strong>Extremophiles</strong> live in extreme conditions: very hot, very cold, very salty, very acidic. Bacteria in hot springs, polar bears in the Arctic."] },
        { h: "Food chains and food webs",
          body: ["A <strong>food chain</strong> shows what eats what:",
                 "<strong>Producer &rarr; primary consumer &rarr; secondary consumer &rarr; tertiary consumer</strong>",
                 "<ul><li><strong>Producers</strong> are plants and algae that photosynthesise. They start every food chain.</li><li><strong>Primary consumers</strong> eat producers (herbivores).</li><li><strong>Secondary consumers</strong> eat primary consumers.</li><li><strong>Tertiary consumers</strong> eat secondary consumers.</li><li><strong>Apex predators</strong> are at the top with no natural predators.</li></ul>",
                 "Numbers in food chains follow patterns. If a predator's population goes up, prey numbers drop. Then with less food, predator numbers drop. Prey numbers recover. This is the predator-prey cycle."] },
        { h: "Cycles in nature",
          body: ["<strong>The water cycle</strong>: evaporation from oceans &rarr; condensation into clouds &rarr; precipitation (rain/snow) &rarr; runs back to oceans. Plants take water from the soil and lose it by transpiration, also adding to the cycle.",
                 "<strong>The carbon cycle</strong>:",
                 "<ul><li>CO<sub>2</sub> from the air is taken in by plants for photosynthesis &rarr; turned into glucose &rarr; built into plant tissues</li><li>Animals eat plants (or other animals), so the carbon moves up the food chain</li><li>Respiration (by plants, animals and decomposers) releases CO<sub>2</sub> back to the air</li><li>When organisms die, decomposers (bacteria and fungi) break them down, releasing CO<sub>2</sub></li><li>Combustion of fuels (including fossil fuels) also releases CO<sub>2</sub></li></ul>"] },
        { h: "Decay and decomposition",
          body: ["<strong>Decomposers</strong> (bacteria and fungi) break down dead organisms and waste, releasing the nutrients back into the soil so plants can use them again.",
                 "Decomposition is faster when:",
                 "<ul><li>It's warm (more enzyme activity)</li><li>It's moist (microorganisms need water)</li><li>There's oxygen (most decomposers respire aerobically)</li></ul>",
                 "Gardeners use this in <strong>compost heaps</strong>: warm, moist, plenty of air = fast decomposition of plant waste, making nutrient-rich compost.",
                 "If oxygen is excluded (e.g. in a sealed digester), anaerobic decomposers produce <strong>biogas</strong> (methane), which can be used as a fuel."] },
        { h: "Biodiversity and human impact",
          body: ["<strong>Biodiversity</strong> is the variety of different species in an ecosystem (or on Earth as a whole). More biodiversity = a more stable ecosystem.",
                 "<strong>How humans reduce biodiversity:</strong>",
                 "<ul><li>Population growth uses more land and resources</li><li>Deforestation, cutting down forests for farms, fuel or building, destroys habitats</li><li>Burning fossil fuels releases CO<sub>2</sub>, contributing to climate change</li><li>Pollution: water (sewage, fertilisers, toxic chemicals), air (smoke, acidic gases), land (landfill, pesticides)</li><li>Peat bog destruction releases stored carbon</li></ul>",
                 "<strong>How humans help biodiversity:</strong>",
                 "<ul><li>Breeding programmes for endangered species</li><li>Protecting and rebuilding habitats (rewilding, marine reserves)</li><li>Reducing deforestation</li><li>Recycling rather than landfill</li><li>Field margins and hedgerows on farmland</li></ul>"] }
      ],
      keyPoints: [
        "Ecosystem = biotic (living) + abiotic (non-living)",
        "Habitat, population, community, ecosystem (smallest to largest)",
        "Abiotic: light, temperature, water, soil, wind, gas levels",
        "Biotic: food, predators, disease, competition",
        "Adaptations: structural, behavioural, functional",
        "Producers (plants) start food chains; energy moves up via consumers",
        "Predator-prey populations cycle in response to each other",
        "Water cycle: evaporation, condensation, precipitation, collection",
        "Carbon cycle: photosynthesis takes in CO2; respiration, decay, combustion release it",
        "Decomposers: bacteria + fungi, faster in warm/moist/aerobic conditions",
        "Biodiversity = variety of species; higher biodiversity makes ecosystems more stable",
        "Human impact reduces biodiversity through population, deforestation, pollution, climate change"
      ],
      mistakes: [
        "Saying producers eat other organisms, producers MAKE their own food (photosynthesis)",
        "Mixing up biotic and abiotic factors, biotic = living things, abiotic = everything else",
        "Forgetting that decomposers respire and release CO2 into the carbon cycle",
        "Saying biodiversity is just 'lots of animals', it's variety across all species including plants and microbes",
        "Confusing peat bogs with rainforests, both store carbon but in different ways"
      ]
    }
  };
  const questions = [
    { id: 'b1-1', topic: 'b1', type: 'mcq', marks: 1,
      text: 'Which of the following is found in plant cells but NOT in animal cells?',
      options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
      answer: 2,
      optionFeedback: [
        "Both animal and plant cells have a nucleus, so this isn't a plant-only feature.",
        "Both animal and plant cells have mitochondria, this is where respiration happens in all eukaryotes.",
        "Correct. Chloroplasts contain chlorophyll and carry out photosynthesis. Animals don't photosynthesise, so they don't need chloroplasts.",
        "Both animal and plant cells have ribosomes, this is where proteins are made."
      ],
      teach: "Plant cells have everything animal cells have, plus three extras: cell wall (cellulose), chloroplasts, and a permanent vacuole." },
    { id: 'b1-2', topic: 'b1', type: 'mcq', marks: 1,
      text: 'Which type of cell does NOT contain a nucleus?',
      options: ['Animal cell', 'Plant cell', 'Bacterial cell', 'Fungal cell'],
      answer: 2,
      optionFeedback: [
        "Animal cells are eukaryotic, they have a nucleus.",
        "Plant cells are eukaryotic, they have a nucleus.",
        "Correct. Bacteria are prokaryotic, their DNA floats freely in the cytoplasm rather than being inside a nucleus.",
        "Fungal cells are eukaryotic, they have a nucleus."
      ],
      teach: "Prokaryotic cells (bacteria) don't have a nucleus. Eukaryotic cells (animals, plants, fungi, protists) do." },
    { id: 'b1-3', topic: 'b1', type: 'mcq', marks: 1,
      text: 'What is the function of mitochondria in a cell?',
      options: ['Make proteins', 'Carry out aerobic respiration to release energy', 'Control the cell', 'Store water'],
      answer: 1,
      optionFeedback: [
        "Proteins are made by ribosomes, not mitochondria.",
        "Correct. Mitochondria are the site of aerobic respiration. Cells that need lots of energy (like muscle cells and sperm cells) have lots of mitochondria.",
        "The nucleus controls the cell, not the mitochondria.",
        "The permanent vacuole stores water and sap in plant cells, not mitochondria."
      ],
      teach: "Mitochondria = aerobic respiration = energy release. Cells doing energetic work have more of them." },
    { id: 'b1-4', topic: 'b1', type: 'mcq', marks: 1,
      text: 'A root hair cell has a long extension into the soil. What is this adaptation FOR?',
      options: ['To anchor the plant in place', 'To increase surface area for absorption', 'To store food', 'To photosynthesise'],
      answer: 1,
      optionFeedback: [
        "Anchoring is what bigger roots do, not the individual root hair cells.",
        "Correct. The long extension gives a large surface area, so more water and mineral ions can be absorbed at once.",
        "Food is stored in other parts of the plant, like the leaves or roots in general, not specifically in root hair cell extensions.",
        "Root hair cells are underground and have no chloroplasts, so they can't photosynthesise."
      ],
      teach: "Surface area matters whenever something needs to be absorbed or exchanged. Root hairs, lung alveoli and small intestine villi all use the same trick." },
    { id: 'b1-5', topic: 'b1', type: 'mcq', marks: 1,
      text: 'What is the correct order of the cell cycle?',
      options: ['Mitosis, growth, cytokinesis', 'Growth and DNA replication, mitosis, cytokinesis', 'Cytokinesis, mitosis, growth', 'DNA replication, cytokinesis, mitosis'],
      answer: 1,
      optionFeedback: [
        "Growth comes BEFORE mitosis, not after.",
        "Correct. First the cell grows and copies its DNA. Then mitosis splits the chromosomes. Finally cytokinesis splits the cytoplasm into two daughter cells.",
        "Cytokinesis is the LAST stage, the splitting of the cell into two.",
        "DNA replication happens first, mitosis comes next, then cytokinesis. The order's wrong here."
      ],
      teach: "Cell cycle order: grow + copy DNA, then mitosis (split nucleus), then cytokinesis (split the rest of the cell). Two identical daughter cells at the end." },
    { id: 'b1-6', topic: 'b1', type: 'mcq', marks: 1,
      text: 'Which process moves particles from high concentration to low concentration WITHOUT using energy?',
      options: ['Active transport', 'Diffusion', 'Mitosis', 'Respiration'],
      answer: 1,
      optionFeedback: [
        "Active transport DOES use energy and moves things AGAINST the gradient. Opposite of what the question asks.",
        "Correct. Diffusion is passive (no energy needed) and moves particles down their concentration gradient (high to low).",
        "Mitosis is cell division, not particle movement.",
        "Respiration releases energy from glucose, it's not a transport process."
      ],
      teach: "Diffusion = passive (no energy), high to low. Active transport = needs energy, low to high. The key word in this question is 'without using energy'." },
    { id: 'b1-7', topic: 'b1', type: 'mcq', marks: 1,
      text: 'A potato cylinder is left in a very concentrated salt solution for an hour. What will happen to its mass?',
      options: ['It will increase (gain mass)', 'It will decrease (lose mass)', 'It will stay the same', 'It will double'],
      answer: 1,
      optionFeedback: [
        "Water would move INTO the potato only if the solution were more dilute than the potato. A concentrated salt solution is more concentrated than the potato.",
        "Correct. The salt solution has a lower water concentration than the potato. Water leaves the potato by osmosis, so the potato loses mass.",
        "There IS a concentration difference, so water moves, so the mass changes.",
        "Doubling would only happen if a huge amount of water entered, which it won't in a concentrated salt solution."
      ],
      teach: "Osmosis: water moves from where it's dilute (lots of water) to where it's concentrated (less water). Concentrated salt solution = low water concentration = water leaves the potato = mass decreases." },
    { id: 'b1-8', topic: 'b1', type: 'mcq', marks: 1,
      text: 'Which type of microscope can be used to see the internal structure of mitochondria?',
      options: ['Light microscope', 'Hand lens', 'Electron microscope', 'Naked eye'],
      answer: 2,
      optionFeedback: [
        "A light microscope can show that mitochondria exist but not their internal detail, it doesn't have the resolution.",
        "A hand lens magnifies a few times, nowhere near enough for sub-cellular detail.",
        "Correct. Electron microscopes have much higher resolution than light microscopes, enough to see inside individual organelles like mitochondria.",
        "The naked eye can't even see whole cells, never mind structures inside them."
      ],
      teach: "Light microscope: see cells and the nucleus. Electron microscope: see inside organelles. The difference is resolution, not just magnification." },
    { id: 'b1-9', topic: 'b1', type: 'short', marks: 2,
      text: 'Describe the function of the cell membrane.',
      markScheme: 'Surrounds the cell / forms the boundary of the cell (1 mark). Controls what substances enter and leave the cell (1 mark).',
      teach: "Two-mark structure-and-function question, so two clear points: WHERE it is (around the cell), and WHAT it does (controls what goes in and out)." },
    { id: 'b1-10', topic: 'b1', type: 'short', marks: 3,
      text: 'A sperm cell has many mitochondria and a long tail. Explain how these adaptations help it carry out its function.',
      markScheme: 'Mitochondria release energy from respiration / produce ATP (1 mark). The tail uses this energy to swim / move towards the egg (1 mark). Long tail / swimming lets the sperm reach the egg to fertilise it (1 mark).',
      teach: "Specialised-cell explain questions need you to link the FEATURE to the JOB. Mitochondria release energy, energy powers the tail, tail makes the cell swim to the egg." },
    { id: 'b1-11', topic: 'b1', type: 'short', marks: 2,
      text: 'A microscope image shows a cell with a real width of 50 micrometres. The image of the cell is 25 millimetres wide. Calculate the magnification.',
      markScheme: 'Convert units: 25 mm = 25 000 &micro;m (1 mark). Magnification = 25 000 &divide; 50 = &times;500 (1 mark). Allow correct calculation with same units throughout.',
      teach: "Always make the units match before dividing. mm &times; 1000 = &micro;m. Then magnification = image size &divide; real size. No units on the answer, just a number with &times; in front." },
    { id: 'b1-12', topic: 'b1', type: 'short', marks: 2,
      text: 'Explain the difference between diffusion and active transport.',
      markScheme: 'Diffusion moves particles from high concentration to low concentration (with the gradient) / does not need energy (1 mark). Active transport moves particles from low concentration to high concentration (against the gradient) / needs energy from respiration (1 mark).',
      teach: "Compare-and-contrast questions need clear opposites. Diffusion is passive, downhill. Active transport is energetic, uphill. State both halves." },
    { id: 'b1-13', topic: 'b1', type: 'mcq', marks: 1,
      text: 'Which of these is a feature of stem cells?',
      options: ['They have already become specialised', 'They can divide and become different cell types', 'They are only found in plants', 'They cannot divide'],
      answer: 1,
      optionFeedback: [
        "Stem cells are UNspecialised, that's the whole point.",
        "Correct. Stem cells haven't yet become a specific cell type, and they can divide and turn into many different types of cell.",
        "Stem cells are found in animals too (embryonic and adult). Plant stem cells are in the meristem.",
        "Stem cells can divide, that's one of their defining features."
      ],
      teach: "Stem cells = undifferentiated + can divide + can become other cell types. Three properties, all three matter." },

    { id: 'b2-1', topic: 'b2', type: 'mcq', marks: 1,
      text: 'What is the correct order, from smallest to largest, of biological organisation?',
      options: ['Organ, tissue, cell, system, organism', 'Cell, tissue, organ, organ system, organism', 'Tissue, cell, organism, organ, system', 'Cell, organ, tissue, organism, system'],
      answer: 1,
      optionFeedback: [
        "Cells are smaller than tissues, organs come after tissues.",
        "Correct. Cell (smallest) &rarr; tissue &rarr; organ &rarr; organ system &rarr; organism (largest).",
        "Cells are smaller than tissues.",
        "Tissues come before organs."
      ],
      teach: "Cell, tissue, organ, organ system, organism. Each level is built from many of the previous level." },
    { id: 'b2-2', topic: 'b2', type: 'mcq', marks: 1,
      text: 'What happens when an enzyme is heated well above its optimum temperature?',
      options: ['It speeds up forever', 'It dies', 'It denatures and stops working', 'It turns into a different enzyme'],
      answer: 2,
      optionFeedback: [
        "It speeds up only until the optimum. Past that, it slows and stops.",
        "Enzymes aren't alive, so they can't die. The correct word is 'denature'.",
        "Correct. The active site loses its shape (denatures) so the substrate no longer fits. The enzyme stops working.",
        "Denatured enzymes don't transform into other enzymes, they just stop working."
      ],
      teach: "Past the optimum temperature, the heat distorts the active site. We call this denaturing. Use the right word in the exam." },
    { id: 'b2-3', topic: 'b2', type: 'mcq', marks: 1,
      text: 'Which enzyme breaks down proteins?',
      options: ['Amylase', 'Lipase', 'Protease', 'Maltase'],
      answer: 2,
      optionFeedback: [
        "Amylase breaks down starch into sugar, not protein.",
        "Lipase breaks down lipids (fats) into fatty acids and glycerol.",
        "Correct. Protease breaks down proteins into amino acids. The name's a clue, 'prote-' for protein.",
        "Maltase breaks down maltose (a sugar), not protein."
      ],
      teach: "Carbohydrases &rarr; sugars. Proteases &rarr; amino acids. Lipases &rarr; fatty acids + glycerol. Match the enzyme name to its substrate." },
    { id: 'b2-4', topic: 'b2', type: 'mcq', marks: 1,
      text: 'What is the function of bile?',
      options: ['Digests starch', 'Neutralises stomach acid and emulsifies fats', 'Carries oxygen around the body', 'Stores excess sugar'],
      answer: 1,
      optionFeedback: [
        "Bile contains no enzymes, so it doesn't digest anything itself.",
        "Correct. Bile neutralises the acid coming from the stomach so enzymes in the small intestine can work, and it emulsifies fats (breaks them into smaller droplets, giving lipase a bigger surface area).",
        "That's red blood cells, not bile.",
        "That's the liver storing glycogen, a different function."
      ],
      teach: "Bile = made in liver, stored in gall bladder. Two jobs: NEUTRALISE acid and EMULSIFY fats. Doesn't actually digest anything." },
    { id: 'b2-5', topic: 'b2', type: 'mcq', marks: 1,
      text: 'You add iodine to an unknown food sample and it turns blue-black. What does the sample contain?',
      options: ['Sugar', 'Starch', 'Protein', 'Lipid'],
      answer: 1,
      optionFeedback: [
        "Sugar is tested with Benedict's, which goes brick-red, not iodine.",
        "Correct. Iodine + starch goes blue-black. If there's no starch, iodine stays orange/brown.",
        "Protein is tested with biuret, which goes purple.",
        "Lipid is tested with ethanol, which gives a cloudy emulsion."
      ],
      teach: "Iodine = starch (blue-black). Benedict's = sugar (brick red). Biuret = protein (purple). Ethanol = lipid (cloudy)." },
    { id: 'b2-6', topic: 'b2', type: 'mcq', marks: 1,
      text: 'Which side of the heart pumps blood to the lungs?',
      options: ['Left side', 'Right side', 'Top', 'Bottom'],
      answer: 1,
      optionFeedback: [
        "The left side pumps to the rest of the body, not the lungs. That's why its wall is thicker.",
        "Correct. The right side receives deoxygenated blood from the body and pumps it to the lungs to pick up oxygen.",
        "'Top' isn't a side of the heart, it's the atria region.",
        "'Bottom' isn't a side of the heart."
      ],
      teach: "Right side &rarr; lungs (less distance). Left side &rarr; whole body (more distance, thicker walls)." },
    { id: 'b2-7', topic: 'b2', type: 'mcq', marks: 1,
      text: 'Why do arteries have thicker walls than veins?',
      options: ['They carry more blood', 'They contain blood at high pressure from the heart', 'They are nearer the surface of the body', 'They have valves'],
      answer: 1,
      optionFeedback: [
        "Volume isn't the issue, pressure is.",
        "Correct. Arteries take blood directly from the heart, so the blood is under high pressure. Thick muscular walls stop them bursting.",
        "Arteries are usually deeper in the body than veins, not nearer the surface.",
        "VEINS have valves, not arteries. Veins need valves because blood pressure is lower."
      ],
      teach: "Arteries: high pressure &rarr; thick walls. Veins: low pressure &rarr; thinner walls with valves to stop backflow." },
    { id: 'b2-8', topic: 'b2', type: 'mcq', marks: 1,
      text: 'Red blood cells have no nucleus. Why is this an advantage?',
      options: ['It makes them lighter', 'There is more space for haemoglobin to carry oxygen', 'It stops them dividing', 'It makes them invisible'],
      answer: 1,
      optionFeedback: [
        "Mass isn't the point.",
        "Correct. No nucleus means more room inside the cell for the oxygen-carrying protein, haemoglobin. The cell can carry more oxygen per cell.",
        "Red blood cells don't divide anyway, that's a side effect, not the function.",
        "They aren't invisible, they make blood red."
      ],
      teach: "No nucleus = more haemoglobin = more oxygen carried. The biconcave disc shape also gives a bigger surface area for diffusion." },
    { id: 'b2-9', topic: 'b2', type: 'short', marks: 2,
      text: 'Describe the function of xylem in a plant.',
      markScheme: 'Transports water (and dissolved mineral ions) (1 mark) from the roots up to the leaves / rest of the plant (1 mark).',
      teach: "Two marks, so two parts: WHAT it carries (water and minerals) and the DIRECTION (up from roots to leaves). Both ideas needed." },
    { id: 'b2-10', topic: 'b2', type: 'short', marks: 3,
      text: 'Explain why lipase works faster after bile has been added to fat.',
      markScheme: 'Bile emulsifies fat / breaks fat into smaller droplets (1 mark). This increases the surface area of the fat (1 mark). So lipase has more area to work on / more enzyme-substrate collisions, speeding up the reaction (1 mark).',
      teach: "Surface area is the link. Emulsify &rarr; smaller droplets &rarr; bigger surface area &rarr; faster reaction. Same pattern as smashing a solid into a powder for chemistry rate questions." },
    { id: 'b2-11', topic: 'b2', type: 'short', marks: 2,
      text: 'A patient has a partially blocked coronary artery. State one treatment a doctor might recommend, and explain how it works.',
      markScheme: 'Any one treatment with a matching explanation. Stent: a metal mesh tube inserted to hold the artery open and let blood through (1 mark). OR statins: drugs taken regularly that lower cholesterol in the blood, slowing fatty deposit build-up (1 mark). The treatment named (1 mark), the mechanism (1 mark).',
      teach: "Stents = open the artery up. Statins = reduce cholesterol. Pick one and explain how it actually helps. Don't just name it." },
    { id: 'b2-12', topic: 'b2', type: 'mcq', marks: 1,
      text: 'Which of these is a non-communicable disease?',
      options: ['Measles', 'Salmonella food poisoning', 'Type 2 diabetes', 'Malaria'],
      answer: 2,
      optionFeedback: [
        "Measles is caused by a virus and is contagious, so it's communicable.",
        "Salmonella is caused by bacteria in food, so it's communicable.",
        "Correct. Type 2 diabetes is linked to lifestyle (diet, weight, exercise) and isn't passed from person to person.",
        "Malaria is caused by a protist and spread by mosquitoes, so it's communicable."
      ],
      teach: "Communicable = can be caught (caused by pathogens). Non-communicable = lifestyle / genetic / age-related, can't be caught." },
    { id: 'b2-13', topic: 'b2', type: 'short', marks: 2,
      text: 'Explain how a malignant tumour is different from a benign tumour.',
      markScheme: 'A malignant tumour can invade neighbouring tissues / spread through the blood to form secondary tumours elsewhere (1 mark). A benign tumour stays in one place and does not spread (1 mark).',
      teach: "Benign = stays put. Malignant = spreads (and is what we mean by cancer). The spreading via blood is called metastasis." },

    { id: 'b3-1', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Which of these is NOT a type of pathogen?',
      options: ['Bacteria', 'Virus', 'Antibody', 'Fungus'],
      answer: 2,
      optionFeedback: [
        "Bacteria can be pathogens (e.g. Salmonella).",
        "Viruses are pathogens (e.g. measles, HIV).",
        "Correct. Antibodies are proteins your IMMUNE SYSTEM makes to fight pathogens. They aren't pathogens themselves.",
        "Fungi can be pathogens (e.g. rose black spot in plants)."
      ],
      teach: "Four pathogen types: bacteria, viruses, fungi, protists. Antibodies are how YOU fight pathogens, not a type of pathogen." },
    { id: 'b3-2', topic: 'b3', type: 'mcq', marks: 1,
      text: 'How do bacteria typically make you ill?',
      options: ['They take over your cells and make copies', 'They multiply and release toxins that damage cells', 'They digest your nutrients', 'They are too big to be removed'],
      answer: 1,
      optionFeedback: [
        "That's how viruses work, not bacteria. Bacteria reproduce in body fluids, not inside our cells.",
        "Correct. Bacteria divide rapidly in body fluids and release toxins. The toxins damage cells and cause the symptoms.",
        "Bacteria don't generally compete for our food in a way that makes us ill.",
        "Size isn't the issue."
      ],
      teach: "Bacteria: multiply in body fluids, release toxins. Viruses: live inside cells, take them over to make copies, burst out. Different mechanisms." },
    { id: 'b3-3', topic: 'b3', type: 'mcq', marks: 1,
      text: 'How is the measles virus spread?',
      options: ['Body fluids during sexual contact', 'Droplets when an infected person coughs or sneezes', 'Eating contaminated food', 'Mosquito bites'],
      answer: 1,
      optionFeedback: [
        "That's how HIV spreads, not measles.",
        "Correct. Measles is highly contagious and spreads through droplets in the air from coughs and sneezes.",
        "Salmonella is foodborne, not measles.",
        "Malaria is mosquito-spread, not measles."
      ],
      teach: "Measles &rarr; airborne droplets. HIV &rarr; body fluids. Salmonella &rarr; contaminated food. Malaria &rarr; mosquito vectors. Match each pathogen to its route." },
    { id: 'b3-4', topic: 'b3', type: 'mcq', marks: 1,
      text: 'How do mosquitoes act in the spread of malaria?',
      options: ['They cause the disease themselves', 'They are vectors that pass on the malaria parasite', 'They make you weaker so you catch malaria', 'They are infected but cannot pass it on'],
      answer: 1,
      optionFeedback: [
        "Mosquitoes don't cause malaria themselves, a protist does. The mosquito just transmits it.",
        "Correct. A vector is an organism that spreads a disease without being the cause. Mosquitoes bite an infected person, pick up the parasite, then bite someone else and pass it on.",
        "Making you weaker isn't how mosquitoes spread malaria.",
        "They CAN and DO pass it on, that's the whole point of being a vector."
      ],
      teach: "Vector = organism that carries a pathogen between hosts. Mosquito for malaria. The mosquito isn't ill itself, it's just a courier." },
    { id: 'b3-5', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Which of these is the FIRST line of defence against pathogens?',
      options: ['Antibodies in the blood', 'Skin, mucus and stomach acid', 'White blood cells', 'Painkillers'],
      answer: 1,
      optionFeedback: [
        "Antibodies are inside the body, so by the time they're involved, the pathogen has already got in.",
        "Correct. The skin, mucus in the airways, cilia, and stomach acid all stop pathogens entering or kill them before they can do harm. These are the body's first line of defence.",
        "White blood cells fight pathogens that have already got in, so they're the second line, not the first.",
        "Painkillers don't fight pathogens at all, they just hide symptoms."
      ],
      teach: "First line: stop pathogens getting in (skin, mucus, acid, cilia). Second line: white blood cells (phagocytosis, antibodies, antitoxins) once they're in." },
    { id: 'b3-6', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Which of the following correctly describes how a vaccine works?',
      options: ['It kills any pathogens already in your body', 'It contains dead or weakened pathogen so your white blood cells learn to respond', 'It cures all symptoms instantly', 'It is the same as taking an antibiotic'],
      answer: 1,
      optionFeedback: [
        "Vaccines don't kill existing infection, they prepare you in advance.",
        "Correct. The dead/weakened pathogen triggers white blood cells to make matching antibodies. Next time you meet the real one, you can produce antibodies fast enough to stop you getting sick.",
        "Vaccines are preventive, not symptomatic.",
        "Antibiotics treat existing bacterial infections. Vaccines prevent diseases (often viral). Different things."
      ],
      teach: "Vaccine = dead/weakened pathogen &rarr; antibodies made now &rarr; quick response if the real pathogen turns up later." },
    { id: 'b3-7', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Why do antibiotics NOT work against viral infections?',
      options: ['Viruses are too small to be hit by antibiotics', 'Viruses live inside body cells, and the antibiotic would damage the cell too', 'Antibiotics are only for plants', 'Viruses cannot be treated at all'],
      answer: 1,
      optionFeedback: [
        "Size isn't really the issue.",
        "Correct. Antibiotics target features unique to bacteria. Viruses hide inside your own cells, so any drug strong enough to kill the virus would also damage the cell.",
        "Antibiotics are used in humans and animals.",
        "Antiviral drugs do exist, just not antibiotics."
      ],
      teach: "Antibiotics work on bacteria, not viruses. Antiviral drugs exist but they're different. Don't say 'take some antibiotics for your cold'." },
    { id: 'b3-8', topic: 'b3', type: 'mcq', marks: 1,
      text: 'In a clinical trial, what is a placebo?',
      options: ['The active drug being tested', 'A higher-dose version of the drug', 'A substance with no active ingredients given for comparison', 'A vitamin tablet'],
      answer: 2,
      optionFeedback: [
        "That's the drug being tested, not the placebo.",
        "A placebo is the opposite, it has no active ingredient at all.",
        "Correct. A placebo looks like the drug but has no active ingredient. It controls for the 'placebo effect' where people feel better just because they think they got a drug.",
        "A vitamin tablet isn't a placebo, it does have active ingredients."
      ],
      teach: "Placebo = looks like the drug, isn't the drug. Comparing the two groups shows whether the drug itself works, beyond the patient's belief that they're being treated." },
    { id: 'b3-9', topic: 'b3', type: 'short', marks: 2,
      text: 'Explain how white blood cells defend the body using antibodies.',
      markScheme: 'White blood cells produce antibodies (1 mark). Each antibody is specific / locks onto the antigens on a particular pathogen, which marks it for destruction / clumps pathogens together (1 mark).',
      teach: "Antibodies are SPECIFIC to one pathogen's antigens. Lock and key idea. They mark the pathogen for destruction." },
    { id: 'b3-10', topic: 'b3', type: 'short', marks: 3,
      text: 'Explain why a person who has been vaccinated against measles is unlikely to become ill if they later meet the real measles virus.',
      markScheme: 'The vaccine caused their white blood cells to produce antibodies against measles (1 mark). The body now has memory cells, so on second exposure antibodies can be produced quickly / in large amounts (1 mark). This destroys the virus before it can multiply enough to cause illness (1 mark).',
      teach: "Vaccination &rarr; antibodies made &rarr; memory &rarr; rapid response next time &rarr; no illness. All four ideas, three marks here." },
    { id: 'b3-11', topic: 'b3', type: 'short', marks: 2,
      text: 'Explain how the misuse of antibiotics can lead to antibiotic-resistant strains of bacteria.',
      markScheme: 'In a population of bacteria, a few have random mutations that make them resistant to the antibiotic (1 mark). When antibiotics kill the non-resistant ones, the resistant ones survive and reproduce, so the next generation is mostly resistant (1 mark).',
      teach: "Natural selection in real time. Random mutation &rarr; resistance &rarr; antibiotic kills the rest &rarr; resistant survive and breed &rarr; resistant population." },
    { id: 'b3-12', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Which of these would help slow the spread of antibiotic resistance?',
      options: ['Prescribing antibiotics for every infection', 'Stopping the course as soon as you feel better', 'Doctors only prescribing antibiotics when needed and patients finishing the full course', 'Sharing antibiotics with friends'],
      answer: 2,
      optionFeedback: [
        "More antibiotic use means more selection pressure for resistant strains. Bad idea.",
        "Stopping early lets the strongest bacteria survive and multiply, the resistance gets worse.",
        "Correct. Only using antibiotics when actually needed, and finishing the course so all bacteria are killed, slows the build-up of resistance.",
        "Sharing antibiotics means people getting the wrong drug at the wrong dose, which makes resistance worse."
      ],
      teach: "Two rules: don't use antibiotics when you don't need them, and always finish the course. Both reduce selection pressure on resistant bacteria." },
    { id: 'b3-13', topic: 'b3', type: 'mcq', marks: 1,
      text: 'Which of these is NOT a stage in testing a new drug?',
      options: ['Preclinical testing on cells and tissues', 'Testing on healthy volunteers', 'Testing on patients with the disease', 'Skipping straight to selling it in shops'],
      answer: 3,
      optionFeedback: [
        "This IS a stage, the first one. Pre-clinical testing checks for toxicity before any humans are involved.",
        "Healthy volunteers are tested early to check safety and side effects.",
        "Patients with the disease are tested later to check effectiveness.",
        "Correct. Drugs are not sold without going through proper testing. Doing so would be illegal and dangerous."
      ],
      teach: "Order of testing: preclinical (cells, tissues, animals), then healthy volunteers, then patients. No skipping stages." },

    { id: 'b4-1', topic: 'b4', type: 'mcq', marks: 1,
      text: 'What is the word equation for photosynthesis?',
      options: ['glucose + oxygen &rarr; carbon dioxide + water', 'carbon dioxide + water &rarr; glucose + oxygen', 'glucose &rarr; lactic acid', 'oxygen + nitrogen &rarr; air'],
      answer: 1,
      optionFeedback: [
        "That's respiration, the OPPOSITE of photosynthesis. Don't mix them up.",
        "Correct. Plants combine carbon dioxide and water using light to make glucose and oxygen.",
        "That's anaerobic respiration in muscle.",
        "That's not a real biological equation."
      ],
      teach: "Photosynthesis: CO2 + H2O &rarr; glucose + O2. Light energy needed. Catalysed by chlorophyll." },
    { id: 'b4-2', topic: 'b4', type: 'mcq', marks: 1,
      text: 'Where in a plant cell does photosynthesis happen?',
      options: ['Nucleus', 'Mitochondria', 'Chloroplasts', 'Ribosomes'],
      answer: 2,
      optionFeedback: [
        "The nucleus controls the cell. It doesn't carry out photosynthesis.",
        "Mitochondria do RESPIRATION, not photosynthesis.",
        "Correct. Chloroplasts contain chlorophyll, the green pigment that absorbs light energy for photosynthesis.",
        "Ribosomes make proteins, not glucose."
      ],
      teach: "Chloroplast = photosynthesis (plants). Mitochondria = respiration (everyone). Easy to mix up." },
    { id: 'b4-3', topic: 'b4', type: 'mcq', marks: 1,
      text: 'A plant is sealed in a jar with plenty of CO2, water and a comfortable temperature. The rate of photosynthesis is still slow. What is most likely the limiting factor?',
      options: ['Light intensity', 'Carbon dioxide', 'Temperature', 'Water'],
      answer: 0,
      optionFeedback: [
        "Correct. The question says CO2, water and temperature are sorted, so light must be what's holding things back.",
        "The question already says there's plenty of CO2.",
        "The question already says the temperature is comfortable.",
        "The question already says there's plenty of water."
      ],
      teach: "The limiting factor is whichever resource is in shortest supply. Read the question, eliminate the abundant ones, see what's left." },
    { id: 'b4-4', topic: 'b4', type: 'mcq', marks: 1,
      text: 'Which of these is a use of glucose in plants?',
      options: ['Building cellulose for cell walls', 'Pumping water against gravity', 'Killing pathogens', 'Producing chlorophyll directly'],
      answer: 0,
      optionFeedback: [
        "Correct. Cellulose is a polymer of glucose. Plants use the glucose they make to build the cell walls.",
        "Water transport doesn't directly use glucose.",
        "That's the immune system, plants don't pump glucose to kill pathogens.",
        "Chlorophyll is a separate pigment, not made directly from glucose."
      ],
      teach: "Plant uses of glucose: respiration, cellulose, amino acids (with nitrates), storage as starch, storage as oils." },
    { id: 'b4-5', topic: 'b4', type: 'mcq', marks: 1,
      text: 'In aerobic respiration, what happens to glucose?',
      options: ['It is broken down with oxygen to release CO2 and water', 'It is made from CO2 and water', 'It is converted to lactic acid', 'It is stored as starch'],
      answer: 0,
      optionFeedback: [
        "Correct. Aerobic respiration is glucose + oxygen &rarr; CO2 + water. Energy released for the cell to use.",
        "That's photosynthesis, not respiration.",
        "Conversion to lactic acid is anaerobic respiration in muscle, not aerobic.",
        "Storage as starch happens in plants but is unrelated to respiration."
      ],
      teach: "Aerobic respiration: glucose + O2 &rarr; CO2 + H2O. Releases energy. Reverse of photosynthesis." },
    { id: 'b4-6', topic: 'b4', type: 'mcq', marks: 1,
      text: 'Anaerobic respiration in human muscle produces which substance?',
      options: ['Ethanol', 'Lactic acid', 'Carbon dioxide', 'Glucose'],
      answer: 1,
      optionFeedback: [
        "Ethanol is from anaerobic respiration in YEAST, not muscle.",
        "Correct. When oxygen runs short in muscle, glucose is broken down to lactic acid. The build-up causes the burning, tired feeling.",
        "Anaerobic respiration in muscle doesn't produce CO2.",
        "Glucose is the starting material, not the product."
      ],
      teach: "Anaerobic in muscle: glucose &rarr; lactic acid. Anaerobic in yeast: glucose &rarr; ethanol + CO2 (fermentation). Two different products." },
    { id: 'b4-7', topic: 'b4', type: 'mcq', marks: 1,
      text: 'After intense exercise, why does a person keep breathing heavily even after they have stopped moving?',
      options: ['To remove sweat from the skin', 'To pay back the oxygen debt and break down lactic acid', 'To get rid of nitrogen', 'To cool the body down'],
      answer: 1,
      optionFeedback: [
        "Breathing doesn't move sweat.",
        "Correct. Extra oxygen is needed to break down the lactic acid that built up during anaerobic respiration. Breathing stays high until this debt is paid back.",
        "Nitrogen isn't relevant to exercise recovery.",
        "Cooling happens via sweating, not heavy breathing alone."
      ],
      teach: "Oxygen debt = the amount of oxygen needed to deal with lactic acid after exercise. Heavy breathing post-exercise pays it back." },
    { id: 'b4-8', topic: 'b4', type: 'short', marks: 2,
      text: 'Photosynthesis is described as endothermic. Explain what this means.',
      markScheme: 'Energy is taken in / absorbed from the surroundings (1 mark). Specifically, light energy is absorbed by chlorophyll (1 mark).',
      teach: "Endothermic = energy in. For photosynthesis, that energy is light. Be specific in the exam." },
    { id: 'b4-9', topic: 'b4', type: 'short', marks: 3,
      text: 'A farmer can increase the rate of photosynthesis in a greenhouse. Suggest three ways to do this.',
      markScheme: 'Any three of: increase light intensity / add artificial lighting (1 mark). Add extra CO2 (e.g. by burning a fuel) (1 mark). Maintain a warmer, optimum temperature (1 mark). Provide enough water (1 mark).',
      teach: "Limiting factors give you the answers. Light, CO2, temperature, water. Pick any three for three marks." },
    { id: 'b4-10', topic: 'b4', type: 'short', marks: 2,
      text: 'Yeast is used to make bread. Write the word equation for the anaerobic respiration that takes place in yeast.',
      markScheme: 'glucose &rarr; ethanol + carbon dioxide (1 mark for correct reactant, 1 mark for both products).',
      teach: "Yeast fermentation: glucose &rarr; ethanol + CO2. The CO2 makes bread rise. The ethanol gives us alcoholic drinks." },
    { id: 'b4-11', topic: 'b4', type: 'short', marks: 2,
      text: 'During exercise, the heart rate and breathing rate both increase. Explain why.',
      markScheme: 'Muscles need more energy from increased respiration (1 mark). Faster heart and breathing deliver more oxygen and glucose to the muscles, and remove CO2 faster (1 mark).',
      teach: "More exercise &rarr; more respiration in muscles &rarr; need more O2 and glucose in, more CO2 out &rarr; heart and lungs work harder." },
    { id: 'b4-12', topic: 'b4', type: 'mcq', marks: 1,
      text: 'In a leaf, the rate of photosynthesis doubles when light intensity doubles. What can you conclude?',
      options: ['Light is the limiting factor', 'CO2 is the limiting factor', 'Temperature is the limiting factor', 'Photosynthesis has stopped'],
      answer: 0,
      optionFeedback: [
        "Correct. If doubling light doubles the rate, light is what was holding it back. Light is the limiting factor.",
        "If CO2 were limiting, adding more light wouldn't help.",
        "If temperature were limiting, adding more light wouldn't help either.",
        "Doubling the rate clearly means photosynthesis is happening, not stopped."
      ],
      teach: "Adding more of factor X speeds the rate up &rarr; X was limiting. Adding more of X doesn't change the rate &rarr; X is NOT limiting." },
    { id: 'b4-13', topic: 'b4', type: 'mcq', marks: 1,
      text: 'Which of these would NOT speed up the rate of photosynthesis at low light intensity?',
      options: ['Moving the plant closer to the light', 'Using a brighter lamp', 'Increasing CO2', 'Removing leaves'],
      answer: 3,
      optionFeedback: [
        "Closer to the light = more light intensity = faster photosynthesis.",
        "Brighter lamp = more light = faster photosynthesis.",
        "At low light, light is limiting, but raising CO2 still helps when paired with light. (At very low light it has little effect, but it isn't HARMFUL.)",
        "Correct. Removing leaves reduces the area absorbing light, which would SLOW photosynthesis."
      ],
      teach: "More leaves = more surface area = more light absorbed = more photosynthesis. Cutting leaves does the opposite." },

    { id: 'b5-1', topic: 'b5', type: 'mcq', marks: 1,
      text: 'What is homeostasis?',
      options: ['Reproduction', 'Maintaining a stable internal environment', 'Photosynthesis', 'Cell division'],
      answer: 1,
      optionFeedback: [
        "Reproduction is a different process altogether.",
        "Correct. Homeostasis keeps internal conditions (temperature, glucose, water) steady, even when the outside changes.",
        "Photosynthesis is making glucose from CO2 and water.",
        "Cell division is mitosis or meiosis."
      ],
      teach: "Homeostasis = home (steady) + stasis (state). Keeping internal conditions just right." },
    { id: 'b5-2', topic: 'b5', type: 'mcq', marks: 1,
      text: 'Put these in the correct order for a reflex arc:',
      options: ['Stimulus &rarr; receptor &rarr; sensory neurone &rarr; relay neurone &rarr; motor neurone &rarr; effector', 'Stimulus &rarr; effector &rarr; receptor &rarr; brain', 'Receptor &rarr; brain &rarr; motor neurone &rarr; muscle', 'Effector &rarr; relay neurone &rarr; receptor &rarr; stimulus'],
      answer: 0,
      optionFeedback: [
        "Correct. The signal travels from receptor, along the sensory neurone, through a relay neurone in the spinal cord, out along the motor neurone to the effector.",
        "The effector comes at the END, not after the stimulus.",
        "Reflex arcs DON'T go through the brain, that's what makes them fast.",
        "This is the order completely backwards."
      ],
      teach: "Reflex arc: stimulus &rarr; receptor &rarr; sensory neurone &rarr; relay neurone (spinal cord) &rarr; motor neurone &rarr; effector. The brain isn't involved." },
    { id: 'b5-3', topic: 'b5', type: 'mcq', marks: 1,
      text: 'What is a synapse?',
      options: ['A type of neurone', 'A gap between two neurones, crossed by chemicals', 'The point where a nerve joins a muscle only', 'A hormone gland'],
      answer: 1,
      optionFeedback: [
        "A synapse is the gap BETWEEN neurones, not a neurone itself.",
        "Correct. Synapses are tiny gaps. The electrical signal causes chemicals to be released, which cross the gap and trigger the next neurone.",
        "That's a neuromuscular junction, a specific type of synapse. Synapses also exist between neurones.",
        "Synapses are in the nervous system, not the endocrine system."
      ],
      teach: "Synapse = gap between neurones. Chemicals (neurotransmitters) cross it to pass the signal on." },
    { id: 'b5-4', topic: 'b5', type: 'mcq', marks: 1,
      text: 'Why is a reflex action faster than a normal voluntary action?',
      options: ['It uses fewer neurones', 'The signal does not go all the way to the brain', 'The muscles are stronger', 'It happens during sleep'],
      answer: 1,
      optionFeedback: [
        "Fewer neurones isn't quite the right reason; it's about WHICH ones (the brain isn't involved).",
        "Correct. Reflex signals pass through the spinal cord only, so the path is much shorter than going up to the brain and back.",
        "Muscle strength doesn't change between voluntary and reflex.",
        "Reflexes happen any time, not just during sleep."
      ],
      teach: "Reflex = short path through the spinal cord = faster. The brain still finds out, but only AFTER the reflex has happened." },
    { id: 'b5-5', topic: 'b5', type: 'mcq', marks: 1,
      text: 'Which hormone lowers blood glucose?',
      options: ['Insulin', 'Glucagon', 'Adrenaline', 'Thyroxine'],
      answer: 0,
      optionFeedback: [
        "Correct. Insulin is made by the pancreas after eating. It causes cells to take up glucose, lowering blood glucose.",
        "Glucagon does the OPPOSITE. It raises blood glucose by releasing stored glycogen.",
        "Adrenaline is for fight-or-flight, raises heart rate and breathing.",
        "Thyroxine controls metabolic rate, not blood glucose specifically."
      ],
      teach: "Insulin lowers glucose. Glucagon raises it. Pancreas makes both. Don't mix them up." },
    { id: 'b5-6', topic: 'b5', type: 'mcq', marks: 1,
      text: 'What causes Type 1 diabetes?',
      options: ['Eating too much sugar', 'The pancreas not producing enough insulin', 'The liver swelling up', 'Drinking too much water'],
      answer: 1,
      optionFeedback: [
        "Diet can affect Type 2, but Type 1 is an auto-immune condition, not caused by diet.",
        "Correct. In Type 1 diabetes, the pancreas can't make enough insulin. Blood glucose stays high. Treated with insulin injections.",
        "The liver isn't directly involved in causing diabetes.",
        "Water doesn't cause diabetes."
      ],
      teach: "Type 1: pancreas fails to make insulin (auto-immune, often childhood onset). Type 2: cells stop responding properly to insulin (linked to obesity)." },
    { id: 'b5-7', topic: 'b5', type: 'mcq', marks: 1,
      text: 'The endocrine system uses what to send signals?',
      options: ['Electrical signals along nerves', 'Hormones in the blood', 'Light pulses', 'Sound waves'],
      answer: 1,
      optionFeedback: [
        "That's the nervous system. The endocrine system is the OTHER major communication system.",
        "Correct. The endocrine system has glands that release hormones into the blood. Hormones travel to target organs and trigger responses.",
        "Not a thing in human biology.",
        "Not a thing in human biology."
      ],
      teach: "Nervous: fast, short-lived, electrical. Endocrine: slower, longer-lasting, chemical (hormones in the blood)." },
    { id: 'b5-8', topic: 'b5', type: 'short', marks: 2,
      text: 'Describe the role of the pancreas in controlling blood glucose after a meal.',
      markScheme: 'After a meal, blood glucose rises (1 mark). The pancreas releases insulin, which causes cells (e.g. liver, muscle) to take in glucose, lowering blood glucose back to normal (1 mark).',
      teach: "Meal &rarr; glucose up &rarr; pancreas releases insulin &rarr; cells absorb glucose &rarr; glucose down. Two-mark answers need the cause AND the action." },
    { id: 'b5-9', topic: 'b5', type: 'short', marks: 3,
      text: 'Compare the nervous system with the endocrine system. Give one similarity and two differences.',
      markScheme: 'Similarity (1 mark): both coordinate responses to changes, both have receptors/effectors. Differences (1 mark each, any two): nervous is electrical, endocrine is chemical; nervous is fast, endocrine is slower; nervous effects short-lived, endocrine effects last longer; nervous targets specific cells, endocrine targets any cell with the right receptor.',
      teach: "Similarities AND differences. State one similarity clearly, then list distinct differences. Two differences = two marks." },
    { id: 'b5-10', topic: 'b5', type: 'short', marks: 2,
      text: 'A person\'s blood glucose drops too low between meals. Explain how the body responds to bring it back to normal.',
      markScheme: 'The pancreas detects low glucose and releases glucagon (1 mark). Glucagon causes the liver to convert stored glycogen back into glucose, which is released into the blood (1 mark).',
      teach: "Low glucose &rarr; glucagon &rarr; glycogen in liver converted to glucose &rarr; released into blood. Note the spelling: glucagon and glycogen are different things." },
    { id: 'b5-11', topic: 'b5', type: 'mcq', marks: 1,
      text: 'Which gland is called the master gland because it controls others?',
      options: ['Pituitary', 'Pancreas', 'Adrenal', 'Thyroid'],
      answer: 0,
      optionFeedback: [
        "Correct. The pituitary, in the brain, releases hormones that control other glands (thyroid, adrenal, ovaries, testes).",
        "Pancreas controls blood glucose but doesn't control the other glands.",
        "Adrenal makes adrenaline, doesn't control the others.",
        "Thyroid makes thyroxine, doesn't control the others."
      ],
      teach: "Pituitary = master gland. Sits below the brain. Releases hormones that tell other glands what to do." },
    { id: 'b5-12', topic: 'b5', type: 'mcq', marks: 1,
      text: 'Which hormone causes secondary sexual characteristics to develop in females at puberty?',
      options: ['Testosterone', 'Insulin', 'Oestrogen', 'Adrenaline'],
      answer: 2,
      optionFeedback: [
        "Testosterone is the main male sex hormone.",
        "Insulin controls blood glucose, not puberty.",
        "Correct. Oestrogen, made by the ovaries, causes female secondary sexual characteristics like breast development, hip widening, and the start of the menstrual cycle.",
        "Adrenaline is fight-or-flight, not puberty."
      ],
      teach: "Oestrogen = main female sex hormone, made in ovaries. Testosterone = main male, made in testes. Note British spelling: oestrogen." },
    { id: 'b5-13', topic: 'b5', type: 'short', marks: 2,
      text: 'Suggest one advantage and one disadvantage of using the contraceptive pill (a hormonal contraceptive) over a barrier method like a condom.',
      markScheme: 'Advantage (1 mark, any): more reliable when taken correctly / doesn\'t interrupt sex / lighter periods. Disadvantage (1 mark, any): does not protect against STIs / can have side effects / needs to be taken every day.',
      teach: "Pill = more reliable, no STI protection. Condom = STI protection, less reliable for pregnancy. Pick one of each clearly." },

    { id: 'b6-1', topic: 'b6', type: 'mcq', marks: 1,
      text: 'In humans, how many chromosomes are there in a normal body cell?',
      options: ['23', '46', '92', '12'],
      answer: 1,
      optionFeedback: [
        "23 is the number in a GAMETE (sperm or egg), not a body cell.",
        "Correct. Humans have 23 pairs of chromosomes, so 46 in total in body cells.",
        "Body cells have 46, not 92.",
        "Not the right number."
      ],
      teach: "23 pairs = 46 total in body cells. Gametes have 23 single chromosomes (half the normal number)." },
    { id: 'b6-2', topic: 'b6', type: 'mcq', marks: 1,
      text: 'What is the shape of a DNA molecule called?',
      options: ['Single strand', 'Triple helix', 'Double helix', 'Sphere'],
      answer: 2,
      optionFeedback: [
        "DNA has two strands, not one.",
        "DNA has two strands, not three.",
        "Correct. DNA is a double helix: two strands twisted around each other, like a spiral staircase.",
        "DNA is long and thin, not spherical."
      ],
      teach: "DNA = double helix. Two strands, twisted. Discovered by Watson, Crick, Franklin and Wilkins." },
    { id: 'b6-3', topic: 'b6', type: 'mcq', marks: 1,
      text: 'A gene is best described as:',
      options: ['A whole chromosome', 'A section of DNA that codes for a protein', 'A cell nucleus', 'A type of organ'],
      answer: 1,
      optionFeedback: [
        "A chromosome is much bigger than a gene; a chromosome carries many genes.",
        "Correct. A gene is a small section of DNA, on a chromosome, that codes for a specific protein. The protein determines a trait.",
        "The nucleus contains the DNA, but isn't itself a gene.",
        "An organ is a much higher level of biological organisation than a gene."
      ],
      teach: "Gene = section of DNA &rarr; codes for protein &rarr; protein affects a characteristic. Chromosomes are made up of many genes." },
    { id: 'b6-4', topic: 'b6', type: 'mcq', marks: 1,
      text: 'A characteristic is controlled by a recessive allele. What must be true for a person to show it?',
      options: ['They must have one copy of the allele', 'They must have two copies of the allele', 'They must have one of each allele', 'They cannot show the characteristic'],
      answer: 1,
      optionFeedback: [
        "One copy of a recessive allele is hidden by the dominant allele. The recessive characteristic doesn't show.",
        "Correct. Recessive characteristics only appear when both copies of the gene are the recessive version (homozygous recessive).",
        "One of each gives a heterozygous genotype, and the dominant version is the one that shows.",
        "They can show it, but only if both alleles are recessive."
      ],
      teach: "Recessive needs TWO copies to show. Dominant only needs ONE copy. That's the key rule." },
    { id: 'b6-5', topic: 'b6', type: 'mcq', marks: 1,
      text: 'Cystic fibrosis is caused by a recessive allele (c). A person with genotype Cc:',
      options: ['Has cystic fibrosis', 'Is a carrier but does not have it', 'Cannot pass it on to their children', 'Will definitely pass it to all their children'],
      answer: 1,
      optionFeedback: [
        "Cc means one dominant and one recessive, the recessive trait doesn't show.",
        "Correct. Cc is a carrier. They don't have the disease themselves (because the dominant allele covers it) but they can pass the recessive allele on to their kids.",
        "Carriers can pass the c allele on, that's how recessive disorders propagate in families.",
        "Cc passes on c only 50% of the time, not always."
      ],
      teach: "Cc = carrier. CC = unaffected. cc = has cystic fibrosis. Carriers play a big role in how recessive disorders spread." },
    { id: 'b6-6', topic: 'b6', type: 'mcq', marks: 1,
      text: 'In humans, which chromosomes determine that someone is biologically male?',
      options: ['XX', 'XY', 'YY', 'ZW'],
      answer: 1,
      optionFeedback: [
        "XX is biologically female.",
        "Correct. XY = male. The Y chromosome triggers male development in the embryo.",
        "YY doesn't normally occur in humans.",
        "ZW is the sex-chromosome system in birds, not humans."
      ],
      teach: "XX = female. XY = male. Sperm carries either X or Y, so the sperm determines sex. 50:50 ratio expected." },
    { id: 'b6-7', topic: 'b6', type: 'mcq', marks: 1,
      text: 'Variation between individuals of the same species is caused by:',
      options: ['Genes only', 'Environment only', 'Both genes and environment', 'Neither, individuals are always identical'],
      answer: 2,
      optionFeedback: [
        "Genes are a big part, but environment also affects many traits (e.g. weight, tan).",
        "Environment matters, but genes are usually the main driver.",
        "Correct. Most variation comes from a mix of genes (alleles you inherit) and environment (where you live, what you eat). Some traits are mostly genetic (eye colour), others mostly environmental (language you speak).",
        "Individuals of the same species clearly differ, so they're not always identical."
      ],
      teach: "Variation = genetics + environment + interaction. Most traits are a combination of both." },
    { id: 'b6-8', topic: 'b6', type: 'short', marks: 3,
      text: 'Explain how the theory of evolution by natural selection accounts for the survival of penguins in cold environments.',
      markScheme: 'Penguins show variation, some have features (e.g. thicker fat, denser feathers) that help survive the cold (1 mark). Those individuals are more likely to survive and reproduce (1 mark). They pass on the alleles for those features to their offspring, so over many generations the population becomes well adapted to cold (1 mark).',
      teach: "Three-mark natural selection answer: variation, survival of the fittest, inheritance over generations. Each point worth a mark." },
    { id: 'b6-9', topic: 'b6', type: 'short', marks: 2,
      text: 'A pea plant with genotype Tt (tall, T is dominant) is crossed with another Tt. Predict the ratio of tall to short offspring and explain.',
      markScheme: 'Use a Punnett square: Tt &times; Tt &rarr; TT, Tt, Tt, tt (1 mark for correct genotype ratio 1 : 2 : 1). Three of the four (TT, Tt, Tt) are tall and one (tt) is short, so the phenotype ratio is 3 tall : 1 short (1 mark).',
      teach: "Tt &times; Tt always gives 3 : 1 dominant : recessive. Punnett squares show why: 1 TT + 2 Tt + 1 tt = 3 with at least one T : 1 with only tt." },
    { id: 'b6-10', topic: 'b6', type: 'short', marks: 2,
      text: 'Give one advantage and one disadvantage of asexual reproduction for an organism.',
      markScheme: 'Advantage (1 mark, any): only one parent needed / fast / energy-efficient / produces lots of offspring / no need to find a mate. Disadvantage (1 mark, any): no genetic variation / all offspring vulnerable to the same diseases / cannot adapt as quickly to a changing environment.',
      teach: "Asexual: efficient but no variation. Sexual: slower and needs a mate, but creates variation. Pick one of each." },
    { id: 'b6-11', topic: 'b6', type: 'mcq', marks: 1,
      text: 'Which of the following is an example of selective breeding?',
      options: ['Wolves naturally evolving over millions of years', 'Farmers choosing only the cows that produce most milk to breed', 'Mutation in a virus producing a new strain', 'A peppered moth becoming darker'],
      answer: 1,
      optionFeedback: [
        "Wolves evolving naturally is natural selection, not human-directed.",
        "Correct. Selective breeding means humans choose which individuals breed, based on traits we want. This is how all our farm animals and crops were developed.",
        "Mutation in viruses is just random change, not human-directed.",
        "The peppered moth example is natural selection (caused by pollution darkening the trees)."
      ],
      teach: "Selective breeding = HUMANS picking who breeds. Natural selection = the ENVIRONMENT picking who survives. Same principles, different driver." },
    { id: 'b6-12', topic: 'b6', type: 'mcq', marks: 1,
      text: 'What is genetic engineering?',
      options: ['Breeding the strongest individuals together', 'Transferring genes from one organism into another', 'Speeding up natural selection', 'Killing pests with chemicals'],
      answer: 1,
      optionFeedback: [
        "That's selective breeding, not genetic engineering.",
        "Correct. Genetic engineering means taking a gene out of one organism and inserting it into another. For example, putting the human insulin gene into bacteria so they produce insulin for diabetics.",
        "Genetic engineering isn't natural selection at all, it's a deliberate human intervention.",
        "Killing pests with chemicals is pesticide use, separate idea."
      ],
      teach: "Genetic engineering = move a gene between species. Used in medicine (bacteria making insulin), agriculture (insect-resistant crops), and more." },
    { id: 'b6-13', topic: 'b6', type: 'short', marks: 2,
      text: 'A mutation occurs randomly in a population of bacteria, giving one bacterium resistance to an antibiotic. Explain how this can lead to a whole population of resistant bacteria.',
      markScheme: 'When the antibiotic is used, non-resistant bacteria are killed but the resistant one survives (1 mark). It reproduces (rapidly), passing the resistance allele to its offspring, so the population of resistant bacteria grows (1 mark).',
      teach: "Random mutation + selection pressure (antibiotic) = rapid spread of resistance. This is natural selection in real time." },

    { id: 'b7-1', topic: 'b7', type: 'mcq', marks: 1,
      text: 'Which of these is an abiotic (non-living) factor?',
      options: ['Predator numbers', 'Food availability', 'Light intensity', 'Competition with other species'],
      answer: 2,
      optionFeedback: [
        "Predator numbers depend on other organisms, so it's biotic (living).",
        "Food comes from living things, so it's biotic.",
        "Correct. Light is a non-living factor. So are temperature, water, soil pH, wind.",
        "Competition involves other living things, so biotic."
      ],
      teach: "Abiotic = non-living conditions (light, temp, water, soil, gases). Biotic = anything caused by living things." },
    { id: 'b7-2', topic: 'b7', type: 'mcq', marks: 1,
      text: 'In a food chain, what is a producer?',
      options: ['An animal that eats meat', 'A plant or alga that makes its own food via photosynthesis', 'A decomposer such as a fungus', 'A top predator'],
      answer: 1,
      optionFeedback: [
        "Meat-eaters are consumers, specifically secondary or tertiary.",
        "Correct. Producers make their own food using light and CO2 (photosynthesis). Plants and algae are producers. They start every food chain.",
        "Decomposers are at the end of the cycle, not the start.",
        "Top predators are consumers, never producers."
      ],
      teach: "Producer = makes its own food (photosynthesis). Plants and algae. Every food chain starts with a producer." },
    { id: 'b7-3', topic: 'b7', type: 'mcq', marks: 1,
      text: 'In a typical UK food chain: grass &rarr; rabbit &rarr; fox. The rabbit is the:',
      options: ['Producer', 'Primary consumer', 'Secondary consumer', 'Decomposer'],
      answer: 1,
      optionFeedback: [
        "Grass is the producer.",
        "Correct. The rabbit eats the producer (grass), so it's a primary consumer (herbivore).",
        "The fox is the secondary consumer (eats the rabbit, which is a primary consumer).",
        "Decomposers break down dead organisms; the rabbit is alive in this chain."
      ],
      teach: "Producer &rarr; primary consumer &rarr; secondary &rarr; tertiary. Each level eats the one below it." },
    { id: 'b7-4', topic: 'b7', type: 'mcq', marks: 1,
      text: 'Decomposers (bacteria and fungi) are important because they:',
      options: ['Eat live animals', 'Recycle nutrients from dead organisms back into the soil', 'Produce CO2 only', 'Cause diseases'],
      answer: 1,
      optionFeedback: [
        "Decomposers feed on dead matter, not live organisms.",
        "Correct. Decomposers break down dead plants and animals, releasing the trapped nutrients back into the soil so plants can use them again.",
        "Decomposers do release CO2, but the main ecological role is recycling nutrients.",
        "Some bacteria cause diseases, but decomposers as a group are the recyclers."
      ],
      teach: "Decomposers = nature's recyclers. Without them, dead organisms would just pile up and nutrients would stop being available to plants." },
    { id: 'b7-5', topic: 'b7', type: 'mcq', marks: 1,
      text: 'In which conditions does decomposition happen fastest?',
      options: ['Cold, dry, low oxygen', 'Warm, moist, plenty of oxygen', 'Cold, moist, no oxygen', 'Boiling hot, no water'],
      answer: 1,
      optionFeedback: [
        "Cold and dry both slow decomposers down. Low oxygen too, for the usual aerobic kind.",
        "Correct. Decomposers need warmth (their enzymes work faster), moisture, and oxygen for respiration. This is why a well-aerated compost heap decomposes faster than a damp, cold one.",
        "Cold and no oxygen both slow decomposers right down (which is why fridges and sealed packets preserve food).",
        "Boiling hot would denature enzymes, and no water means microorganisms can't survive."
      ],
      teach: "Decomposition speeds up with: WARM, MOIST, OXYGEN. Slow it down by removing any of these (fridge, drying out, sealing)." },
    { id: 'b7-6', topic: 'b7', type: 'mcq', marks: 1,
      text: 'Why does the atmosphere stay roughly balanced in oxygen and CO2 levels?',
      options: ['Plants photosynthesise, removing CO2 and producing O2, balancing respiration', 'Volcanoes only erupt at certain times', 'Animals eat the air', 'CO2 freezes in winter'],
      answer: 0,
      optionFeedback: [
        "Correct. Photosynthesis takes in CO2 and releases O2; respiration does the opposite. The two roughly balance, which is why atmospheric percentages stay stable (until humans burn fossil fuels).",
        "Volcanoes do release CO2 but the day-to-day balance is plant/animal driven.",
        "Air isn't eaten.",
        "CO2 doesn't freeze in normal atmospheric conditions."
      ],
      teach: "Photosynthesis and respiration are opposites. Together they make up the natural carbon cycle. Burning fossil fuels disrupts the balance." },
    { id: 'b7-7', topic: 'b7', type: 'mcq', marks: 1,
      text: 'Which of these is a way humans REDUCE biodiversity?',
      options: ['Planting hedgerows on farmland', 'Setting up nature reserves', 'Cutting down rainforests', 'Recycling more waste'],
      answer: 2,
      optionFeedback: [
        "Hedgerows give habitats to birds, insects and small mammals, this INCREASES biodiversity.",
        "Reserves protect species and their habitats, INCREASING biodiversity.",
        "Correct. Deforestation destroys habitats and the species that lived in them. Massive biodiversity loss, especially in tropical regions.",
        "Recycling reduces landfill and CO2 emissions, helping biodiversity overall."
      ],
      teach: "Habitat destruction = the biggest cause of biodiversity loss. Deforestation, peat bog drainage, ocean trawling, urban sprawl all wipe out species." },
    { id: 'b7-8', topic: 'b7', type: 'short', marks: 2,
      text: 'Define the term "biodiversity" and explain why high biodiversity is good for an ecosystem.',
      markScheme: 'Biodiversity is the variety of different species in an ecosystem / on Earth (1 mark). Higher biodiversity makes an ecosystem more stable because species depend on each other / are less affected by the loss of any one species (1 mark).',
      teach: "Biodiversity = species variety. High biodiversity = more stability. Lots of species means losing one doesn't break the whole system." },
    { id: 'b7-9', topic: 'b7', type: 'short', marks: 3,
      text: 'Describe the role of the carbon cycle in keeping atmospheric carbon dioxide levels stable, and explain how human activities can disrupt this.',
      markScheme: 'Plants take in CO2 through photosynthesis, animals and plants release CO2 through respiration, decomposers release CO2 from dead matter (1 mark). Together these processes balance out (1 mark). Human activities like burning fossil fuels and deforestation release extra CO2 / reduce CO2 absorption, raising atmospheric levels (1 mark).',
      teach: "Carbon cycle: in via photosynthesis, out via respiration + decay + combustion. Burning fossil fuels adds extra CO2 from long-stored carbon. Deforestation reduces the take-up." },
    { id: 'b7-10', topic: 'b7', type: 'short', marks: 2,
      text: 'A gardener wants to compost garden waste quickly. Suggest two things they should do, and explain why.',
      markScheme: 'Keep the compost heap warm / cover it to retain heat (1 mark) because decomposers work faster at warmer temperatures. Turn the heap to let air in (1 mark) because decomposers need oxygen for aerobic respiration. Other valid answers: keep it moist; chop up the waste into smaller pieces (more surface area).',
      teach: "Compost = warm + moist + airy. Pick any two of those, explain WHY each helps (faster decomposer activity)." },
    { id: 'b7-11', topic: 'b7', type: 'mcq', marks: 1,
      text: 'Polar bears have white fur. What kind of adaptation is this?',
      options: ['Behavioural', 'Functional', 'Structural', 'Magical'],
      answer: 2,
      optionFeedback: [
        "Behavioural is about actions (e.g. migration). Fur colour is part of the body.",
        "Functional is about body processes (e.g. very concentrated urine to save water).",
        "Correct. White fur is a body feature, so it's a structural adaptation. It camouflages the bear against snow.",
        "Adaptations are biological, not magic."
      ],
      teach: "Three types of adaptation: structural (body parts), behavioural (actions), functional (body processes)." },
    { id: 'b7-12', topic: 'b7', type: 'mcq', marks: 1,
      text: 'In a stable predator-prey relationship, what happens to predator numbers shortly after prey numbers rise?',
      options: ['Predator numbers fall sharply', 'Predator numbers also rise as there is more food', 'Predator numbers stay exactly the same', 'Predators stop eating'],
      answer: 1,
      optionFeedback: [
        "More food usually means MORE predators, not fewer.",
        "Correct. With more prey, more predators survive and reproduce. Predator numbers rise. Eventually they eat down the prey, then predator numbers fall again.",
        "Predator numbers respond to prey availability, so they change.",
        "Predators don't just stop eating because prey numbers rise."
      ],
      teach: "Predator-prey cycle: prey up &rarr; predators up &rarr; prey down (eaten) &rarr; predators down (no food) &rarr; prey back up. Lag between the two." },
    { id: 'b7-13', topic: 'b7', type: 'short', marks: 2,
      text: 'Explain why peat bogs are important and what happens to their stored carbon when they are drained.',
      markScheme: 'Peat bogs store carbon as the partially decomposed remains of plants (1 mark). When drained, the peat is exposed to oxygen, decomposers respire, releasing the stored CO2 back into the atmosphere (1 mark).',
      teach: "Peat = ancient stored carbon. Wet, low-oxygen bogs preserve it. Drain them, decomposers go to work, CO2 is released. Bad for climate." }
  ];

  return { topics, lessons, questions };
})();
