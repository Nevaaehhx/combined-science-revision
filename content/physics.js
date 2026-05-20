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

  const lessons = {
    p1: {
      intro: "Energy is the cause of every change. Switching a kettle on, moving a car, lighting a room, growing a plant, all involve energy moving from one store to another. This topic covers how we describe energy stores and transfers, the maths around them, and how we generate the energy we use.",
      sections: [
        { h: "Energy stores",
          body: ["Energy is stored in different ways. The main stores you need to know:",
                 "<ul><li><strong>Kinetic store</strong> (anything moving)</li><li><strong>Gravitational potential store</strong> (anything raised up against gravity)</li><li><strong>Elastic potential store</strong> (anything stretched or compressed, like a spring)</li><li><strong>Thermal store</strong> (anything with internal energy from particle motion)</li><li><strong>Chemical store</strong> (in food, fuel, batteries)</li><li><strong>Magnetic store</strong> (in magnets)</li><li><strong>Electrostatic store</strong> (in charged objects)</li><li><strong>Nuclear store</strong> (in atomic nuclei)</li></ul>",
                 "Energy is measured in <strong>joules (J)</strong>. 1 kJ = 1000 J."] },
        { h: "Energy transfers",
          body: ["Energy doesn't disappear, it moves from one store to another. There are four pathways:",
                 "<ul><li><strong>Mechanically</strong>, by forces doing work (e.g. pushing a box)</li><li><strong>Electrically</strong>, by current flowing</li><li><strong>By heating</strong>, from a hotter place to a cooler one</li><li><strong>By radiation</strong> (light, sound, infrared)</li></ul>"],
          callout: { type: 'key', label: 'Conservation of energy', text: "The total energy in a closed system stays the same. Energy is never created or destroyed, only transferred between stores. Memorise this." } },
        { h: "Calculating energy in stores",
          body: ["<strong>Kinetic energy:</strong>",
                 "<strong>E<sub>k</sub> = &frac12; &times; m &times; v<sup>2</sup></strong>",
                 "where m is mass in kg and v is speed in m/s. Result in joules.",
                 "<strong>Gravitational potential energy:</strong>",
                 "<strong>E<sub>p</sub> = m &times; g &times; h</strong>",
                 "where m is mass in kg, g is the gravitational field strength (9.8 N/kg on Earth, or use 10 N/kg if told to) and h is the height in metres.",
                 "<strong>Elastic potential energy:</strong>",
                 "<strong>E<sub>e</sub> = &frac12; &times; k &times; e<sup>2</sup></strong>",
                 "where k is the spring constant (N/m) and e is the extension (m)."] },
        { h: "Work done",
          body: ["When a force moves something, energy is transferred. This is called <strong>doing work</strong>.",
                 "<strong>Work done = force &times; distance</strong>",
                 "<strong>W = F &times; d</strong> (in joules, when F is in newtons and d in metres)",
                 "Work done is just another way of saying 'energy transferred by a force'. One joule = one newton moved through one metre.",
                 "Work done against friction increases the thermal store of the object and its surroundings (it warms things up)."] },
        { h: "Power",
          body: ["<strong>Power</strong> is the rate of doing work, or the rate of transferring energy.",
                 "<strong>Power = energy transferred &divide; time</strong>",
                 "<strong>P = E &divide; t</strong>",
                 "Power is measured in <strong>watts (W)</strong>. 1 W = 1 J transferred per second.",
                 "A more powerful device transfers energy faster. A 100 W light bulb uses 100 J every second. A 2 kW kettle uses 2000 J every second."] },
        { h: "Efficiency",
          body: ["No transfer is perfect. Some energy is always dissipated, usually as heat or sound, that we can't easily use.",
                 "<strong>Useful energy output</strong> is the energy that does the job we want.",
                 "<strong>Wasted energy</strong> is energy transferred to surroundings unintentionally.",
                 "<strong>Efficiency = useful energy output &divide; total energy input</strong>",
                 "Multiply by 100 to give a percentage. Efficiency is always less than 100% in real devices.",
                 "<strong>Reducing waste</strong>: lubricate moving parts (reduce friction), insulate (reduce heat loss), use more efficient designs (e.g. LED bulbs over filament)."] },
        { h: "Heat transfer (conduction, convection, radiation)",
          body: ["Three ways heat moves:",
                 "<ul><li><strong>Conduction</strong>, in solids. Particles vibrate and pass the energy to neighbours. Metals are the best conductors because they also have free electrons that carry energy quickly. Insulators (wood, plastic, air) conduct very poorly.</li><li><strong>Convection</strong>, in liquids and gases. Warm fluid rises (less dense), cooler fluid sinks. Creates a current.</li><li><strong>Radiation</strong>, by infrared waves. Doesn't need particles, can happen in a vacuum. The sun's heat reaches us this way.</li></ul>",
                 "<strong>Insulating buildings:</strong>",
                 "<ul><li>Loft insulation traps air (a poor conductor)</li><li>Cavity wall insulation does the same</li><li>Double glazing has an air or vacuum gap between two panes</li><li>Thick walls slow conduction</li></ul>"] },
        { h: "Energy resources",
          body: ["<strong>Non-renewable</strong> (run out, release CO<sub>2</sub>):",
                 "<ul><li>Coal, oil, natural gas (all fossil fuels)</li><li>Nuclear fuel (uranium), no CO<sub>2</sub> but produces radioactive waste</li></ul>",
                 "<strong>Renewable</strong> (don't run out in the short term):",
                 "<ul><li>Solar (PV panels or solar water heaters)</li><li>Wind (turbines on land or at sea)</li><li>Hydroelectric (water turning turbines as it falls)</li><li>Tidal and wave (ocean motion)</li><li>Geothermal (heat from the ground)</li><li>Biofuels (crops or waste burned, technically carbon-neutral if replanted)</li></ul>",
                 "<strong>Trade-offs:</strong> renewables tend to be intermittent (no sun at night, no wind in calm weather). Non-renewables are reliable but cause climate change and air pollution. Nuclear is reliable and low-CO<sub>2</sub> but has waste-disposal and safety issues."] }
      ],
      keyPoints: [
        "Energy is stored in kinetic, GPE, elastic, thermal, chemical, magnetic, electrostatic, nuclear stores",
        "Energy is transferred mechanically, electrically, by heating, or by radiation",
        "Conservation of energy: total energy in a closed system is constant",
        "Kinetic energy E_k = &frac12; m v&sup2;; gravitational PE = m g h; elastic PE = &frac12; k e&sup2;",
        "Work done = force &times; distance (W = F d), in joules",
        "Power = energy &divide; time (P = E / t), in watts",
        "Efficiency = useful output &divide; total input (often as %)",
        "Three heat transfer modes: conduction (solids), convection (fluids), radiation (no medium needed)",
        "Insulation traps air or creates vacuums to slow heat loss",
        "Fossil fuels release CO2; nuclear produces radioactive waste; renewables are intermittent"
      ],
      mistakes: [
        "Squaring only one term in &frac12; m v&sup2;, the v is squared but the m is not",
        "Forgetting units: kg, m/s for E_k; m for height in GPE",
        "Saying energy is 'used up', it's only TRANSFERRED to another store",
        "Treating efficiency as a number bigger than 1 (it never is, in real devices)",
        "Confusing power and energy, energy is total, power is rate per second"
      ]
    },

    p2: {
      intro: "Electricity is the flow of charge. This topic covers how circuits work, what current and voltage really mean, how to predict what will happen in series and parallel circuits, and how mains electricity gets to your sockets safely.",
      sections: [
        { h: "Charge and current",
          body: ["<strong>Charge</strong> is a property of matter, measured in <strong>coulombs (C)</strong>. Electrons have negative charge.",
                 "<strong>Electric current</strong> is the rate of flow of charge.",
                 "<strong>Q = I &times; t</strong>",
                 "where Q is charge in C, I is current in amperes (A), t is time in seconds. So 1 ampere = 1 coulomb per second.",
                 "In metals, the moving charge carriers are electrons. They flow from negative terminal to positive (but by convention, we draw current arrows the other way, positive to negative)."] },
        { h: "Voltage (potential difference)",
          body: ["<strong>Potential difference</strong> (also called voltage) is the energy transferred per unit charge between two points.",
                 "<strong>V = E &divide; Q</strong>",
                 "where V is potential difference in volts (V), E is energy in J, Q is charge in C. So 1 volt = 1 joule per coulomb.",
                 "Think of voltage as the 'push' that drives the current. The battery's voltage is fixed by its chemistry; bigger battery = bigger push."] },
        { h: "Resistance and Ohm's law",
          body: ["<strong>Resistance</strong> opposes current flow. Measured in <strong>ohms (&Omega;)</strong>.",
                 "<strong>V = I &times; R</strong> (Ohm's law)",
                 "where V is voltage, I is current, R is resistance.",
                 "Rearranging: I = V/R (more voltage gives more current; more resistance gives less current).",
                 "A wire that obeys Ohm's law has a straight-line V-I graph through the origin (constant resistance). Components like filament bulbs and diodes do NOT obey Ohm's law; their resistance changes."],
          callout: { type: 'key', label: 'V = I R', text: "Ohm's law is the most-used equation in this topic. Rearrange to I = V/R or R = V/I as needed. Always check units: volts, amps, ohms." } },
        { h: "Circuit components and symbols",
          body: ["You need to recognise standard circuit symbols:",
                 "<ul><li>Battery, cell, switch</li><li>Lamp / bulb</li><li>Resistor (fixed and variable)</li><li>Ammeter (in series, measures current), Voltmeter (in parallel, measures voltage)</li><li>Diode (only lets current flow one way)</li><li>LED (light when current flows the right way)</li><li>Thermistor (resistance decreases as temperature increases, used in thermostats)</li><li>LDR (light-dependent resistor: resistance decreases as light increases)</li></ul>"] },
        { h: "Series and parallel circuits",
          body: ["<strong>Series circuit</strong>: components in a single loop.",
                 "<ul><li>Same current through every component</li><li>Voltages share out between components, adding up to the total</li><li>Total resistance = sum of resistances (R<sub>total</sub> = R<sub>1</sub> + R<sub>2</sub> + ...)</li></ul>",
                 "<strong>Parallel circuit</strong>: components on different branches.",
                 "<ul><li>Same voltage across each branch (equal to battery voltage)</li><li>Currents share between branches, adding up to the total current</li><li>Adding more parallel components DECREASES total resistance (more paths for current)</li></ul>",
                 "Most household circuits are parallel: you can turn one bulb off without the rest going off, and each appliance gets full mains voltage."],
          diagram: {
            alt: 'Series circuit with two bulbs in a single loop, and parallel circuit with two bulbs on separate branches',
            caption: 'Series: one loop, current the same everywhere. Parallel: separate branches, each gets full voltage.',
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg">' +
              '<text x="110" y="20" text-anchor="middle" font-size="12" fill="#c2410c" font-weight="700">SERIES</text>' +
              '<rect x="30" y="40" width="160" height="130" fill="none" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="40" y1="35" x2="40" y2="55" stroke="#1a1f2e" stroke-width="3"/>' +
              '<line x1="48" y1="30" x2="48" y2="60" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<text x="58" y="50" font-size="10" fill="#1a1f2e">+</text>' +
              '<circle cx="90"  cy="170" r="10" fill="#fef3c7" stroke="#a16207"/>' +
              '<line x1="83" y1="163" x2="97" y2="177" stroke="#a16207"/>' +
              '<line x1="83" y1="177" x2="97" y2="163" stroke="#a16207"/>' +
              '<circle cx="150" cy="170" r="10" fill="#fef3c7" stroke="#a16207"/>' +
              '<line x1="143" y1="163" x2="157" y2="177" stroke="#a16207"/>' +
              '<line x1="143" y1="177" x2="157" y2="163" stroke="#a16207"/>' +
              '<text x="110" y="115" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">same current</text>' +
              '<text x="110" y="128" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">all the way round</text>' +
              '<text x="350" y="20" text-anchor="middle" font-size="12" fill="#1d4ed8" font-weight="700">PARALLEL</text>' +
              '<rect x="240" y="40" width="200" height="130" fill="none" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="250" y1="35" x2="250" y2="55" stroke="#1a1f2e" stroke-width="3"/>' +
              '<line x1="258" y1="30" x2="258" y2="60" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<text x="268" y="50" font-size="10" fill="#1a1f2e">+</text>' +
              '<line x1="310" y1="40" x2="310" y2="170" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="380" y1="40" x2="380" y2="170" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<circle cx="310" cy="105" r="10" fill="#fef3c7" stroke="#a16207"/>' +
              '<line x1="303" y1="98" x2="317" y2="112" stroke="#a16207"/>' +
              '<line x1="303" y1="112" x2="317" y2="98" stroke="#a16207"/>' +
              '<circle cx="380" cy="105" r="10" fill="#fef3c7" stroke="#a16207"/>' +
              '<line x1="373" y1="98" x2="387" y2="112" stroke="#a16207"/>' +
              '<line x1="373" y1="112" x2="387" y2="98" stroke="#a16207"/>' +
              '<text x="340" y="135" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">each branch</text>' +
              '<text x="340" y="148" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">= full voltage</text>' +
            '</svg>'
          } },
        { h: "Mains electricity",
          body: ["UK mains is <strong>230 V alternating current (a.c.)</strong> at <strong>50 Hz</strong>. Direct current (d.c.) is from batteries.",
                 "Three-core cables in plugs have three wires:",
                 "<ul><li><strong>Live</strong> (brown), carries current at high voltage, dangerous</li><li><strong>Neutral</strong> (blue), completes the circuit, around 0 V</li><li><strong>Earth</strong> (green/yellow stripes), safety wire connected to the metal case of an appliance</li></ul>",
                 "<strong>If a fault makes the case live</strong>, current flows down the earth wire (low resistance path), the high current blows the fuse, the circuit is broken, you're safe.",
                 "<strong>Fuses</strong> melt and break the circuit if too much current flows. Choose a fuse rating just above the appliance's normal current."],
          diagram: {
            alt: 'UK three-pin plug interior with live (brown), neutral (blue) and earth (green-yellow) wires labelled, plus fuse on the live wire',
            caption: 'UK three-pin plug. Earth is the longest pin (top). Fuse always sits on the live wire.',
            svg: '<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">' +
              '<rect x="80" y="30" width="240" height="220" rx="20" fill="#fef3c7" stroke="#1a1f2e" stroke-width="2"/>' +
              '<rect x="190" y="50" width="20" height="40" rx="2" fill="#4a5165"/>' +
              '<text x="200" y="100" text-anchor="middle" font-size="10" fill="#15803d" font-weight="700">EARTH</text>' +
              '<text x="200" y="112" text-anchor="middle" font-size="9" fill="#15803d">(longest)</text>' +
              '<rect x="100" y="160" width="20" height="32" rx="2" fill="#4a5165"/>' +
              '<text x="110" y="208" text-anchor="middle" font-size="10" fill="#1d4ed8" font-weight="700">NEUTRAL</text>' +
              '<rect x="280" y="160" width="20" height="32" rx="2" fill="#4a5165"/>' +
              '<text x="290" y="208" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="700">LIVE</text>' +
              '<line x1="200" y1="90"  x2="200" y2="160" stroke="#15803d" stroke-width="4"/>' +
              '<line x1="110" y1="192" x2="110" y2="240" stroke="#1d4ed8" stroke-width="4"/>' +
              '<line x1="290" y1="192" x2="290" y2="215" stroke="#c2410c" stroke-width="4"/>' +
              '<rect x="278" y="215" width="24" height="14" fill="#1a1f2e" stroke="#1a1f2e"/>' +
              '<text x="320" y="226" font-size="10" fill="#1a1f2e" font-weight="600">fuse</text>' +
              '<line x1="290" y1="229" x2="290" y2="240" stroke="#c2410c" stroke-width="4"/>' +
              '<line x1="110" y1="240" x2="290" y2="240" stroke="#1a1f2e" stroke-width="1"/>' +
              '<line x1="200" y1="240" x2="200" y2="260" stroke="#1a1f2e" stroke-width="6"/>' +
              '<text x="200" y="275" text-anchor="middle" font-size="10" fill="#1a1f2e" font-style="italic">cable to appliance</text>' +
              '<text x="20" y="50" font-size="9" fill="#15803d" font-weight="600">green/yellow</text>' +
              '<text x="20" y="180" font-size="9" fill="#1d4ed8" font-weight="600">blue</text>' +
              '<text x="20" y="200" font-size="9" fill="#1d4ed8">(neutral side)</text>' +
              '<text x="346" y="180" font-size="9" fill="#c2410c" font-weight="600">brown</text>' +
              '<text x="346" y="200" font-size="9" fill="#c2410c">(live side)</text>' +
            '</svg>'
          } },
        { h: "Power, energy and cost",
          body: ["<strong>Power transferred by an electrical device:</strong>",
                 "<strong>P = V &times; I</strong>",
                 "<strong>P = I&sup2; &times; R</strong>",
                 "<strong>Energy transferred:</strong>",
                 "<strong>E = P &times; t</strong> (P in watts, t in seconds, E in joules)",
                 "<strong>E = Q &times; V</strong> (E in joules, Q in coulombs, V in volts)",
                 "Energy companies use kilowatt-hours (kWh): 1 kWh = 1 kW for 1 hour = 3 600 000 J."] }
      ],
      keyPoints: [
        "Charge Q is measured in coulombs; current I is the rate of charge flow (Q = I t)",
        "Voltage V is energy per unit charge (V = E/Q), measured in volts",
        "Ohm's law: V = I R; ohmic conductors have constant resistance",
        "Filament bulbs and diodes are non-ohmic (resistance changes)",
        "Series: same current, voltages add, resistances add",
        "Parallel: same voltage, currents add, adding more parallel reduces total resistance",
        "UK mains: 230 V a.c., 50 Hz",
        "Live (brown), neutral (blue), earth (green/yellow). Earth is for safety",
        "Power: P = V I = I&sup2; R; Energy: E = P t = Q V",
        "1 kWh = 3 600 000 J"
      ],
      mistakes: [
        "Putting an ammeter in parallel (it should be in series with the component)",
        "Putting a voltmeter in series (it should be in parallel across the component)",
        "Saying current is 'used up' in a circuit, it isn't; the same current returns",
        "Adding resistances in parallel as a simple sum, parallel total is always LESS than the smallest",
        "Mixing up a.c. and d.c., batteries are d.c.; mains is a.c."
      ]
    },

    p3: {
      intro: "All matter is made of particles. How those particles are arranged and how they move tells you whether something is a solid, liquid or gas. This topic covers states of matter, density, what happens when you heat things, and how pressure works in gases.",
      sections: [
        { h: "States of matter",
          body: ["Three states you need to know:",
                 "<ul><li><strong>Solid</strong>: particles tightly packed in a regular pattern, vibrate in place. Fixed shape and volume.</li><li><strong>Liquid</strong>: particles close together but free to move past each other. Fixed volume, takes shape of container.</li><li><strong>Gas</strong>: particles far apart, move fast in random directions. No fixed shape or volume, fills any container.</li></ul>",
                 "Changes of state:",
                 "<ul><li>Melting (solid &rarr; liquid), freezing (liquid &rarr; solid)</li><li>Boiling / evaporating (liquid &rarr; gas), condensing (gas &rarr; liquid)</li><li>Sublimation (solid &rarr; gas directly, e.g. dry ice)</li></ul>",
                 "Changes of state are <strong>physical</strong>, not chemical. The particles are still the same substance."] },
        { h: "Density",
          body: ["<strong>Density</strong> is mass per unit volume.",
                 "<strong>&rho; = m &divide; V</strong>",
                 "where &rho; (rho) is density in kg/m&sup3; (or g/cm&sup3;), m is mass, V is volume.",
                 "Solids are usually densest (particles packed in tightly). Liquids slightly less dense. Gases much less dense (particles widely spaced).",
                 "<strong>Required practical:</strong> measuring density of regular shapes (use ruler to find volume, scales for mass) and irregular shapes (water displacement: drop the object into water, measure the volume of water displaced)."] },
        { h: "Internal energy and temperature",
          body: ["<strong>Internal energy</strong> is the total energy of all the particles in a substance (kinetic + potential).",
                 "<strong>Temperature</strong> is a measure of the average kinetic energy of the particles. Hotter = particles moving faster on average.",
                 "When you heat a substance, you transfer energy to the particles. Two things can happen:",
                 "<ul><li>The particles move faster, so temperature rises</li><li>The particles break free from each other, so the substance changes state (melts, boils, etc.)</li></ul>"] },
        { h: "Specific heat capacity",
          body: ["<strong>Specific heat capacity</strong> is the energy needed to raise the temperature of 1 kg of a substance by 1&deg;C.",
                 "<strong>E = m &times; c &times; &Delta;&theta;</strong>",
                 "where E is energy transferred (J), m is mass (kg), c is specific heat capacity (J/kg&deg;C), &Delta;&theta; is the temperature change (&deg;C).",
                 "Water has a very high specific heat capacity (about 4200 J/kg&deg;C). That's why oceans buffer climate temperatures and why hot water bottles stay warm for ages."] },
        { h: "Specific latent heat",
          body: ["When a substance changes state, energy is transferred but the temperature stays constant. The energy is going into breaking bonds (or releasing energy as bonds form), not into faster motion.",
                 "<strong>Specific latent heat</strong> is the energy needed to change 1 kg of a substance from one state to another without changing temperature.",
                 "<strong>E = m &times; L</strong>",
                 "where L is the specific latent heat (J/kg).",
                 "<ul><li><strong>Latent heat of fusion</strong>, melting/freezing</li><li><strong>Latent heat of vaporisation</strong>, boiling/condensing</li></ul>"] },
        { h: "Gas pressure (overview)",
          body: ["Gas particles move in all directions, hitting the walls of their container. Each collision pushes on the wall. The total push per unit area is <strong>pressure</strong>.",
                 "Factors affecting gas pressure:",
                 "<ul><li><strong>Temperature</strong>: hotter = faster particles = harder and more frequent collisions = higher pressure</li><li><strong>Volume</strong>: smaller container = particles hit walls more often = higher pressure</li></ul>",
                 "This is why a tyre warming up on a long drive increases its pressure, and why you can squeeze a balloon to make it harder."] }
      ],
      keyPoints: [
        "Solid: fixed shape, fixed volume; Liquid: fixed volume only; Gas: neither",
        "Changes of state are physical, particles stay the same substance",
        "Density &rho; = m / V, measured in kg/m&sup3;",
        "Internal energy = total energy of all particles",
        "Temperature is a measure of average kinetic energy per particle",
        "E = m c &Delta;&theta; for heating without state change (specific heat capacity)",
        "E = m L for state change without temperature change (specific latent heat)",
        "Water has a high specific heat capacity, hence its role in climate moderation",
        "Gas pressure rises with temperature and falls when volume increases"
      ],
      mistakes: [
        "Mixing up melting and boiling formulae; both use E = m L, just with different L values",
        "Forgetting that during a phase change temperature is CONSTANT even though energy is being added",
        "Confusing specific heat capacity with latent heat, one is for warming, the other for changing state",
        "Wrong units for density, kg/m&sup3; on the SI side, g/cm&sup3; on the lab side. Convert if needed",
        "Saying gas pressure is 'created by gravity', it's caused by particle collisions with the container walls"
      ]
    },

    p4: {
      intro: "Atoms are tiny, but inside them is even smaller structure. This topic covers what atoms are made of, how our model of them developed, and how unstable atoms give off radiation. Radiation is dangerous in big doses but also genuinely useful in medicine.",
      sections: [
        { h: "Structure of the atom",
          body: ["Modern model of the atom:",
                 "<ul><li><strong>Nucleus</strong> at the centre, contains <strong>protons</strong> (+1 charge) and <strong>neutrons</strong> (0 charge)</li><li><strong>Electrons</strong> orbit in shells around the nucleus, each with -1 charge</li></ul>",
                 "Numbers of particles:",
                 "<ul><li><strong>Atomic number</strong> = number of protons (defines the element)</li><li><strong>Mass number</strong> = protons + neutrons</li><li>Atoms are neutral overall: protons = electrons</li></ul>",
                 "The radius of an atom is about 1 &times; 10<sup>-10</sup> m. The nucleus is about 10 000 times smaller. So an atom is almost all empty space."] },
        { h: "History of the atomic model",
          body: ["The model of the atom changed several times as new evidence came in:",
                 "<ul><li><strong>Dalton</strong>, atoms are tiny indivisible spheres</li><li><strong>Plum pudding model (Thomson)</strong>, after electrons were discovered: a positive 'dough' with negative electrons stuck in it</li><li><strong>Rutherford</strong>, gold foil scattering experiment: most alpha particles passed through but a few bounced back, so atoms have a small dense positive nucleus, mostly empty space</li><li><strong>Bohr</strong>, electrons orbit in fixed energy shells</li><li><strong>Chadwick</strong>, discovered the neutron</li></ul>",
                 "Each scientist refined what came before based on new experimental evidence."] },
        { h: "Isotopes",
          body: ["<strong>Isotopes</strong> are atoms of the same element with the same number of protons but different numbers of neutrons.",
                 "Example: carbon-12 (6 protons, 6 neutrons) and carbon-14 (6 protons, 8 neutrons) are both carbon but they have different masses.",
                 "Some isotopes are <strong>unstable</strong>. They spontaneously emit radiation to become more stable. These are called <strong>radioactive isotopes</strong>."] },
        { h: "Types of radiation",
          body: ["Three main types of ionising radiation emitted by unstable nuclei:",
                 "<ul><li><strong>Alpha (&alpha;)</strong>: a helium nucleus, 2 protons + 2 neutrons. Heavy, slow, very ionising. Stopped by paper or a few cm of air. Range in air: a few cm.</li><li><strong>Beta (&beta;)</strong>: a fast-moving electron emitted from the nucleus when a neutron turns into a proton. Less ionising than alpha but more penetrating. Stopped by a few mm of aluminium. Range in air: about a metre.</li><li><strong>Gamma (&gamma;)</strong>: an electromagnetic wave, no mass. Least ionising but most penetrating. Stopped only by thick lead or concrete. Range in air: very long.</li></ul>",
                 "<strong>Neutron</strong> emission also exists. A neutron can be emitted from a heavy nucleus.",
                 "All four types are ionising, they can knock electrons off atoms, causing cell damage."],
          diagram: {
            alt: 'Alpha stopped by paper, beta stopped by aluminium, gamma passes through paper and aluminium and only stopped by lead',
            caption: 'Penetration depth: alpha stopped by paper, beta by aluminium, gamma needs lead or thick concrete.',
            svg: '<svg viewBox="0 0 460 200" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="ra1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#c2410c"/></marker></defs>' +
              '<defs><marker id="rb1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1d4ed8"/></marker></defs>' +
              '<defs><marker id="rg1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#15803d"/></marker></defs>' +
              '<text x="20" y="50"  font-size="11" fill="#c2410c" font-weight="700">&alpha; alpha</text>' +
              '<text x="20" y="100" font-size="11" fill="#1d4ed8" font-weight="700">&beta; beta</text>' +
              '<text x="20" y="150" font-size="11" fill="#15803d" font-weight="700">&gamma; gamma</text>' +
              '<line x1="80" y1="46" x2="160" y2="46" stroke="#c2410c" stroke-width="2" marker-end="url(#ra1)"/>' +
              '<line x1="80" y1="96" x2="240" y2="96" stroke="#1d4ed8" stroke-width="2" marker-end="url(#rb1)"/>' +
              '<line x1="80" y1="146" x2="370" y2="146" stroke="#15803d" stroke-width="2" marker-end="url(#rg1)"/>' +
              '<rect x="170" y="20" width="20" height="160" fill="#fef3c7" stroke="#1a1f2e" stroke-width="1"/>' +
              '<text x="180" y="195" text-anchor="middle" font-size="10" fill="#1a1f2e">paper</text>' +
              '<rect x="245" y="20" width="20" height="160" fill="#e6e1d3" stroke="#1a1f2e" stroke-width="1"/>' +
              '<text x="255" y="195" text-anchor="middle" font-size="10" fill="#1a1f2e">aluminium</text>' +
              '<rect x="375" y="20" width="30" height="160" fill="#4a5165" stroke="#1a1f2e" stroke-width="1"/>' +
              '<text x="390" y="195" text-anchor="middle" font-size="10" fill="#1a1f2e">lead</text>' +
              '<text x="425" y="50" text-anchor="end" font-size="9" fill="#4a5165" font-style="italic">most ionising</text>' +
              '<text x="425" y="150" text-anchor="end" font-size="9" fill="#4a5165" font-style="italic">most penetrating</text>' +
            '</svg>'
          },
          callout: { type: 'warn', label: 'Penetration paradox', text: "Alpha is the MOST ionising but LEAST penetrating. So alpha sources are safest outside the body but most dangerous inside (where they can't escape your cells)." } },
        { h: "Nuclear equations",
          body: ["You can write radioactive decay as an equation. The mass number and atomic number must balance on both sides.",
                 "<strong>Alpha decay example:</strong>",
                 "<sup>238</sup>U &rarr; <sup>234</sup>Th + <sup>4</sup>He (alpha particle)",
                 "Mass number drops by 4, atomic number drops by 2.",
                 "<strong>Beta decay example:</strong>",
                 "<sup>14</sup>C &rarr; <sup>14</sup>N + <sup>0</sup>e (beta particle, an electron)",
                 "Mass number stays the same, atomic number rises by 1 (a neutron has become a proton, releasing an electron)."] },
        { h: "Half-life",
          body: ["Radioactive decay is <strong>random</strong>. You can't say when a particular atom will decay, only the probability.",
                 "The <strong>half-life</strong> of a radioactive isotope is the time it takes for HALF the unstable nuclei in a sample to decay.",
                 "Different isotopes have very different half-lives (microseconds to billions of years). Carbon-14 has a half-life of 5730 years.",
                 "After two half-lives, &frac14; of the original sample is left. After three, &frac18;. And so on.",
                 "<strong>Activity</strong> (how many decays per second, measured in becquerels, Bq) also halves each half-life."] },
        { h: "Contamination vs irradiation",
          body: ["<strong>Irradiation</strong> means being exposed to radiation from outside. The object isn't itself radioactive; once you move away from the source, the dose stops.",
                 "<strong>Contamination</strong> means radioactive material has got onto or into the object (or person). It keeps emitting radiation until the contamination is removed.",
                 "Decontamination of a person involves washing, removing clothes; full radiation protection in radiology uses thick lead shielding, distance from source, minimum exposure time."] },
        { h: "Uses of radioactivity",
          body: ["<ul><li><strong>Medical imaging</strong>: gamma sources (technetium) used as tracers to image organs</li><li><strong>Cancer treatment</strong> (radiotherapy): focused gamma beams kill tumour cells</li><li><strong>Sterilising</strong> medical equipment</li><li><strong>Detecting leaks</strong> in pipes</li><li><strong>Smoke detectors</strong> use small alpha sources</li><li><strong>Carbon-14 dating</strong> for old organic material</li><li><strong>Nuclear power</strong> generation</li></ul>"] }
      ],
      keyPoints: [
        "Atom = small dense nucleus (protons + neutrons) surrounded by electron shells",
        "Atomic number = protons (defines element); mass number = protons + neutrons",
        "Isotopes share atomic number but differ in neutron number / mass number",
        "Atomic model evolved: Dalton, Thomson, Rutherford, Bohr, Chadwick",
        "Three main radiations: alpha (least penetrating, most ionising), beta, gamma (most penetrating)",
        "Alpha stopped by paper; beta by aluminium; gamma needs lead or thick concrete",
        "Alpha decay: lose 4 mass, lose 2 atomic number. Beta decay: same mass, +1 atomic number",
        "Half-life is the time for half a sample's nuclei to decay; varies hugely by isotope",
        "Contamination = radioactive material on/in body; irradiation = exposure to radiation from a source",
        "Uses: imaging, radiotherapy, sterilisation, dating, smoke detectors, power"
      ],
      mistakes: [
        "Saying alpha is the most dangerous outside the body, it's actually the LEAST penetrating outside, but most dangerous INSIDE",
        "Forgetting to balance mass numbers AND atomic numbers in nuclear equations",
        "Thinking half-life doubles the time for the next half to decay, it's CONSTANT for each isotope",
        "Confusing contamination and irradiation, contamination is having the source ON or IN you",
        "Saying X-rays are radioactive, they're not, they're produced electrically (though they're ionising)"
      ]
    },

    p5: {
      intro: "Forces are pushes and pulls. They cause objects to speed up, slow down, change direction, or change shape. This topic covers types of forces, what happens when forces balance or don't, the maths of motion, and how forces relate to acceleration.",
      sections: [
        { h: "Scalar and vector quantities",
          body: ["<strong>Scalars</strong> have size only (e.g. mass, distance, speed, time, temperature).",
                 "<strong>Vectors</strong> have size AND direction (e.g. force, displacement, velocity, acceleration, momentum).",
                 "Vectors are usually drawn as arrows; longer arrow = bigger size, direction shows the direction."] },
        { h: "Contact and non-contact forces",
          body: ["<strong>Contact forces</strong> need physical touch: friction, air resistance, tension, normal contact, drag.",
                 "<strong>Non-contact forces</strong> act over a distance: gravity, electrostatic, magnetic.",
                 "<strong>Weight</strong> is the gravitational force on an object.",
                 "<strong>W = m &times; g</strong>",
                 "where m is mass (kg), g is gravitational field strength (about 9.8 N/kg on Earth, 1.6 N/kg on the Moon). Weight is measured in newtons (N).",
                 "Mass is constant. Weight changes if g changes (e.g. you'd weigh less on the Moon)."] },
        { h: "Resultant force",
          body: ["When multiple forces act on an object, the overall effect is the <strong>resultant force</strong>. For forces along one line, just add (same direction) or subtract (opposite directions).",
                 "If the resultant is zero, the forces are <strong>balanced</strong>: the object stays still or moves at constant velocity.",
                 "If there is a resultant force, the object accelerates in that direction."],
          diagram: {
            alt: 'Two free-body diagrams: balanced forces on a stationary box (left), and unbalanced forces giving net forward force (right)',
            caption: 'Balanced forces (left): no acceleration. Unbalanced (right): the bigger force wins; the box accelerates that way.',
            svg: '<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="fa1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1a1f2e"/></marker></defs>' +
              '<text x="110" y="22" text-anchor="middle" font-size="12" fill="#15803d" font-weight="700">BALANCED</text>' +
              '<rect x="80" y="80" width="60" height="60" fill="#fef3c7" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="80"  y1="110" x2="30"  y2="110" stroke="#1a1f2e" stroke-width="2" marker-end="url(#fa1)"/>' +
              '<line x1="140" y1="110" x2="190" y2="110" stroke="#1a1f2e" stroke-width="2" marker-end="url(#fa1)"/>' +
              '<text x="40" y="100" font-size="11" fill="#1a1f2e" font-weight="600">50 N</text>' +
              '<text x="170" y="100" font-size="11" fill="#1a1f2e" font-weight="600">50 N</text>' +
              '<text x="110" y="165" text-anchor="middle" font-size="10" fill="#15803d" font-weight="600">resultant = 0</text>' +
              '<text x="110" y="180" text-anchor="middle" font-size="10" fill="#15803d">constant velocity (or still)</text>' +
              '<text x="350" y="22" text-anchor="middle" font-size="12" fill="#c2410c" font-weight="700">UNBALANCED</text>' +
              '<rect x="320" y="80" width="60" height="60" fill="#fef3c7" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<line x1="320" y1="110" x2="290" y2="110" stroke="#1a1f2e" stroke-width="2" marker-end="url(#fa1)"/>' +
              '<line x1="380" y1="110" x2="450" y2="110" stroke="#c2410c" stroke-width="3" marker-end="url(#fa1)"/>' +
              '<text x="300" y="100" font-size="11" fill="#1a1f2e" font-weight="600">30 N</text>' +
              '<text x="430" y="100" font-size="11" fill="#c2410c" font-weight="600">80 N</text>' +
              '<text x="350" y="165" text-anchor="middle" font-size="10" fill="#c2410c" font-weight="600">resultant = 50 N right</text>' +
              '<text x="350" y="180" text-anchor="middle" font-size="10" fill="#c2410c">accelerates right (F = ma)</text>' +
            '</svg>'
          } },
        { h: "Work done",
          body: ["When a force moves an object, work is done. Energy is transferred.",
                 "<strong>W = F &times; d</strong>",
                 "where W is work in joules (J), F is force in newtons (N), d is distance in metres (m).",
                 "1 J = 1 N moved through 1 m. Same equation as the work done equation in the energy topic, but applied to forces."] },
        { h: "Hooke's law (springs)",
          body: ["When you stretch or compress a spring, the force is proportional to the extension (up to a limit called the limit of proportionality).",
                 "<strong>F = k &times; e</strong>",
                 "where F is force (N), k is spring constant (N/m), e is extension (m).",
                 "Energy stored in the stretched spring (elastic potential energy):",
                 "<strong>E = &frac12; &times; k &times; e&sup2;</strong>",
                 "<strong>Required practical:</strong> investigating force vs extension. Hang weights from a spring, measure extension, plot F against e. The gradient is the spring constant."] },
        { h: "Distance, speed, displacement, velocity",
          body: ["<strong>Distance</strong> is how far you've travelled (scalar). <strong>Displacement</strong> is how far you are from the start, in a straight line (vector).",
                 "<strong>Speed</strong> is distance per second (scalar). <strong>Velocity</strong> is speed in a particular direction (vector).",
                 "<strong>speed = distance &divide; time</strong>",
                 "Typical speeds:",
                 "<ul><li>Walking: ~1.5 m/s</li><li>Running: ~3 m/s</li><li>Cycling: ~6 m/s</li><li>Car (motorway): ~30 m/s</li><li>Sound in air: 330 m/s</li></ul>"] },
        { h: "Acceleration",
          body: ["<strong>Acceleration</strong> is the rate of change of velocity (vector).",
                 "<strong>a = &Delta;v &divide; t</strong>",
                 "where a is acceleration in m/s&sup2;, &Delta;v is change in velocity, t is time taken.",
                 "Positive acceleration means speeding up (in the chosen direction). Negative acceleration (deceleration) means slowing down.",
                 "<strong>Suvat equation for acceleration:</strong>",
                 "<strong>v&sup2; = u&sup2; + 2 &times; a &times; s</strong>",
                 "(useful when time isn't known: v is final velocity, u is initial velocity, s is displacement)"] },
        { h: "Distance-time and velocity-time graphs",
          body: ["<strong>Distance-time graph:</strong>",
                 "<ul><li>Straight line = constant speed; gradient = speed</li><li>Curve = changing speed</li><li>Horizontal line = stationary</li></ul>",
                 "<strong>Velocity-time graph:</strong>",
                 "<ul><li>Gradient = acceleration</li><li>Area under the line = distance travelled</li><li>Horizontal line = constant velocity</li></ul>"] },
        { h: "Newton's laws",
          body: ["<strong>First law:</strong> An object stays at rest, or in motion at constant velocity, unless an unbalanced force acts on it.",
                 "<strong>Second law:</strong>",
                 "<strong>F = m &times; a</strong>",
                 "Force = mass &times; acceleration. Bigger force or smaller mass = bigger acceleration.",
                 "<strong>Third law:</strong> For every action there is an equal and opposite reaction. When you push on a wall, the wall pushes back on you with equal force."] },
        { h: "Stopping distances",
          body: ["<strong>Stopping distance = thinking distance + braking distance</strong>",
                 "<ul><li><strong>Thinking distance</strong>: how far the car travels while the driver reacts (depends on speed and reaction time, ~0.4-0.9 s normally)</li><li><strong>Braking distance</strong>: how far the car travels while braking (depends on speed, road conditions, brakes, tyres)</li></ul>",
                 "Factors that increase thinking distance: tiredness, alcohol, drugs, distractions.",
                 "Factors that increase braking distance: wet/icy roads, worn tyres, worn brakes, faster speed."] }
      ],
      keyPoints: [
        "Scalars: mass, speed, distance. Vectors: force, velocity, displacement, acceleration",
        "Contact forces (friction, tension), non-contact (gravity, magnetism, electrostatic)",
        "Weight W = m g, in newtons. Mass is constant, weight depends on g",
        "Resultant zero &rarr; constant velocity (or stationary)",
        "Work done W = F &times; d, in joules",
        "Hooke's law: F = k e for springs (within limit). Energy stored = &frac12; k e&sup2;",
        "Speed = distance / time. Acceleration = &Delta;v / t",
        "v&sup2; = u&sup2; + 2 a s links speeds, acceleration and distance without time",
        "Newton's 1st: balanced forces &rarr; no change. 2nd: F = m a. 3rd: equal and opposite",
        "Stopping distance = thinking + braking. Both depend on speed; braking also on conditions"
      ],
      mistakes: [
        "Confusing mass and weight, mass is kg, weight is newtons; weight changes with gravity",
        "Forgetting acceleration is a VECTOR, deceleration is just acceleration in the opposite direction",
        "Reading gradient of distance-time graph as acceleration, that's velocity-time",
        "Squaring v but not u in v&sup2; = u&sup2; + 2as",
        "Forgetting unit conversions (mph to m/s, km to m) before plugging into equations"
      ]
    },

    p6: {
      intro: "Waves carry energy and information without moving matter from place to place. This topic covers the two main types of wave (transverse and longitudinal), how to describe them, and the electromagnetic spectrum: from radio waves to gamma rays.",
      sections: [
        { h: "Transverse and longitudinal waves",
          body: ["All waves carry energy. Two types:",
                 "<ul><li><strong>Transverse waves</strong>: oscillations are perpendicular (at 90&deg;) to the direction of energy transfer. Examples: water waves on the surface, all electromagnetic waves.</li><li><strong>Longitudinal waves</strong>: oscillations are parallel (along) the direction of energy transfer. Examples: sound waves in air.</li></ul>",
                 "A longitudinal wave has <strong>compressions</strong> (squashed-together particles) and <strong>rarefactions</strong> (spread-out particles)."],
          diagram: {
            alt: 'Transverse wave shown as sine curve with amplitude and wavelength labelled; longitudinal wave shown as compressions and rarefactions',
            caption: 'Transverse (top): oscillation at 90&deg; to wave direction. Longitudinal (bottom): particles squash and stretch along the direction of travel.',
            svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="w1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1a1f2e"/></marker></defs>' +
              '<text x="40" y="22" font-size="11" fill="#c2410c" font-weight="700">TRANSVERSE</text>' +
              '<path d="M 30 70 Q 60 30 90 70 Q 120 110 150 70 Q 180 30 210 70 Q 240 110 270 70 Q 300 30 330 70 Q 360 110 390 70" stroke="#c2410c" stroke-width="2.5" fill="none"/>' +
              '<line x1="30" y1="70" x2="395" y2="70" stroke="#1a1f2e" stroke-width="0.8" stroke-dasharray="2 3"/>' +
              '<line x1="395" y1="70" x2="430" y2="70" stroke="#1a1f2e" stroke-width="1" marker-end="url(#w1)"/>' +
              '<text x="430" y="86" text-anchor="end" font-size="9" fill="#4a5165">direction of travel</text>' +
              '<line x1="90" y1="70" x2="90" y2="40" stroke="#15803d" stroke-width="1"/>' +
              '<text x="95" y="55" font-size="9" fill="#15803d">amplitude</text>' +
              '<line x1="90" y1="105" x2="210" y2="105" stroke="#15803d" stroke-width="1" marker-start="url(#w1)" marker-end="url(#w1)"/>' +
              '<text x="150" y="120" text-anchor="middle" font-size="9" fill="#15803d">wavelength &lambda;</text>' +
              '<text x="40" y="155" font-size="11" fill="#1d4ed8" font-weight="700">LONGITUDINAL</text>' +
              '<line x1="40"  y1="170" x2="40"  y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="60"  y1="170" x2="60"  y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="80"  y1="170" x2="80"  y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="90"  y1="170" x2="90"  y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="100" y1="170" x2="100" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="105" y1="170" x2="105" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="110" y1="170" x2="110" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="135" y1="170" x2="135" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="160" y1="170" x2="160" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="185" y1="170" x2="185" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="200" y1="170" x2="200" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="210" y1="170" x2="210" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="220" y1="170" x2="220" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="245" y1="170" x2="245" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="270" y1="170" x2="270" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="295" y1="170" x2="295" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="310" y1="170" x2="310" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="320" y1="170" x2="320" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="330" y1="170" x2="330" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="355" y1="170" x2="355" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<line x1="380" y1="170" x2="380" y2="210" stroke="#1d4ed8" stroke-width="1.5"/>' +
              '<text x="100" y="226" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="600">compression</text>' +
              '<text x="210" y="226" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="600">compression</text>' +
              '<text x="320" y="226" text-anchor="middle" font-size="9" fill="#1d4ed8" font-weight="600">compression</text>' +
              '<text x="155" y="166" text-anchor="middle" font-size="9" fill="#4a5165">rarefaction</text>' +
              '<text x="265" y="166" text-anchor="middle" font-size="9" fill="#4a5165">rarefaction</text>' +
              '<line x1="395" y1="190" x2="430" y2="190" stroke="#1a1f2e" stroke-width="1" marker-end="url(#w1)"/>' +
            '</svg>'
          } },
        { h: "Wave properties",
          body: ["<strong>Wavelength (&lambda;)</strong>, distance from one peak to the next (or one trough to the next), in metres.",
                 "<strong>Amplitude</strong>, maximum displacement from the rest position. Bigger amplitude = more energy.",
                 "<strong>Frequency (f)</strong>, number of complete waves per second, in hertz (Hz).",
                 "<strong>Period (T)</strong>, time for one complete wave, in seconds. T = 1 / f.",
                 "<strong>Wave speed:</strong>",
                 "<strong>v = f &times; &lambda;</strong>",
                 "where v is in m/s, f is in Hz, &lambda; is in m."] },
        { h: "Sound waves",
          body: ["Sound is a longitudinal wave. It needs a medium (solid, liquid or gas) to travel; sound can't travel in a vacuum.",
                 "Sound waves are detected by your ear. The eardrum vibrates with the air. Higher frequency = higher pitch. Higher amplitude = louder sound.",
                 "Speed of sound in air is about 330 m/s; in water about 1500 m/s; in steel about 5000 m/s. Sound travels faster in solids because particles are closer together.",
                 "Humans hear roughly 20 Hz to 20 000 Hz."] },
        { h: "The electromagnetic spectrum",
          body: ["Electromagnetic (EM) waves are transverse, travel at the speed of light (3 &times; 10<sup>8</sup> m/s) and don't need a medium. The spectrum, from longest wavelength to shortest:",
                 "<ul><li><strong>Radio waves</strong></li><li><strong>Microwaves</strong></li><li><strong>Infrared</strong></li><li><strong>Visible light</strong> (red &rarr; orange &rarr; yellow &rarr; green &rarr; blue &rarr; indigo &rarr; violet)</li><li><strong>Ultraviolet</strong></li><li><strong>X-rays</strong></li><li><strong>Gamma rays</strong></li></ul>",
                 "Higher frequency = shorter wavelength = more energy. Memory aid: 'Roman Men Invented Very Unusual X-ray Guns'.",
                 "Frequencies past UV are <strong>ionising</strong>, they can knock electrons off atoms and damage living cells."],
          diagram: {
            alt: 'Electromagnetic spectrum bands from radio to gamma, with wavelength and energy arrows',
            caption: 'The EM spectrum: longest wavelength on the left, highest energy on the right.',
            svg: '<svg viewBox="0 0 460 180" xmlns="http://www.w3.org/2000/svg">' +
              '<rect x="20"  y="60" width="60" height="30" fill="#dbeafe" stroke="#1d4ed8"/>' +
              '<rect x="80"  y="60" width="60" height="30" fill="#bfdbfe" stroke="#1d4ed8"/>' +
              '<rect x="140" y="60" width="55" height="30" fill="#fed7aa" stroke="#c2410c"/>' +
              '<rect x="195" y="60" width="40" height="30" fill="url(#vis)" stroke="#1a1f2e"/>' +
              '<defs><linearGradient id="vis" x1="0" x2="1"><stop offset="0%" stop-color="#dc2626"/><stop offset="20%" stop-color="#f97316"/><stop offset="40%" stop-color="#eab308"/><stop offset="60%" stop-color="#16a34a"/><stop offset="80%" stop-color="#2563eb"/><stop offset="100%" stop-color="#7e22ce"/></linearGradient></defs>' +
              '<rect x="235" y="60" width="55" height="30" fill="#ddd6fe" stroke="#7e22ce"/>' +
              '<rect x="290" y="60" width="65" height="30" fill="#fee2e2" stroke="#b91c1c"/>' +
              '<rect x="355" y="60" width="80" height="30" fill="#fecaca" stroke="#b91c1c"/>' +
              '<text x="50"  y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">Radio</text>' +
              '<text x="110" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">Microwave</text>' +
              '<text x="167" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">Infrared</text>' +
              '<text x="215" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">Visible</text>' +
              '<text x="262" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">UV</text>' +
              '<text x="322" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">X-ray</text>' +
              '<text x="395" y="105" text-anchor="middle" font-size="9" fill="#1a1f2e">Gamma</text>' +
              '<path d="M 20 130 L 440 130" stroke="#4a5165" stroke-width="1.2" marker-end="url(#a4)"/>' +
              '<defs><marker id="a4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#4a5165"/></marker></defs>' +
              '<text x="20" y="148" font-size="10" fill="#4a5165">long wavelength &amp; low frequency</text>' +
              '<text x="440" y="148" text-anchor="end" font-size="10" fill="#4a5165">short wavelength &amp; high energy</text>' +
              '<line x1="290" y1="55" x2="290" y2="40" stroke="#b91c1c" stroke-width="1.2"/>' +
              '<text x="290" y="35" text-anchor="middle" font-size="10" fill="#b91c1c" font-weight="600">ionising from UV onwards</text>' +
            '</svg>'
          },
          callout: { type: 'key', label: 'Speed in a vacuum', text: "All EM waves travel at the same speed in a vacuum: c = 3 &times; 10&sup8; m/s. They differ only in frequency and wavelength." } },
        { h: "Uses and dangers of EM waves",
          body: ["<ul><li><strong>Radio waves</strong>, broadcasting (TV, radio), long-distance communication, mobile phones</li><li><strong>Microwaves</strong>, heating food (water molecules absorb them), satellite communication, Wi-Fi</li><li><strong>Infrared</strong>, remote controls, thermal imaging, cooking (grills), heaters. Felt as warmth.</li><li><strong>Visible light</strong>, the only part we see, used in fibre optics</li><li><strong>Ultraviolet</strong>, fluorescent lamps, sun beds, sterilising water. Causes sunburn, skin cancer.</li><li><strong>X-rays</strong>, medical imaging (bones), airport security. Ionising, repeated exposure dangerous.</li><li><strong>Gamma rays</strong>, sterilising medical equipment, cancer treatment. Highly ionising, dangerous in large doses.</li></ul>"] },
        { h: "Reflection, refraction, transmission, absorption",
          body: ["When a wave meets a boundary between two materials, it can do four things:",
                 "<ul><li><strong>Reflect</strong>, bounce back. Angle of incidence = angle of reflection.</li><li><strong>Refract</strong>, change direction (and speed) as it enters a different medium. Light slows down going from air to glass, bending towards the normal.</li><li><strong>Transmit</strong>, pass through.</li><li><strong>Absorb</strong>, energy is transferred to the material (often as heat).</li></ul>",
                 "Specular reflection: smooth surface, rays reflect parallel (a mirror). Diffuse reflection: rough surface, rays scatter in all directions (paper)."] },
        { h: "Required practical: ripple tank",
          body: ["You can measure the speed of water waves with a ripple tank. Count the frequency (waves per second) and measure the wavelength. Multiply for speed.",
                 "Same idea works for sound waves using a microphone and oscilloscope."] }
      ],
      keyPoints: [
        "Transverse: oscillation perpendicular to energy travel (light, water waves)",
        "Longitudinal: oscillation parallel to energy travel (sound, compressions + rarefactions)",
        "Wavelength &lambda;, amplitude, frequency f (Hz), period T",
        "Wave speed v = f &lambda;; T = 1 / f",
        "Sound needs a medium; faster in solids, slower in gases",
        "EM spectrum (long to short wavelength): radio, microwave, infrared, visible, UV, X-ray, gamma",
        "All EM waves travel at c = 3 &times; 10&sup8; m/s in a vacuum",
        "Higher frequency = more energy. UV onwards is ionising",
        "Common uses: radio (comms), microwave (cooking), IR (heating, remotes), UV (sterilising)",
        "Waves can reflect, refract, transmit or absorb at boundaries"
      ],
      mistakes: [
        "Mixing up amplitude (height) and wavelength (distance between peaks)",
        "Forgetting that sound CANNOT travel through a vacuum",
        "Saying all EM waves travel at the same speed regardless of medium, they only do that in a VACUUM",
        "Saying microwaves are dangerous because they're radio-like, they actually heat by exciting water",
        "Confusing reflection and refraction, reflect = bounce off; refract = bend through"
      ]
    },

    p7: {
      intro: "Magnets attract iron, cobalt, nickel and steel. Electric currents produce magnetic fields. Putting these two ideas together gives you motors, generators, transformers, and most of the technology that runs the modern world.",
      sections: [
        { h: "Magnets and magnetic fields",
          body: ["A <strong>permanent magnet</strong> produces its own magnetic field. It has two poles, <strong>north</strong> and <strong>south</strong>.",
                 "<ul><li>Like poles (N-N, S-S) repel</li><li>Opposite poles (N-S) attract</li></ul>",
                 "Magnetic materials (iron, steel, cobalt, nickel) can be magnetised. They aren't always magnets but they're attracted to magnets and can become temporarily magnetised.",
                 "An <strong>induced magnet</strong> is a magnetic material that becomes a magnet when placed in a magnetic field. The induced magnetism is temporary."] },
        { h: "Magnetic field lines",
          body: ["A magnetic field is the region around a magnet where another magnet (or magnetic material) feels a force.",
                 "Field lines are drawn from N to S outside the magnet.",
                 "<ul><li>Closer lines = stronger field</li><li>The strongest field is at the poles</li></ul>",
                 "You can map a field with iron filings (they line up along the field) or with small plotting compasses (they point along the field line)."],
          diagram: {
            alt: 'Bar magnet with field lines curving from north to south, denser near the poles',
            caption: 'Magnetic field around a bar magnet: lines run N to S outside; closer lines = stronger field.',
            svg: '<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg">' +
              '<defs><marker id="mg1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8 z" fill="#1d4ed8"/></marker></defs>' +
              '<rect x="180" y="105" width="100" height="30" fill="#fef3c7" stroke="#1a1f2e" stroke-width="1.5"/>' +
              '<rect x="180" y="105" width="50" height="30" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/>' +
              '<text x="205" y="125" text-anchor="middle" font-size="14" fill="#b91c1c" font-weight="700">N</text>' +
              '<text x="255" y="125" text-anchor="middle" font-size="14" fill="#1d4ed8" font-weight="700">S</text>' +
              '<path d="M 195 105 Q 195 60 230 60 Q 265 60 265 105" stroke="#1d4ed8" stroke-width="1.5" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 105 Q 195 30 230 30 Q 265 30 265 105" stroke="#1d4ed8" stroke-width="1.2" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 105 Q 175 20 130 50 Q 90 90 195 105" stroke="#1d4ed8" stroke-width="1" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 105 Q 215 200 265 105" stroke="#1d4ed8" stroke-width="1" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 135 Q 195 180 230 180 Q 265 180 265 135" stroke="#1d4ed8" stroke-width="1.5" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 135 Q 195 210 230 210 Q 265 210 265 135" stroke="#1d4ed8" stroke-width="1.2" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 135 Q 175 220 130 190 Q 90 150 195 135" stroke="#1d4ed8" stroke-width="1" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 195 135 Q 215 100 265 135" stroke="#1d4ed8" stroke-width="1" fill="none" marker-end="url(#mg1)"/>' +
              '<path d="M 265 105 Q 285 20 330 50 Q 370 90 265 105" stroke="#1d4ed8" stroke-width="1" fill="none"/>' +
              '<path d="M 265 135 Q 285 220 330 190 Q 370 150 265 135" stroke="#1d4ed8" stroke-width="1" fill="none"/>' +
              '<text x="115" y="115" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">weaker</text>' +
              '<text x="115" y="128" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">far from poles</text>' +
              '<text x="230" y="155" text-anchor="middle" font-size="9" fill="#4a5165" font-style="italic">strongest at poles</text>' +
            '</svg>'
          } },
        { h: "The Earth's magnetic field",
          body: ["The Earth itself behaves like a giant magnet, probably because of the molten iron in its outer core. A compass aligns with this field, the 'north-seeking' pole of the compass points roughly towards the geographic North Pole.",
                 "Important: the geographic North Pole is, magnetically, a SOUTH pole (because the compass north points to it, and opposites attract)."] },
        { h: "Magnetic field around a current",
          body: ["A current in a wire produces a magnetic field around the wire. The field lines form circles around the wire.",
                 "Use the <strong>right-hand rule</strong>: point your right thumb in the direction of the current. Your fingers curl in the direction of the field lines.",
                 "Coiling the wire into a <strong>solenoid</strong> concentrates the field. Inside a solenoid, the field is strong and uniform. Outside, it looks like a bar magnet.",
                 "Adding an iron core makes it stronger still, this is an <strong>electromagnet</strong>."] },
        { h: "Uses of electromagnets",
          body: ["Electromagnets are useful because they can be switched on and off, and their strength can be varied.",
                 "<ul><li>Scrap yards use electromagnetic cranes to lift cars (switch off to drop)</li><li>Doorbells use a solenoid to ring a hammer</li><li>Relays let a small current control a much larger one</li><li>Speakers convert electrical signals into vibrations (then sound)</li><li>Maglev trains use electromagnets to levitate above tracks</li></ul>"] },
        { h: "Motor effect",
          body: ["A current-carrying wire in a magnetic field experiences a force. This is the <strong>motor effect</strong>.",
                 "The force is biggest when the wire is at 90&deg; to the field. Force is zero if the wire runs parallel to the field.",
                 "<strong>Fleming's left-hand rule</strong> (for the direction of the force):",
                 "<ul><li><strong>F</strong>irst finger = <strong>F</strong>ield (N to S)</li><li>se<strong>C</strong>ond finger = <strong>C</strong>urrent (positive to negative)</li><li>Thumb = thrust/force (direction the wire moves)</li></ul>",
                 "<strong>F = B &times; I &times; L</strong>",
                 "where F is force in newtons, B is magnetic flux density (T), I is current in amps, L is the length of wire inside the field in metres."] },
        { h: "Electric motors",
          body: ["A simple electric motor uses the motor effect. A rectangular coil of wire sits between the poles of a magnet. Current flows through the coil. Each side of the coil experiences a force, but in opposite directions, so the coil rotates.",
                 "A <strong>split-ring commutator</strong> reverses the direction of current in the coil every half turn. This keeps the rotation going in the same direction."] }
      ],
      keyPoints: [
        "Like poles repel, opposite poles attract",
        "Permanent magnets are always magnetic; induced magnets are only magnetic when in a field",
        "Field lines go N to S outside a magnet; closer lines = stronger field",
        "Earth's geographic North is magnetically a south pole",
        "Currents produce magnetic fields. Right-hand rule for direction",
        "Solenoid concentrates field; adding iron core makes an electromagnet (can switch on/off)",
        "Uses of electromagnets: cranes, doorbells, relays, speakers, maglev",
        "Motor effect: a current-carrying wire in a field feels a force",
        "Fleming's left-hand rule: First = Field, seCond = Current, Thumb = Force",
        "F = B I L for force on a current-carrying wire",
        "Motors use a coil + commutator to keep rotation going"
      ],
      mistakes: [
        "Mixing up Fleming's left and right hand rules, LEFT is for motors (force from current); right is for generators (current from movement, HT only)",
        "Forgetting that the force is zero when wire is parallel to the field",
        "Saying electromagnets are 'stronger than' permanent magnets in general, depends on the design",
        "Drawing field lines from S to N, they go N to S outside the magnet",
        "Confusing magnetic flux density (B, in tesla) with magnetic field, common to muddle the terms"
      ]
    }
  };
  const questions = [
    { id: 'p1-1', topic: 'p1', type: 'mcq', marks: 1,
      text: 'Which of these is the SI unit of energy?',
      options: ['Watt', 'Joule', 'Newton', 'Volt'],
      answer: 1,
      optionFeedback: [
        "Watt is the unit of power (energy per second), not energy itself.",
        "Correct. The joule (J) is the SI unit of energy. 1 J = the energy needed to push something 1 m with 1 N of force.",
        "Newton is the unit of force.",
        "Volt is the unit of potential difference."
      ],
      teach: "Joule (J) = energy. Watt (W) = power = J/s. Don't mix them." },
    { id: 'p1-2', topic: 'p1', type: 'mcq', marks: 1,
      text: 'A 2 kg ball is lifted 5 m up. Using g = 10 N/kg, how much gravitational potential energy does it gain?',
      options: ['10 J', '50 J', '100 J', '500 J'],
      answer: 2,
      optionFeedback: [
        "That's just m &times; g, you forgot to multiply by height.",
        "That's g &times; h, you forgot the mass.",
        "Correct. E_p = m &times; g &times; h = 2 &times; 10 &times; 5 = 100 J.",
        "Too high. Recalculate 2 &times; 10 &times; 5."
      ],
      teach: "GPE = m &times; g &times; h. Plug in: mass, gravity (10 N/kg here), height. Units: kg, N/kg, m &rarr; J." },
    { id: 'p1-3', topic: 'p1', type: 'mcq', marks: 1,
      text: 'A 1500 W kettle is on for 60 seconds. How much energy does it transfer?',
      options: ['25 J', '1500 J', '90 000 J', '1 500 000 J'],
      answer: 2,
      optionFeedback: [
        "Energy is power times time, not power divided by time.",
        "1500 W means 1500 J every SECOND. Multiply by total seconds.",
        "Correct. E = P &times; t = 1500 &times; 60 = 90 000 J (or 90 kJ).",
        "Far too high. Recalculate 1500 &times; 60."
      ],
      teach: "Energy in joules = power in watts &times; time in seconds. Always use seconds, not minutes." },
    { id: 'p1-4', topic: 'p1', type: 'mcq', marks: 1,
      text: 'A device is 80% efficient. If 1000 J of energy is supplied, how much is useful?',
      options: ['80 J', '200 J', '800 J', '1000 J'],
      answer: 2,
      optionFeedback: [
        "That would be only 8% efficient.",
        "That's the WASTED energy, not the useful energy.",
        "Correct. 80% of 1000 J = 800 J useful. The other 200 J is wasted (usually as heat or sound).",
        "Nothing is 100% efficient in real life."
      ],
      teach: "Efficiency = useful out &divide; total in. To find useful out: efficiency &times; total in. 0.80 &times; 1000 = 800." },
    { id: 'p1-5', topic: 'p1', type: 'mcq', marks: 1,
      text: 'Which of these is a non-renewable energy resource?',
      options: ['Wind', 'Solar', 'Tidal', 'Natural gas'],
      answer: 3,
      optionFeedback: [
        "Wind is renewable, it doesn't run out.",
        "Sunlight is renewable.",
        "Tides are renewable, driven by the Moon.",
        "Correct. Natural gas is a fossil fuel. It took millions of years to form and we're using it far faster than that. Once it's gone, it's gone."
      ],
      teach: "Non-renewable: coal, oil, gas, nuclear fuel. Renewable: wind, solar, hydro, tidal, wave, geothermal, biofuel." },
    { id: 'p1-6', topic: 'p1', type: 'mcq', marks: 1,
      text: 'A 60 kg cyclist is travelling at 5 m/s. What is her kinetic energy?',
      options: ['150 J', '300 J', '750 J', '1500 J'],
      answer: 2,
      optionFeedback: [
        "You forgot to square the speed.",
        "Looks like you used &frac12; m v without squaring v.",
        "Correct. E_k = &frac12; &times; m &times; v&sup2; = &frac12; &times; 60 &times; 5&sup2; = &frac12; &times; 60 &times; 25 = 750 J.",
        "Too high. Recheck: &frac12; &times; 60 = 30. 30 &times; 25 = 750, not 1500."
      ],
      teach: "Kinetic energy = &frac12; m v&sup2;. Square v first, then multiply by m, then halve." },
    { id: 'p1-7', topic: 'p1', type: 'mcq', marks: 1,
      text: 'How does heat mainly move through a metal bar?',
      options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
      answer: 0,
      optionFeedback: [
        "Correct. In solids, heat moves by conduction: vibrating particles pass energy to neighbours, plus free electrons in metals do this very efficiently.",
        "Convection happens in liquids and gases, not solids.",
        "Radiation can move heat through space, but for a solid bar conduction is much more important.",
        "Evaporation is liquid &rarr; gas, not directly heat transfer in a solid."
      ],
      teach: "Solids = conduction. Liquids and gases = convection (currents) + radiation. Metals are especially good conductors thanks to free electrons." },
    { id: 'p1-8', topic: 'p1', type: 'short', marks: 2,
      text: 'A lift motor lifts a 200 kg load 8 m vertically. Calculate the work done against gravity. Use g = 10 N/kg.',
      markScheme: 'Weight = m &times; g = 200 &times; 10 = 2000 N (1 mark). Work done = F &times; d = 2000 &times; 8 = 16 000 J (1 mark).',
      teach: "Two-mark calc: find weight, then work done = weight &times; height. 16 000 J or 16 kJ." },
    { id: 'p1-9', topic: 'p1', type: 'short', marks: 2,
      text: 'Explain how loft insulation reduces heat loss from a house.',
      markScheme: 'Loft insulation traps air (1 mark). Air is a poor conductor, so heat conducts more slowly through the loft / less heat is lost to the cold air above (1 mark).',
      teach: "Insulation traps air. Air is a poor conductor. So heat moves slowly through it. Same idea for double glazing, cavity walls, fluffy clothes." },
    { id: 'p1-10', topic: 'p1', type: 'short', marks: 3,
      text: 'Discuss one advantage and one disadvantage of using wind turbines instead of gas to generate electricity.',
      markScheme: 'Advantage (1 mark, any): renewable / does not run out / no CO2 emissions during generation / low ongoing fuel cost. Disadvantage (1 mark, any): intermittent / only generates when the wind blows / takes up large areas of land / some people consider them visually unattractive / hazardous to birds. Clear comparison reasoning (1 mark): e.g. gas always available but releases CO2, while wind cuts emissions but needs backup for calm days.',
      teach: "Renewables: clean but intermittent. Fossil fuels: reliable but polluting. Pick one of each clearly." },
    { id: 'p1-11', topic: 'p1', type: 'short', marks: 2,
      text: 'A torch transfers 60 J of energy from its battery. 12 J goes out as useful light; the rest is wasted as heat. Calculate the efficiency of the torch.',
      markScheme: 'Efficiency = useful &divide; total = 12 &divide; 60 = 0.20 (1 mark). As a percentage that is 20% (1 mark).',
      teach: "Efficiency = useful out &divide; total in. Multiply by 100 for a percentage. 12/60 = 0.2 = 20%." },
    { id: 'p1-12', topic: 'p1', type: 'mcq', marks: 1,
      text: 'Which energy store is GAINED when you stretch a spring?',
      options: ['Kinetic', 'Thermal', 'Elastic potential', 'Gravitational potential'],
      answer: 2,
      optionFeedback: [
        "The spring isn't moving, so kinetic isn't right.",
        "The spring might warm up slightly through friction but the main store gained is elastic.",
        "Correct. Stretching or squashing a spring stores energy in its elastic potential store. Release the spring and that store empties.",
        "GPE only changes if the height changes."
      ],
      teach: "Spring stretched or squashed = elastic potential energy stored. E_e = &frac12; k e&sup2;." },
    { id: 'p1-13', topic: 'p1', type: 'mcq', marks: 1,
      text: 'Why do most appliances waste some of their energy as heat?',
      options: ['It is the law of nature: heat is always created from electricity', 'Friction and electrical resistance always cause some energy to be dissipated', 'It is a deliberate design choice by manufacturers', 'There is no such thing as wasted energy'],
      answer: 1,
      optionFeedback: [
        "Heat isn't 'created'. Energy is just transferred to less useful forms.",
        "Correct. Moving parts have friction; wires have resistance. Both cause energy to spread into the surroundings as heat. We can reduce these but never eliminate them completely.",
        "Manufacturers try to MINIMISE waste, not create it.",
        "Wasted energy is a real and important concept; it's why nothing is 100% efficient."
      ],
      teach: "Friction + resistance = wasted heat. The reason efficiency is always less than 100%. We minimise it with lubrication, insulation, better designs." },

    { id: 'p2-1', topic: 'p2', type: 'mcq', marks: 1,
      text: 'What does electric current measure?',
      options: ['The amount of voltage in a circuit', 'The rate of flow of charge', 'The resistance of the wire', 'The energy stored in the battery'],
      answer: 1,
      optionFeedback: [
        "Voltage is potential difference (V), measured separately.",
        "Correct. Current is the rate at which charge flows past a point. 1 ampere = 1 coulomb of charge per second.",
        "Resistance is measured in ohms, separately.",
        "Battery energy depends on charge AND voltage."
      ],
      teach: "Current I (in amps) = charge Q (in coulombs) &divide; time t (in seconds). Q = I t." },
    { id: 'p2-2', topic: 'p2', type: 'mcq', marks: 1,
      text: 'A 12 V battery pushes 0.5 A through a resistor. What is the resistance?',
      options: ['6 &Omega;', '12 &Omega;', '24 &Omega;', '0.5 &Omega;'],
      answer: 2,
      optionFeedback: [
        "That's V multiplied by I, not divided.",
        "That's just the voltage, the resistance is different.",
        "Correct. R = V &divide; I = 12 &divide; 0.5 = 24 &Omega;.",
        "That's just I, not the resistance."
      ],
      teach: "V = I R. Rearrange to R = V/I. 12/0.5 = 24 ohms." },
    { id: 'p2-3', topic: 'p2', type: 'mcq', marks: 1,
      text: 'Where in a circuit should an ammeter be placed?',
      options: ['In parallel with the component', 'In series with the component', 'On its own, away from the circuit', 'After the battery only'],
      answer: 1,
      optionFeedback: [
        "Voltmeters go in parallel. Ammeters go in series.",
        "Correct. An ammeter is connected in series so all the current to be measured passes through it.",
        "Disconnected from the circuit, it would read 0.",
        "Position relative to the battery doesn't matter as long as it's in series."
      ],
      teach: "Ammeter = in SERIES (current passes through it). Voltmeter = in PARALLEL (measures voltage across the component)." },
    { id: 'p2-4', topic: 'p2', type: 'mcq', marks: 1,
      text: 'Three identical 2 &Omega; resistors are connected in SERIES. What is the total resistance?',
      options: ['2 &Omega;', '3 &Omega;', '6 &Omega;', '0.67 &Omega;'],
      answer: 2,
      optionFeedback: [
        "If they were all in parallel and identical, you'd divide. But this is series.",
        "Series resistors ADD up.",
        "Correct. Series resistances add: 2 + 2 + 2 = 6 &Omega;.",
        "That's what you'd get if they were in parallel (2 &divide; 3)."
      ],
      teach: "Series: add the resistances. Parallel: total is LESS than any one (more paths means less overall resistance)." },
    { id: 'p2-5', topic: 'p2', type: 'mcq', marks: 1,
      text: 'In a UK three-pin plug, what colour is the live wire?',
      options: ['Blue', 'Green and yellow stripes', 'Brown', 'Red'],
      answer: 2,
      optionFeedback: [
        "Blue is neutral.",
        "Green and yellow stripes is earth (the safety wire).",
        "Correct. The live wire is brown. It carries the high voltage that delivers power.",
        "Red was used historically but is no longer the live colour in modern UK wiring."
      ],
      teach: "Brown = Live. Blue = Neutral. Green/yellow = Earth. Three colours, three jobs." },
    { id: 'p2-6', topic: 'p2', type: 'mcq', marks: 1,
      text: 'What is the function of the earth wire in a plug?',
      options: ['Carries the main current when the appliance is on', 'Provides a low-resistance path if there is a fault, so a fuse blows', 'Makes the appliance turn green', 'Stops the appliance moving'],
      answer: 1,
      optionFeedback: [
        "That's the LIVE wire's job, not the earth.",
        "Correct. The earth wire connects the metal casing to the ground. If a fault makes the casing live, the earth provides a low-resistance path; the surge of current blows the fuse and isolates the appliance, keeping you safe.",
        "Wire colours are conventions, the earth doesn't make anything green.",
        "Earth wires aren't structural."
      ],
      teach: "Earth wire = safety. Lets fault current escape to ground via low resistance, blowing the fuse. Stops you getting shocked by the casing." },
    { id: 'p2-7', topic: 'p2', type: 'mcq', marks: 1,
      text: 'Which of these would INCREASE the current in a simple circuit?',
      options: ['Adding a higher resistance', 'Using a higher-voltage battery', 'Adding more cells in opposition', 'Switching to a longer wire'],
      answer: 1,
      optionFeedback: [
        "Higher resistance reduces current (V = IR, so for the same V, more R means less I).",
        "Correct. Higher voltage drives more current through the same resistance.",
        "Cells in opposition cancel each other out, reducing voltage.",
        "A longer wire usually has slightly higher resistance, reducing current."
      ],
      teach: "I = V/R. More V or less R means more I. Less V or more R means less I." },
    { id: 'p2-8', topic: 'p2', type: 'short', marks: 2,
      text: 'A torch bulb has a power of 3 W and runs on a 9 V battery. Calculate the current it draws.',
      markScheme: 'P = V &times; I, so I = P &divide; V (1 mark). I = 3 &divide; 9 = 0.33 A (1 mark, allow 1/3 A).',
      teach: "P = VI. Rearrange to I = P/V. 3 W &divide; 9 V = 1/3 A &asymp; 0.33 A." },
    { id: 'p2-9', topic: 'p2', type: 'short', marks: 3,
      text: 'Three identical bulbs are connected in PARALLEL to a 6 V battery. State the voltage across each bulb. Explain what happens to the current in the main circuit (from the battery) compared with a single-bulb circuit.',
      markScheme: 'Each bulb has 6 V across it / the same as the battery (1 mark). The current from the battery is higher than for a single bulb (1 mark). Because there are now three parallel paths for current, total resistance is lower, so more current flows from the battery (1 mark).',
      teach: "Parallel: same voltage across each branch, currents add. More branches = less total resistance = more total current." },
    { id: 'p2-10', topic: 'p2', type: 'short', marks: 2,
      text: 'Explain why a filament bulb does NOT obey Ohm\'s law.',
      markScheme: 'As current increases, the filament heats up (1 mark). The hotter filament has higher resistance, so the V-I graph curves (it isn\'t a straight line through the origin) (1 mark).',
      teach: "Filament bulb: more current &rarr; hotter wire &rarr; resistance rises &rarr; curve on V-I graph. Non-ohmic." },
    { id: 'p2-11', topic: 'p2', type: 'short', marks: 2,
      text: 'A 2 kW electric heater is on for 5 hours. Calculate the energy transferred in kilowatt-hours, and then in joules.',
      markScheme: 'Energy = P &times; t = 2 kW &times; 5 h = 10 kWh (1 mark). In joules: 10 kWh &times; 3 600 000 = 36 000 000 J (or 3.6 &times; 10&sup7; J) (1 mark).',
      teach: "kWh = kilowatts &times; hours. 1 kWh = 3 600 000 J (because 1 kW = 1000 J/s, 1 hr = 3600 s)." },
    { id: 'p2-12', topic: 'p2', type: 'mcq', marks: 1,
      text: 'A 3 A current flows for 2 minutes. How much charge has passed?',
      options: ['1.5 C', '6 C', '360 C', '0.4 C'],
      answer: 2,
      optionFeedback: [
        "Charge = current &times; time, not current divided by time.",
        "Did you forget to convert minutes to seconds? 1 minute = 60 s.",
        "Correct. Q = I t = 3 A &times; 120 s = 360 C.",
        "Far too small. Check your units."
      ],
      teach: "Q = I &times; t. Always use SECONDS. 2 minutes = 120 s. 3 &times; 120 = 360 C." },
    { id: 'p2-13', topic: 'p2', type: 'mcq', marks: 1,
      text: 'A thermistor\'s resistance is HIGHEST when:',
      options: ['It is hot', 'It is cold', 'It is dark', 'It is bright'],
      answer: 1,
      optionFeedback: [
        "Hot thermistor = low resistance. The opposite of what's asked.",
        "Correct. Resistance of a thermistor DECREASES as temperature increases, so it's highest when cold.",
        "That describes an LDR, not a thermistor.",
        "That also describes an LDR, not a thermistor."
      ],
      teach: "Thermistor: resistance goes DOWN as it gets hotter. LDR: resistance goes DOWN as it gets brighter. Don't muddle them." },

    { id: 'p3-1', topic: 'p3', type: 'mcq', marks: 1,
      text: 'What describes the arrangement of particles in a solid?',
      options: ['Far apart, random motion', 'Close together, free to move', 'Tightly packed in a regular pattern, vibrating', 'Spread out, all stationary'],
      answer: 2,
      optionFeedback: [
        "That's a gas.",
        "That's a liquid.",
        "Correct. Solid particles are packed in a regular pattern. They vibrate around fixed positions but can't move past each other.",
        "Particles are never completely stationary except at absolute zero."
      ],
      teach: "Solid: packed regular, vibrating. Liquid: close together but mobile. Gas: far apart, fast random." },
    { id: 'p3-2', topic: 'p3', type: 'mcq', marks: 1,
      text: 'Which of these describes a change of state?',
      options: ['Burning paper', 'Rusting iron', 'Ice melting', 'A chemical reaction'],
      answer: 2,
      optionFeedback: [
        "Burning is a chemical change, not just a state change.",
        "Rusting is a chemical reaction.",
        "Correct. Ice melting is solid &rarr; liquid: a physical change of state, no chemical change.",
        "Generally a chemical reaction is not a state change."
      ],
      teach: "Changes of state: melting, freezing, boiling, condensing, sublimation. All PHYSICAL changes (no new substance)." },
    { id: 'p3-3', topic: 'p3', type: 'mcq', marks: 1,
      text: 'An object has a mass of 1 kg and a volume of 0.5 m&sup3;. What is its density?',
      options: ['0.5 kg/m&sup3;', '2 kg/m&sup3;', '1 kg/m&sup3;', '0.5 m&sup3;/kg'],
      answer: 1,
      optionFeedback: [
        "That's mass &times; volume, not divided.",
        "Correct. Density = mass &divide; volume = 1 &divide; 0.5 = 2 kg/m&sup3;.",
        "That's just the mass, not the density.",
        "Wrong units, this would be specific volume, not density."
      ],
      teach: "Density = mass &divide; volume. Units kg/m&sup3; or g/cm&sup3;. Watch units carefully." },
    { id: 'p3-4', topic: 'p3', type: 'mcq', marks: 1,
      text: 'What does temperature actually measure?',
      options: ['The number of particles in a substance', 'The average kinetic energy of the particles', 'The volume of the substance', 'The weight of the substance'],
      answer: 1,
      optionFeedback: [
        "Number of particles isn't temperature.",
        "Correct. Temperature is a measure of how fast particles are moving on average. Higher temperature = faster particles.",
        "Volume can change with temperature but it isn't temperature itself.",
        "Weight is unrelated to temperature."
      ],
      teach: "Temperature = average particle kinetic energy. Hotter = faster moving particles." },
    { id: 'p3-5', topic: 'p3', type: 'mcq', marks: 1,
      text: 'Which property tells you how much energy is needed to raise the temperature of 1 kg of a substance by 1&deg;C?',
      options: ['Density', 'Specific heat capacity', 'Latent heat', 'Mass'],
      answer: 1,
      optionFeedback: [
        "Density is mass per unit volume.",
        "Correct. Specific heat capacity c tells you exactly this. E = m c &Delta;&theta;.",
        "Latent heat is for state CHANGE, not temperature change.",
        "Mass alone doesn't tell you about energy needed."
      ],
      teach: "Specific heat capacity = energy per kg per &deg;C. E = m c &Delta;&theta;. Water's is 4200 J/kg&deg;C (high)." },
    { id: 'p3-6', topic: 'p3', type: 'mcq', marks: 1,
      text: 'Water has a much higher specific heat capacity than air. Why does the sea feel cooler than the beach on a hot summer day?',
      options: ['Water reflects light, air absorbs it', 'It takes a lot more energy to heat water than air, so the sea warms up much more slowly', 'Air is denser than water', 'Sand is a liquid'],
      answer: 1,
      optionFeedback: [
        "Some reflection happens, but specific heat capacity is the main reason here.",
        "Correct. Water needs much more energy per kg per &deg;C, so for a given amount of solar heating, it warms up far less than the air or sand does.",
        "Air is much LESS dense than water.",
        "Sand is a solid."
      ],
      teach: "High specific heat capacity (water) = takes a lot of energy to change temperature. Why the sea is slow to warm and slow to cool, and why coastal climates are mild." },
    { id: 'p3-7', topic: 'p3', type: 'mcq', marks: 1,
      text: 'Ice melting at 0&deg;C absorbs energy WITHOUT changing temperature. What is happening to this energy?',
      options: ['It heats the surroundings up', 'It is breaking the forces between molecules so the solid becomes liquid', 'It is destroyed', 'It speeds up the water molecules'],
      answer: 1,
      optionFeedback: [
        "Some heat is lost to surroundings, but the question is about the substance itself.",
        "Correct. The energy goes into breaking the rigid bonds in the ice lattice, turning it into liquid water. Temperature stays at 0&deg;C until all the ice has melted.",
        "Energy isn't destroyed.",
        "Average speed doesn't change until the ice has fully melted; temperature stays the same."
      ],
      teach: "During a state change, energy goes into BREAKING particle bonds, not speeding particles up. That's why temperature stays constant. This is specific latent heat." },
    { id: 'p3-8', topic: 'p3', type: 'short', marks: 2,
      text: 'Use the particle model to explain why a gas exerts pressure on its container.',
      markScheme: 'Gas particles move in all directions and collide with the walls of the container (1 mark). Each collision exerts a tiny force on the wall; the total force per unit area is the pressure (1 mark).',
      teach: "Pressure = lots of small collisions. Faster particles (hotter gas) collide harder and more often = higher pressure." },
    { id: 'p3-9', topic: 'p3', type: 'short', marks: 3,
      text: 'A heater transfers 84 000 J of energy to 2 kg of water. The specific heat capacity of water is 4200 J/kg&deg;C. Calculate the temperature rise.',
      markScheme: 'E = m c &Delta;&theta; (1 mark). Rearrange: &Delta;&theta; = E &divide; (m c) (1 mark). &Delta;&theta; = 84 000 &divide; (2 &times; 4200) = 84 000 &divide; 8400 = 10&deg;C (1 mark).',
      teach: "E = m c &Delta;&theta;. Rearrange to get temperature: &Delta;&theta; = E / (m c). Always 3 steps: equation, rearrange, calculate." },
    { id: 'p3-10', topic: 'p3', type: 'short', marks: 2,
      text: 'A block of metal has a mass of 0.30 kg and a volume of 0.000040 m&sup3;. Calculate its density.',
      markScheme: '&rho; = m &divide; V (1 mark). &rho; = 0.30 &divide; 0.000040 = 7500 kg/m&sup3; (1 mark).',
      teach: "Density = mass / volume. Watch the decimal places: 0.000040 m&sup3; is a small volume. Answer in kg/m&sup3;." },
    { id: 'p3-11', topic: 'p3', type: 'short', marks: 2,
      text: 'Explain why gas pressure inside a sealed container increases when it is heated.',
      markScheme: 'When heated, the gas particles gain kinetic energy and move faster (1 mark). Faster particles collide with the walls more often and with more force, so pressure rises (1 mark).',
      teach: "More heat &rarr; faster particles &rarr; harder + more frequent collisions &rarr; more pressure. Same idea behind a tyre warming up on a long drive." },
    { id: 'p3-12', topic: 'p3', type: 'mcq', marks: 1,
      text: 'What happens to the density of most substances when they change from solid to liquid?',
      options: ['Increases dramatically', 'Decreases slightly', 'Stays exactly the same', 'Becomes zero'],
      answer: 1,
      optionFeedback: [
        "Density doesn't increase on melting for most substances.",
        "Correct. Particles spread out a little when a solid melts, so volume increases for the same mass, giving slightly lower density.",
        "It changes a bit, particles aren't quite as tightly packed in a liquid.",
        "Density can't be zero for normal matter."
      ],
      teach: "Solids slightly denser than liquids, much denser than gases. Water is an exception: ice is LESS dense than water (so it floats)." },
    { id: 'p3-13', topic: 'p3', type: 'mcq', marks: 1,
      text: 'During the boiling of water at 100&deg;C, the temperature of the water remains constant even though energy is being supplied. Why?',
      options: ['The energy is lost to the surroundings', 'The energy is used to break the bonds between particles to form a gas', 'The thermometer is broken', 'The water has stopped boiling'],
      answer: 1,
      optionFeedback: [
        "Some energy might be lost, but the main reason is that energy is going into the state change.",
        "Correct. Energy is used to overcome the forces holding water molecules in the liquid state. Temperature doesn't rise until all the water has boiled.",
        "Highly unlikely.",
        "Boiling and temperature stays constant are not contradictory."
      ],
      teach: "Phase change: temperature stays constant, energy goes into breaking bonds. This is specific latent heat of vaporisation." },

    { id: 'p4-1', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which two particles are found in the nucleus of an atom?',
      options: ['Electrons and protons', 'Protons and neutrons', 'Neutrons and electrons', 'Only protons'],
      answer: 1,
      optionFeedback: [
        "Electrons are not in the nucleus; they orbit around it.",
        "Correct. Protons (+1 charge) and neutrons (0 charge) make up the nucleus.",
        "Electrons orbit the nucleus, they don't sit in it.",
        "Neutrons are also in the nucleus."
      ],
      teach: "Nucleus = protons + neutrons. Electrons orbit in shells around the nucleus." },
    { id: 'p4-2', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which of these is an isotope of carbon-12?',
      options: ['Nitrogen-12', 'Carbon-13', 'Helium-4', 'Lithium-6'],
      answer: 1,
      optionFeedback: [
        "Nitrogen has 7 protons; carbon has 6. Different element, not an isotope.",
        "Correct. Carbon-13 has 6 protons (like all carbon) but 7 neutrons instead of 6. Same element, different mass.",
        "Helium is a completely different element.",
        "Lithium is a different element."
      ],
      teach: "Isotopes = same element (same protons) but different neutrons. Carbon-12, -13, -14 are all carbons with different neutron counts." },
    { id: 'p4-3', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which radiation is stopped by a sheet of paper?',
      options: ['Alpha', 'Beta', 'Gamma', 'Microwave'],
      answer: 0,
      optionFeedback: [
        "Correct. Alpha particles are heavy and slow; they barely penetrate a few cm of air. Paper stops them.",
        "Beta passes through paper. You need a few mm of aluminium to stop it.",
        "Gamma passes easily through paper. Needs thick lead or concrete.",
        "Microwaves aren't ionising radiation in this sense."
      ],
      teach: "Stopping power: paper for alpha, aluminium for beta, lead/concrete for gamma. Memory aid: APE (Alpha, Paper, Easy)." },
    { id: 'p4-4', topic: 'p4', type: 'mcq', marks: 1,
      text: 'A nucleus undergoes alpha decay. What changes?',
      options: ['Mass number drops by 2, atomic number drops by 4', 'Mass number drops by 4, atomic number drops by 2', 'Mass number stays the same, atomic number drops by 1', 'Mass number drops by 4, atomic number stays the same'],
      answer: 1,
      optionFeedback: [
        "You've swapped the numbers, mass drops by 4 (helium nucleus is 4 nucleons), atomic by 2.",
        "Correct. An alpha particle is a helium nucleus (2 protons + 2 neutrons). So 4 mass units and 2 protons leave.",
        "That's beta decay, not alpha.",
        "Atomic number must drop by 2 in alpha decay because protons are leaving."
      ],
      teach: "Alpha: mass -4, atomic -2 (helium nucleus leaves). Beta: mass same, atomic +1 (neutron becomes proton)." },
    { id: 'p4-5', topic: 'p4', type: 'mcq', marks: 1,
      text: 'A sample has a half-life of 10 days. After 30 days, what fraction of the original remains?',
      options: ['1/2', '1/4', '1/8', '1/16'],
      answer: 2,
      optionFeedback: [
        "1/2 after one half-life. We've had three half-lives.",
        "1/4 after two half-lives. We've had three.",
        "Correct. 30 days &divide; 10 days per half-life = 3 half-lives. After 3 half-lives: 1/2 &rarr; 1/4 &rarr; 1/8.",
        "That would be after 4 half-lives, but we've only had 3."
      ],
      teach: "After 1 half-life: 1/2. After 2: 1/4. After 3: 1/8. After 4: 1/16. Each one halves what's left." },
    { id: 'p4-6', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Why is alpha radiation more dangerous when the source is INSIDE the body?',
      options: ['Alpha particles are unable to escape and cause heavy ionisation locally', 'Alpha radiation only exists inside the body', 'Alpha is the least ionising', 'Alpha causes no damage'],
      answer: 0,
      optionFeedback: [
        "Correct. Alpha is the MOST ionising. Outside the body, paper or skin stops it. Inside, it can't escape, so it does maximum damage to the cells around it.",
        "Alpha can exist anywhere.",
        "Alpha is the MOST ionising, not least.",
        "Alpha causes a lot of cell damage when it can reach cells."
      ],
      teach: "Alpha: most ionising, least penetrating. Outside &rarr; harmless (stopped by skin). Inside &rarr; very dangerous (can't escape)." },
    { id: 'p4-7', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which historical experiment provided evidence that the atom has a small dense positive nucleus?',
      options: ['Dalton\'s ratios of elements', 'Thomson\'s discovery of electrons', 'Rutherford\'s gold foil experiment', 'Bohr\'s electron orbit calculations'],
      answer: 2,
      optionFeedback: [
        "Dalton thought atoms were indivisible spheres, no nucleus model.",
        "Thomson's experiment showed electrons exist but kept the plum pudding model with no central nucleus.",
        "Correct. Most alpha particles passed straight through the gold foil, but a few bounced back. This led Rutherford to propose a small, dense, positively charged nucleus with mostly empty space around it.",
        "Bohr later refined the orbits but didn't find the nucleus."
      ],
      teach: "Rutherford gold foil &rarr; nucleus discovered. Most alpha pass through (empty space), some deflected (positive charge), few bounce straight back (dense)." },
    { id: 'p4-8', topic: 'p4', type: 'short', marks: 2,
      text: 'Explain the difference between contamination and irradiation in terms of radiation.',
      markScheme: 'Irradiation is exposure to radiation FROM a source outside; once you move away or shield, the dose stops (1 mark). Contamination is having radioactive material ON or IN the body; it keeps emitting radiation until removed (1 mark).',
      teach: "Irradiation = exposure from a source. Contamination = source is ON/IN you. Decontamination = remove the material; irradiation just needs distance/shielding." },
    { id: 'p4-9', topic: 'p4', type: 'short', marks: 3,
      text: 'Carbon-14 has a half-life of about 5730 years. A fossil bone has 1/8 of the carbon-14 that a fresh bone has. Estimate the age of the bone, and explain your reasoning.',
      markScheme: '1/8 = (1/2)&sup3;, so three half-lives have passed (1 mark). 3 &times; 5730 = 17 190 years (allow 17 000 or similar) (1 mark). Reasoning: each half-life halves the amount of carbon-14 remaining; 1 &rarr; 1/2 &rarr; 1/4 &rarr; 1/8 takes 3 half-lives (1 mark).',
      teach: "Count the halvings: 1 &rarr; 1/2 &rarr; 1/4 &rarr; 1/8. That's 3 half-lives. Multiply by 5730." },
    { id: 'p4-10', topic: 'p4', type: 'short', marks: 2,
      text: 'Give two ways a worker handling radioactive sources can reduce their exposure.',
      markScheme: 'Any two from: keep distance from the source / spend the minimum time near the source / use shielding (e.g. lead, concrete) / wear protective clothing / use remote handling (tongs).',
      teach: "Three protections: distance, time, shielding. Any two for two marks. The classic ALARA principle." },
    { id: 'p4-11', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which type of radiation is electromagnetic and travels at the speed of light?',
      options: ['Alpha', 'Beta', 'Gamma', 'Neutron'],
      answer: 2,
      optionFeedback: [
        "Alpha is a helium nucleus, slower than light.",
        "Beta is a high-speed electron, fast but slower than light.",
        "Correct. Gamma rays are high-energy electromagnetic waves. They travel at the speed of light in a vacuum, like all EM waves.",
        "Neutron radiation involves particles, not EM waves."
      ],
      teach: "Gamma = EM wave (like very high-energy light). Alpha and beta are PARTICLES (helium nucleus and electron respectively)." },
    { id: 'p4-12', topic: 'p4', type: 'short', marks: 2,
      text: 'Why is gamma radiation used to sterilise medical equipment?',
      markScheme: 'Gamma is highly penetrating, so it can pass through packaging to reach the equipment inside (1 mark). It is highly ionising, so it kills any bacteria or other microorganisms on the equipment (1 mark).',
      teach: "Gamma sterilising: penetrates packaging, kills microbes. Item is sealed before sterilisation, stays sterile until opened." },
    { id: 'p4-13', topic: 'p4', type: 'mcq', marks: 1,
      text: 'Which statement about radioactive decay is correct?',
      options: ['Every nucleus decays at the same time', 'Decay can be triggered by light', 'Decay is random and the timing of any individual decay cannot be predicted', 'Decay only happens above 100&deg;C'],
      answer: 2,
      optionFeedback: [
        "Decay is statistical, not synchronised.",
        "Light has no effect on radioactive decay.",
        "Correct. Decay is fundamentally random. You can predict statistical behaviour (half-life) but not when a particular atom will decay.",
        "Decay is independent of temperature."
      ],
      teach: "Decay is RANDOM. Half-life is a statistical average. Can't be sped up or slowed down by temperature, pressure or chemistry." },

    { id: 'p5-1', topic: 'p5', type: 'mcq', marks: 1,
      text: 'Which of these is a vector quantity?',
      options: ['Mass', 'Temperature', 'Velocity', 'Time'],
      answer: 2,
      optionFeedback: [
        "Mass is a scalar, it has size but no direction.",
        "Temperature is a scalar.",
        "Correct. Velocity is speed in a specified direction, so it has both size and direction. That makes it a vector.",
        "Time is a scalar."
      ],
      teach: "Vectors: force, velocity, displacement, acceleration, momentum. Scalars: mass, speed, distance, time, energy." },
    { id: 'p5-2', topic: 'p5', type: 'mcq', marks: 1,
      text: 'An object has a mass of 5 kg on Earth. What is its weight? Use g = 10 N/kg.',
      options: ['5 N', '15 N', '50 N', '0.5 N'],
      answer: 2,
      optionFeedback: [
        "That's just the mass in kg, weight is in newtons.",
        "Where did 15 come from?",
        "Correct. W = m &times; g = 5 &times; 10 = 50 N.",
        "Too small. Check the equation."
      ],
      teach: "Weight = mass &times; gravity. 5 kg &times; 10 N/kg = 50 N. Use 9.8 for more precision if asked." },
    { id: 'p5-3', topic: 'p5', type: 'mcq', marks: 1,
      text: 'Two forces act on an object: 20 N to the right and 15 N to the left. What is the resultant force?',
      options: ['35 N to the right', '5 N to the right', '5 N to the left', '0 N'],
      answer: 1,
      optionFeedback: [
        "Forces in OPPOSITE directions subtract, they don't add.",
        "Correct. 20 - 15 = 5 N. Since the larger force is to the right, the resultant is 5 N to the right.",
        "Right is the direction of the bigger force, so the resultant goes right.",
        "The two forces aren't equal, so the resultant isn't zero."
      ],
      teach: "Resultant force: same direction &rarr; add. Opposite directions &rarr; subtract (resultant points the way the bigger one points)." },
    { id: 'p5-4', topic: 'p5', type: 'mcq', marks: 1,
      text: 'A force of 8 N pushes a box 3 m across the floor. How much work is done?',
      options: ['11 J', '24 J', '2.67 J', '0 J'],
      answer: 1,
      optionFeedback: [
        "That's force + distance, not multiplied.",
        "Correct. W = F &times; d = 8 &times; 3 = 24 J.",
        "That's force divided by distance.",
        "Force and distance are both non-zero, so work is done."
      ],
      teach: "Work done = force &times; distance moved IN THE DIRECTION of the force. 8 N &times; 3 m = 24 J." },
    { id: 'p5-5', topic: 'p5', type: 'mcq', marks: 1,
      text: 'A spring has a spring constant of 200 N/m. If you stretch it by 0.05 m, what force is needed?',
      options: ['0.05 N', '10 N', '40 N', '4000 N'],
      answer: 1,
      optionFeedback: [
        "Way too small. Check Hooke's law.",
        "Correct. F = k &times; e = 200 &times; 0.05 = 10 N.",
        "Where did 40 come from? Recheck.",
        "Far too high."
      ],
      teach: "Hooke's law: F = k e. Spring constant in N/m, extension in m, force in N." },
    { id: 'p5-6', topic: 'p5', type: 'mcq', marks: 1,
      text: 'A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?',
      options: ['100 m/s&sup2;', '4 m/s&sup2;', '15 m/s&sup2;', '25 m/s&sup2;'],
      answer: 1,
      optionFeedback: [
        "That's velocity &times; time, not divided.",
        "Correct. a = &Delta;v &divide; t = 20 &divide; 5 = 4 m/s&sup2;.",
        "Where did 15 come from?",
        "Too high."
      ],
      teach: "Acceleration = change in velocity / time. 20 m/s in 5 s means 4 m/s gained every second." },
    { id: 'p5-7', topic: 'p5', type: 'mcq', marks: 1,
      text: 'On a velocity-time graph, what does a horizontal line mean?',
      options: ['Constant acceleration', 'Constant velocity', 'Stationary object', 'The object is decelerating'],
      answer: 1,
      optionFeedback: [
        "Horizontal means no change, no acceleration.",
        "Correct. A horizontal line on a velocity-time graph means velocity is constant (zero acceleration). It can be moving steadily.",
        "Stationary is a horizontal line at v = 0 specifically. A horizontal line above zero is moving at constant speed.",
        "Deceleration would be a line sloping downwards."
      ],
      teach: "Velocity-time graph: horizontal = constant velocity. Gradient = acceleration. Area under line = distance travelled." },
    { id: 'p5-8', topic: 'p5', type: 'short', marks: 2,
      text: 'State Newton\'s first law of motion.',
      markScheme: 'An object remains at rest, or moves in a straight line at constant velocity (1 mark), unless an unbalanced (resultant) force acts on it (1 mark).',
      teach: "Newton's 1st: things keep doing what they're doing unless forced to change. Stillness or steady motion is the default." },
    { id: 'p5-9', topic: 'p5', type: 'short', marks: 3,
      text: 'A 1200 kg car accelerates from rest to 12 m/s in 6 s. Calculate the acceleration and the resultant force needed.',
      markScheme: 'Acceleration a = &Delta;v &divide; t = 12 &divide; 6 = 2 m/s&sup2; (1 mark). Force F = m &times; a = 1200 &times; 2 = 2400 N (1 mark for setup, 1 mark for answer). Allow follow-through if a is wrong but used consistently.',
      teach: "Two steps: a = &Delta;v / t, then F = m a. Always show working. Units throughout." },
    { id: 'p5-10', topic: 'p5', type: 'short', marks: 2,
      text: 'Explain what is meant by "stopping distance" and name its two components.',
      markScheme: 'Stopping distance is the total distance a car covers from the moment a hazard appears until the car stops (1 mark). It is the sum of thinking distance (during the driver\'s reaction time) and braking distance (during which the brakes slow the car down) (1 mark).',
      teach: "Stopping = thinking + braking. Thinking = reaction-time travel. Braking = while brakes are on." },
    { id: 'p5-11', topic: 'p5', type: 'short', marks: 3,
      text: 'A spring has a spring constant of 25 N/m. A force of 5 N is applied. Calculate (a) the extension of the spring and (b) the energy stored.',
      markScheme: '(a) F = k e &rarr; e = F &divide; k = 5 &divide; 25 = 0.2 m (1 mark). (b) E = &frac12; k e&sup2; = &frac12; &times; 25 &times; 0.2&sup2; (1 mark) = &frac12; &times; 25 &times; 0.04 = 0.5 J (1 mark).',
      teach: "Two-part calc: extension from Hooke's law, then energy from &frac12; k e&sup2;. Square the extension first." },
    { id: 'p5-12', topic: 'p5', type: 'mcq', marks: 1,
      text: 'Which of these increases a driver\'s thinking distance?',
      options: ['Worn tyres', 'Wet road', 'Tiredness', 'Poor brakes'],
      answer: 2,
      optionFeedback: [
        "Worn tyres affect BRAKING distance.",
        "Wet road affects braking, not thinking.",
        "Correct. Tiredness slows reaction time, so thinking distance increases.",
        "Brakes affect braking distance, not thinking."
      ],
      teach: "Thinking = reaction time. Affected by tiredness, alcohol, drugs, distractions, speed. Braking = grip + brakes + speed." },
    { id: 'p5-13', topic: 'p5', type: 'mcq', marks: 1,
      text: 'A car is travelling at a constant velocity along a straight motorway. What is the resultant force on the car?',
      options: ['A large forward force', 'A small backward force from friction', 'Zero', 'A force equal to the engine force'],
      answer: 2,
      optionFeedback: [
        "If the resultant were forward, the car would be accelerating, not at constant velocity.",
        "Friction and air resistance are real, but balanced by the driving force, so the net is zero.",
        "Correct. Constant velocity means balanced forces, resultant is zero. The engine provides a forward force, friction and air resistance push backwards, and they cancel out.",
        "It's actually the SUM of all forces equal to zero, not just engine vs nothing."
      ],
      teach: "Constant velocity &rarr; resultant force = 0. Acceleration only happens when forces don't balance (Newton's 1st law)." },

    { id: 'p6-1', topic: 'p6', type: 'mcq', marks: 1,
      text: 'A wave has a frequency of 50 Hz and a wavelength of 6 m. What is its speed?',
      options: ['56 m/s', '300 m/s', '44 m/s', '8.3 m/s'],
      answer: 1,
      optionFeedback: [
        "That's f + &lambda;, not multiplied.",
        "Correct. v = f &times; &lambda; = 50 &times; 6 = 300 m/s.",
        "That's the subtraction.",
        "That's the division."
      ],
      teach: "Wave equation: v = f &lambda;. Frequency in Hz, wavelength in m, gives speed in m/s." },
    { id: 'p6-2', topic: 'p6', type: 'mcq', marks: 1,
      text: 'Sound is a:',
      options: ['Transverse electromagnetic wave', 'Longitudinal mechanical wave', 'Particle of light', 'Stationary wave only'],
      answer: 1,
      optionFeedback: [
        "Sound isn't electromagnetic. It needs particles.",
        "Correct. Sound is a longitudinal wave that needs a medium (solid, liquid or gas). Compressions and rarefactions travel through.",
        "Sound is a wave, not a particle of light.",
        "Sound can be moving or stationary, but it's not exclusively stationary."
      ],
      teach: "Sound = longitudinal, needs a medium. Light = transverse, doesn't need a medium." },
    { id: 'p6-3', topic: 'p6', type: 'mcq', marks: 1,
      text: 'Why can sound NOT travel through a vacuum?',
      options: ['It is too fast', 'There are no particles to vibrate', 'It is too loud', 'Vacuums are too dark'],
      answer: 1,
      optionFeedback: [
        "Sound's speed isn't the issue.",
        "Correct. Sound waves are vibrations of particles. No particles means no vibrations means no sound.",
        "Sound doesn't fail because it's loud.",
        "Light isn't sound."
      ],
      teach: "Vacuum = no particles = no sound. Light (EM) doesn't need particles, so it CAN travel in a vacuum." },
    { id: 'p6-4', topic: 'p6', type: 'mcq', marks: 1,
      text: 'Which of these correctly orders the electromagnetic spectrum from longest wavelength to shortest?',
      options: ['Radio, microwave, infrared, visible, ultraviolet, X-ray, gamma', 'Gamma, X-ray, ultraviolet, visible, infrared, microwave, radio', 'Visible, infrared, ultraviolet, X-ray, gamma, radio, microwave', 'Microwave, radio, infrared, gamma, X-ray, visible, ultraviolet'],
      answer: 0,
      optionFeedback: [
        "Correct. Longest to shortest: radio &rarr; microwave &rarr; infrared &rarr; visible &rarr; UV &rarr; X-ray &rarr; gamma.",
        "Shortest to longest, the reverse order.",
        "Scrambled.",
        "Scrambled."
      ],
      teach: "Mnemonic: 'Roman Men Invented Very Unusual X-ray Guns'. Radio &rarr; Micro &rarr; IR &rarr; Visible &rarr; UV &rarr; X-ray &rarr; Gamma." },
    { id: 'p6-5', topic: 'p6', type: 'mcq', marks: 1,
      text: 'Which type of electromagnetic wave is used in TV remote controls?',
      options: ['Radio waves', 'Microwaves', 'Infrared', 'Ultraviolet'],
      answer: 2,
      optionFeedback: [
        "Radio waves are for broadcasting, not point-to-point remotes.",
        "Microwaves are for cooking and satellite comms.",
        "Correct. TV remotes use infrared. Each button sends a specific pattern of IR pulses to a sensor on the TV.",
        "UV is in sun beds and sterilisers, not remotes."
      ],
      teach: "Infrared uses: remotes, thermal imaging, electric heaters, grills, fibre optics (short-range)." },
    { id: 'p6-6', topic: 'p6', type: 'mcq', marks: 1,
      text: 'What is the main danger of ultraviolet (UV) radiation?',
      options: ['It heats the air', 'It can damage cells and cause skin cancer', 'It causes deafness', 'It changes the colour of water'],
      answer: 1,
      optionFeedback: [
        "UV isn't mainly a heating effect.",
        "Correct. UV is ionising. It damages DNA in skin cells, which can lead to skin cancer. Sunscreen and limiting exposure reduce risk.",
        "UV doesn't affect hearing.",
        "Not the main concern."
      ],
      teach: "UV: ionising, damages DNA, causes sunburn and skin cancer. From UV onwards in the spectrum, EM is ionising." },
    { id: 'p6-7', topic: 'p6', type: 'mcq', marks: 1,
      text: 'In a transverse wave, the oscillations are:',
      options: ['Along the direction of energy transfer', 'At right angles to the direction of energy transfer', 'In a circle', 'At 45 degrees to the direction of energy transfer'],
      answer: 1,
      optionFeedback: [
        "That's longitudinal.",
        "Correct. Transverse means perpendicular (90&deg;) to the direction the wave is travelling. Water surface waves and light are transverse.",
        "Circular oscillations exist but they're not the definition of transverse.",
        "Specific angles like 45&deg; aren't the definition."
      ],
      teach: "Transverse = oscillations perpendicular to travel. Longitudinal = oscillations parallel to travel." },
    { id: 'p6-8', topic: 'p6', type: 'short', marks: 2,
      text: 'Describe the difference between transverse and longitudinal waves, giving an example of each.',
      markScheme: 'Transverse: oscillations are at right angles to the direction of energy transfer (1 mark, with example, e.g. water surface waves, light, any EM wave). Longitudinal: oscillations are along the direction of energy transfer (1 mark, with example, e.g. sound).',
      teach: "Define each, give an example. Transverse = perpendicular (water, light). Longitudinal = parallel (sound)." },
    { id: 'p6-9', topic: 'p6', type: 'short', marks: 3,
      text: 'A radio station broadcasts at 95.0 MHz (95 million hertz). The speed of EM waves is 3 &times; 10&sup8; m/s. Calculate the wavelength of the radio signal.',
      markScheme: 'v = f &lambda;, so &lambda; = v &divide; f (1 mark). Convert MHz to Hz: 95 MHz = 95 &times; 10&sup6; = 9.5 &times; 10&sup7; Hz (1 mark). &lambda; = 3 &times; 10&sup8; &divide; 9.5 &times; 10&sup7; &asymp; 3.16 m (1 mark).',
      teach: "Always check unit prefixes. Mega = 10&sup6;. Convert before using v = f &lambda;." },
    { id: 'p6-10', topic: 'p6', type: 'short', marks: 2,
      text: 'Give one use of microwaves and one use of gamma rays.',
      markScheme: 'Microwaves (any 1 mark): cooking food / satellite communication / Wi-Fi / mobile phone signals. Gamma (any 1 mark): cancer treatment (radiotherapy) / sterilising medical equipment / sterilising food / medical imaging tracers.',
      teach: "Microwaves: heating water in food, comms. Gamma: medicine (kill cancer, sterilise)." },
    { id: 'p6-11', topic: 'p6', type: 'short', marks: 2,
      text: 'Why is X-ray imaging useful in hospitals, but doctors limit how often a patient is X-rayed?',
      markScheme: 'X-rays pass through soft tissue but are absorbed by bone, so they show bone structure clearly (1 mark). X-rays are ionising and can damage cells / cause cancer with repeated exposure, so doctors keep doses as low as reasonable (1 mark).',
      teach: "X-rays: penetrate soft tissue, blocked by bone. Useful but ionising, so minimise dose." },
    { id: 'p6-12', topic: 'p6', type: 'mcq', marks: 1,
      text: 'A guitar string is plucked harder. Compared with a gentle pluck, the sound wave it makes has:',
      options: ['Higher frequency', 'Lower frequency', 'Larger amplitude', 'Shorter wavelength'],
      answer: 2,
      optionFeedback: [
        "Frequency depends on the string, not how hard you pluck.",
        "Frequency is set by the string's properties.",
        "Correct. Harder pluck = bigger amplitude = louder sound. Frequency (and therefore pitch) stays the same.",
        "Wavelength is related to frequency, not loudness."
      ],
      teach: "Amplitude controls LOUDNESS. Frequency controls PITCH. Pluck harder &rarr; louder, same pitch." },
    { id: 'p6-13', topic: 'p6', type: 'mcq', marks: 1,
      text: 'Light slows down when it enters glass from air. What is this called?',
      options: ['Reflection', 'Refraction', 'Absorption', 'Diffraction'],
      answer: 1,
      optionFeedback: [
        "Reflection is bouncing back, not slowing down.",
        "Correct. Refraction is when a wave changes speed (and usually direction) on entering a different medium. Light entering glass slows and bends towards the normal.",
        "Absorption is being soaked up. Not the same as slowing down.",
        "Diffraction is spreading out around an obstacle."
      ],
      teach: "Refraction = change of speed (and usually direction) at the boundary between two materials. Light slows from air to glass, speeds up going back to air." },

    { id: 'p7-1', topic: 'p7', type: 'mcq', marks: 1,
      text: 'What happens when two like magnetic poles are brought close together?',
      options: ['They attract', 'They repel', 'Nothing', 'They join together'],
      answer: 1,
      optionFeedback: [
        "Opposite poles attract; like poles do the opposite.",
        "Correct. Like poles (N-N or S-S) repel each other. Opposite poles (N-S) attract.",
        "There is a definite force between them.",
        "Like poles don't stick together."
      ],
      teach: "Like poles repel. Opposite poles attract. Same as electric charges." },
    { id: 'p7-2', topic: 'p7', type: 'mcq', marks: 1,
      text: 'Which material is NOT a magnetic material?',
      options: ['Iron', 'Copper', 'Steel', 'Nickel'],
      answer: 1,
      optionFeedback: [
        "Iron is magnetic.",
        "Correct. Copper is not magnetic. It conducts electricity very well but isn't attracted to magnets.",
        "Steel is magnetic (it's mostly iron).",
        "Nickel is magnetic."
      ],
      teach: "Magnetic materials: iron, steel, cobalt, nickel. Copper, aluminium, plastic and wood are not." },
    { id: 'p7-3', topic: 'p7', type: 'mcq', marks: 1,
      text: 'In which direction do magnetic field lines point outside a bar magnet?',
      options: ['South to north', 'North to south', 'Both directions', 'They don\'t have a direction'],
      answer: 1,
      optionFeedback: [
        "Inside the magnet, lines run S to N, but outside is the opposite.",
        "Correct. Field lines come out of the north pole and curve around to enter the south pole, outside the magnet.",
        "Field lines have a definite direction.",
        "Field lines do have a direction, by convention."
      ],
      teach: "Outside: N &rarr; S. Inside: S &rarr; N. Closer lines = stronger field." },
    { id: 'p7-4', topic: 'p7', type: 'mcq', marks: 1,
      text: 'A long, straight current-carrying wire is surrounded by a magnetic field. What shape is this field?',
      options: ['Circles around the wire', 'A straight line beside the wire', 'A bar-magnet shape', 'No field is produced'],
      answer: 0,
      optionFeedback: [
        "Correct. Use the right-hand rule: thumb along the current, fingers curl in the direction of the field. The field lines form concentric circles around the wire.",
        "The field isn't a straight line.",
        "Bar-magnet shape comes from a coil (solenoid), not a single straight wire.",
        "A current ALWAYS produces a magnetic field around it."
      ],
      teach: "Straight wire: field = circles around the wire. Solenoid: field = bar-magnet shape, strong and uniform inside." },
    { id: 'p7-5', topic: 'p7', type: 'mcq', marks: 1,
      text: 'How do you make an electromagnet stronger?',
      options: ['Use more turns of wire and a higher current', 'Make the wire longer and thinner', 'Add a wooden core', 'Use a smaller battery'],
      answer: 0,
      optionFeedback: [
        "Correct. More turns and more current both give a stronger field. So does adding an iron core.",
        "Wire length and thickness affect resistance, not directly field strength in a useful way.",
        "Wood isn't magnetic and won't help.",
        "Smaller battery means less current and a weaker field."
      ],
      teach: "Electromagnet strength: more turns, more current, iron core. Three ways to boost it." },
    { id: 'p7-6', topic: 'p7', type: 'mcq', marks: 1,
      text: 'A current-carrying wire is placed between the poles of a magnet, at right angles to the field. What happens?',
      options: ['Nothing', 'The wire experiences a force', 'The magnet melts', 'The wire becomes neutral'],
      answer: 1,
      optionFeedback: [
        "There IS an effect, the motor effect.",
        "Correct. This is the motor effect. The wire feels a force perpendicular to both the current and the field. Direction given by Fleming's left-hand rule.",
        "Magnets don't melt from current near them.",
        "Wires don't become neutral; they always carry charge when current flows."
      ],
      teach: "Motor effect: current + field = force on wire. Direction by Fleming's left-hand rule. F = B I L for the size." },
    { id: 'p7-7', topic: 'p7', type: 'mcq', marks: 1,
      text: 'In Fleming\'s left-hand rule, what does the first finger represent?',
      options: ['Force', 'Field', 'Current', 'Friction'],
      answer: 1,
      optionFeedback: [
        "Thumb = thrust (force).",
        "Correct. First finger = Field (from N to S). Second finger = Current. Thumb = Thrust (force).",
        "Second finger = Current.",
        "Friction isn't part of the rule."
      ],
      teach: "Fleming's left-hand: First = Field. seCond = Current. Thumb = Force. (LEFT for motors and the motor effect)." },
    { id: 'p7-8', topic: 'p7', type: 'short', marks: 2,
      text: 'Give two ways to increase the force on a current-carrying wire in a magnetic field.',
      markScheme: 'Any two from: increase the current / increase the magnetic flux density (stronger magnet) / increase the length of wire in the field / make sure the wire is perpendicular to the field.',
      teach: "F = B I L. Increase any of B, I or L to increase the force. Or make sure the wire is at 90&deg; to the field." },
    { id: 'p7-9', topic: 'p7', type: 'short', marks: 3,
      text: 'Explain how an electromagnetic crane can be used in a scrap yard.',
      markScheme: 'When current flows through the coil, an electromagnet is created (1 mark). This attracts magnetic materials like iron / steel scrap, which can be lifted (1 mark). When the current is switched off, the magnetism stops and the scrap is dropped where wanted (1 mark).',
      teach: "Electromagnet advantage = can be switched on/off. Cranes use this: on to pick up, off to drop." },
    { id: 'p7-10', topic: 'p7', type: 'short', marks: 2,
      text: 'Explain why current-carrying coils between magnets cause an electric motor to rotate.',
      markScheme: 'Each side of the coil carries current in a different direction, so each side experiences a force in opposite directions (1 mark). This creates a turning effect (a couple) that rotates the coil (1 mark).',
      teach: "Motor: current in opposite directions on each side &rarr; opposite forces &rarr; rotation. A commutator flips current direction each half turn to keep it spinning." },
    { id: 'p7-11', topic: 'p7', type: 'short', marks: 2,
      text: 'Explain the function of a split-ring commutator in a simple electric motor.',
      markScheme: 'It reverses the direction of the current in the coil every half rotation (1 mark). This keeps the turning force in the same rotational direction, so the motor spins continuously (1 mark).',
      teach: "Commutator: reverses current every half turn so the coil keeps turning the same way. Without it, the coil would oscillate, not spin." },
    { id: 'p7-12', topic: 'p7', type: 'mcq', marks: 1,
      text: 'Where is the magnetic field of a bar magnet STRONGEST?',
      options: ['At the centre', 'At the poles', 'Just outside the magnet at the middle', 'Far away from the magnet'],
      answer: 1,
      optionFeedback: [
        "The field is weaker at the centre than at the ends.",
        "Correct. The field lines are closest together at the poles, which means the field is strongest there.",
        "Field is weaker than at the poles.",
        "Field decreases with distance."
      ],
      teach: "Strongest at the poles, weakest at the centre. Closer field lines = stronger field." },
    { id: 'p7-13', topic: 'p7', type: 'mcq', marks: 1,
      text: 'The Earth\'s magnetic north pole, as we usually call it, is actually:',
      options: ['A true magnetic north pole', 'A magnetic south pole (because it attracts the north end of a compass)', 'Not magnetic at all', 'A floating bar magnet'],
      answer: 1,
      optionFeedback: [
        "If it were a true magnetic north, it would REPEL the compass north.",
        "Correct. The compass's north pole points to it, and opposite poles attract, so the Earth\'s geographic North is magnetically a SOUTH pole. Confusing but true.",
        "It is magnetic, that's why compasses work.",
        "It's the iron core, not a physical bar."
      ],
      teach: "Geographic North = magnetic South. Why? Because compass N points to it, and opposites attract. Easy to muddle, learn it." }
  ];

  return { topics, lessons, questions };
})();
