/* AQA Combined Science Trilogy, Foundation tier, Chemistry content (C1-C10). */
window.CONTENT_CHEMISTRY = (function () {
  const topics = [
    { id: 'c1', code: 'C1', name: 'Atomic structure & periodic table', sub: 'Atoms, elements, electron shells, groups' },
    { id: 'c2', code: 'C2', name: 'Bonding & properties of matter', sub: 'Ionic, covalent and metallic bonding' },
    { id: 'c3', code: 'C3', name: 'Quantitative chemistry', sub: 'Relative formula mass, balancing equations' },
    { id: 'c4', code: 'C4', name: 'Chemical changes', sub: 'Acids, alkalis, reactivity, electrolysis' },
    { id: 'c5', code: 'C5', name: 'Energy changes', sub: 'Exothermic and endothermic reactions' },
    { id: 'c6', code: 'C6', name: 'Rate of reaction', sub: 'Speed of reactions, catalysts' },
    { id: 'c7', code: 'C7', name: 'Organic chemistry', sub: 'Crude oil, hydrocarbons, combustion' },
    { id: 'c8', code: 'C8', name: 'Chemical analysis', sub: 'Pure substances, chromatography' },
    { id: 'c9', code: 'C9', name: 'Chemistry of the atmosphere', sub: 'Greenhouse gases, climate change' },
    { id: 'c10', code: 'C10', name: 'Using resources', sub: 'Water, recycling, sustainability' }
  ];

  const lessons = {
    c1: {
      intro: "Everything around you is made of atoms. They're so small you can't see them, even with a normal microscope. But once you understand how they're built, the rest of chemistry starts to fall into place. This topic covers what atoms are made of, how they're arranged on the periodic table, and why elements in the same group behave alike.",
      sections: [
        { h: "What is an atom?",
          body: ["An atom is the smallest part of an element. Atoms are tiny: about 0.1 nanometres across (that's 0.0000001 mm). Despite being so small, they have an even smaller part in the middle called the <strong>nucleus</strong>. Around the nucleus, in regions called <strong>shells</strong> (or energy levels), are <strong>electrons</strong>.",
                 "Most of the atom is actually empty space. The nucleus is about 10,000 times smaller than the whole atom, but it contains almost all the mass."] },
        { h: "The three subatomic particles",
          body: ["Atoms are made of three smaller particles. Learn this table, examiners love testing it."],
          table: [["Particle","Where it is","Relative charge","Relative mass"],
                  ["Proton","Nucleus","+1","1"],
                  ["Neutron","Nucleus","0","1"],
                  ["Electron","Shells around nucleus","-1","Very small (about 1/2000)"]],
          afterBody: ["An atom has <strong>no overall charge</strong> because the number of protons equals the number of electrons. The +1 charges cancel the -1 charges exactly."] },
        { h: "Atomic number and mass number",
          body: ["Look at any element on the periodic table and you'll see two numbers next to its symbol:",
                 "<strong>Atomic number</strong> (the smaller one) = number of protons. This is what defines an element. All carbon atoms have 6 protons. Always.",
                 "<strong>Mass number</strong> (the bigger one) = number of protons + number of neutrons.",
                 "To find the number of neutrons: <strong>mass number minus atomic number</strong>.",
                 "Example: Sodium (Na) has atomic number 11 and mass number 23. So it has 11 protons, 11 electrons, and 23 minus 11 = 12 neutrons."] },
        { h: "Isotopes",
          body: ["Most elements come in different versions called <strong>isotopes</strong>. Isotopes have the SAME number of protons but DIFFERENT numbers of neutrons.",
                 "Example: Carbon-12 has 6 protons and 6 neutrons. Carbon-14 has 6 protons and 8 neutrons. Both are carbon (same number of protons) but they have different mass numbers."],
          callout: { type: 'key', label: 'Remember', text: "Same element = same atomic number = same number of protons. Isotopes differ in the number of neutrons, which means they differ in mass number." } },
        { h: "Electrons in shells",
          body: ["Electrons sit in shells around the nucleus. Each shell holds a limited number:",
                 "<ul><li>First shell: holds up to 2 electrons</li><li>Second shell: holds up to 8 electrons</li><li>Third shell: holds up to 8 electrons (for the elements you need to know)</li></ul>",
                 "Fill the shells in order from inside out. Sodium has 11 electrons total, so its arrangement is 2,8,1. (Two in the first, eight in the second, one in the third.)",
                 "The <strong>outer shell</strong> is the most important for chemistry. The number of electrons in the outer shell tells you which <strong>group</strong> on the periodic table the element is in."],
          diagram: {
            alt: 'Sodium atom: 11 protons in nucleus, electrons arranged 2,8,1 across three shells',
            caption: 'Sodium atom (Na, atomic number 11): electrons fill shells in the order 2, 8, 1.',
            svg: '<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">' +
              '<circle cx="180" cy="130" r="105" fill="none" stroke="#e6e1d3" stroke-width="1"/>' +
              '<circle cx="180" cy="130" r="70" fill="none" stroke="#e6e1d3" stroke-width="1"/>' +
              '<circle cx="180" cy="130" r="35" fill="none" stroke="#e6e1d3" stroke-width="1"/>' +
              '<circle cx="180" cy="130" r="14" fill="#c2410c"/>' +
              '<text x="180" y="135" text-anchor="middle" font-size="12" fill="#faf8f3" font-weight="700">11p</text>' +
              '<circle cx="180" cy="95" r="4" fill="#1d4ed8"/><circle cx="180" cy="165" r="4" fill="#1d4ed8"/>' +
              '<circle cx="180" cy="60" r="4" fill="#1d4ed8"/><circle cx="180" cy="200" r="4" fill="#1d4ed8"/>' +
              '<circle cx="230" cy="80" r="4" fill="#1d4ed8"/><circle cx="130" cy="180" r="4" fill="#1d4ed8"/>' +
              '<circle cx="230" cy="180" r="4" fill="#1d4ed8"/><circle cx="130" cy="80" r="4" fill="#1d4ed8"/>' +
              '<circle cx="245" cy="130" r="4" fill="#1d4ed8"/><circle cx="115" cy="130" r="4" fill="#1d4ed8"/>' +
              '<circle cx="180" cy="25" r="4" fill="#1d4ed8"/>' +
              '<text x="22" y="40" font-size="11" fill="#4a5165">Shell 1: 2 e&#8315;</text>' +
              '<text x="22" y="58" font-size="11" fill="#4a5165">Shell 2: 8 e&#8315;</text>' +
              '<text x="22" y="76" font-size="11" fill="#4a5165">Shell 3: 1 e&#8315;</text>' +
              '<text x="260" y="240" font-size="11" fill="#c2410c" font-weight="600">nucleus = 11 protons + 12 neutrons</text>' +
            '</svg>'
          } },
        { h: "The periodic table",
          body: ["The periodic table is arranged in rows (called <strong>periods</strong>) and columns (called <strong>groups</strong>).",
                 "Elements in the same group have the <strong>same number of electrons in their outer shell</strong>. That's why they react in similar ways.",
                 "<ul><li>Group 1 elements have 1 outer electron</li><li>Group 2 have 2 outer electrons</li><li>Group 7 have 7 outer electrons</li><li>Group 0 have a full outer shell</li></ul>",
                 "Metals are on the left and centre of the table. Non-metals are on the right (with a zigzag line separating them)."] },
        { h: "Group 1: the alkali metals",
          body: ["Lithium, sodium, potassium and the others. They all have 1 outer electron.",
                 "They react by <strong>losing</strong> that outer electron to form a +1 ion (like Na+).",
                 "<strong>Going DOWN Group 1, reactivity INCREASES.</strong> Why? Going down, each element has more shells. The outer electron is further from the nucleus and the nucleus's pull on it is weaker. So the outer electron is lost more easily. Easier to lose = more reactive."] },
        { h: "Group 7: the halogens",
          body: ["Fluorine, chlorine, bromine, iodine. They have 7 outer electrons, one short of a full shell.",
                 "They react by <strong>gaining</strong> one electron to form a -1 ion (like Cl-).",
                 "<strong>Going DOWN Group 7, reactivity DECREASES.</strong> Why? The outer shell is further from the nucleus. It's harder for the nucleus to attract a new electron in. Harder to gain = less reactive."],
          callout: { type: 'warn', label: 'Easy to mix up', text: "Group 1 reactivity INCREASES going down. Group 7 reactivity DECREASES going down. They go in opposite directions. Learn it." } },
        { h: "Group 0: the noble gases",
          body: ["Helium, neon, argon, krypton, xenon. They have a <strong>full outer shell</strong> (helium has 2, the others have 8).",
                 "A full outer shell means they're stable. They don't need to gain or lose electrons. So they don't react with anything.",
                 "Argon is used in light bulbs and helium fills party balloons because they won't catch fire or react with what's around them."] }
      ],
      keyPoints: [
        "Protons have +1 charge, neutrons have no charge, electrons have -1 charge",
        "Atomic number = number of protons. Mass number = protons + neutrons",
        "Atoms have no overall charge because protons and electrons balance",
        "Isotopes are atoms of the same element with different numbers of neutrons",
        "Electrons fill shells in order: 2, then 8, then 8",
        "The group number tells you the number of outer electrons",
        "Group 1 metals lose 1 electron, Group 7 non-metals gain 1 electron",
        "Group 1: reactivity INCREASES down the group",
        "Group 7: reactivity DECREASES down the group",
        "Group 0 (noble gases) are unreactive because they have full outer shells"
      ],
      mistakes: [
        "Mixing up atomic number with mass number, atomic is protons only",
        "Forgetting that Group 1 reactivity goes UP but Group 7 goes DOWN",
        "Calling isotopes 'different elements', they're the same element with different mass",
        "Saying noble gases are reactive, they're inert (unreactive)"
      ]
    },

    c2: {
      intro: "Bonding is about what holds atoms together. There are three main types: ionic, covalent, and metallic. Understanding bonding explains why salt is a hard crystal, why water is a liquid, and why metals conduct electricity.",
      sections: [
        { h: "Why do atoms bond?",
          body: ["Atoms are most stable when they have a <strong>full outer shell</strong> of electrons (like the noble gases).",
                 "All other atoms react and bond to try to achieve a full outer shell. They can do this in three ways:",
                 "<ul><li><strong>Ionic bonding:</strong> One atom gives electrons to another (metal + non-metal)</li><li><strong>Covalent bonding:</strong> Atoms share electrons (non-metal + non-metal)</li><li><strong>Metallic bonding:</strong> Metal atoms share their outer electrons in a 'sea' (metal + metal)</li></ul>"] },
        { h: "Ionic bonding",
          body: ["Ionic bonds form between a <strong>metal</strong> and a <strong>non-metal</strong>.",
                 "The metal atom <strong>loses</strong> its outer electrons (becoming a positive ion). The non-metal atom <strong>gains</strong> those electrons (becoming a negative ion).",
                 "The positive and negative ions are then attracted to each other. This electrostatic attraction is the ionic bond.",
                 "Example: Sodium chloride (NaCl). Sodium loses 1 electron to become Na+. Chlorine gains 1 electron to become Cl-. The Na+ and Cl- ions attract each other."],
          diagram: {
            alt: 'Sodium loses one electron to chlorine, forming Na+ and Cl- ions',
            caption: 'Ionic bonding in NaCl: sodium transfers one electron to chlorine.',
            svg: '<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">' +
              '<circle cx="80" cy="100" r="50" fill="none" stroke="#e6e1d3"/>' +
              '<circle cx="80" cy="100" r="14" fill="#c2410c"/>' +
              '<text x="80" y="104" text-anchor="middle" font-size="11" fill="#faf8f3" font-weight="700">Na</text>' +
              '<circle cx="80" cy="50" r="4" fill="#15803d"/>' +
              '<text x="80" y="35" text-anchor="middle" font-size="10" fill="#15803d">outer e&#8315;</text>' +
              '<path d="M 130 80 Q 175 50 220 80" stroke="#15803d" stroke-width="2" fill="none" stroke-dasharray="4 3" marker-end="url(#arrow)"/>' +
              '<defs><marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#15803d"/></marker></defs>' +
              '<text x="175" y="50" text-anchor="middle" font-size="11" fill="#15803d" font-weight="600">1 electron</text>' +
              '<circle cx="280" cy="100" r="60" fill="none" stroke="#e6e1d3"/>' +
              '<circle cx="280" cy="100" r="14" fill="#1d4ed8"/>' +
              '<text x="280" y="104" text-anchor="middle" font-size="11" fill="#faf8f3" font-weight="700">Cl</text>' +
              '<circle cx="280" cy="40" r="4" fill="#1d4ed8"/><circle cx="280" cy="160" r="4" fill="#1d4ed8"/>' +
              '<circle cx="220" cy="100" r="4" fill="#1d4ed8"/><circle cx="340" cy="100" r="4" fill="#1d4ed8"/>' +
              '<circle cx="240" cy="60" r="4" fill="#1d4ed8"/><circle cx="320" cy="60" r="4" fill="#1d4ed8"/>' +
              '<circle cx="240" cy="140" r="4" fill="#1d4ed8"/>' +
              '<text x="80" y="180" text-anchor="middle" font-size="13" fill="#c2410c" font-weight="700">Na&#8314;</text>' +
              '<text x="280" y="190" text-anchor="middle" font-size="13" fill="#1d4ed8" font-weight="700">Cl&#8315;</text>' +
            '</svg>'
          } },
        { h: "Properties of ionic compounds",
          body: ["Ionic compounds form <strong>giant ionic lattices</strong>, regular 3D arrangements of millions of positive and negative ions.",
                 "<strong>High melting and boiling points.</strong> There are strong electrostatic forces between the ions in the lattice. Lots of energy is needed to break these forces, so the melting point is high.",
                 "<strong>Conduct electricity when molten or dissolved, but not when solid.</strong> Electricity needs charged particles that can move. In a solid lattice, the ions are fixed in place. When melted or dissolved, the ions can move freely and carry charge.",
                 "<strong>Often soluble in water.</strong>"] },
        { h: "Covalent bonding",
          body: ["Covalent bonds form between <strong>non-metal atoms</strong>. The atoms <strong>share</strong> a pair of electrons.",
                 "Each shared pair counts as one covalent bond. Some molecules have single bonds, some have double or triple bonds.",
                 "Examples: H2 (hydrogen molecule), H2O (water), CO2 (carbon dioxide), CH4 (methane)."] },
        { h: "Simple molecular substances",
          body: ["Small molecules like water, oxygen and methane have:",
                 "<ul><li><strong>Strong covalent bonds INSIDE the molecules</strong></li><li><strong>Weak forces BETWEEN the molecules</strong> (called intermolecular forces)</li></ul>",
                 "When you melt or boil a simple molecular substance, you only need to overcome the WEAK forces between molecules. The covalent bonds inside the molecules don't break.",
                 "This is why simple molecular substances have <strong>low melting and boiling points</strong>. They don't conduct electricity because there are no charged particles."],
          callout: { type: 'warn', label: "Don't get caught out", text: "The covalent bonds inside a molecule are STRONG. The forces BETWEEN molecules are weak. Many students lose marks by saying 'weak covalent bonds'. Get the language right." } },
        { h: "Giant covalent (diamond, graphite, silicon dioxide)",
          body: ["Some covalent substances form giant structures, not small molecules.",
                 "<strong>Diamond:</strong> Each carbon forms 4 covalent bonds to other carbons in a giant 3D lattice. Very hard, very high melting point, doesn't conduct electricity.",
                 "<strong>Graphite:</strong> Each carbon forms 3 covalent bonds to other carbons in flat layers. The 4th outer electron is <strong>delocalised</strong> (free to move). This means graphite CAN conduct electricity. The layers slide over each other easily so graphite feels slippery (used in pencils).",
                 "<strong>Silicon dioxide (sand):</strong> Giant covalent structure, very high melting point, doesn't conduct."] },
        { h: "Metallic bonding",
          body: ["In metals, the atoms are arranged in a regular pattern. The outer electrons <strong>aren't held by any one atom</strong>, they're free to move around. We call this a 'sea of delocalised electrons'.",
                 "The positive metal ions are held in place by their attraction to this sea of negative electrons. That attraction is the metallic bond.",
                 "<strong>Properties of metals:</strong>",
                 "<ul><li><strong>Conduct electricity and heat</strong>, delocalised electrons can move and carry charge/energy</li><li><strong>High melting points</strong>, strong metallic bonds</li><li><strong>Malleable</strong> (can be bent and shaped), layers of ions can slide past each other</li></ul>"] }
      ],
      keyPoints: [
        "Atoms bond to achieve a full outer shell",
        "Ionic: metal + non-metal, electrons are transferred, makes ions",
        "Covalent: non-metal + non-metal, electrons are shared",
        "Metallic: metal + metal, electrons are delocalised in a 'sea'",
        "Ionic compounds have high melting points (strong lattice forces)",
        "Ionic compounds conduct only when molten or dissolved",
        "Simple molecules: weak forces BETWEEN molecules, low melting points",
        "Diamond: 4 bonds per carbon, hard, doesn't conduct",
        "Graphite: 3 bonds per carbon, delocalised electrons, CONDUCTS",
        "Metals conduct due to delocalised electrons"
      ],
      mistakes: [
        "Saying 'weak covalent bonds break' when something melts, it's the FORCES BETWEEN molecules that break, not the bonds inside",
        "Saying ionic compounds conduct when solid, they only conduct when molten or dissolved",
        "Confusing ionic and covalent, if there's a metal involved, it's ionic",
        "Saying diamond conducts electricity, it doesn't. Graphite does, because of its delocalised electrons"
      ]
    },

    c3: {
      intro: "Quantitative chemistry is the maths side of chemistry. You need to calculate masses, balance equations, and understand that nothing is created or destroyed in a chemical reaction.",
      sections: [
        { h: "Relative formula mass (Mr)",
          body: ["The relative formula mass of a compound is the sum of the relative atomic masses of all the atoms in its formula.",
                 "<strong>How to calculate:</strong>",
                 "<ul><li>Look up the relative atomic mass (Ar) of each element on the periodic table</li><li>Multiply each by how many atoms there are</li><li>Add them all up</li></ul>",
                 "<strong>Example 1: CO2</strong>. C = 12, O = 16. So Mr = 12 + (2 × 16) = 12 + 32 = 44.",
                 "<strong>Example 2: H2O</strong>. H = 1, O = 16. So Mr = (2 × 1) + 16 = 18.",
                 "<strong>Example 3: Ca(NO3)2</strong>. Watch the brackets, everything inside is multiplied by 2. Ca = 40, N = 14, O = 16. So Mr = 40 + 2 × (14 + 3×16) = 40 + 2 × 62 = 40 + 124 = 164."] },
        { h: "Conservation of mass",
          body: ["In any chemical reaction, <strong>the total mass of the products equals the total mass of the reactants</strong>. Atoms don't appear or disappear, they just rearrange.",
                 "This is why balanced equations have the same number of each type of atom on both sides.",
                 "<strong>Apparent mass changes in open containers</strong> can confuse students. If a gas is given off (like CO2 from a fizzing reaction), the mass of what's left appears to decrease. But the mass hasn't actually been lost, the gas escaped. If you trapped the gas, the total mass would still be the same."] },
        { h: "Balancing equations",
          body: ["A balanced equation has the same number of each type of atom on both sides.",
                 "<strong>How to balance:</strong>",
                 "<ul><li>Count each type of atom on both sides</li><li>If they don't match, put numbers in front of formulas to balance them</li><li>NEVER change a formula (e.g. you can't change H2O to H3O to balance)</li></ul>",
                 "<strong>Example:</strong> Mg + O2 → MgO",
                 "Left side: 1 Mg, 2 O. Right side: 1 Mg, 1 O. Oxygen isn't balanced.",
                 "Put 2 in front of MgO: Mg + O2 → 2MgO. Now: Left: 1 Mg, 2 O. Right: 2 Mg, 2 O. Magnesium isn't balanced.",
                 "Put 2 in front of Mg: <strong>2Mg + O2 → 2MgO</strong>. Now both sides have 2 Mg and 2 O. Balanced."] }
      ],
      keyPoints: [
        "Mr = sum of atomic masses of all atoms in the formula",
        "Brackets in formulas multiply everything inside",
        "Mass is conserved in every chemical reaction",
        "Balancing equations: change numbers in front of formulas, never the formulas themselves",
        "Both sides of a balanced equation must have equal numbers of each atom type"
      ],
      mistakes: [
        "Forgetting to multiply through brackets when calculating Mr",
        "Changing a formula (like H2O to H3O) to balance instead of using numbers in front",
        "Confusing atomic number with relative atomic mass",
        "Thinking mass is lost when a gas escapes, the mass left the container, it wasn't destroyed"
      ]
    },

    c4: {
      intro: "Chemical changes covers acids, alkalis, the reactivity series of metals, and electrolysis. This is a big topic with lots of marks available in Paper 1.",
      sections: [
        { h: "The pH scale",
          body: ["The pH scale runs from 0 to 14. It tells you how acidic or alkaline a solution is.",
                 "<ul><li><strong>pH 0-6: acidic</strong> (0-3 strong, 4-6 weak)</li><li><strong>pH 7: neutral</strong> (pure water)</li><li><strong>pH 8-14: alkaline</strong> (8-10 weak, 11-14 strong)</li></ul>",
                 "Acids contain H+ ions. Alkalis contain OH- ions. The more concentrated the H+ or OH-, the stronger the pH effect.",
                 "Universal indicator changes colour depending on pH. Red = strong acid. Yellow/orange = weak acid. Green = neutral. Blue = weak alkali. Purple = strong alkali."] },
        { h: "Neutralisation",
          body: ["When an acid reacts with an alkali, they neutralise each other to form a <strong>salt and water</strong>. The pH ends up around 7.",
                 "<strong>Acid + alkali → salt + water</strong>",
                 "Examples:",
                 "<ul><li>HCl + NaOH → NaCl + H2O</li><li>H2SO4 + 2KOH → K2SO4 + 2H2O</li></ul>",
                 "The salt depends on which acid you used:",
                 "<ul><li>Hydrochloric acid → chloride salts</li><li>Sulfuric acid → sulfate salts</li><li>Nitric acid → nitrate salts</li></ul>"] },
        { h: "Reactivity series",
          body: ["Some metals are more reactive than others. You need to learn this order:",
                 "<strong>K, Na, Ca, Mg, Al, (C), Zn, Fe, (H), Cu, Ag, Au</strong>",
                 "(Potassium, Sodium, Calcium, Magnesium, Aluminium, Carbon, Zinc, Iron, Hydrogen, Copper, Silver, Gold)",
                 "Carbon and hydrogen aren't metals but they appear in the list because we compare metals to them.",
                 "A common memory trick: <strong>Please Send Cats Monkeys And Cute Zebras In Heaven Cause Some Get Eaten</strong>. Use whatever works."] },
        { h: "Metals reacting with acids and water",
          body: ["<strong>Metals more reactive than hydrogen</strong> react with acids to give a salt and hydrogen gas. The hydrogen bubbles off as a colourless gas. Metals less reactive than hydrogen (like copper) don't react with acids.",
                 "Example: Mg + 2HCl → MgCl2 + H2",
                 "<strong>Most reactive metals (K, Na, Ca)</strong> react with cold water to give a metal hydroxide and hydrogen.",
                 "<strong>Less reactive metals</strong> (like iron) react only slowly with water and need heat or steam."] },
        { h: "Displacement reactions",
          body: ["A more reactive metal can <strong>displace</strong> (kick out) a less reactive metal from its compound.",
                 "Example: Magnesium is more reactive than copper. If you add magnesium to copper sulfate solution, the magnesium kicks the copper out:",
                 "<strong>Mg + CuSO4 → MgSO4 + Cu</strong>",
                 "You'd see the blue copper sulfate fade and brown copper metal form.",
                 "If you tried the reverse, copper added to magnesium sulfate, nothing would happen. Copper is less reactive than magnesium."] },
        { h: "Electrolysis",
          body: ["Electrolysis is using electricity to split an ionic compound into its elements.",
                 "You need an <strong>electrolyte</strong> (the molten ionic compound or solution) and two <strong>electrodes</strong> (rods that carry the current). The electrodes are usually made of inert graphite.",
                 "<ul><li><strong>Cathode</strong> = negative electrode. Positive ions go here, gain electrons, become atoms.</li><li><strong>Anode</strong> = positive electrode. Negative ions go here, lose electrons, become atoms.</li></ul>",
                 "Memory trick: <strong>P</strong>ositive ions go to <strong>N</strong>egative cathode (opposite charges attract).",
                 "Example: Electrolysis of molten lead bromide (PbBr2):",
                 "<ul><li>Cathode: Pb2+ ions gain electrons, become lead metal</li><li>Anode: Br- ions lose electrons, become bromine gas</li></ul>"] }
      ],
      keyPoints: [
        "Acid + alkali → salt + water (neutralisation)",
        "Hydrochloric acid makes chlorides, sulfuric makes sulfates, nitric makes nitrates",
        "Metals more reactive than hydrogen react with acids to give salt + hydrogen",
        "More reactive metals displace less reactive ones from compounds",
        "Cathode is negative, attracts positive ions, makes metal/hydrogen",
        "Anode is positive, attracts negative ions, makes non-metals"
      ],
      mistakes: [
        "Forgetting to balance equations with metals (e.g. forgetting the 2 in front of HCl when magnesium reacts)",
        "Mixing up cathode and anode, cathode is NEGATIVE",
        "Saying copper reacts with acid, it doesn't, it's below hydrogen",
        "Saying salt + water + something else, it's ALWAYS just salt + water for acid + alkali"
      ]
    },

    c5: {
      intro: "Energy changes are everywhere in chemistry. Some reactions release energy (you feel warm), others absorb it (you feel cold). Knowing the difference, and being able to draw the energy profile, is the core of this topic.",
      sections: [
        { h: "Exothermic and endothermic",
          body: ["Every chemical reaction either releases energy or absorbs it.",
                 "<strong>Exothermic reactions</strong> RELEASE energy to the surroundings. The temperature of the surroundings INCREASES. The energy 'exits' the reaction.",
                 "<strong>Endothermic reactions</strong> ABSORB energy from the surroundings. The temperature of the surroundings DECREASES. Energy 'enters' the reaction.",
                 "Easy memory trick: <strong>EXO</strong> = energy <strong>EX</strong>its (out). <strong>ENDO</strong> = energy <strong>EN</strong>ters (in)."] },
        { h: "Examples",
          body: ["<strong>Exothermic examples:</strong>",
                 "<ul><li>Combustion (burning fuel)</li><li>Neutralisation (acid + alkali)</li><li>Most oxidation reactions</li><li>Hand warmers</li><li>Self-heating cans</li></ul>",
                 "<strong>Endothermic examples:</strong>",
                 "<ul><li>Thermal decomposition (heating limestone, CaCO3 → CaO + CO2)</li><li>Photosynthesis (plants use light energy)</li><li>Sports injury cold packs (ammonium nitrate dissolving in water)</li><li>Citric acid + sodium hydrogencarbonate</li></ul>"] },
        { h: "Reaction profiles (energy diagrams)",
          body: ["A reaction profile is a diagram showing energy on the y-axis and the progress of the reaction on the x-axis.",
                 "<strong>For exothermic reactions:</strong> Products are LOWER than reactants. Energy has been released.",
                 "<strong>For endothermic reactions:</strong> Products are HIGHER than reactants. Energy has been absorbed.",
                 "Both types have an 'energy hump' in the middle. This is the <strong>activation energy</strong>, the minimum energy needed to start the reaction."],
          diagram: {
            alt: 'Exothermic and endothermic reaction profiles side by side',
            caption: 'Exothermic: products end lower. Endothermic: products end higher. Both have an activation-energy hump.',
            svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">' +
              '<text x="115" y="20" text-anchor="middle" font-size="12" fill="#c2410c" font-weight="700">EXOTHERMIC</text>' +
              '<text x="345" y="20" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="700">ENDOTHERMIC</text>' +
              '<line x1="20" y1="180" x2="220" y2="180" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="20" y1="40" x2="20" y2="180" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<text x="14" y="100" text-anchor="end" font-size="10" fill="#4a5165">Energy</text>' +
              '<text x="120" y="200" text-anchor="middle" font-size="10" fill="#4a5165">progress &rarr;</text>' +
              '<path d="M 35 80 Q 90 30 130 80 L 200 150" stroke="#c2410c" stroke-width="2.5" fill="none"/>' +
              '<line x1="30" y1="80" x2="50" y2="80" stroke="#1a1f2e" stroke-dasharray="2 2"/>' +
              '<line x1="180" y1="150" x2="210" y2="150" stroke="#1a1f2e" stroke-dasharray="2 2"/>' +
              '<text x="55" y="76" font-size="10" fill="#1a1f2e">reactants</text>' +
              '<text x="155" y="146" font-size="10" fill="#1a1f2e">products</text>' +
              '<line x1="82" y1="80" x2="82" y2="40" stroke="#15803d" stroke-dasharray="3 3"/>' +
              '<text x="88" y="55" font-size="9" fill="#15803d">activation E</text>' +
              '<line x1="250" y1="180" x2="450" y2="180" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="250" y1="40" x2="250" y2="180" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<text x="350" y="200" text-anchor="middle" font-size="10" fill="#4a5165">progress &rarr;</text>' +
              '<path d="M 265 150 Q 320 30 360 80 L 430 90" stroke="#1d4ed8" stroke-width="2.5" fill="none"/>' +
              '<line x1="260" y1="150" x2="280" y2="150" stroke="#1a1f2e" stroke-dasharray="2 2"/>' +
              '<line x1="410" y1="90" x2="440" y2="90" stroke="#1a1f2e" stroke-dasharray="2 2"/>' +
              '<text x="285" y="146" font-size="10" fill="#1a1f2e">reactants</text>' +
              '<text x="385" y="86" font-size="10" fill="#1a1f2e">products</text>' +
            '</svg>'
          },
          callout: { type: 'key', label: 'Activation energy', text: "Even an exothermic reaction needs energy to get started. That's why you need a spark to light a match, to give the reaction enough energy to overcome the activation energy barrier." } }
      ],
      keyPoints: [
        "Exothermic = energy released, temperature rises (think 'exits')",
        "Endothermic = energy absorbed, temperature drops (think 'enters')",
        "Combustion and neutralisation are always exothermic",
        "Thermal decomposition is always endothermic",
        "Reaction profiles show energy of reactants vs products",
        "Activation energy is the 'hump' on the profile, the energy needed to start the reaction"
      ],
      mistakes: [
        "Mixing up exo and endo, if temperature goes UP, it's exothermic",
        "Drawing reaction profiles with products higher when it's exothermic (it should be lower)",
        "Forgetting that even exothermic reactions need activation energy"
      ]
    },

    c6: {
      intro: "Rate of reaction is about how fast a chemical reaction happens. Some reactions are over in a flash (an explosion). Some take years (rust forming). Understanding what controls rate is one of the most useful things in chemistry.",
      sections: [
        { h: "What is rate?",
          body: ["The rate of a reaction is <strong>how quickly the reactants are used up</strong>, or how quickly the products are made.",
                 "Rate can be measured by:",
                 "<ul><li>How much gas is given off per second</li><li>How quickly a colour change happens</li><li>How quickly a solid disappears</li><li>How fast the mass changes</li></ul>"] },
        { h: "Collision theory",
          body: ["For a reaction to happen, particles must:",
                 "<ul><li><strong>Collide</strong> with each other</li><li>Have <strong>enough energy</strong> (more than the activation energy)</li></ul>",
                 "Anything that increases either the number of collisions OR the energy of collisions will speed up the reaction."] },
        { h: "Factors affecting rate",
          body: ["<strong>1. Temperature.</strong> Higher temperature = particles move faster = more collisions per second AND more collisions have enough energy. Rate INCREASES.",
                 "<strong>2. Concentration of solutions.</strong> More concentrated = more particles per unit volume = more collisions per second. Rate INCREASES.",
                 "<strong>3. Pressure of gases.</strong> Higher pressure squeezes gas particles closer together = more collisions per second. Rate INCREASES.",
                 "<strong>4. Surface area of solids.</strong> A powder has more surface area than a single lump (same mass). More particles exposed = more collisions. Rate INCREASES.",
                 "<strong>5. Catalysts.</strong> A catalyst speeds up a reaction by providing an alternative pathway with a lower activation energy. The catalyst itself is NOT used up."] },
        { h: "Catalysts in detail",
          body: ["A <strong>catalyst</strong> is a substance that speeds up a chemical reaction without being used up itself.",
                 "Key points about catalysts:",
                 "<ul><li>They don't change the products</li><li>They aren't used up, you have the same amount at the end</li><li>They work by providing an alternative pathway with lower activation energy</li><li>Different reactions need different catalysts</li><li><strong>Enzymes</strong> are biological catalysts (in your body)</li></ul>",
                 "Industrial example: iron is used as a catalyst in making ammonia (Haber process)."] }
      ],
      keyPoints: [
        "Rate measures how fast reactants are used or products are made",
        "Particles must collide with enough energy for a reaction to happen",
        "Increasing temperature, concentration, surface area, or pressure all speed up reactions",
        "Catalysts speed up reactions without being used up themselves",
        "Catalysts provide an alternative pathway with lower activation energy",
        "Enzymes are biological catalysts"
      ],
      mistakes: [
        "Saying a catalyst is 'used up', it isn't",
        "Saying surface area only matters for solids (it's actually only relevant for solids)",
        "For 3-mark rate questions: you need MORE collisions, MORE successful collisions, and explain WHY (more energy/closer/more particles)",
        "Confusing temperature with concentration, they're separate factors"
      ]
    },

    c7: {
      intro: "Organic chemistry sounds scary but at Foundation level it's mostly about crude oil and the hydrocarbons we get from it. Petrol, diesel, plastics, candles, gas, all come from crude oil. This is everyday science.",
      sections: [
        { h: "Crude oil and hydrocarbons",
          body: ["<strong>Crude oil</strong> is a finite resource found underground. It's a <strong>mixture</strong> of many different compounds, most of which are hydrocarbons.",
                 "A <strong>hydrocarbon</strong> is a compound made of ONLY hydrogen and carbon. Nothing else.",
                 "Crude oil isn't useful as it is, it's too thick and mixed. We separate it into useful fractions."] },
        { h: "Alkanes",
          body: ["The main hydrocarbons in crude oil are <strong>alkanes</strong>. Alkanes have:",
                 "<ul><li>Single bonds between all the carbons</li><li>General formula: <strong>CnH(2n+2)</strong></li><li>The first four are: methane (CH4), ethane (C2H6), propane (C3H8), butane (C4H10)</li></ul>",
                 "Learn the first four. You'll need them."],
          table: [["Name","Formula","Carbon atoms"],["Methane","CH4","1"],["Ethane","C2H6","2"],["Propane","C3H8","3"],["Butane","C4H10","4"]] },
        { h: "Fractional distillation",
          body: ["This is how we separate crude oil into useful fractions.",
                 "<strong>How it works:</strong>",
                 "<ul><li>Heat the crude oil so all of it evaporates</li><li>Send the vapour into a tall column that is HOT at the bottom and COOL at the top</li><li>Different hydrocarbons have different <strong>boiling points</strong>. Longer chain = higher boiling point.</li><li>As the vapour rises, each fraction condenses at the level where the temperature matches its boiling point</li><li>The fractions are tapped off at different heights</li></ul>",
                 "Fractions you should know (from bottom to top, longest to shortest chains):",
                 "<ul><li>Bitumen (roads)</li><li>Heavy fuel oil (ships, power stations)</li><li>Diesel (lorries, some cars)</li><li>Kerosene (jet planes)</li><li>Petrol (cars)</li><li>LPG / gases (heating, cooking)</li></ul>"] },
        { h: "Combustion",
          body: ["When hydrocarbons burn, they react with oxygen. This is called <strong>combustion</strong> and it's always exothermic.",
                 "<strong>Complete combustion</strong> (plenty of oxygen):",
                 "<strong>Hydrocarbon + oxygen → carbon dioxide + water</strong>",
                 "Example: CH4 + 2O2 → CO2 + 2H2O",
                 "<strong>Incomplete combustion</strong> (not enough oxygen):",
                 "Produces carbon monoxide (CO, a toxic gas) and soot (solid carbon), plus less energy.",
                 "This is why faulty boilers can be dangerous, if there's not enough air, they make CO, which is poisonous."],
          callout: { type: 'warn', label: 'Carbon monoxide', text: "CO is colourless, odourless, and toxic. It binds to your blood and stops it carrying oxygen. This is why we have CO detectors in homes." } }
      ],
      keyPoints: [
        "Hydrocarbons contain ONLY hydrogen and carbon",
        "Crude oil is a mixture of hydrocarbons",
        "Alkanes have single bonds, general formula CnH(2n+2)",
        "First four alkanes: methane, ethane, propane, butane",
        "Fractional distillation separates by boiling point",
        "Longer chain = higher boiling point",
        "Complete combustion: hydrocarbon + O2 → CO2 + H2O",
        "Incomplete combustion produces toxic carbon monoxide and soot"
      ],
      mistakes: [
        "Calling crude oil a 'compound', it's a MIXTURE",
        "Forgetting that fractional distillation works by boiling point",
        "Mixing up complete and incomplete combustion products",
        "Writing the wrong alkane formula, it's CnH(2n+2), not CnH(2n)"
      ]
    },

    c8: {
      intro: "Chemical analysis is about identifying and testing substances. At Foundation, this means understanding what 'pure' really means, and how chromatography separates mixtures.",
      sections: [
        { h: "Pure substances vs mixtures",
          body: ["In chemistry, 'pure' has a specific meaning. A <strong>pure substance</strong> contains only ONE element or ONE compound. Nothing else.",
                 "A <strong>mixture</strong> contains two or more substances physically mixed together (not chemically bonded).",
                 "Note: in everyday life, 'pure orange juice' might just mean 'no added sugar', but chemically, it's still a mixture of water, fructose, vitamins and other stuff.",
                 "<strong>Tests for purity:</strong> A pure substance has a SHARP, single melting point (and boiling point). An impure substance melts over a range of temperatures, and the melting point is usually LOWER than the pure substance would be."] },
        { h: "Formulations",
          body: ["A <strong>formulation</strong> is a useful mixture made by mixing substances in carefully measured amounts.",
                 "Examples: medicines (tablet contains the active drug plus other stuff to help it dissolve), paint (pigment + binder + solvent), alloys, cleaning products, fuels, fertilisers.",
                 "The key idea: a formulation is designed for a specific function. Each ingredient is there for a reason."] },
        { h: "Chromatography",
          body: ["Chromatography separates different substances in a mixture, often coloured ones like inks or dyes.",
                 "<strong>How paper chromatography works:</strong>",
                 "<ul><li>Draw a pencil line near the bottom of the chromatography paper (the start line)</li><li>Put a small spot of the mixture on the line</li><li>Stand the paper in a beaker with a little solvent at the bottom (below the spot, so the spot doesn't dissolve in)</li><li>The solvent travels up the paper, carrying the substances</li><li>Different substances move at different speeds, so they separate</li></ul>",
                 "<strong>Two 'phases':</strong>",
                 "<ul><li>The <strong>stationary phase</strong> is the paper (doesn't move)</li><li>The <strong>mobile phase</strong> is the solvent (moves up the paper)</li></ul>"] },
        { h: "Rf values",
          body: ["The <strong>Rf value</strong> tells you how far a substance moves up the paper compared to the solvent.",
                 "<strong>Rf = distance moved by the spot ÷ distance moved by the solvent</strong>",
                 "Rf is always a value between 0 and 1. It has no units.",
                 "Each substance has its own characteristic Rf value (in a given solvent). You can identify a substance by comparing its Rf to known values.",
                 "If a spot has Rf = 0, it didn't move at all. If Rf = 1, it moved with the solvent front."] }
      ],
      keyPoints: [
        "Pure substance: only ONE element or compound",
        "Mixture: two or more substances physically mixed",
        "Pure substances have ONE sharp melting point; impure melt over a range",
        "Formulations: useful mixtures with measured ingredients",
        "Chromatography: paper = stationary phase, solvent = mobile phase",
        "Rf = distance moved by spot ÷ distance moved by solvent",
        "Rf is always between 0 and 1, no units"
      ],
      mistakes: [
        "Confusing the everyday meaning of 'pure' with the chemistry meaning",
        "Drawing the start line in pen instead of pencil (ink would dissolve)",
        "Calculating Rf upside down, the SPOT distance is on top",
        "Forgetting that Rf has no units"
      ]
    },

    c9: {
      intro: "Chemistry of the atmosphere covers what's in the air, how it got that way, and the big issue of climate change. There's a fair bit of factual recall here so learn the percentages and the greenhouse gases.",
      sections: [
        { h: "Composition of the atmosphere",
          body: ["The Earth's atmosphere today is roughly:",
                 "<ul><li><strong>Nitrogen: 78%</strong> (about 4/5)</li><li><strong>Oxygen: 21%</strong> (about 1/5)</li><li><strong>Other gases: 1%</strong> (mainly argon, with small amounts of CO2 and water vapour)</li></ul>",
                 "Learn these. Examiners ask about them every year."] },
        { h: "How the atmosphere evolved",
          body: ["The atmosphere has changed dramatically over Earth's 4.6 billion year history.",
                 "<strong>Early atmosphere</strong> (over 3 billion years ago): mainly carbon dioxide from intense volcanic activity, with water vapour, nitrogen and small amounts of methane and ammonia. Very little oxygen.",
                 "<strong>What changed:</strong>",
                 "<ul><li>The Earth cooled, water vapour condensed to form oceans</li><li>CO2 dissolved in the oceans and then formed carbonate rocks</li><li>Algae and then plants evolved, doing photosynthesis. They took in CO2 and gave out O2</li><li>Over billions of years, oxygen built up and CO2 dropped, getting us to today's atmosphere</li></ul>"] },
        { h: "Greenhouse gases and climate change",
          body: ["Some gases in the atmosphere trap heat. They're called <strong>greenhouse gases</strong>.",
                 "<strong>The main greenhouse gases:</strong>",
                 "<ul><li>Carbon dioxide (CO2)</li><li>Methane (CH4)</li><li>Water vapour (H2O)</li></ul>",
                 "<strong>How the greenhouse effect works:</strong>",
                 "<ul><li>Short-wave radiation from the sun passes through the atmosphere and warms the Earth</li><li>The Earth re-emits this energy as long-wave (infrared) radiation</li><li>Greenhouse gases absorb this infrared radiation, trapping the heat</li><li>Some heat escapes, but more is trapped if there are more greenhouse gases</li></ul>"] },
        { h: "Why CO2 is rising",
          body: ["Human activities since the industrial revolution have INCREASED the amount of CO2 in the atmosphere.",
                 "<strong>Main sources of extra CO2:</strong>",
                 "<ul><li>Burning fossil fuels (coal, oil, gas) for energy and transport</li><li>Cement manufacture</li><li>Deforestation (trees absorb CO2, so cutting them down means less is absorbed)</li></ul>",
                 "<strong>Main source of extra methane:</strong>",
                 "<ul><li>Livestock farming (cows release methane)</li><li>Rice paddies</li><li>Decomposing rubbish in landfills</li></ul>",
                 "<strong>Consequences of climate change:</strong>",
                 "<ul><li>Rising global temperatures</li><li>Melting ice caps and rising sea levels</li><li>More extreme weather (storms, droughts, floods)</li><li>Changes in habitats and species ranges</li></ul>"] }
      ],
      keyPoints: [
        "Atmosphere is 78% nitrogen, 21% oxygen, 1% other",
        "Early atmosphere was mostly CO2 from volcanoes",
        "Oxygen came from photosynthesis by algae and plants",
        "Greenhouse gases: CO2, methane, water vapour",
        "Greenhouse gases absorb infrared radiation and trap heat",
        "Human activities (burning fossil fuels, farming, deforestation) increase greenhouse gases",
        "Climate change causes rising temperatures, sea level rise, extreme weather"
      ],
      mistakes: [
        "Getting the percentages wrong, it's 78% N, 21% O (not the other way round)",
        "Saying oxygen is the main greenhouse gas, it's CO2",
        "Confusing the greenhouse effect with the ozone hole, they're different things",
        "Saying greenhouse gases 'create' heat, they TRAP heat that's already there"
      ]
    },

    c10: {
      intro: "Using resources covers how we get the materials we use, including drinking water, recycled metals, and how we measure environmental impact. Lots of common-sense links to the real world here.",
      sections: [
        { h: "Potable water",
          body: ["<strong>Potable water</strong> means water that is safe to drink. It's not the same as pure water, tap water has dissolved minerals and chlorine in it, so it's not chemically pure, but it's safe.",
                 "<strong>In the UK</strong>, we mainly get potable water from rainwater that collects in lakes, rivers and reservoirs.",
                 "<strong>How tap water is made potable:</strong>",
                 "<ul><li>Filter water through beds of sand and gravel to remove solids</li><li>Sterilise the water using chlorine (or sometimes ozone or UV light) to kill microbes</li></ul>",
                 "<strong>In dry countries</strong>, sea water has to be desalinated (salt removed). This is done by distillation or reverse osmosis. Both use a lot of energy, which is why it's expensive."] },
        { h: "Waste water treatment",
          body: ["Used water from homes (sewage), farms, and industry needs to be treated before it can go back into rivers.",
                 "<strong>Sewage treatment steps:</strong>",
                 "<ul><li>Screening to remove large solids and grit</li><li>Settling out: the solid 'sludge' sinks to the bottom, the liquid 'effluent' is on top</li><li>The sludge is digested by anaerobic bacteria (no oxygen)</li><li>The effluent is treated with aerobic bacteria (with oxygen) to break down organic matter</li></ul>",
                 "Treated effluent is safe to release into rivers."] },
        { h: "Life Cycle Assessment (LCA)",
          body: ["An LCA looks at the <strong>environmental impact</strong> of a product over its whole life. It has four stages:",
                 "<ul><li><strong>Raw materials:</strong> Where do they come from? How much environmental damage to extract?</li><li><strong>Manufacturing:</strong> How much energy? What pollution?</li><li><strong>Use:</strong> Does it use energy or other resources while you're using it?</li><li><strong>Disposal:</strong> Can it be recycled? Will it sit in landfill?</li></ul>",
                 "Note: cost in money is NOT part of an LCA, only environmental impact."] },
        { h: "Reduce, reuse, recycle",
          body: ["The three Rs (in order of preference):",
                 "<ul><li><strong>Reduce:</strong> use less stuff in the first place</li><li><strong>Reuse:</strong> use the same thing again (refillable bottle)</li><li><strong>Recycle:</strong> turn the material into something new</li></ul>",
                 "<strong>Advantages of recycling metals:</strong>",
                 "<ul><li>Saves natural resources (less mining)</li><li>Uses less energy than extracting new metal from ore</li><li>Reduces CO2 emissions</li><li>Reduces landfill waste</li></ul>",
                 "<strong>Disadvantages of recycling:</strong>",
                 "<ul><li>Sorting different metals is difficult and labour-intensive</li><li>Collection has its own costs and emissions</li><li>Some metals can't be mixed when recycled</li></ul>"] }
      ],
      keyPoints: [
        "Potable water = safe to drink (not necessarily pure)",
        "UK potable water: filter + chlorinate",
        "Desalination of sea water uses lots of energy",
        "Sewage treated by screening, settling, anaerobic and aerobic digestion",
        "Life Cycle Assessment looks at environmental impact across 4 stages",
        "Cost in money is NOT part of an LCA",
        "Reduce > reuse > recycle (in that order)",
        "Recycling metals saves energy and resources but sorting is hard"
      ],
      mistakes: [
        "Saying potable means pure, it means SAFE TO DRINK",
        "Including cost in an LCA, LCAs are about environment, not money",
        "Saying recycling has no downsides, sorting and collection have costs",
        "Forgetting that REDUCE is more important than recycle"
      ]
    }
  };

  const questions = [
    { id: 'c1-1', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Which sub-atomic particle has no electrical charge?',
      options: ['Proton', 'Neutron', 'Electron', 'Ion'],
      answer: 1,
      optionFeedback: [
        "Protons are positively charged (+1). Look back at the subatomic particles table.",
        "Correct. Neutrons have no charge. Protons are +1, electrons are -1, neutrons are neutral (the name's a clue).",
        "Electrons are negatively charged (-1). Try the subatomic particles section again.",
        "An ion isn't a sub-atomic particle, it's an atom that has gained or lost electrons. The three sub-atomic particles are protons, neutrons, electrons."
      ],
      teach: "Protons are +1, neutrons are 0, electrons are -1. This is fundamental, get the relative charges memorised early." },
    { id: 'c1-2', topic: 'c1', type: 'mcq', marks: 1,
      text: 'An atom of an element has 17 protons. What is the element?',
      options: ['Oxygen', 'Sulfur', 'Chlorine', 'Argon'],
      answer: 2,
      optionFeedback: [
        "Oxygen has 8 protons (atomic number 8). Look at the periodic table.",
        "Sulfur has 16 protons (atomic number 16), close, but not 17.",
        "Correct. The atomic number tells you the number of protons. Element with atomic number 17 is chlorine (Cl).",
        "Argon has 18 protons (atomic number 18), one too many."
      ],
      teach: "Atomic number = number of protons = position on the periodic table. Always check the periodic table, it's allowed in the exam." },
    { id: 'c1-3', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Which group of the periodic table contains the noble gases?',
      options: ['Group 1', 'Group 2', 'Group 7', 'Group 0'],
      answer: 3,
      optionFeedback: [
        "Group 1 is the alkali metals (lithium, sodium, etc.), reactive, not noble.",
        "Group 2 is the alkaline earth metals (magnesium, calcium, etc.).",
        "Group 7 is the halogens (chlorine, bromine, etc.), very reactive non-metals.",
        "Correct. Group 0 (sometimes called Group 18) contains the noble gases: helium, neon, argon, krypton. They have full outer shells, which is why they're unreactive."
      ],
      teach: "Noble gases are in Group 0 because they have a full outer shell, they don't 'need' any more electrons, so they don't react." },
    { id: 'c1-4', topic: 'c1', type: 'short', marks: 2,
      text: 'Define what is meant by an "isotope".',
      markScheme: 'Atoms of the same element (1 mark) that have different numbers of neutrons (1 mark). Also acceptable: same atomic number but different mass number.',
      teach: "Same element = same protons. Isotopes only differ in their NEUTRONS. Examples: carbon-12 and carbon-14 are both carbon but carbon-14 has 2 extra neutrons." },
    { id: 'c1-5', topic: 'c1', type: 'short', marks: 3,
      text: 'Sodium and potassium are both in Group 1. Explain why potassium is MORE reactive than sodium.',
      markScheme: 'Potassium has more electron shells / outer electron is further from the nucleus (1 mark). The outer electron is held less strongly / weaker attraction to the nucleus (1 mark). So the outer electron is lost more easily during reactions (1 mark).',
      teach: "Going DOWN Group 1, reactivity INCREASES. The reason is always about the outer electron being further from the nucleus = weaker pull = easier to lose." },
    { id: 'c1-6', topic: 'c1', type: 'mcq', marks: 1,
      text: 'What is the electron arrangement of an oxygen atom (atomic number 8)?',
      options: ['2,6', '2,8', '6,2', '8,0'],
      answer: 0,
      optionFeedback: [
        "Correct. Fill shells in order: 2 in the first, then up to 8 in the second. Oxygen has 8 electrons total: 2 in the first shell, 6 in the second.",
        "2,8 would be 10 electrons, which is neon, not oxygen.",
        "You can't have 6 in the first shell, the first shell only holds 2 maximum.",
        "You can't have 8 in the first shell, the first shell only holds 2 maximum."
      ],
      teach: "Shells fill in order. First shell holds 2 max, then second and third hold 8 max each. Add the electrons one shell at a time." },

    { id: 'c2-1', topic: 'c2', type: 'mcq', marks: 1,
      text: 'Ionic bonds form between which types of element?',
      options: ['Two metals', 'A metal and a non-metal', 'Two non-metals', 'Two noble gases'],
      answer: 1,
      optionFeedback: [
        "Two metals form metallic bonds (delocalised electrons), not ionic bonds.",
        "Correct. Metal + non-metal = ionic. The metal loses electrons, the non-metal gains them. Opposite charges attract.",
        "Two non-metals form covalent bonds (sharing electrons), not ionic bonds.",
        "Noble gases already have full outer shells, so they don't usually bond at all."
      ],
      teach: "Three bond types, three combinations: metal+metal = metallic. metal+non-metal = ionic. non-metal+non-metal = covalent." },
    { id: 'c2-2', topic: 'c2', type: 'mcq', marks: 1,
      text: 'Why do ionic compounds have high melting points?',
      options: ['They contain many atoms', 'Strong electrostatic forces hold the ions together in a giant lattice', 'They are made of metals', 'They conduct electricity'],
      answer: 1,
      optionFeedback: [
        "Number of atoms doesn't determine melting point. Many compounds have lots of atoms but low melting points.",
        "Correct. The giant ionic lattice has billions of strong electrostatic attractions between positive and negative ions. It takes a LOT of energy to overcome these.",
        "Ionic compounds aren't 'made of metals', they contain a metal AND a non-metal (combined as ions).",
        "Conducting electricity is a separate property and doesn't cause a high melting point."
      ],
      teach: "Always link high melting point of ionic compounds to: STRONG electrostatic forces in a GIANT lattice. Both words matter for full marks." },
    { id: 'c2-3', topic: 'c2', type: 'short', marks: 2,
      text: 'Explain why graphite can conduct electricity but diamond cannot. Both are made of pure carbon.',
      markScheme: 'In graphite, each carbon atom forms 3 bonds, leaving one delocalised electron that is free to move (1 mark). In diamond, each carbon forms 4 bonds so there are no free electrons (1 mark).',
      teach: "Same element, different structures. Graphite: 3 bonds, 1 free electron, CONDUCTS. Diamond: 4 bonds, no free electrons, doesn't conduct." },
    { id: 'c2-4', topic: 'c2', type: 'mcq', marks: 1,
      text: 'In metallic bonding, what holds the metal atoms together?',
      options: ['Shared pairs of electrons', 'Attraction between positive metal ions and a "sea" of delocalised electrons', 'Ionic bonds', 'Strong gravity'],
      answer: 1,
      optionFeedback: [
        "Shared pairs of electrons describes covalent bonding, not metallic.",
        "Correct. Metals lose their outer electrons, which become delocalised. The positive metal ions are held by attraction to this sea of electrons.",
        "Ionic bonds happen between metals and non-metals, not between metal atoms.",
        "Gravity is far too weak to be relevant on the atomic scale."
      ],
      teach: "Metallic bonding = positive metal ions + sea of delocalised electrons. The delocalised electrons let metals conduct electricity." },
    { id: 'c2-5', topic: 'c2', type: 'short', marks: 2,
      text: 'Why do simple molecular substances (like H₂O or CO₂) have low melting and boiling points?',
      markScheme: 'The intermolecular forces between molecules are weak (1 mark). Only a small amount of energy is needed to overcome these forces (1 mark). Note: the covalent bonds inside the molecules are strong, but these are NOT broken when the substance melts.',
      teach: "Be careful with language: COVALENT BONDS are strong. The FORCES BETWEEN molecules are weak. When you melt water, you don't break the H-O bonds, you only overcome the forces between the H2O molecules." },

    { id: 'c3-1', topic: 'c3', type: 'mcq', marks: 1,
      text: 'What is the relative formula mass (Mr) of carbon dioxide, CO₂? (C=12, O=16)',
      options: ['28', '32', '44', '60'],
      answer: 2,
      optionFeedback: [
        "28 would be C + O = 12 + 16. You missed the second oxygen.",
        "32 is two oxygens (2 × 16) but you've forgotten the carbon.",
        "Correct. C + 2O = 12 + (2 × 16) = 12 + 32 = 44.",
        "60 is too high. Recount: 12 (one carbon) + 32 (two oxygens) = 44."
      ],
      teach: "When calculating Mr, count EVERY atom. CO2 has 1 carbon AND 2 oxygens. Multiply each by its atomic mass, then add." },
    { id: 'c3-2', topic: 'c3', type: 'mcq', marks: 1,
      text: 'What is the Mr of water (H₂O)? (H=1, O=16)',
      options: ['17', '18', '20', '34'],
      answer: 1,
      optionFeedback: [
        "17 would be 1 hydrogen + 1 oxygen. But water has 2 hydrogens.",
        "Correct. (2 × 1) + 16 = 2 + 16 = 18.",
        "Where did 20 come from? Recount: 2 hydrogens (2) + 1 oxygen (16) = 18.",
        "34 would be 2 oxygens and 2 hydrogens (32 + 2). But water only has ONE oxygen."
      ],
      teach: "The small number after an element is how many atoms of that element are in the molecule. H2O has 2 H and 1 O." },
    { id: 'c3-3', topic: 'c3', type: 'short', marks: 1,
      text: 'State the law of conservation of mass.',
      markScheme: 'The total mass of products in a chemical reaction is equal to the total mass of the reactants (1 mark). Also accept: mass is not created or destroyed in a chemical reaction.',
      teach: "Atoms don't appear or disappear, they just rearrange. Every balanced equation reflects this." },
    { id: 'c3-4', topic: 'c3', type: 'mcq', marks: 1,
      text: 'Balance this equation: __ Mg + O₂ → __ MgO',
      options: ['1, 1', '2, 2', '2, 1', '1, 2'],
      answer: 1,
      optionFeedback: [
        "1 Mg + 1 O2 → 1 MgO has 2 oxygens on the left but only 1 on the right. Not balanced.",
        "Correct. 2Mg + O2 → 2MgO. Each side: 2 Mg, 2 O. Balanced.",
        "2 Mg + 1 O2 → 1 MgO has 2 Mg on left but only 1 Mg on right. Not balanced.",
        "1 Mg + 1 O2 → 2 MgO has 1 Mg on left, 2 Mg on right. Not balanced."
      ],
      teach: "To balance: count each type of atom on both sides. Add numbers in front (NEVER change a formula) until both sides match." },

    { id: 'c4-1', topic: 'c4', type: 'mcq', marks: 1,
      text: 'A solution has a pH of 2. What does this tell you?',
      options: ['It is a strong alkali', 'It is a weak alkali', 'It is a strong acid', 'It is neutral'],
      answer: 2,
      optionFeedback: [
        "Strong alkalis are pH 11-14, not pH 2. Low pH means acidic.",
        "Alkalis are pH 8+. pH 2 is acidic, not alkaline.",
        "Correct. pH 0-3 = strong acid. pH 2 is well within that range.",
        "Neutral is pH 7. pH 2 is well below that."
      ],
      teach: "pH 0-3 = strong acid. 4-6 = weak acid. 7 = neutral. 8-10 = weak alkali. 11-14 = strong alkali. Lower number = more acidic." },
    { id: 'c4-2', topic: 'c4', type: 'mcq', marks: 1,
      text: 'Hydrochloric acid + sodium hydroxide → ?',
      options: ['Sodium + chloride + hydrogen', 'Sodium chloride + water', 'Salt + hydrogen', 'Sodium hydroxide chloride'],
      answer: 1,
      optionFeedback: [
        "You don't get loose sodium or chloride from neutralisation, you get sodium chloride (salt) and water.",
        "Correct. Acid + alkali → salt + water. ALWAYS. The salt is sodium chloride (NaCl), the water is H2O.",
        "Hydrogen comes from acid + metal, not acid + alkali. Acid + alkali = salt + WATER.",
        "Sodium hydroxide chloride isn't a real compound. You're just mashing the names together."
      ],
      teach: "Burn this into your brain: acid + alkali → salt + water. Always. No exceptions. No hydrogen." },
    { id: 'c4-3', topic: 'c4', type: 'short', marks: 3,
      text: 'Magnesium reacts vigorously with hydrochloric acid, but copper does not react at all. Explain why.',
      markScheme: 'Magnesium is more reactive than hydrogen (1 mark) so it can displace hydrogen from the acid (1 mark). Copper is less reactive than hydrogen so it cannot displace it / no reaction occurs (1 mark).',
      teach: "Reactivity series check: metals ABOVE hydrogen react with acid. Metals BELOW hydrogen don't. Mg is above, Cu is below." },
    { id: 'c4-4', topic: 'c4', type: 'mcq', marks: 1,
      text: 'During electrolysis of molten lead bromide, what is produced at the cathode (negative electrode)?',
      options: ['Bromine gas', 'Lead metal', 'Hydrogen', 'Oxygen'],
      answer: 1,
      optionFeedback: [
        "Bromine is produced at the anode (positive electrode), not the cathode. Bromide ions are negative.",
        "Correct. The cathode is negative, so it attracts positive ions. Pb2+ ions gain electrons and become lead metal.",
        "Hydrogen isn't produced from molten lead bromide. (Hydrogen can be made from electrolysis of solutions, but this is the MOLTEN compound.)",
        "Oxygen isn't produced from molten lead bromide. There's no oxygen in the compound."
      ],
      teach: "Cathode = negative = attracts POSITIVE ions. Positive metal ions get electrons here and become atoms. Anode = positive = attracts NEGATIVE ions." },
    { id: 'c4-5', topic: 'c4', type: 'short', marks: 2,
      text: 'Name the salt and other product formed when sulfuric acid reacts with potassium hydroxide.',
      markScheme: 'Potassium sulfate (1 mark) and water (1 mark).',
      teach: "Sulfuric acid always makes a SULFATE salt. Hydrochloric makes chloride. Nitric makes nitrate. The metal in the alkali becomes the metal in the salt." },

    { id: 'c5-1', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Which of these is an exothermic reaction?',
      options: ['Photosynthesis', 'Thermal decomposition of calcium carbonate', 'Combustion of methane', 'Dissolving ammonium nitrate'],
      answer: 2,
      optionFeedback: [
        "Photosynthesis is endothermic, plants absorb energy from sunlight.",
        "Thermal decomposition is endothermic, you have to heat the substance to make it decompose.",
        "Correct. Combustion (burning) is always exothermic, it releases lots of heat and light.",
        "Ammonium nitrate dissolving is endothermic, this is how cold packs work."
      ],
      teach: "EXOthermic = energy EXits = temperature goes UP. Combustion is the classic exothermic reaction." },
    { id: 'c5-2', topic: 'c5', type: 'short', marks: 2,
      text: 'A student dissolves a chemical in water. The temperature of the water drops from 20°C to 12°C. State whether this is exothermic or endothermic, and explain why.',
      markScheme: 'Endothermic (1 mark). The temperature decrease shows the reaction has taken in/absorbed energy from the surroundings (1 mark).',
      teach: "Temperature DROP = surroundings have LOST energy = the reaction has taken energy IN = endothermic. Temperature RISE = exothermic." },
    { id: 'c5-3', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Which application uses an endothermic reaction?',
      options: ['Hand warmers', 'Self-heating cans', 'Sports injury cold packs', 'Burning fuel in a car'],
      answer: 2,
      optionFeedback: [
        "Hand warmers RELEASE heat (your hands feel warmer), that's exothermic.",
        "Self-heating cans release heat (the can warms up), exothermic.",
        "Correct. Cold packs absorb heat from your skin, that's why they feel cold. Endothermic.",
        "Burning fuel releases heat, definitely exothermic."
      ],
      teach: "If something gives out heat, it's exothermic. If something feels cold or absorbs heat, it's endothermic. Cold packs are the textbook endothermic example." },

    { id: 'c6-1', topic: 'c6', type: 'mcq', marks: 1,
      text: 'Which of these does NOT increase the rate of a reaction?',
      options: ['Increasing the temperature', 'Increasing the concentration of reactants', 'Adding a catalyst', 'Decreasing the surface area'],
      answer: 3,
      optionFeedback: [
        "Increasing temperature DOES increase rate (particles move faster, more successful collisions).",
        "Increasing concentration DOES increase rate (more particles in a given volume, more collisions).",
        "Adding a catalyst DOES increase rate (provides a pathway with lower activation energy).",
        "Correct. DECREASING surface area SLOWS the reaction down. To speed it up, you INCREASE surface area (e.g. use a powder instead of a lump)."
      ],
      teach: "Four ways to speed up a reaction: more temperature, more concentration, more surface area, add a catalyst. The trick word here is 'decreasing'." },
    { id: 'c6-2', topic: 'c6', type: 'short', marks: 3,
      text: 'Explain how increasing the temperature increases the rate of a chemical reaction.',
      markScheme: 'Particles have more kinetic energy / move faster (1 mark). So particles collide more frequently (1 mark). And a greater proportion of collisions have enough energy to react / exceed the activation energy (1 mark).',
      teach: "For 3-mark rate questions: ALL THREE points, more energy/faster, more collisions, more SUCCESSFUL collisions (over activation energy). Each idea is worth a mark." },
    { id: 'c6-3', topic: 'c6', type: 'mcq', marks: 1,
      text: 'What does a catalyst do?',
      options: ['It gets used up in the reaction', 'It increases the rate without being used up', 'It changes the products formed', 'It makes the reaction exothermic'],
      answer: 1,
      optionFeedback: [
        "A catalyst is NOT used up. That's one of its defining features.",
        "Correct. A catalyst speeds up the reaction by providing a lower-activation-energy pathway. It is regenerated and not used up.",
        "A catalyst doesn't change WHAT products you get, only how FAST you get them.",
        "A catalyst doesn't change whether the reaction is exothermic or endothermic, it just changes the speed."
      ],
      teach: "Catalyst = speeds up the reaction, NOT used up, doesn't change the products. It just provides an easier pathway." },

    { id: 'c7-1', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Crude oil is...',
      options: ['A compound', 'An element', 'A mixture of hydrocarbons', 'A single fuel'],
      answer: 2,
      optionFeedback: [
        "Crude oil isn't a single compound, it contains many different compounds mixed together.",
        "Crude oil isn't an element, it contains lots of different substances.",
        "Correct. Crude oil is a MIXTURE of many different hydrocarbons. This is why we have to separate it before use.",
        "Crude oil isn't a fuel by itself, we have to refine it into useful fuels like petrol and diesel."
      ],
      teach: "Crude oil = MIXTURE of hydrocarbons. That word 'mixture' is the key. If it was one compound, we wouldn't need fractional distillation." },
    { id: 'c7-2', topic: 'c7', type: 'mcq', marks: 1,
      text: 'What is the general formula for the alkanes?',
      options: ['CnH2n', 'CnHn+2', 'CnH2n+2', 'C2nHn'],
      answer: 2,
      optionFeedback: [
        "CnH2n is the formula for alkenes, not alkanes. Different family.",
        "CnHn+2 doesn't work, try it with methane (n=1): would give CH3, but methane is CH4.",
        "Correct. CnH(2n+2). Methane (n=1): CH4. Ethane (n=2): C2H6. Propane (n=3): C3H8.",
        "C2nHn would give methane (n=1) as C2H1, clearly wrong."
      ],
      teach: "Memorise CnH(2n+2) for alkanes. Test it on methane: 1 carbon, so 2(1)+2 = 4 hydrogens. CH4. It checks out." },
    { id: 'c7-3', topic: 'c7', type: 'short', marks: 2,
      text: 'Name the two products formed when methane (CH₄) undergoes COMPLETE combustion.',
      markScheme: 'Carbon dioxide (1 mark) and water (1 mark).',
      teach: "Complete combustion of any hydrocarbon: CO2 + H2O. Plenty of oxygen needed. If oxygen is limited (incomplete), you get carbon monoxide and soot instead." },
    { id: 'c7-4', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Fractional distillation separates the parts of crude oil based on differences in their...',
      options: ['Colour', 'Boiling points', 'Density', 'Reactivity'],
      answer: 1,
      optionFeedback: [
        "Colour doesn't separate hydrocarbons, many are similar in appearance.",
        "Correct. Different hydrocarbons have different boiling points (longer chains = higher boiling point). The column is hot at the bottom and cool at the top, so each fraction condenses at the level matching its boiling point.",
        "Density isn't what separates them in fractional distillation. It's all about boiling points.",
        "Reactivity isn't relevant, fractional distillation is a physical process, not a chemical one."
      ],
      teach: "Fractional distillation works on boiling points. The taller the column, the better the separation. Different fractions are tapped off at different heights." },

    { id: 'c8-1', topic: 'c8', type: 'mcq', marks: 1,
      text: 'Which of the following is a pure substance?',
      options: ['Sea water', 'Air', 'Distilled water', 'Crude oil'],
      answer: 2,
      optionFeedback: [
        "Sea water has salts dissolved in it, so it's a mixture.",
        "Air is a mixture of gases (nitrogen, oxygen, argon, etc.).",
        "Correct. Distilled water is pure H2O, just one compound, nothing else.",
        "Crude oil is a mixture of many hydrocarbons."
      ],
      teach: "Pure = ONE substance only. If it has more than one component, it's a mixture, regardless of how 'clean' or 'natural' it looks." },
    { id: 'c8-2', topic: 'c8', type: 'short', marks: 2,
      text: 'A pure substance has a sharp, single melting point. Describe what you would observe about the melting point of an impure substance.',
      markScheme: 'It melts over a range of temperatures (1 mark). The melting point is lower than the pure substance (1 mark).',
      teach: "Impurities mess things up, the substance melts over a RANGE and the melting point is LOWER. This is one of the classic tests for purity." },
    { id: 'c8-3', topic: 'c8', type: 'mcq', marks: 1,
      text: 'In paper chromatography, what is the Rf value calculated as?',
      options: ['Distance moved by spot ÷ distance moved by solvent', 'Distance moved by solvent ÷ distance moved by spot', 'Total distance × time', 'Mass of spot ÷ mass of solvent'],
      answer: 0,
      optionFeedback: [
        "Correct. Rf = distance moved by spot ÷ distance moved by solvent. Always between 0 and 1.",
        "You've got it upside down. The spot distance is on TOP, solvent distance on the bottom.",
        "Time isn't part of the Rf formula. It's just two distances.",
        "Mass isn't part of Rf. It's only about how far the spot and solvent have travelled."
      ],
      teach: "Rf = SPOT distance ÷ SOLVENT distance. Always between 0 and 1. No units. Used to identify substances." },

    { id: 'c9-1', topic: 'c9', type: 'mcq', marks: 1,
      text: 'What percentage of the atmosphere is oxygen?',
      options: ['78%', '21%', '50%', '1%'],
      answer: 1,
      optionFeedback: [
        "78% is the percentage of NITROGEN, not oxygen. Easy to mix up.",
        "Correct. Oxygen is 21% of the atmosphere, about a fifth.",
        "Not 50%. Oxygen is about 1/5 of the atmosphere, not half.",
        "1% is everything that's NOT nitrogen or oxygen (argon, CO2, water vapour)."
      ],
      teach: "Atmosphere: 78% N2, 21% O2, 1% other (mostly argon plus tiny CO2). Learn these numbers, they come up every year." },
    { id: 'c9-2', topic: 'c9', type: 'short', marks: 2,
      text: 'Name TWO greenhouse gases.',
      markScheme: 'Any two from: carbon dioxide (CO₂), methane (CH₄), water vapour (H₂O). 1 mark each.',
      teach: "Three main greenhouse gases: CO2, methane, water vapour. CO2 is the one most affected by human activity (burning fossil fuels)." },
    { id: 'c9-3', topic: 'c9', type: 'short', marks: 3,
      text: 'Describe how increased levels of carbon dioxide in the atmosphere could lead to climate change.',
      markScheme: 'CO₂ absorbs the heat / infrared radiation emitted from the Earth (1 mark). More CO₂ traps more heat in the atmosphere (1 mark). This causes global temperatures to rise / leads to climate change (1 mark).',
      teach: "Three steps: (1) CO2 absorbs infrared, (2) more CO2 means more heat trapped, (3) this raises global temperatures. Each step = 1 mark." },
    { id: 'c9-4', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Which human activity releases the MOST carbon dioxide into the atmosphere?',
      options: ['Recycling', 'Burning fossil fuels', 'Eating meat', 'Driving electric cars'],
      answer: 1,
      optionFeedback: [
        "Recycling reduces CO2 emissions overall (saves energy), not a major source.",
        "Correct. Burning fossil fuels (coal, oil, gas) for energy, heat and transport is by far the biggest human source of CO2.",
        "Eating meat does have an environmental impact (mainly methane from livestock), but burning fossil fuels still releases more CO2 globally.",
        "Electric cars don't release CO2 from the tailpipe. (The electricity might come from fossil fuels, but that's covered under 'burning fossil fuels'.)"
      ],
      teach: "Burning fossil fuels = #1 source of human CO2 emissions. Coal, oil, and natural gas in power stations and engines." },

    { id: 'c10-1', topic: 'c10', type: 'mcq', marks: 1,
      text: 'What does "potable water" mean?',
      options: ['Water that is salty', 'Water that is safe to drink', 'Water from the sea', 'Water that has been boiled'],
      answer: 1,
      optionFeedback: [
        "Salty water isn't potable, it's actually undrinkable in large amounts.",
        "Correct. Potable means safe to drink. Tap water is potable. It's NOT pure (it has dissolved minerals and chlorine), but it's safe.",
        "Sea water is the opposite of potable, it needs desalination first.",
        "Boiling helps kill microbes but doesn't define 'potable'. UK tap water is treated with chlorine and filtration, not just boiling."
      ],
      teach: "Potable = safe to drink. Doesn't have to be PURE, tap water has dissolved minerals and chlorine but it's still potable." },
    { id: 'c10-2', topic: 'c10', type: 'short', marks: 2,
      text: 'Give ONE advantage and ONE disadvantage of recycling metals instead of extracting new metal from ore.',
      markScheme: 'Advantage (any one): saves natural resources / uses less energy / less mining damage / less CO₂ / cheaper. Disadvantage (any one): sorting different metals is difficult / collection costs money / quality may be lower / not all metals can be recycled together. 1 mark for each.',
      teach: "When asked for advantage AND disadvantage, give ONE of each, clearly. Don't waffle. The answer should be obvious, what's good vs what's hard." },
    { id: 'c10-3', topic: 'c10', type: 'mcq', marks: 1,
      text: 'A life cycle assessment (LCA) looks at the environmental impact of a product. Which stage is NOT part of an LCA?',
      options: ['Extracting raw materials', 'Manufacturing the product', 'How much the product costs to buy', 'Disposing of the product'],
      answer: 2,
      optionFeedback: [
        "Extracting raw materials IS part of an LCA, the first stage.",
        "Manufacturing IS part of an LCA, the second stage.",
        "Correct. LCAs only consider environmental impact, not money/cost. Cost is a financial measure, not environmental.",
        "Disposal IS part of an LCA, the final stage."
      ],
      teach: "LCA = ENVIRONMENTAL impact only. The four stages are raw materials, manufacturing, use, disposal. Cost in money isn't included." },

    { id: 'c1-7', topic: 'c1', type: 'mcq', marks: 1,
      text: 'What is the maximum number of electrons in the second shell?',
      options: ['2', '6', '8', '18'],
      answer: 2,
      optionFeedback: [
        "That's the maximum for the FIRST shell.",
        "Six is wrong; check the shell-filling rule.",
        "Correct. The second shell holds up to 8 electrons.",
        "18 is the max for higher shells, but you only need 2, 8, 8 for Foundation."
      ],
      teach: "Shell limits at Foundation: 2, then 8, then 8. Fill in order, inner shells first." },
    { id: 'c1-8', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Magnesium has 12 protons. What is its electron arrangement?',
      options: ['2,2,8', '2,8,2', '8,2,2', '12,0,0'],
      answer: 1,
      optionFeedback: [
        "Order matters: fill inner shells first.",
        "Correct. 2 + 8 + 2 = 12. First shell full (2), second shell full (8), then 2 in the third.",
        "Inner shells fill first, not the outer first.",
        "The first shell can't hold 12 electrons."
      ],
      teach: "Magnesium: 12 electrons &rarr; 2,8,2. Group 2 (2 outer electrons), period 3 (three shells used)." },
    { id: 'c1-9', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Why is the modern periodic table arranged with elements in order of atomic number, rather than atomic mass?',
      options: ['Atomic mass is impossible to measure', 'Some elements would be in the wrong group if ordered by mass', 'Atomic number is bigger than atomic mass', 'It looks neater on the page'],
      answer: 1,
      optionFeedback: [
        "Atomic mass can be measured.",
        "Correct. A few pairs (like potassium/argon, tellurium/iodine) end up in the right groups by atomic number but not by mass. Atomic number gives a consistent ordering.",
        "Atomic number is usually smaller, not bigger.",
        "Aesthetics aren't the reason."
      ],
      teach: "Atomic number (protons) gives consistent group placement. Mendeleev originally used atomic mass and had to swap a few pairs; atomic number sorted that out." },
    { id: 'c1-10', topic: 'c1', type: 'short', marks: 2,
      text: 'State two things that all atoms of chlorine have in common, no matter which isotope they are.',
      markScheme: 'Same number of protons (17) (1 mark). Same number of electrons (17) / same electron arrangement / same chemical properties (1 mark).',
      teach: "Isotopes share everything except neutron number. Same protons (= same element), same electrons (= same chemistry)." },
    { id: 'c1-11', topic: 'c1', type: 'short', marks: 2,
      text: 'Fluorine (Group 7) reacts more violently than chlorine. Explain why, in terms of electron arrangement.',
      markScheme: 'Fluorine has fewer electron shells, so its outer shell is closer to the nucleus (1 mark). The pull on incoming electrons is therefore stronger, so it gains an electron more easily / reacts faster (1 mark).',
      teach: "Group 7 reactivity DECREASES down the group. The opposite of Group 1. Smaller atom = closer outer shell to nucleus = stronger pull on the incoming electron." },
    { id: 'c1-12', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Argon is in Group 0. Why is it used to fill the inside of some light bulbs?',
      options: ['It is very reactive', 'It is unreactive and won\'t react with the hot filament', 'It conducts electricity', 'It produces light by itself'],
      answer: 1,
      optionFeedback: [
        "Argon is the OPPOSITE of reactive.",
        "Correct. Argon is a noble gas with a full outer shell, so it doesn't react with the hot tungsten filament. This stops the filament burning out.",
        "Argon doesn't conduct electricity in normal bulbs.",
        "Argon glows only in some specific tubes; it doesn't make ordinary light bulbs work."
      ],
      teach: "Noble gases (Group 0) are unreactive because they have full outer shells. Used where you need a gas that won't react: light bulbs, lasers, welding shields." },
    { id: 'c1-13', topic: 'c1', type: 'mcq', marks: 1,
      text: 'Which of these would have the same number of protons as a normal atom of sodium (atomic number 11)?',
      options: ['A sodium ion Na+', 'A potassium atom', 'A neon atom', 'A magnesium atom'],
      answer: 0,
      optionFeedback: [
        "Correct. A Na+ ion is a sodium atom that has LOST an electron. It still has 11 protons, just one fewer electron. Still sodium.",
        "Potassium has 19 protons.",
        "Neon has 10 protons.",
        "Magnesium has 12 protons."
      ],
      teach: "Ions have the same protons as the neutral atom, but different electron count. Atomic number doesn't change when atoms ionise." },

    { id: 'c2-6', topic: 'c2', type: 'mcq', marks: 1,
      text: 'In an ionic compound, which way do electrons move?',
      options: ['They are shared equally', 'From the non-metal to the metal', 'From the metal to the non-metal', 'They stay in their original atoms'],
      answer: 2,
      optionFeedback: [
        "Sharing is covalent, not ionic.",
        "It's the other way: metals lose, non-metals gain.",
        "Correct. The metal atom loses its outer electrons (becomes +). The non-metal atom gains those electrons (becomes -). Then opposite charges attract.",
        "If they did, no bonding would happen."
      ],
      teach: "Ionic: metals LOSE electrons (+ ion). Non-metals GAIN electrons (- ion). Electrons transfer from metal to non-metal." },
    { id: 'c2-7', topic: 'c2', type: 'mcq', marks: 1,
      text: 'A solid does NOT conduct electricity, but when melted it conducts well. What type of substance is most likely?',
      options: ['Metal', 'Simple molecular', 'Giant covalent', 'Ionic compound'],
      answer: 3,
      optionFeedback: [
        "Metals conduct whether solid or liquid.",
        "Simple molecular substances don't conduct even when liquid.",
        "Giant covalent (except graphite) doesn't conduct in either state.",
        "Correct. Ionic compounds need free-moving charged particles to conduct. In a solid lattice, ions are fixed in place. When melted, ions move freely and carry charge."
      ],
      teach: "Ionic compounds: don't conduct solid (ions locked in lattice). Conduct molten or dissolved (ions free to move). Useful diagnostic." },
    { id: 'c2-8', topic: 'c2', type: 'mcq', marks: 1,
      text: 'A covalent bond is formed when:',
      options: ['Electrons are transferred from one atom to another', 'A pair of electrons is shared between two atoms', 'Atoms rearrange themselves into ions', 'Protons jump between atoms'],
      answer: 1,
      optionFeedback: [
        "Transfer is ionic. Covalent is sharing.",
        "Correct. Each covalent bond is a shared pair of electrons. The shared pair pulls both nuclei together.",
        "Ions form in ionic bonding, not covalent.",
        "Protons don't move between atoms."
      ],
      teach: "Covalent bond = shared pair of electrons. Two non-metals. Double bond = 2 shared pairs. Triple bond = 3 shared pairs." },
    { id: 'c2-9', topic: 'c2', type: 'mcq', marks: 1,
      text: 'Polymers like polythene are made of:',
      options: ['Small individual molecules', 'Long chains of repeating units', 'Pure metals', 'Giant ionic lattices'],
      answer: 1,
      optionFeedback: [
        "Small molecules wouldn't have polymer properties.",
        "Correct. Polymers are very long molecules made by joining many small repeat units (monomers) together via covalent bonds.",
        "Polymers aren't metallic.",
        "Polymers aren't ionic."
      ],
      teach: "Polymer = poly (many) + mer (parts). Long chain of repeating monomer units. Plastics, proteins, starch, DNA are all polymers." },
    { id: 'c2-10', topic: 'c2', type: 'short', marks: 3,
      text: 'Diamond and graphite are both forms of pure carbon, but they have very different properties. Explain why diamond is hard while graphite is soft and slippery.',
      markScheme: 'Diamond has each carbon atom bonded to four others in a rigid 3D lattice / giant covalent structure (1 mark). Graphite has each carbon bonded to three others in flat layers (1 mark). The layers in graphite are only held by weak forces, so they slide over each other, making it soft, while diamond\'s 3D structure can\'t slide (1 mark).',
      teach: "Same atoms, different structures. Diamond: 4 bonds per C, 3D, hard. Graphite: 3 bonds per C, layers, slides. Hence pencils vs drill tips." },
    { id: 'c2-11', topic: 'c2', type: 'short', marks: 2,
      text: 'Explain why metals are good conductors of electricity.',
      markScheme: 'Metals have delocalised (free) electrons / a sea of electrons (1 mark). These electrons are free to move through the metal, carrying charge / so electricity flows (1 mark).',
      teach: "Delocalised electrons in a 'sea' = free charge carriers = good conductor. Don't say 'free protons', protons can't move." },
    { id: 'c2-12', topic: 'c2', type: 'short', marks: 2,
      text: 'A substance has a low melting point, doesn\'t conduct electricity in any state, and is a gas at room temperature. Suggest what type of substance it is, and explain.',
      markScheme: 'Simple molecular / small covalent molecules (1 mark). The forces between molecules are weak, so only a little energy is needed to overcome them (low melting point) and there are no free charged particles to carry current (no conduction) (1 mark).',
      teach: "Profile: low melting point, no conduction, often gas or liquid &rarr; simple molecular. Weak intermolecular forces are the key explanation." },
    { id: 'c2-13', topic: 'c2', type: 'mcq', marks: 1,
      text: 'Which of these is a property of metals that ionic compounds do NOT have?',
      options: ['High melting point', 'Conduct electricity when solid', 'Made of more than one element', 'Hard or strong'],
      answer: 1,
      optionFeedback: [
        "Both can have high melting points.",
        "Correct. Metals conduct in the solid state (delocalised electrons move). Ionic compounds only conduct when molten or in solution.",
        "Metals can be pure elements or alloys; ionic compounds always contain at least two elements.",
        "Both can be hard."
      ],
      teach: "Solid conduction: metals YES, ionic NO. The key difference test." },

    { id: 'c3-5', topic: 'c3', type: 'mcq', marks: 1,
      text: 'What is the Mr of calcium carbonate, CaCO3? Use Ca=40, C=12, O=16.',
      options: ['68', '100', '112', '76'],
      answer: 1,
      optionFeedback: [
        "Don't forget the third oxygen.",
        "Correct. 40 + 12 + (3 &times; 16) = 40 + 12 + 48 = 100.",
        "112 means you added an extra atom somewhere.",
        "76 is missing some atoms."
      ],
      teach: "Mr = sum of atomic masses, counting every atom. Subscripts tell you how many of each atom." },
    { id: 'c3-6', topic: 'c3', type: 'mcq', marks: 1,
      text: 'Balance: __ H2 + __ O2 &rarr; __ H2O',
      options: ['1, 1, 1', '2, 2, 2', '2, 1, 2', '1, 2, 1'],
      answer: 2,
      optionFeedback: [
        "Hydrogen and oxygen don't balance.",
        "Doubling everything still balances, but it's not the simplest form.",
        "Correct. 2 H2 + 1 O2 &rarr; 2 H2O. Left: 4 H, 2 O. Right: 4 H, 2 O.",
        "Not balanced."
      ],
      teach: "2 H2 + O2 &rarr; 2 H2O. Hydrogen and oxygen burning to make water, balanced." },
    { id: 'c3-7', topic: 'c3', type: 'mcq', marks: 1,
      text: 'When magnesium burns in a sealed container, what happens to the total mass inside?',
      options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
      answer: 2,
      optionFeedback: [
        "Mass increases only if you DON'T seal it (atoms from outside join in).",
        "Mass decreases only if a gas escapes, which it can't here.",
        "Correct. Sealed = no atoms in or out. Total mass of products = total mass of reactants. Conservation of mass.",
        "Mass can't disappear."
      ],
      teach: "Conservation of mass. Sealed container = no in or out = same total mass. Open container can mislead because gas escapes or enters." },
    { id: 'c3-8', topic: 'c3', type: 'mcq', marks: 1,
      text: 'A reaction produces a gas. The starting mass is 50 g and the mass after reaction (open container) is 45 g. What is the mass of the gas?',
      options: ['5 g', '50 g', '45 g', '95 g'],
      answer: 0,
      optionFeedback: [
        "Correct. 50 g - 45 g = 5 g. That mass escaped as gas.",
        "That's the starting mass.",
        "That's the mass left after reaction.",
        "Don't add them; subtract."
      ],
      teach: "Mass apparently lost = mass of gas escaped. Mass isn't actually lost; it just left the container." },
    { id: 'c3-9', topic: 'c3', type: 'mcq', marks: 1,
      text: 'What is the Mr of sodium hydroxide, NaOH? (Na=23, O=16, H=1)',
      options: ['24', '40', '39', '17'],
      answer: 1,
      optionFeedback: [
        "Looks like you only added Na and H.",
        "Correct. 23 + 16 + 1 = 40.",
        "Off by one, recount.",
        "That's missing the sodium."
      ],
      teach: "NaOH: 23 + 16 + 1 = 40. Used as an alkali in many reactions." },
    { id: 'c3-10', topic: 'c3', type: 'short', marks: 2,
      text: 'Calculate the relative formula mass of magnesium chloride MgCl2. Use Mg = 24, Cl = 35.5.',
      markScheme: '24 + (2 &times; 35.5) = 24 + 71 (1 mark) = 95 (1 mark).',
      teach: "Subscripts multiply. MgCl2 has 1 Mg and 2 Cl. Mr = 24 + 2(35.5) = 95." },
    { id: 'c3-11', topic: 'c3', type: 'short', marks: 2,
      text: 'Calcium carbonate decomposes: CaCO3 &rarr; CaO + CO2. Why does the mass of the solid appear to decrease when the reaction is carried out in an open dish?',
      markScheme: 'Carbon dioxide (CO2) is given off as a gas (1 mark). The gas escapes into the air, so the solid that remains has a lower mass; but the total mass (including the gas) is conserved (1 mark).',
      teach: "Gas escaping = apparent mass loss. Conservation still holds for the closed system, you've just lost track of the gas." },
    { id: 'c3-12', topic: 'c3', type: 'mcq', marks: 1,
      text: 'Which equation is balanced?',
      options: ['Na + Cl2 &rarr; NaCl', 'CH4 + O2 &rarr; CO2 + H2O', '2H2 + O2 &rarr; 2H2O', 'Mg + HCl &rarr; MgCl2 + H2'],
      answer: 2,
      optionFeedback: [
        "Chlorines: 2 on left, 1 on right. Not balanced.",
        "Hydrogens: 4 left, 2 right. Oxygens: 2 left, 3 right. Not balanced.",
        "Correct. 4 H and 2 O on each side. Balanced.",
        "Hydrogens and chlorines don't balance."
      ],
      teach: "Count each element. Both sides must match. 2H2 + O2 &rarr; 2H2O is one of the classic balanced equations." },
    { id: 'c3-13', topic: 'c3', type: 'short', marks: 2,
      text: 'Magnesium reacts with hydrochloric acid: Mg + 2HCl &rarr; MgCl2 + H2. If 2.4 g of Mg react, what is the maximum mass of H2 that could be produced? (Use Mr Mg = 24, Mr H2 = 2.)',
      markScheme: 'Moles of Mg = 2.4 &divide; 24 = 0.1 (1 mark). 1 : 1 ratio with H2, so 0.1 moles of H2 &rarr; mass = 0.1 &times; 2 = 0.2 g (1 mark).',
      teach: "Steps: moles of reactant = mass &divide; Mr. Use ratio from balanced equation. Mass of product = moles &times; Mr." },

    { id: 'c4-6', topic: 'c4', type: 'mcq', marks: 1,
      text: 'What ion makes a solution acidic?',
      options: ['OH-', 'H+', 'Na+', 'Cl-'],
      answer: 1,
      optionFeedback: [
        "OH- ions make solutions alkaline.",
        "Correct. H+ (hydrogen) ions are what make a solution acidic. The higher the H+ concentration, the lower the pH.",
        "Na+ is just a spectator ion in a salt.",
        "Cl- is found in hydrochloric acid but doesn't make solutions acidic on its own."
      ],
      teach: "Acid = H+. Alkali = OH-. The pH scale measures the H+ concentration." },
    { id: 'c4-7', topic: 'c4', type: 'mcq', marks: 1,
      text: 'Which salt is formed when nitric acid reacts with potassium hydroxide?',
      options: ['Potassium nitrate', 'Potassium chloride', 'Potassium sulfate', 'Sodium nitrate'],
      answer: 0,
      optionFeedback: [
        "Correct. Nitric acid &rarr; nitrate salt. The K from KOH gives potassium nitrate (KNO3).",
        "Chlorides come from hydrochloric acid.",
        "Sulfates come from sulfuric acid.",
        "There's no sodium in this reaction."
      ],
      teach: "Match the acid to the salt name: HCl &rarr; chloride. H2SO4 &rarr; sulfate. HNO3 &rarr; nitrate. The metal from the alkali becomes the salt's metal." },
    { id: 'c4-8', topic: 'c4', type: 'mcq', marks: 1,
      text: 'Which is the most reactive metal in this list?',
      options: ['Copper', 'Iron', 'Magnesium', 'Sodium'],
      answer: 3,
      optionFeedback: [
        "Copper is below hydrogen on the reactivity series, low reactivity.",
        "Iron is below the Group 1 metals.",
        "Magnesium is reasonably reactive but not the most here.",
        "Correct. Sodium is in Group 1 and very high on the reactivity series, more reactive than the others listed."
      ],
      teach: "Reactivity order: K, Na, Ca, Mg, Al, Zn, Fe, Cu, Au. Sodium near the top, copper near the bottom." },
    { id: 'c4-9', topic: 'c4', type: 'mcq', marks: 1,
      text: 'During electrolysis of molten sodium chloride, what is produced at the ANODE?',
      options: ['Sodium metal', 'Hydrogen gas', 'Chlorine gas', 'Oxygen gas'],
      answer: 2,
      optionFeedback: [
        "Sodium ions are positive, so they go to the cathode (negative electrode).",
        "There's no hydrogen in molten NaCl.",
        "Correct. Chloride ions Cl- are negative, so they migrate to the anode (positive electrode). They lose electrons and form Cl2 gas.",
        "There's no oxygen in molten NaCl."
      ],
      teach: "Anode = positive = attracts negative ions. Negative ions lose electrons to become atoms. Chloride &rarr; chlorine gas." },
    { id: 'c4-10', topic: 'c4', type: 'mcq', marks: 1,
      text: 'Aluminium is extracted from its ore (bauxite) by electrolysis. Why is aluminium not extracted by heating with carbon?',
      options: ['Carbon is too expensive', 'Aluminium is too reactive; it sits above carbon in the reactivity series', 'Bauxite isn\'t an aluminium ore', 'Carbon would melt the aluminium'],
      answer: 1,
      optionFeedback: [
        "Carbon is actually cheap; that's not the issue.",
        "Correct. Aluminium is more reactive than carbon, so heating with carbon wouldn't displace it. Electrolysis is needed. Iron, less reactive than carbon, CAN be extracted by heating with carbon.",
        "Bauxite IS aluminium ore.",
        "Carbon doesn't melt aluminium."
      ],
      teach: "Reactivity-based extraction. Metals above C in the reactivity series &rarr; electrolysis. Below C (like iron) &rarr; reduction with carbon." },
    { id: 'c4-11', topic: 'c4', type: 'short', marks: 3,
      text: 'Zinc reacts with sulfuric acid. Write a balanced symbol equation for the reaction, and name the salt formed.',
      markScheme: 'Zn + H2SO4 &rarr; ZnSO4 + H2 (1 mark for correct reactants and products, 1 mark for balancing). Salt formed: zinc sulfate (1 mark).',
      teach: "Metal + acid &rarr; salt + hydrogen. Sulfuric acid &rarr; sulfate salt. Equation balances naturally here." },
    { id: 'c4-12', topic: 'c4', type: 'short', marks: 2,
      text: 'A neutral solution turns universal indicator green. Sketch what happens to the indicator colour as concentrated acid is gradually added, and explain what is happening chemically.',
      markScheme: 'Colour changes through yellow/orange to red as more H+ ions are added (1 mark). The H+ concentration is increasing, so the pH is decreasing (becoming more acidic) (1 mark).',
      teach: "Universal indicator colours: red &rarr; orange/yellow (acid), green (neutral), blue (weak alkali), purple (strong alkali). Linked to H+ / OH- concentration." },
    { id: 'c4-13', topic: 'c4', type: 'short', marks: 2,
      text: 'Predict what you would observe if a piece of magnesium is placed in copper sulfate solution.',
      markScheme: 'Brown / red-brown deposit of copper forms on the magnesium / in the solution (1 mark). The blue colour of the copper sulfate solution fades / becomes colourless (1 mark). (Mg also gets coated and may disappear.)',
      teach: "Mg + CuSO4 &rarr; MgSO4 + Cu. More reactive Mg displaces Cu. Blue solution fades, brown Cu forms." },

    { id: 'c5-4', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Which of these is NOT an exothermic reaction?',
      options: ['Burning fuel', 'Hand warmer activating', 'Neutralisation of acid and alkali', 'Photosynthesis'],
      answer: 3,
      optionFeedback: [
        "Burning is exothermic.",
        "Hand warmers release heat, exothermic.",
        "Neutralisation is exothermic.",
        "Correct. Photosynthesis absorbs energy (light), so it is endothermic."
      ],
      teach: "Photosynthesis takes energy IN from light = endothermic. Combustion, neutralisation and dissolving in some cases are exothermic." },
    { id: 'c5-5', topic: 'c5', type: 'mcq', marks: 1,
      text: 'In a reaction profile diagram for an exothermic reaction:',
      options: ['Products are higher than reactants', 'Products are lower than reactants', 'Products and reactants are at the same level', 'There is no activation energy hump'],
      answer: 1,
      optionFeedback: [
        "That's an endothermic profile.",
        "Correct. The energy has been released, so products end up at a lower energy than the reactants. The activation energy hump is still there, but the line falls from there to the products.",
        "Then no energy would be transferred.",
        "All reactions have activation energy."
      ],
      teach: "Exothermic profile: starts high, hump, ends LOWER. Endothermic: starts low, hump, ends HIGHER. Both have an activation energy hump." },
    { id: 'c5-6', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Why does a chemical bond release energy when it forms?',
      options: ['Atoms gain mass', 'Energy is needed to break bonds, and energy is released when bonds form', 'Bonds are unstable', 'Atoms split'],
      answer: 1,
      optionFeedback: [
        "Atoms don't gain mass when bonds form.",
        "Correct. Energy is needed to BREAK bonds. Energy is RELEASED when bonds are MADE. Whether a reaction is exothermic or endothermic depends on the net difference.",
        "Bonds are usually MORE stable than free atoms.",
        "Bond formation is the opposite of splitting."
      ],
      teach: "Breaking bonds: takes energy in. Making bonds: gives energy out. Exothermic = more energy out than in. Endothermic = more in than out." },
    { id: 'c5-7', topic: 'c5', type: 'mcq', marks: 1,
      text: 'A reaction has bond energies: bonds broken = 800 kJ, bonds formed = 1100 kJ. The reaction is:',
      options: ['Exothermic, releasing 300 kJ', 'Endothermic, absorbing 300 kJ', 'Exothermic, releasing 1900 kJ', 'No energy change'],
      answer: 0,
      optionFeedback: [
        "Correct. Bonds made (1100) - bonds broken (800) = 300 kJ released. Net release = exothermic.",
        "More energy is released than absorbed here, so exothermic.",
        "1900 would be if you added them. Subtract for the net.",
        "There IS a net change of 300 kJ."
      ],
      teach: "Net energy = energy broken - energy formed. If formed > broken, net is exothermic (negative). If broken > formed, net is endothermic." },
    { id: 'c5-8', topic: 'c5', type: 'short', marks: 2,
      text: 'In an experiment, a student mixed citric acid and sodium hydrogen carbonate in water. The temperature dropped from 22&deg;C to 16&deg;C. State whether the reaction is exothermic or endothermic, and justify your answer.',
      markScheme: 'Endothermic (1 mark). The temperature drop shows the surroundings have lost energy, so the reaction took energy in from the surroundings (1 mark).',
      teach: "Temperature DROP = energy taken IN = endothermic. Temperature RISE = exothermic. Citric acid + sodium hydrogencarbonate is a classic endothermic example." },
    { id: 'c5-9', topic: 'c5', type: 'short', marks: 2,
      text: 'Explain what is meant by activation energy.',
      markScheme: 'The minimum amount of energy needed for the reactant particles to react (1 mark). Particles must have enough energy when they collide to break the existing bonds and start the reaction (1 mark).',
      teach: "Activation energy = the energy hump on a reaction profile. The minimum energy needed for a successful collision (one that leads to a reaction)." },
    { id: 'c5-10', topic: 'c5', type: 'short', marks: 2,
      text: 'A combustion reaction is exothermic. Sketch (describe in words) the reaction profile for combustion, labelling: reactants, products, and activation energy.',
      markScheme: 'The reaction profile starts at the reactant level (higher), rises to a peak (activation energy required to start the reaction) (1 mark), then drops to the product level (lower) (1 mark). Difference between reactant and product levels is energy released. The activation energy is the gap from reactants up to the peak.',
      teach: "Drawing reaction profiles: reactants level, hump (activation energy), products level. For exothermic, products lower." },
    { id: 'c5-11', topic: 'c5', type: 'mcq', marks: 1,
      text: 'In a self-heating can (containing calcium chloride dissolved in water), the can warms up. The reaction is therefore:',
      options: ['Endothermic', 'Exothermic', 'Neither', 'Cannot be determined'],
      answer: 1,
      optionFeedback: [
        "Endothermic would feel cold, not warm.",
        "Correct. Heat is released into the surroundings (the can and its contents), so it's exothermic.",
        "There is a clear temperature change.",
        "The temperature change tells us clearly."
      ],
      teach: "Warm to the touch = exothermic. Cold = endothermic. Apply that test to any reaction." },
    { id: 'c5-12', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Sports injury cold packs use which type of reaction?',
      options: ['Exothermic', 'Endothermic', 'Combustion', 'Oxidation'],
      answer: 1,
      optionFeedback: [
        "Exothermic releases heat, so it would feel hot, not cold.",
        "Correct. Cold packs work because dissolving the chemical (often ammonium nitrate) is endothermic, absorbing heat from the injury.",
        "Combustion is exothermic.",
        "Oxidation is usually exothermic."
      ],
      teach: "Cold pack = endothermic. Absorbs heat from your skin to cool the injury. Reverses on disposal as it slowly equilibrates." },
    { id: 'c5-13', topic: 'c5', type: 'mcq', marks: 1,
      text: 'Why does breaking a chemical bond require energy?',
      options: ['Bonds are made of energy', 'Energy must overcome the attractive forces holding atoms together', 'Atoms get bigger', 'Bond breaking creates new atoms'],
      answer: 1,
      optionFeedback: [
        "Bonds are forces, not lumps of energy.",
        "Correct. Bonds are attractive forces between atoms. Energy is needed to overcome them and separate the atoms.",
        "Atoms don't grow.",
        "New atoms aren't made; existing ones are rearranged."
      ],
      teach: "Bond breaking = energy required (because atoms are attracted to each other). Bond making = energy released (because the new arrangement is more stable)." },

    { id: 'c6-4', topic: 'c6', type: 'mcq', marks: 1,
      text: 'You measure the rate of a reaction by recording how much gas is produced over time. The gas volume increases quickly at first, then slowly, then stops. Why does the rate slow down?',
      options: ['The temperature drops', 'The reactants are being used up', 'The products dissolve', 'The reaction reverses'],
      answer: 1,
      optionFeedback: [
        "Temperature can change but it's usually controlled in such an experiment.",
        "Correct. As reactants get used up, there are fewer collisions per second, so the rate falls. When all of one reactant is gone, the reaction stops.",
        "Dissolving products doesn't usually affect rate.",
        "Unless told it's reversible, assume it's not."
      ],
      teach: "Rate falls because reactant concentration falls. Eventually one reactant runs out and the reaction stops." },
    { id: 'c6-5', topic: 'c6', type: 'mcq', marks: 1,
      text: 'A reaction is doubled in rate every 10&deg;C increase. Why?',
      options: ['Hotter particles take up more space', 'Hotter particles move faster, leading to more frequent collisions AND a greater proportion having enough energy', 'Hotter particles change colour', 'Hotter particles bond differently'],
      answer: 1,
      optionFeedback: [
        "Volume isn't the main effect.",
        "Correct. Two effects combine: faster particles = more collisions per second, and more collisions have energy above the activation energy. Together, much faster rate.",
        "Colour isn't relevant.",
        "Bonding doesn't change with temperature."
      ],
      teach: "Temperature speeds rate by TWO mechanisms: more frequent collisions + a higher proportion of collisions succeed. Both increase rate." },
    { id: 'c6-6', topic: 'c6', type: 'mcq', marks: 1,
      text: 'Powdered marble chips fizz faster with acid than a single lump of marble. Why?',
      options: ['Powder has different chemistry', 'Powder has more surface area, so more collisions per second', 'Powder is hotter', 'Powder is less reactive'],
      answer: 1,
      optionFeedback: [
        "Same chemistry, different physical form.",
        "Correct. Smaller pieces = more total surface area exposed to the acid = more collision sites = faster rate.",
        "Powder isn't usually hotter than lumps.",
        "Surface area, not reactivity, is the difference."
      ],
      teach: "Surface area: more area = more collisions per second = faster rate. Powder beats lump. Same reason small pieces of food cook faster." },
    { id: 'c6-7', topic: 'c6', type: 'mcq', marks: 1,
      text: 'Which of these statements about catalysts is FALSE?',
      options: ['They lower the activation energy', 'They are used up in the reaction', 'They are not part of the chemical equation', 'They speed up the reaction'],
      answer: 1,
      optionFeedback: [
        "Catalysts DO lower the activation energy.",
        "Correct. This is FALSE. Catalysts are NOT used up. That's their defining feature.",
        "Catalysts speed up the reaction but aren't included in the balanced chemical equation.",
        "Catalysts DO speed up reactions."
      ],
      teach: "Catalyst facts: speeds rate, lowers activation energy, NOT used up, not in equation. Get the language right." },
    { id: 'c6-8', topic: 'c6', type: 'short', marks: 3,
      text: 'A student investigates the effect of acid concentration on the rate of reaction with magnesium ribbon. The student measures the time taken for the magnesium to disappear. Describe how rate of reaction would change with higher acid concentration, and explain why.',
      markScheme: 'Higher concentration means more rapid reaction / Mg disappears more quickly (1 mark). More acid particles per unit volume / more H+ ions present (1 mark). Therefore more frequent collisions between particles, so more successful collisions per second / faster rate (1 mark).',
      teach: "Concentration & rate: more particles per volume &rarr; more collisions &rarr; faster rate. Three-mark answers need: effect, cause, mechanism." },
    { id: 'c6-9', topic: 'c6', type: 'short', marks: 2,
      text: 'Sketch the shape of a graph showing the volume of gas produced over time for a typical reaction. Describe what the graph shape tells you.',
      markScheme: 'Steep at the start, becoming less steep, eventually flattening to a plateau (1 mark). Steep at start = fast rate when reactants are plentiful. Flattens because reactants are being used up; plateau = reaction over (1 mark).',
      teach: "Volume-time graph: steep at start, levels off. Steep = fast rate. Plateau = reactants used up. Gradient AT a point = rate AT that moment." },
    { id: 'c6-10', topic: 'c6', type: 'short', marks: 2,
      text: 'Explain why a catalyst speeds up a reaction without being used up.',
      markScheme: 'A catalyst provides an alternative pathway for the reaction with a lower activation energy (1 mark). More collisions therefore have enough energy to react. The catalyst is regenerated at the end, so its mass is unchanged (1 mark).',
      teach: "Catalyst = alternative pathway with lower activation energy. Recycled at the end so not consumed. Iron in Haber, nickel in margarine hydrogenation." },
    { id: 'c6-11', topic: 'c6', type: 'mcq', marks: 1,
      text: 'Why is pressure relevant to the rate of gas reactions but not to reactions between liquids and solids?',
      options: ['Liquids and solids can\'t react', 'In gases, pressure changes the number of particles per volume, but it doesn\'t affect solids and liquids much', 'Pressure makes everything explode', 'It doesn\'t affect any reactions'],
      answer: 1,
      optionFeedback: [
        "They can.",
        "Correct. Gases are compressible; squeezing them packs more particles into the same volume, raising rate. Solids and liquids are nearly incompressible.",
        "Pressure doesn't usually cause explosions.",
        "Pressure does affect gas reactions."
      ],
      teach: "Pressure matters for GAS reactions because squeezing gas raises concentration of gas particles. Hardly affects condensed-phase reactions." },
    { id: 'c6-12', topic: 'c6', type: 'mcq', marks: 1,
      text: 'In the Haber process for making ammonia, the catalyst is:',
      options: ['Copper', 'Iron', 'Platinum', 'Manganese dioxide'],
      answer: 1,
      optionFeedback: [
        "Copper isn't used in the Haber process.",
        "Correct. Iron is the catalyst in the Haber process (making ammonia from nitrogen and hydrogen).",
        "Platinum is a catalyst in cars (catalytic converters), not Haber.",
        "Manganese dioxide catalyses hydrogen peroxide decomposition, not Haber."
      ],
      teach: "Memorise key catalysts. Haber process: iron. Catalytic converter: platinum, palladium, rhodium. H2O2 decomposition: MnO2." },
    { id: 'c6-13', topic: 'c6', type: 'mcq', marks: 1,
      text: 'During a reaction between a metal and an acid, you can measure the rate by:',
      options: ['Smelling the gas', 'Timing how long until the metal disappears', 'Listening for fizzing', 'All of these are perfectly good methods'],
      answer: 1,
      optionFeedback: [
        "Smell is not quantitative.",
        "Correct. Timing the disappearance of the metal (or measuring gas volume produced) gives a numerical rate. Reproducible, comparable.",
        "Listening isn't quantitative.",
        "Smell and sound are not measurable."
      ],
      teach: "Rate measurement needs to be quantitative. Time to disappearance, gas volume, mass loss, colour change with a sensor. NOT smell or fizzing sounds." },

    { id: 'c7-5', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Why does petrol have a lower boiling point than diesel?',
      options: ['Petrol has shorter hydrocarbon chains', 'Petrol is denser', 'Petrol is heated more', 'Petrol has no boiling point'],
      answer: 0,
      optionFeedback: [
        "Correct. Shorter chains = weaker intermolecular forces = lower boiling point. That's why petrol comes off near the top of the fractional distillation column and diesel lower down.",
        "Petrol is less dense than diesel.",
        "Boiling point is a property of the substance, not how much it's heated.",
        "Every liquid has a boiling point."
      ],
      teach: "Hydrocarbon chain length: shorter = lower boiling point, less viscous, more flammable. Longer = higher boiling point, more viscous, less flammable." },
    { id: 'c7-6', topic: 'c7', type: 'mcq', marks: 1,
      text: 'What is produced by INCOMPLETE combustion of methane?',
      options: ['Carbon dioxide and water only', 'Carbon monoxide and soot, plus water', 'Carbon and oxygen separately', 'Nothing'],
      answer: 1,
      optionFeedback: [
        "That's COMPLETE combustion.",
        "Correct. Incomplete combustion (when there isn't enough oxygen) produces carbon monoxide (CO, toxic), soot (solid C), plus water and less energy.",
        "That doesn't happen.",
        "Combustion always produces something."
      ],
      teach: "Complete combustion: hydrocarbon + plenty of O2 &rarr; CO2 + H2O. Incomplete: limited O2 &rarr; CO + soot + H2O." },
    { id: 'c7-7', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Crude oil is a:',
      options: ['Renewable resource that forms quickly', 'Finite resource that forms over millions of years', 'Pure compound of carbon', 'Mixture of gases only'],
      answer: 1,
      optionFeedback: [
        "Crude oil takes millions of years to form, so we use it up much faster than it's made.",
        "Correct. Crude oil is finite (non-renewable) and a mixture of mostly hydrocarbons formed from ancient marine organisms compressed over millions of years.",
        "It's a mixture, not a pure compound.",
        "It's a mixture of liquids mostly, not just gases."
      ],
      teach: "Crude oil = finite. Once used, it's effectively gone for human timescales. Mixture, mostly hydrocarbons, mostly alkanes." },
    { id: 'c7-8', topic: 'c7', type: 'mcq', marks: 1,
      text: 'What is the formula of butane?',
      options: ['CH4', 'C2H6', 'C3H8', 'C4H10'],
      answer: 3,
      optionFeedback: [
        "CH4 is methane.",
        "C2H6 is ethane.",
        "C3H8 is propane.",
        "Correct. C4H10 is butane, the 4-carbon alkane."
      ],
      teach: "First four alkanes: methane CH4, ethane C2H6, propane C3H8, butane C4H10. Pattern CnH(2n+2)." },
    { id: 'c7-9', topic: 'c7', type: 'short', marks: 2,
      text: 'Describe two properties of a longer-chain hydrocarbon (like bitumen) compared with a shorter-chain hydrocarbon (like petrol).',
      markScheme: 'Any two: higher boiling point (1 mark). More viscous / thicker (1 mark). Less flammable / harder to ignite. Less volatile. Darker in colour.',
      teach: "Long chain trends: high boiling point, viscous, less flammable, less volatile. Short chain: opposite of all those. Boiling point and viscosity are the most common exam answers." },
    { id: 'c7-10', topic: 'c7', type: 'short', marks: 3,
      text: 'Write a balanced symbol equation for the complete combustion of propane (C3H8).',
      markScheme: 'C3H8 + 5O2 &rarr; 3CO2 + 4H2O (1 mark reactants, 1 mark products, 1 mark balancing).',
      teach: "Complete combustion: balance C first (3CO2), then H (4H2O), then O (need 10 O on the right, so 5O2 on the left). C3H8 + 5O2 &rarr; 3CO2 + 4H2O." },
    { id: 'c7-11', topic: 'c7', type: 'short', marks: 2,
      text: 'Explain why carbon monoxide is dangerous.',
      markScheme: 'It is colourless and odourless, so people cannot detect it (1 mark). It binds to haemoglobin in the blood (more strongly than oxygen), reducing the blood\'s ability to carry oxygen, which can cause unconsciousness or death (1 mark).',
      teach: "CO is dangerous because (a) you can't smell or see it and (b) it stops blood carrying oxygen. CO detectors save lives." },
    { id: 'c7-12', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Which fraction from crude oil is used to make jet fuel?',
      options: ['Petrol', 'Diesel', 'Kerosene', 'Bitumen'],
      answer: 2,
      optionFeedback: [
        "Petrol is for cars.",
        "Diesel is for lorries and some cars.",
        "Correct. Kerosene is used as jet fuel, light enough to evaporate and burn but heavier than petrol.",
        "Bitumen is for roads."
      ],
      teach: "Fractions roughly by use: refinery gases (cooking, heating), petrol (cars), kerosene (aircraft), diesel (lorries), heavy fuel oil (ships), bitumen (roads)." },
    { id: 'c7-13', topic: 'c7', type: 'mcq', marks: 1,
      text: 'Why are hydrocarbons used as fuels?',
      options: ['Their combustion is exothermic and releases lots of energy', 'They produce no waste products', 'They are very expensive', 'They are renewable'],
      answer: 0,
      optionFeedback: [
        "Correct. Burning hydrocarbons releases lots of energy quickly, which is what makes them useful as fuels (for engines, heating, power stations).",
        "They produce CO2 (and other waste products).",
        "Being expensive isn't a reason to USE something as a fuel.",
        "Hydrocarbons from crude oil are non-renewable."
      ],
      teach: "Hydrocarbon fuels: exothermic combustion, energy-dense, convenient to transport. Downsides: CO2 emissions, finite supply." },

    { id: 'c8-4', topic: 'c8', type: 'mcq', marks: 1,
      text: 'Which of these is a formulation?',
      options: ['Pure water', 'A diamond', 'Paint', 'A gold bar'],
      answer: 2,
      optionFeedback: [
        "Pure water is a single substance, not a mixture.",
        "Diamond is pure carbon.",
        "Correct. Paint is a careful mixture (pigment, binder, solvent, additives), each ingredient with a specific purpose. That's a formulation.",
        "Pure gold isn't a formulation."
      ],
      teach: "Formulations are mixtures designed for a specific purpose, each ingredient measured. Paints, alloys, medicines, fuels, foods, cleaning products." },
    { id: 'c8-5', topic: 'c8', type: 'mcq', marks: 1,
      text: 'In a chromatogram, a substance has Rf = 0.7. The solvent front travelled 8 cm. How far did the substance travel?',
      options: ['5.6 cm', '0.7 cm', '8.7 cm', '11.4 cm'],
      answer: 0,
      optionFeedback: [
        "Correct. Rf = distance moved by spot &divide; solvent distance, so spot = Rf &times; solvent distance = 0.7 &times; 8 = 5.6 cm.",
        "0.7 is the Rf value itself, not the distance.",
        "Adding doesn't give you the distance.",
        "8.7 is the wrong calculation."
      ],
      teach: "Rf = spot/solvent. Rearranged: spot = Rf &times; solvent distance. Spot always travels less than the solvent (Rf < 1)." },
    { id: 'c8-6', topic: 'c8', type: 'mcq', marks: 1,
      text: 'A liquid has a sharp melting point at 80&deg;C and a sharp boiling point at 220&deg;C. What can you conclude?',
      options: ['It is a mixture', 'It is impure', 'It is a pure substance', 'It must be water'],
      answer: 2,
      optionFeedback: [
        "Mixtures melt and boil over a range, not at sharp points.",
        "Impure substances melt over a range and at a lower temperature.",
        "Correct. Sharp, single melting and boiling points are characteristic of a pure substance.",
        "Water boils at 100&deg;C, so this isn't water."
      ],
      teach: "Pure = sharp single transition temperatures. Impure = a range, and usually lower than the pure substance's melting point." },
    { id: 'c8-7', topic: 'c8', type: 'mcq', marks: 1,
      text: 'Why is a pencil used to draw the start line on a chromatography paper?',
      options: ['Pen ink would dissolve in the solvent and travel up the paper, ruining the result', 'Pencil is cheaper', 'Pencil is easier to see', 'Pen takes too long to dry'],
      answer: 0,
      optionFeedback: [
        "Correct. Pen inks contain dyes that would dissolve in the solvent and travel with the spots, contaminating the result. Pencil (graphite) is insoluble and doesn't move.",
        "Cost isn't the reason.",
        "Pencil is actually less visible.",
        "Drying time isn't the issue."
      ],
      teach: "Always use pencil for chromatography baselines. Pen ink would smear and contaminate the chromatogram." },
    { id: 'c8-8', topic: 'c8', type: 'short', marks: 2,
      text: 'Define what is meant by a pure substance in chemistry, and explain how this differs from the everyday use of the word "pure".',
      markScheme: 'A pure substance contains only one element or one compound (1 mark). Everyday "pure" (e.g. pure orange juice, pure honey) means without artificial additives, but chemically such things are still mixtures (1 mark).',
      teach: "Chemistry: pure = one substance only. Everyday: pure = nothing artificial added. Different meanings, exam wants the chemistry one." },
    { id: 'c8-9', topic: 'c8', type: 'short', marks: 3,
      text: 'Describe how you would carry out a paper chromatography experiment to compare four ink samples.',
      markScheme: 'Draw a pencil line near the bottom of the chromatography paper (1 mark). Put a small spot of each ink on the line (well separated) (1 mark). Place the paper upright in a beaker with a little solvent below the line, cover, and wait for the solvent to travel up the paper (1 mark). Compare the heights of the spots / calculate Rf values.',
      teach: "Standard paper chromatography. Pencil baseline, spots separated, solvent below baseline, lid on to keep solvent vapour saturating." },
    { id: 'c8-10', topic: 'c8', type: 'short', marks: 2,
      text: 'A student tests two unknown substances. Substance A has a sharp melting point at 152&deg;C. Substance B melts gradually over a range from 145&deg;C to 155&deg;C. State which substance is most likely pure, and explain.',
      markScheme: 'Substance A is pure (1 mark). Pure substances have a sharp melting point at a single temperature; impure substances melt over a range and usually at a lower temperature than the pure form (1 mark).',
      teach: "Sharp melt point = pure. Range = impure. The way examiners test the difference." },
    { id: 'c8-11', topic: 'c8', type: 'mcq', marks: 1,
      text: 'Why is chromatography particularly useful for analysing food colourings?',
      options: ['Food colourings are pure', 'Food colourings are mixtures of dyes, so chromatography separates them and lets us identify each dye', 'Chromatography heats them up', 'It changes their colour permanently'],
      answer: 1,
      optionFeedback: [
        "Food colourings are typically mixtures, not pure.",
        "Correct. Many food colourings are mixtures of different dyes. Chromatography separates them so each can be identified by its Rf value.",
        "Chromatography is a separation, not a heating process.",
        "It doesn't permanently change colour, it just separates the existing dyes."
      ],
      teach: "Chromatography separates mixtures, especially soluble coloured ones. Ideal for identifying dyes in food colourings, inks, plant pigments." },
    { id: 'c8-12', topic: 'c8', type: 'mcq', marks: 1,
      text: 'In chromatography, the stationary phase is:',
      options: ['The solvent that moves up the paper', 'The chromatography paper itself', 'The pencil mark', 'The beaker'],
      answer: 1,
      optionFeedback: [
        "That's the mobile phase.",
        "Correct. The paper is the stationary phase, it doesn't move. The mobile phase (solvent) moves through it.",
        "The pencil mark isn't a phase.",
        "The beaker holds everything but isn't a phase."
      ],
      teach: "Stationary phase = paper (doesn't move). Mobile phase = solvent (moves through). Different substances spend different amounts of time in each phase, so they separate." },
    { id: 'c8-13', topic: 'c8', type: 'mcq', marks: 1,
      text: 'Two substances have very similar Rf values. What does this suggest?',
      options: ['They are the same substance', 'They have similar polarity / behaviour in the chosen solvent system', 'They are pure', 'They cannot be analysed'],
      answer: 1,
      optionFeedback: [
        "Similar Rf values are NECESSARY but not SUFFICIENT to prove they're the same substance.",
        "Correct. Similar Rf values suggest similar behaviour in the solvent. They might be the same substance, or they might just behave similarly. Often you try a different solvent to confirm.",
        "Rf doesn't tell you about purity directly.",
        "They can still be analysed."
      ],
      teach: "Same Rf = behaves similarly in that solvent. Not proof of identity on its own. Use a different solvent or another technique to confirm." },

    { id: 'c9-5', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Which gas in the early atmosphere is now found in much smaller amounts?',
      options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
      answer: 2,
      optionFeedback: [
        "Nitrogen levels haven't changed dramatically.",
        "Oxygen has INCREASED, not decreased, since the early atmosphere.",
        "Correct. Early atmosphere was mostly CO2 from volcanoes. Over billions of years, CO2 was absorbed into oceans, locked into carbonate rocks, and used by algae/plants for photosynthesis. Modern CO2 is a tiny fraction.",
        "Argon levels haven't changed dramatically."
      ],
      teach: "Early atmosphere: high CO2, low O2. Modern atmosphere: high O2, low CO2. Reversed mostly by photosynthesis over billions of years." },
    { id: 'c9-6', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Which group of living organisms is responsible for adding oxygen to the atmosphere over billions of years?',
      options: ['Bacteria only', 'Algae and plants (photosynthesisers)', 'Animals', 'Fungi'],
      answer: 1,
      optionFeedback: [
        "Most bacteria don't photosynthesise (though some cyanobacteria do).",
        "Correct. Photosynthesising algae appeared first, then later plants. Their photosynthesis released the oxygen that now makes up 21% of the atmosphere.",
        "Animals use up oxygen by respiration, not produce it.",
        "Fungi don't photosynthesise."
      ],
      teach: "Oxygen origin = photosynthesis. First by cyanobacteria/algae, then by plants. Took over 2 billion years to build up modern levels." },
    { id: 'c9-7', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Methane is a greenhouse gas. What is the main human source of additional methane?',
      options: ['Burning petrol', 'Livestock farming and rice paddies', 'Cutting down trees', 'Cement making'],
      answer: 1,
      optionFeedback: [
        "Burning petrol mainly releases CO2.",
        "Correct. Livestock (especially cattle) release methane through digestion. Rice paddies (waterlogged fields) also release methane from decomposing plants in anaerobic conditions.",
        "Deforestation releases CO2 mostly.",
        "Cement releases CO2."
      ],
      teach: "Methane sources: livestock (cow burps and waste), rice paddies, landfill, leaking natural gas pipes. CO2 mainly from burning fossil fuels and deforestation." },
    { id: 'c9-8', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Greenhouse gases absorb which type of radiation from the Earth?',
      options: ['Visible light', 'Ultraviolet', 'Infrared', 'X-rays'],
      answer: 2,
      optionFeedback: [
        "Visible light from the Sun mostly passes through.",
        "UV is mostly absorbed by ozone in the stratosphere, separate issue.",
        "Correct. The Earth re-emits the Sun's energy as infrared (heat) radiation. Greenhouse gases absorb infrared, trapping heat in the atmosphere.",
        "X-rays don't come from the Earth normally."
      ],
      teach: "Greenhouse effect: short-wave (visible) in, long-wave (infrared) out. Greenhouse gases absorb the IR, trapping heat. More gas = more heat trapped." },
    { id: 'c9-9', topic: 'c9', type: 'short', marks: 3,
      text: 'Describe two pieces of evidence that suggest the climate is warming, and explain why scientists think this is linked to human activity.',
      markScheme: 'Any two evidence (1 mark each): rising global temperatures / melting ice caps and glaciers / rising sea levels / changing weather patterns / shifting species ranges. Link (1 mark): the rise in atmospheric CO2 (and other greenhouse gases) since the industrial revolution matches the warming trend; the additional CO2 comes from burning fossil fuels, deforestation, and other human activities.',
      teach: "Evidence: warming, melting, rising seas, weather, species. Link to human activity: CO2 rise tracks fossil fuel use; isotopic fingerprint matches fossil carbon." },
    { id: 'c9-10', topic: 'c9', type: 'short', marks: 2,
      text: 'Suggest two ways individuals can reduce their carbon footprint.',
      markScheme: 'Any two reasonable suggestions: use public transport / cycle / walk instead of driving; eat less meat; choose lower-energy appliances; turn off lights / heating when not needed; insulate the home; recycle; use renewable energy sources.',
      teach: "Personal CO2: transport, diet, heating, electricity, waste. Most impactful are transport and diet. Many small changes add up." },
    { id: 'c9-11', topic: 'c9', type: 'short', marks: 2,
      text: 'Explain why deforestation contributes to rising atmospheric CO2.',
      markScheme: 'Trees absorb CO2 from the atmosphere during photosynthesis (1 mark). Cutting down trees reduces this absorption, and if the trees are burned, the carbon stored in them is also released back as CO2 (1 mark).',
      teach: "Deforestation hits CO2 two ways: removes future absorption AND releases stored carbon if trees are burned. Double hit." },
    { id: 'c9-12', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Approximately what percentage of the atmosphere is nitrogen?',
      options: ['21%', '78%', '50%', '1%'],
      answer: 1,
      optionFeedback: [
        "21% is oxygen.",
        "Correct. About 78% nitrogen.",
        "Nitrogen is the majority by far.",
        "1% is other gases combined."
      ],
      teach: "Atmosphere: 78% N, 21% O, 1% other. Memorise these." },
    { id: 'c9-13', topic: 'c9', type: 'mcq', marks: 1,
      text: 'Why is the Earth\'s atmosphere different today from billions of years ago?',
      options: ['The Sun has changed colour', 'Photosynthesis added oxygen, oceans absorbed CO2, plus geological processes', 'Aliens added oxygen', 'Volcanoes stopped erupting'],
      answer: 1,
      optionFeedback: [
        "The Sun hasn't changed colour like that.",
        "Correct. Three major processes: photosynthesis built up oxygen; oceans dissolved CO2 and then formed carbonate rocks; volcanic CO2 release continued but at a slower rate.",
        "No evidence for that.",
        "Volcanoes still erupt today."
      ],
      teach: "Atmosphere evolution: photosynthesis added O2, oceans + rocks removed CO2. Slow change over billions of years." },

    { id: 'c10-4', topic: 'c10', type: 'mcq', marks: 1,
      text: 'Which of these is the FIRST stage in making tap water drinkable in the UK?',
      options: ['Adding fluoride', 'Filtering out solid particles', 'Heating to 100&deg;C', 'Adding sugar'],
      answer: 1,
      optionFeedback: [
        "Fluoride is sometimes added later, not first.",
        "Correct. Water is filtered through beds of sand and gravel to remove debris and large particles. Then it's sterilised with chlorine (or ozone, or UV).",
        "Boiling isn't part of the standard UK process.",
        "Sugar isn't added to tap water."
      ],
      teach: "UK potable water: filter (sand & gravel) first, then sterilise (chlorine usually). Optional later additions like fluoride." },
    { id: 'c10-5', topic: 'c10', type: 'mcq', marks: 1,
      text: 'Why is desalination of sea water more expensive than purifying river water?',
      options: ['Sea water is dirtier', 'Removing dissolved salt requires lots of energy (distillation or reverse osmosis)', 'Sea water is colder', 'Sea water is more colourful'],
      answer: 1,
      optionFeedback: [
        "Dirtiness isn't the main issue.",
        "Correct. Desalination needs energy-intensive processes (boiling the water or forcing it through fine membranes against osmotic pressure). River water just needs filtering and chlorinating.",
        "Temperature isn't the main issue.",
        "Colour isn't the issue."
      ],
      teach: "Desalination = expensive because removing salt needs energy. Used in dry countries (Middle East, parts of Spain). Otherwise we use rivers and reservoirs." },
    { id: 'c10-6', topic: 'c10', type: 'mcq', marks: 1,
      text: 'During sewage treatment, anaerobic digestion of sludge produces:',
      options: ['Hydrogen', 'Methane (biogas) and a solid fertiliser', 'Chlorine gas', 'Pure water'],
      answer: 1,
      optionFeedback: [
        "Anaerobic digestion doesn't make hydrogen.",
        "Correct. Bacteria without oxygen break down the sludge, producing methane (biogas, used as a fuel) and a residue that can be used as fertiliser.",
        "Chlorine is added for sterilisation of drinking water, not from sewage.",
        "Pure water comes from later treatment, not directly from anaerobic digestion."
      ],
      teach: "Anaerobic digestion of sewage sludge: makes biogas (methane, useful fuel) + solid digestate (fertiliser). Recycling at its best." },
    { id: 'c10-7', topic: 'c10', type: 'mcq', marks: 1,
      text: 'Recycling aluminium saves about 95% of the energy compared with extracting new aluminium. Why is the saving so large?',
      options: ['Aluminium is heavy', 'Extracting aluminium from bauxite requires electrolysis at very high temperatures, which is energy-intensive', 'Aluminium is rare', 'Recycling is always easy'],
      answer: 1,
      optionFeedback: [
        "Weight isn't the main factor.",
        "Correct. Aluminium has to be extracted by electrolysis of molten ore at high temperatures, which uses huge amounts of electricity. Melting recycled aluminium uses far less energy.",
        "Aluminium isn't rare, but extracting it is energy-intensive.",
        "Some metals are hard to recycle, but the energy saving for aluminium is very real."
      ],
      teach: "Aluminium extraction = energy hungry (electrolysis at ~1000&deg;C). Recycling skips that step almost entirely." },
    { id: 'c10-8', topic: 'c10', type: 'short', marks: 3,
      text: 'A drinks company is comparing using glass bottles or plastic bottles for soft drinks. Suggest three factors a Life Cycle Assessment would consider.',
      markScheme: 'Any three from: energy used in extracting/producing raw materials (sand for glass, oil for plastic) (1 mark each). Energy used in manufacturing (melting glass, moulding plastic). Transport (glass is heavier so uses more fuel). Use (e.g. cleaning if refillable). Disposal (recyclability, landfill, breakdown time). Pollution and emissions.',
      teach: "LCA stages: raw materials, manufacturing, use, disposal. Same four stages, but different impacts for glass vs plastic." },
    { id: 'c10-9', topic: 'c10', type: 'short', marks: 2,
      text: 'Suggest one advantage and one disadvantage of using glass bottles instead of plastic bottles.',
      markScheme: 'Advantage (1 mark): can be re-used / fully recyclable indefinitely / doesn\'t release microplastics / made from common sand. Disadvantage (1 mark): heavier (so more fuel to transport) / breaks more easily / energy-intensive to make from raw materials.',
      teach: "Glass: reusable but heavy. Plastic: light and tough but harder to recycle and persistent in environment." },
    { id: 'c10-10', topic: 'c10', type: 'short', marks: 2,
      text: 'Explain what is meant by "reduce, reuse, recycle" and order them in terms of which is best for the environment.',
      markScheme: 'Order: reduce (use less in the first place) is best, then reuse (use the same item again), then recycle (turn the material into something new) (1 mark for stating reduce > reuse > recycle). Reduce avoids the resource use entirely; reuse avoids manufacturing energy; recycling still uses some energy and material but is better than disposal (1 mark).',
      teach: "Reduce &gt; Reuse &gt; Recycle. Reduce is best because it skips manufacturing entirely. Recycle is still better than landfill." },
    { id: 'c10-11', topic: 'c10', type: 'mcq', marks: 1,
      text: 'Iron is extracted from iron ore (haematite, Fe2O3) by heating with carbon. Why is iron extracted this way rather than by electrolysis?',
      options: ['Iron is more reactive than carbon, so carbon can\'t displace it', 'Iron is less reactive than carbon, so carbon displaces it cheaply', 'Iron is too soft to electrolyse', 'It is illegal to use electrolysis on iron'],
      answer: 1,
      optionFeedback: [
        "Iron is LESS reactive than carbon. That's why this works.",
        "Correct. Iron sits below carbon in the reactivity series, so carbon can displace iron from its ore. Heating with carbon is cheaper and easier than electrolysis.",
        "Hardness doesn't decide extraction method.",
        "It's not illegal, just more expensive than necessary."
      ],
      teach: "Metals above carbon (K, Na, Ca, Mg, Al) need electrolysis. Metals below carbon (Zn, Fe, Cu) can be extracted by heating with carbon (cheaper)." },
    { id: 'c10-12', topic: 'c10', type: 'mcq', marks: 1,
      text: 'What is one disadvantage of recycling metals?',
      options: ['It uses more energy than extraction', 'Sorting different metals can be difficult and labour-intensive', 'Recycled metals are radioactive', 'There are no recycled metals available'],
      answer: 1,
      optionFeedback: [
        "Recycling almost always uses LESS energy than extraction.",
        "Correct. Different metals need to be separated (often by hand or using magnets/eddy currents), which costs time and money. Mixed metals are harder to recycle than single pure metals.",
        "Recycled metals are not radioactive.",
        "Plenty of metal recycling exists."
      ],
      teach: "Recycling: saves energy, saves resources. Downside: sorting is hard. Worth the effort because the energy savings are usually huge." },
    { id: 'c10-13', topic: 'c10', type: 'mcq', marks: 1,
      text: 'A "potable" water source...',
      options: ['Is always perfectly pure H2O', 'Is safe for humans to drink', 'Cannot be made from sea water', 'Cannot contain any dissolved substances'],
      answer: 1,
      optionFeedback: [
        "Potable doesn't mean pure. UK tap water contains dissolved minerals and small amounts of chlorine.",
        "Correct. Potable simply means safe to drink. It can contain dissolved substances as long as they're at safe levels.",
        "Sea water CAN be made potable through desalination.",
        "Potable water usually contains dissolved minerals; that's fine."
      ],
      teach: "Potable = safe to drink. Doesn't have to be chemically pure. Tap water is potable but not pure (has dissolved salts, chlorine, fluoride)." }
  ];

  return { topics, lessons, questions };
})();
