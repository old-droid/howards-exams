const COURSES = [
  {
    code: '18.01SC', title: 'Single Variable Calculus', dept: 'Mathematics',
    desc: 'Covers differential and integral calculus of functions of one variable. Topics include limits, derivatives, integrals, and the Fundamental Theorem of Calculus.',
    topics: ['Limits', 'Derivatives', 'Integration', 'Series'],
    textbook: 'Calculus by Gilbert Strang (MIT)',
    prereqs: 'High school algebra & trigonometry',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/',
    guidebook: 'Work through Strang alongside MIT videos (1.5x for review). Complete all problem sets—calculus is learned by doing. Use 3Blue1Brown for geometric intuition. Redo problems you got wrong without solutions.',
    resources: ['MIT OCW Page', '3Blue1Brown – Essence of Calculus', 'Khan Academy – Calculus', 'MIT Problem Sets + Solutions']
  },
  {
    code: '18.02SC', title: 'Multivariable Calculus', dept: 'Mathematics',
    desc: 'Extends calculus to functions of several variables. Covers partial derivatives, multiple integrals, vector calculus, Green\'s Theorem, Stokes\' Theorem.',
    topics: ['Partial Derivatives', 'Multiple Integrals', 'Vector Fields', 'Stokes\' Theorem'],
    textbook: 'Calculus by Gilbert Strang (MIT)',
    prereqs: '18.01 Single Variable Calculus',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/',
    guidebook: 'Draw everything—vector fields, level curves, surfaces. The four big theorems all express the same idea: boundary = interior. Practice triple integrals in different coordinate systems. Denis Auroux lectures are exceptional.',
    resources: ['MIT OCW Page', 'GeoGebra 3D', 'Paul\'s Online Math Notes', 'Khan Academy – Multivariable']
  },
  {
    code: '18.03', title: 'Differential Equations', dept: 'Mathematics',
    desc: 'Study of ordinary differential equations and their applications. Covers first-order ODEs, linear ODEs, Laplace transforms, and systems of ODEs.',
    topics: ['First-order ODEs', 'Linear ODEs', 'Laplace Transforms', 'Systems'],
    textbook: 'Differential Equations by G. Strang / Edwards & Penney',
    prereqs: '18.01, 18.02',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/18-03-differential-equations-spring-2010/',
    guidebook: 'Master classification first (order, linearity, homogeneity). Laplace transforms are a tool—practice until automatic. Phase portraits reveal behavior without solving. Connect to physics (spring-mass, circuits) to stay motivated.',
    resources: ['MIT OCW Page', '3Blue1Brown – Differential Equations', 'Paul\'s Online Notes – DEs', 'WolframAlpha']
  },
  {
    code: '18.06', title: 'Linear Algebra', dept: 'Mathematics',
    desc: 'Covers matrix theory, vector spaces, eigenvalues and eigenvectors, orthogonality, and applications to differential equations and least squares.',
    topics: ['Matrices', 'Vector Spaces', 'Eigenvalues', 'Singular Value Decomposition'],
    textbook: 'Introduction to Linear Algebra by Gilbert Strang',
    prereqs: '18.01 Single Variable Calculus',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/',
    guidebook: 'The Big Picture is Ax = b. Four Fundamental Subspaces are the key to everything. Eigenvalues reveal natural behavior of a matrix. SVD is the crown jewel—used everywhere in ML and data science. Strang\'s enthusiasm is contagious.',
    resources: ['MIT OCW Page', '3Blue1Brown – Essence of Linear Algebra', 'Gilbert Strang\'s Textbook', 'MIT Problem Sets']
  },
  {
    code: '6.042J', title: 'Mathematics for Computer Science', dept: 'CS / Math',
    desc: 'Covers discrete mathematics for computer science: proof techniques, combinatorics, probability, graph theory, and number theory.',
    topics: ['Proofs', 'Combinatorics', 'Probability', 'Graph Theory'],
    textbook: 'Mathematics for Computer Science by Lehman, Leighton, Meyer',
    prereqs: 'High school mathematics',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-fall-2010/',
    guidebook: 'Learn proof techniques systematically: induction, contradiction, direct proof. Combinatorics is about counting—master the twelvefold way. Graph theory appears in every CS interview. The MCS textbook is one of the best ever written.',
    resources: ['MIT OCW Page', 'Lehman/Leighton/Meyer Textbook PDF', 'Brilliant.org – Discrete Math', '3Blue1Brown – Probability']
  },
  {
    code: '6.0001', title: 'Intro to CS & Programming in Python', dept: 'CS',
    desc: 'An introduction to computer science and programming using Python. Covers algorithms, data structures, and computational thinking.',
    topics: ['Python', 'Algorithms', 'Data Structures', 'Testing'],
    textbook: 'Introduction to Computation and Programming Using Python by John Guttag',
    prereqs: 'None (introductory)',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/',
    guidebook: 'Code EVERYTHING—don\'t just read. The finger exercises are critical. Learn the Python debugger (pdb) early. Pair program and explain reasoning out loud. Build a small project (calculator, to-do app) after finishing.',
    resources: ['MIT OCW Page', 'Python.org Docs', 'Guttag Textbook', 'CS50P (Harvard)']
  },
  {
    code: '6.006', title: 'Introduction to Algorithms', dept: 'CS',
    desc: 'Covers fundamental algorithms: sorting, searching, graph algorithms, dynamic programming, and NP-completeness. Emphasizes asymptotic analysis.',
    topics: ['Sorting', 'Graph Algorithms', 'Dynamic Programming', 'NP-Completeness'],
    textbook: 'Introduction to Algorithms (CLRS)',
    prereqs: '6.0001, 6.042J (or equivalent)',
    hours: '15-20 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
    guidebook: 'Most important CS course for technical interviews. CLRS is dense—read lecture notes first. Implement every algorithm yourself. Dynamic programming has a pattern: subproblems, recurrence, base case, order. Practice on LeetCode after each topic.',
    resources: ['MIT OCW Page', 'CLRS Textbook', 'LeetCode', 'Visualgo.net', 'MIT Problem Sets']
  },
  {
    code: '6.004', title: 'Computation Structures', dept: 'CS / EE',
    desc: 'Covers the digital design and computer architecture from transistors to operating systems. Includes RISC-V and beta assembly.',
    topics: ['Digital Logic', 'RISC-V', 'Pipelining', 'Caches'],
    textbook: 'Computation Structures by Ward & Halstead',
    prereqs: '6.0001, basic electronics',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-004-computation-structures-spring-2017/',
    guidebook: 'Builds your mental model from transistor to OS. Use JSim to test circuits. Pipelining hazards are hardest—draw pipeline diagrams. Caches: understand the 3 C\'s misses. Lab assignments are core—don\'t skip them.',
    resources: ['MIT OCW Page', 'JSim Simulator', 'Nand2Tetris (companion)', 'Computer Organization & Design (Patterson)']
  },
  {
    code: '6.033', title: 'Computer System Engineering', dept: 'CS',
    desc: 'Covers design and implementation of complex computer systems. Topics include networking, operating systems, security, and distributed systems.',
    topics: ['Networking', 'OS', 'Security', 'Distributed Systems'],
    textbook: 'Computer Systems: A Programmer\'s Perspective (CS:APP)',
    prereqs: '6.004, 6.006',
    hours: '14-18 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-033-computer-system-engineering-spring-2018/',
    guidebook: 'Read paper discussions BEFORE class—they\'re the heart. CS:APP is the best systems textbook. Learn to reason about performance: Amdahl\'s Law. The end-to-end argument appears everywhere. Build a mental model of the full stack.',
    resources: ['MIT OCW Page', 'CS:APP Textbook', 'OSTEP (Operating Systems)', 'Beej\'s Guide to Networking']
  },
  {
    code: '6.034', title: 'Artificial Intelligence', dept: 'CS',
    desc: 'Covers fundamental AI concepts: search, knowledge representation, planning, learning, natural language, and vision.',
    topics: ['Search', 'Logic', 'Machine Learning', 'NLP'],
    textbook: 'Artificial Intelligence: A Modern Approach (AIMA)',
    prereqs: '6.006, 6.042J',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-034-artificial-intelligence-fall-2010/',
    guidebook: 'Winston\'s AI course is a classic—focus on big ideas. Search algorithms are the backbone of problem-solving. Supplement with Andrew Ng\'s ML course. Winston\'s rule: "If you can\'t explain it simply, you don\'t understand it well enough."',
    resources: ['MIT OCW Page', 'AIMA Textbook', 'Andrew Ng – Machine Learning', 'Fast.ai – Practical Deep Learning']
  },
  {
    code: '8.01SC', title: 'Physics I: Classical Mechanics', dept: 'Physics',
    desc: 'Covers Newtonian mechanics: kinematics, dynamics, momentum, energy, rotational motion, and gravitation.',
    topics: ['Kinematics', 'Dynamics', 'Energy', 'Rotational Motion'],
    textbook: 'Classical Mechanics by John R. Taylor / MIT 8.01 Notes',
    prereqs: '18.01 (co-requisite)',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/',
    guidebook: 'Draw free-body diagrams for EVERY problem. Energy methods simplify problems that look hard with forces. Use the projectile simulation in the Labs tab. Make a formula sheet organized by topic; rewrite from memory.',
    resources: ['MIT OCW Page', 'Walter Lewin Lectures (YouTube)', 'Khan Academy – Physics', 'Hyperphysics (Georgia State)']
  },
  {
    code: '8.02SC', title: 'Physics II: Electricity & Magnetism', dept: 'Physics',
    desc: 'Covers electromagnetism: electrostatics, circuits, magnetic fields, induction, Maxwell\'s equations, and electromagnetic waves.',
    topics: ['Electrostatics', 'Circuits', 'Magnetism', 'Maxwell\'s Equations'],
    textbook: 'Introduction to Electrodynamics by David J. Griffiths',
    prereqs: '8.01, 18.02',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/8-02sc-electricity-and-magnetism-fall-2016/',
    guidebook: 'Maxwell\'s Equations are the pinnacle of classical physics. Compare E and B for symmetry intuition. Gauss\'s Law is powerful—choose the right Gaussian surface. Griffiths is excellent; work every example.',
    resources: ['MIT OCW Page', 'Walter Lewin – E&M (MIT)', 'Griffiths Textbook', 'Hyperphysics – E&M']
  },
  {
    code: '8.04', title: 'Quantum Physics I', dept: 'Physics',
    desc: 'Covers the foundations of quantum mechanics: wave-particle duality, the Schrödinger equation, simple potentials, and the uncertainty principle.',
    topics: ['Wave Functions', 'Schrödinger Equation', 'Potentials', 'Spin'],
    textbook: 'Introduction to Quantum Mechanics by David J. Griffiths',
    prereqs: '8.02, 18.03',
    hours: '15-18 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2016/',
    guidebook: 'Quantum mechanics is counterintuitive—embrace the confusion. Work through infinite square well and harmonic oscillator in detail. Linear algebra (eigenvalues!) is deeply connected. Use PhET simulations to visualize wave functions.',
    resources: ['MIT OCW Page', 'Griffiths QM Textbook', '3Blue1Brown – QM Series', 'PhET Quantum Simulations']
  },
  {
    code: '7.012', title: 'Introductory Biology', dept: 'Biology',
    desc: 'Covers the fundamental principles of biology: molecular biology, genetics, biochemistry, cell biology, and development.',
    topics: ['Cell Biology', 'Genetics', 'Biochemistry', 'Development'],
    textbook: 'Molecular Biology of the Cell (Alberts) / Essential Cell Biology',
    prereqs: 'High school biology and chemistry',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/7-012-introduction-to-biology-fall-2004/',
    guidebook: 'Focus on the central dogma (DNA → RNA → Protein)—it\'s the framework for everything. Draw biochemical pathways by hand. Use Anki flashcards for terminology. MIT lecture notes are exceptionally well-organized.',
    resources: ['MIT OCW Page', 'Alberts – Molecular Biology of the Cell', 'Khan Academy – Biology', 'Anki Flashcards']
  },
  {
    code: '3.091', title: 'Introduction to Solid-State Chemistry', dept: 'Chemistry / Eng',
    desc: 'Covers the fundamentals of chemistry with emphasis on solid-state materials. Topics include bonding, crystallography, and electronic properties.',
    topics: ['Bonding', 'Crystallography', 'Phase Diagrams', 'Doping'],
    textbook: 'Introduction to Solid-State Chemistry by Sadoway (MIT Notes)',
    prereqs: 'High school chemistry',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/3-091-introduction-to-solid-state-chemistry-fall-2018/',
    guidebook: 'Sadoway\'s lectures are legendary. Phase diagrams tell you everything about material behavior. Learn to visualize unit cells in 3D. The "why this matters" approach connects chemistry to real-world applications.',
    resources: ['MIT OCW Page', 'Sadoway Course Notes', 'PhET Simulations', '3D Crystal Viewer']
  },
  {
    code: '14.01', title: 'Principles of Microeconomics', dept: 'Economics',
    desc: 'Covers supply and demand, consumer theory, production, market structures, and welfare economics. Emphasizes economic reasoning.',
    topics: ['Supply & Demand', 'Consumer Choice', 'Market Structures', 'Welfare'],
    textbook: 'Principles of Microeconomics by Mankiw / Perloff',
    prereqs: 'High school algebra',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/14-01-principles-of-microeconomics-fall-2018/',
    guidebook: 'Supply-and-demand is the single most useful tool. Marginal thinking: decisions at the margin—compare MB and MC. Draw graphs by hand. Read the news with economic eyes and apply concepts to current events.',
    resources: ['MIT OCW Page', 'Mankiw Textbook', 'Khan Academy – Microeconomics', 'Marginal Revolution University']
  },
  {
    code: '24.00', title: 'Problems of Philosophy', dept: 'Philosophy',
    desc: 'Explores foundational questions about the nature of mind, consciousness, and mental states. Covers functionalism, dualism, and identity theory.',
    topics: ['Dualism', 'Functionalism', 'Consciousness', 'Personal Identity'],
    textbook: 'Philosophy of Mind: A Guide and Anthology by John Heil',
    prereqs: 'None (introductory)',
    hours: '8-10 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=24.00',
    guidebook: 'Read each philosopher\'s argument actively: what\'s the claim? what\'s the evidence? The "hard problem of consciousness" is the central debate. Write summaries in your own words. Connect to modern AI—does ChatGPT have genuine understanding?',
    resources: ['MIT OCW Page', 'Stanford Encyclopedia of Philosophy', 'Heil Textbook', 'Philosophy Tube (YouTube)']
  },
  {
    code: '9.00SC', title: 'Introduction to Psychology', dept: 'Brain & Cog Sci',
    desc: 'Covers the scientific study of mind and behavior: perception, learning, memory, cognition, development, and social psychology.',
    topics: ['Perception', 'Learning & Memory', 'Cognition', 'Social Psychology'],
    textbook: 'Psychology by Gray & Bjorklund / Kosslyn & Rosenberg',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/9-00sc-introduction-to-psychology-fall-2011/',
    guidebook: 'Psychology is the science of behavior. Evaluate every finding for methodology. Memory techniques (spacing, testing effect) are evidence-based—use them. The replication crisis is an important lesson in scientific practice.',
    resources: ['MIT OCW Page', 'Noba Project (free textbook)', 'Crash Course Psychology', 'APS Observer']
  },
  {
    code: '21L.001', title: 'Foundations of Western Literature', dept: 'Literature',
    desc: 'Covers major works of Western literature from Homer to the modern era. Focuses on close reading, interpretation, and literary analysis.',
    topics: ['Epic Poetry', 'Drama', 'The Novel', 'Literary Criticism'],
    textbook: 'Various primary texts (Homer, Dante, Shakespeare, etc.)',
    prereqs: 'None',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/21l-001-foundations-of-western-literature-homer-to-dante-fall-2010/',
    guidebook: 'Read actively: annotate, underline, ask questions in the margins. Write a one-paragraph summary and one question before each class. Keep a reading journal. Discuss with peers—literature comes alive in conversation.',
    resources: ['MIT OCW Page', 'Project Gutenberg (free texts)', 'Yale Literature Lectures (Open Yale)']
  },
  {
    code: '6.002', title: 'Circuits and Electronics', dept: 'EE / CS',
    desc: 'Covers the fundamentals of circuits and electronics: circuit analysis, op-amps, semiconductors, digital logic, and amplifiers.',
    topics: ['Circuit Analysis', 'Op-Amps', 'Semiconductors', 'Digital Logic'],
    textbook: 'Foundations of Analog and Digital Electronic Circuits by Agarwal & Lang',
    prereqs: '18.02, 8.02',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/',
    guidebook: 'Build the circuits from the labs on a breadboard. Understand the ideal op-amp model. KCL and KVL are the only tools you need—apply them systematically. Use LTSpice to verify hand calculations.',
    resources: ['MIT OCW Page', 'Agarwal & Lang Textbook', 'LTSpice Simulator', 'All About Circuits']
  },
  {
    code: '1.050', title: 'Solid Mechanics', dept: 'Civil & Environmental Eng',
    desc: 'Covers the fundamentals of solid mechanics including stress, strain, elasticity, beam bending, and column buckling.',
    topics: ['Stress & Strain', 'Elasticity', 'Beam Bending', 'Buckling'],
    textbook: 'Mechanics of Materials by Beer & Johnston / Crandall',
    prereqs: '18.02, 8.01',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=1.050',
    guidebook: 'Stress and strain are tensors—learn to transform them. Draw shear and moment diagrams for every beam problem. Understand the assumptions behind each formula. Real-world examples make structures intuitive.',
    resources: ['MIT OCW Page', 'Mechanics of Materials (Beer & Johnston)', 'MIT Course Notes']
  },
  {
    code: '1.101', title: 'Introduction to Civil & Environmental Engineering Design I', dept: 'Civil & Environmental Eng',
    desc: 'Project-based introduction to design in civil and environmental engineering. Covers teamwork, design process, and communication.',
    topics: ['Design Process', 'Teamwork', 'Sustainability', 'Technical Communication'],
    textbook: 'None (project-based)',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=1.101',
    guidebook: 'Focus on the design process, not just the final product. Document everything—your design notebook is your best tool. Learn to give and receive constructive feedback. Real projects teach more than lectures.',
    resources: ['MIT OCW Page', 'MIT Design Handbook']
  },
  {
    code: '2.001', title: 'Mechanics & Materials I', dept: 'Mechanical Engineering',
    desc: 'Covers the mechanics of deformable bodies: stress, strain, torsion, bending, and pressure vessels.',
    topics: ['Stress Analysis', 'Torsion', 'Bending', 'Pressure Vessels'],
    textbook: 'Mechanics of Materials by Gere & Timoshenko',
    prereqs: '18.02, 8.01',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=2.001',
    guidebook: 'Free-body diagrams are non-negotiable. Understand the stress-strain relationship thoroughly. Mohr\'s circle is your friend for stress transformation. Practice with real engineering problems.',
    resources: ['MIT OCW Page', 'Gere & Timoshenko Textbook', 'MIT Course Notes']
  },
  {
    code: '2.002', title: 'Mechanics and Materials II', dept: 'Mechanical Engineering',
    desc: 'Advanced mechanics of materials: failure criteria, fatigue, fracture mechanics, and finite element analysis introduction.',
    topics: ['Failure Criteria', 'Fatigue', 'Fracture Mechanics', 'FEM'],
    textbook: 'Advanced Mechanics of Materials by Boresi & Schmidt',
    prereqs: '2.001',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=2.002',
    guidebook: 'Failure criteria (von Mises, Tresca) are essential for design. Fatigue is the #1 cause of mechanical failure—understand S-N curves. Fracture mechanics: K_IC matters. FEM is a tool, not a substitute for understanding.',
    resources: ['MIT OCW Page', 'Boresi & Schmidt Textbook', 'ANSYS Tutorials']
  },
  {
    code: '2.003', title: 'Modeling Dynamics and Control I', dept: 'Mechanical Engineering',
    desc: 'Covers modeling of dynamic systems using differential equations, Laplace transforms, transfer functions, and feedback control.',
    topics: ['Dynamic Modeling', 'Laplace Transforms', 'Transfer Functions', 'Feedback Control'],
    textbook: 'Modern Control Engineering by Ogata',
    prereqs: '18.03, 2.001',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=2.003',
    guidebook: 'Modeling is the hardest part—invest time here. Learn to draw block diagrams and signal flow graphs. Root locus and Bode plots are essential tools. MATLAB/Simulink is your best friend for control design.',
    resources: ['MIT OCW Page', 'Ogata – Modern Control Engineering', 'MATLAB Control Toolbox', 'MIT Course Notes']
  },
  {
    code: '4.101', title: 'Experiencing Architecture Studio', dept: 'Architecture',
    desc: 'Introductory design studio exploring fundamental principles of architecture through a series of short design exercises.',
    topics: ['Design Principles', 'Spatial Reasoning', 'Model Making', 'Visual Communication'],
    textbook: 'Experiencing Architecture by Steen Eiler Rasmussen',
    prereqs: 'None',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=4.101',
    guidebook: 'Think with your hands—sketch and model constantly. Study light, proportion, and materiality in existing buildings. Critique is the engine of growth: be specific and constructive. Keep a visual sketchbook.',
    resources: ['MIT OCW Page', 'Rasmussen – Experiencing Architecture', 'ArchDaily']
  },
  {
    code: '4.111', title: 'Introduction to Architecture & Environmental Design', dept: 'Architecture',
    desc: 'Explores the relationship between architecture, the environment, and human experience through lectures and design projects.',
    topics: ['Environmental Design', 'Sustainability', 'Human Experience', 'Design Thinking'],
    textbook: 'The Architecture of the Well-Tempered Environment by Reyner Banham',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=4.111',
    guidebook: 'Architecture is about creating experiences, not just buildings. Study how environmental factors (light, thermal, acoustic) shape design. Learn from vernacular architecture. Sustainability is a constraint that drives creativity.',
    resources: ['MIT OCW Page', 'Banham – Well-Tempered Environment', 'MIT Architecture Lectures']
  },
  {
    code: '4.401', title: 'Environmental Technologies in Buildings', dept: 'Architecture',
    desc: 'Covers heating, ventilation, air conditioning, lighting, and acoustics in building design.',
    topics: ['HVAC', 'Lighting', 'Acoustics', 'Energy Efficiency'],
    textbook: 'Mechanical and Electrical Equipment for Buildings by Stein & Reynolds',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=4.401',
    guidebook: 'Buildings consume 40% of energy—this matters. Understand heat transfer fundamentals (conduction, convection, radiation). Daylighting is both art and science. Acoustics are often neglected but crucial for occupant comfort.',
    resources: ['MIT OCW Page', 'Stein & Reynolds Textbook', 'ASHRAE Handbooks']
  },
  {
    code: '5.111', title: 'Principles of Chemical Science', dept: 'Chemistry',
    desc: 'Covers the fundamental principles of chemistry: atomic theory, bonding, thermodynamics, kinetics, and chemical equilibrium.',
    topics: ['Atomic Structure', 'Bonding', 'Thermodynamics', 'Kinetics'],
    textbook: 'Chemistry: The Central Science by Brown, LeMay et al.',
    prereqs: 'High school chemistry',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/5-111-principles-of-chemical-science-fall-2008/',
    guidebook: 'This is MIT\'s flagship chemistry course. Master the periodic table trends—they explain everything. Thermodynamics is about state functions; kinetics is about pathways. Practice problems are the only way to truly learn.',
    resources: ['MIT OCW Page', 'Brown/LeMay Textbook', 'Khan Academy – Chemistry', 'MIT Problem Sets']
  },
  {
    code: '5.60', title: 'Thermodynamics & Kinetics', dept: 'Chemistry',
    desc: 'A molecular-level treatment of thermodynamics and chemical kinetics. Covers the laws of thermodynamics, phase equilibria, and reaction rates.',
    topics: ['Laws of Thermodynamics', 'Phase Equilibria', 'Reaction Rates', 'Statistical Mechanics'],
    textbook: 'Physical Chemistry by Atkins & de Paula',
    prereqs: '5.111, 18.02',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/5-60-thermodynamics-kinetics-spring-2008/',
    guidebook: 'The four laws of thermodynamics are non-negotiable fundamentals. Partition functions connect micro to macro. Phase diagrams tell you about material behavior. The relation between thermodynamics and kinetics is subtle but crucial.',
    resources: ['MIT OCW Page', 'Atkins – Physical Chemistry', 'MIT Course Notes']
  },
  {
    code: '7.013', title: 'Introductory Biology', dept: 'Biology',
    desc: 'An alternative introductory biology course covering molecular biology, genetics, cell biology, and development with a focus on model organisms.',
    topics: ['Molecular Biology', 'Genetics', 'Cell Biology', 'Model Organisms'],
    textbook: 'Essential Cell Biology by Alberts et al.',
    prereqs: 'High school biology and chemistry',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/7-013-introductory-biology-spring-2018/',
    guidebook: 'Model organisms (yeast, flies, worms, mice) are the key to understanding biology. Focus on experimental evidence—how do we know what we know? Draw pathways and regulatory networks by hand.',
    resources: ['MIT OCW Page', 'Alberts – Essential Cell Biology', 'Khan Academy – Biology']
  },
  {
    code: '7.014', title: 'Introductory Biology', dept: 'Biology',
    desc: 'Covers introductory biology with emphasis on human biology, immunology, neurobiology, and the molecular basis of disease.',
    topics: ['Human Biology', 'Immunology', 'Neurobiology', 'Disease Mechanisms'],
    textbook: 'Molecular Biology of the Cell (Alberts)',
    prereqs: 'High school biology and chemistry',
    hours: '12-15 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/7-014-introductory-biology-spring-2005/',
    guidebook: 'Human biology connects basic science to medicine. Immunology is about pattern recognition—self vs non-self. Neurobiology bridges molecules and behavior. Use the Punnett square calculator in the Labs tab for genetics practice.',
    resources: ['MIT OCW Page', 'Alberts – Molecular Biology', 'Khan Academy – Health & Medicine']
  },
  {
    code: '9.01', title: 'Introduction to Neuroscience', dept: 'Brain & Cognitive Sci',
    desc: 'Covers the structure and function of the nervous system: neural signaling, sensory systems, motor control, and brain disorders.',
    topics: ['Neural Signaling', 'Sensory Systems', 'Motor Control', 'Brain Disorders'],
    textbook: 'Principles of Neural Science by Kandel et al.',
    prereqs: 'None (introductory)',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=9.01',
    guidebook: 'Neuroscience is about levels—from molecules to mind. Understand the action potential thoroughly (it\'s the fundamental unit). Sensory systems are windows into brain organization. The brain is plastic—it changes with experience.',
    resources: ['MIT OCW Page', 'Kandel – Principles of Neural Science', 'Khan Academy – Neuroscience']
  },
  {
    code: '10.37', title: 'Chemical and Biological Reaction Engineering', dept: 'Chemical Engineering',
    desc: 'Covers chemical kinetics, reactor design, and biological reaction engineering. Includes enzyme kinetics and bioreactor design.',
    topics: ['Chemical Kinetics', 'Reactor Design', 'Enzyme Kinetics', 'Bioreactors'],
    textbook: 'Elements of Chemical Reaction Engineering by Fogler',
    prereqs: '10.302 or equivalent',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=10.37',
    guidebook: 'Reactor design is the heart of chemical engineering. Learn the ideal reactors (CSTR, PFR, batch) inside out. Enzyme kinetics (Michaelis-Menten) connects biology to engineering. Scale-up is where theory meets reality.',
    resources: ['MIT OCW Page', 'Fogler – Elements of Chemical Reaction Engineering', 'MIT Course Notes']
  },
  {
    code: '10.40', title: 'Chemical Engineering Thermodynamics', dept: 'Chemical Engineering',
    desc: 'Covers thermodynamic principles applied to chemical engineering: phase equilibria, chemical reaction equilibria, and molecular thermodynamics.',
    topics: ['Phase Equilibria', 'Reaction Equilibria', 'Solution Thermodynamics', 'Molecular Modeling'],
    textbook: 'Molecular Thermodynamics of Fluid-Phase Equilibria by Prausnitz',
    prereqs: '5.60, 18.03',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=10.40',
    guidebook: 'Phase equilibria is essential for separation processes. Activity coefficients and fugacity are the key tools. Chemical reaction equilibrium tells you the maximum yield. Molecular thermodynamics connects microscopic to macroscopic.',
    resources: ['MIT OCW Page', 'Prausnitz – Molecular Thermodynamics', 'MIT Course Notes']
  },
  {
    code: '10.302', title: 'Transport Processes', dept: 'Chemical Engineering',
    desc: 'Covers momentum, heat, and mass transport: fluid dynamics, heat conduction, convection, diffusion, and their analogies.',
    topics: ['Fluid Dynamics', 'Heat Transfer', 'Mass Transfer', 'Transport Analogies'],
    textbook: 'Transport Phenomena by Bird, Stewart & Lightfoot',
    prereqs: '18.03, 10.40',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=10.302',
    guidebook: 'BSL (Bird, Stewart, Lightfoot) is the bible of transport. The analogies between momentum, heat, and mass transfer are powerful—exploit them. Shell balances are the fundamental method. Dimensionless numbers (Re, Pr, Sc) tell you the dominant physics.',
    resources: ['MIT OCW Page', 'Bird/Stewart/Lightfoot – Transport Phenomena', 'MIT Course Notes']
  },
  {
    code: '12.001', title: 'Introduction to Geology', dept: 'Earth & Planetary Sci',
    desc: 'Covers Earth\'s structure, plate tectonics, mineralogy, rock types, geological time, and surface processes.',
    topics: ['Plate Tectonics', 'Mineralogy', 'Earth History', 'Surface Processes'],
    textbook: 'Earth: Portrait of a Planet by Marshak',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=12.001',
    guidebook: 'Plate tectonics is the unifying theory of geology. Minerals are the building blocks—learn to identify common ones. Geologic time is deep: 4.5 billion years. Field observations are the foundation of all geological knowledge.',
    resources: ['MIT OCW Page', 'Marshak – Earth: Portrait of a Planet', 'USGS Resources']
  },
  {
    code: '12.002', title: 'Physics and Chemistry of the Terrestrial Planets', dept: 'Earth & Planetary Sci',
    desc: 'Explores the formation, evolution, and current state of terrestrial planets through physics and chemistry.',
    topics: ['Planet Formation', 'Planetary Interiors', 'Atmospheres', 'Geophysical Processes'],
    textbook: 'Physics and Chemistry of the Solar System by Lewis',
    prereqs: '12.001, 8.01',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=12.002',
    guidebook: 'Comparative planetology teaches us about Earth by studying other worlds. Planetary interiors are revealed by seismology and gravity. Atmospheres evolve through complex physical and chemical processes. Mars, Venus, and Earth are the key case studies.',
    resources: ['MIT OCW Page', 'Lewis – Physics and Chemistry of the Solar System', 'NASA Planetary Science']
  },
  {
    code: '14.02', title: 'Principles of Macroeconomics', dept: 'Economics',
    desc: 'Covers the study of the economy as a whole: GDP, inflation, unemployment, fiscal and monetary policy, and economic growth.',
    topics: ['GDP', 'Inflation', 'Unemployment', 'Fiscal & Monetary Policy'],
    textbook: 'Principles of Macroeconomics by Mankiw',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/14-02-principles-of-macroeconomics-spring-2023/',
    guidebook: 'Macroeconomics is about the big picture: growth, cycles, and policy. The IS-LM model is the core framework for short-run analysis. Understand the difference between nominal and real variables (money illusion). Central banks are the key players—follow their policy decisions.',
    resources: ['MIT OCW Page', 'Mankiw – Macroeconomics', 'Khan Academy – Macroeconomics', 'FRED Economic Data']
  },
  {
    code: '15.010', title: 'Economic Analysis for Business Decisions', dept: 'Management',
    desc: 'Applies microeconomic analysis to business decisions: pricing, production, market structure, and strategy.',
    topics: ['Pricing', 'Production', 'Market Structure', 'Business Strategy'],
    textbook: 'Microeconomics by Pindyck & Rubinfeld',
    prereqs: 'None',
    hours: '8-10 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=15.010',
    guidebook: 'Business economics is about making decisions under uncertainty. Understand cost structures (fixed vs variable) and their implications for pricing. Game theory is essential for strategic decisions. Learn to think at the margin.',
    resources: ['MIT OCW Page', 'Pindyck & Rubinfeld – Microeconomics', 'MIT Sloan Course Notes']
  },
  {
    code: '15.401', title: 'Finance Theory I', dept: 'Management',
    desc: 'Covers the foundations of finance: present value, risk and return, capital asset pricing model, and efficient markets.',
    topics: ['Present Value', 'Risk & Return', 'CAPM', 'Market Efficiency'],
    textbook: 'Corporate Finance by Brealey, Myers & Allen',
    prereqs: 'None',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/15-401-finance-theory-i-fall-2008/',
    guidebook: 'Time value of money is the single most important concept in finance. Risk and return are two sides of the same coin. CAPM is a model, not reality—understand its assumptions. Markets are mostly efficient, but not perfectly so.',
    resources: ['MIT OCW Page', 'Brealey/Myers – Corporate Finance', 'MIT Sloan Finance Lectures']
  },
  {
    code: '15.810', title: 'Marketing Management', dept: 'Management',
    desc: 'Covers marketing strategy: customer analysis, segmentation, targeting, positioning, branding, and marketing communications.',
    topics: ['Segmentation', 'Branding', 'Consumer Behavior', 'Marketing Strategy'],
    textbook: 'Marketing Management by Kotler & Keller',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=15.810',
    guidebook: 'Marketing is about creating, communicating, and delivering value. Segmentation, targeting, and positioning (STP) is the strategic framework. Branding is about building trust and meaning. Measure everything—marketing ROI matters.',
    resources: ['MIT OCW Page', 'Kotler & Keller – Marketing Management', 'Harvard Business Review']
  },
  {
    code: '16.001', title: 'Unified Engineering: Materials and Structures', dept: 'Aeronautics & Astronautics',
    desc: 'First course in the Unified Engineering sequence covering aerospace materials, structural analysis, and design.',
    topics: ['Aerospace Materials', 'Structural Analysis', 'Stress Analysis', 'Design'],
    textbook: 'Unified Engineering Course Notes (MIT)',
    prereqs: '18.02, 8.01',
    hours: '14-18 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=16.001',
    guidebook: 'Unified Engineering is intense—stay on top of the material daily. Aerospace structures must be lightweight and strong. Understand the stress-strain relationship for different materials. The integrated approach means topics connect across the week.',
    resources: ['MIT OCW Page', 'MIT Unified Engineering Notes', 'Aerospace Structures Textbooks']
  },
  {
    code: '16.06', title: 'Principles of Automatic Control', dept: 'Aeronautics & Astronautics',
    desc: 'Covers feedback control systems: stability, root locus, frequency response, and state-space methods.',
    topics: ['Feedback Control', 'Stability', 'Root Locus', 'State-Space'],
    textbook: 'Feedback Control of Dynamic Systems by Franklin, Powell & Emami-Naeini',
    prereqs: '18.03, 2.003 or equivalent',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/16-06-principles-of-automatic-control-fall-2012/',
    guidebook: 'Control is about making systems behave the way you want. Stability is the first requirement—Nyquist criterion is essential. Root locus tells you how closed-loop poles move with gain. State-space methods handle multivariable systems naturally.',
    resources: ['MIT OCW Page', 'Franklin/Powell – Feedback Control', 'MATLAB Control Toolbox']
  },
  {
    code: '16.100', title: 'Aerodynamics', dept: 'Aeronautics & Astronautics',
    desc: 'Covers fundamental aerodynamics: incompressible and compressible flow, airfoil theory, lift and drag, and introductory computational methods.',
    topics: ['Incompressible Flow', 'Compressible Flow', 'Airfoil Theory', 'Lift & Drag'],
    textbook: 'Fundamentals of Aerodynamics by John D. Anderson',
    prereqs: '18.03, 8.02',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=16.100',
    guidebook: 'Aerodynamics is about understanding lift and drag generation. Bernoulli\'s principle is the starting point, but circulation theory is the full picture. Compressibility effects become important above Mach 0.3. Computational methods (CFD) are powerful but require physical understanding.',
    resources: ['MIT OCW Page', 'Anderson – Fundamentals of Aerodynamics', 'NASA Aerodynamics Resources']
  },
  {
    code: '17.20', title: 'Introduction to American Politics', dept: 'Political Science',
    desc: 'Covers the structure and function of American political institutions: Congress, presidency, judiciary, and the policy process.',
    topics: ['Congress', 'Presidency', 'Judiciary', 'Public Policy'],
    textbook: 'The Logic of American Politics by Kernell et al.',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=17.20',
    guidebook: 'Institutions shape outcomes—the "rules of the game" matter. Understand the separation of powers and checks and balances. The Constitution is a living document interpreted through courts and practice. Follow current politics to see concepts in action.',
    resources: ['MIT OCW Page', 'Kernell – Logic of American Politics', 'Congress.gov']
  },
  {
    code: '17.41', title: 'Introduction to International Relations', dept: 'Political Science',
    desc: 'Covers the major theories of international relations: realism, liberalism, and constructivism, applied to contemporary global issues.',
    topics: ['Realism', 'Liberalism', 'Constructivism', 'Global Governance'],
    textbook: 'World Politics: Trend and Transformation by Blanton & Kegley',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/17-41-introduction-to-international-relations-spring-2018/',
    guidebook: 'IR is about understanding why states behave the way they do. The three great debates (realism vs liberalism vs constructivism) frame every issue. The security dilemma is a foundational concept. Apply theories to current events to test their explanatory power.',
    resources: ['MIT OCW Page', 'Blanton & Kegley – World Politics', 'Council on Foreign Relations']
  },
  {
    code: '18.05', title: 'Introduction to Probability and Statistics', dept: 'Mathematics',
    desc: 'Covers probability theory, random variables, distributions, Bayesian inference, frequentist methods, and hypothesis testing.',
    topics: ['Probability', 'Random Variables', 'Bayesian Inference', 'Hypothesis Testing'],
    textbook: 'Introduction to Probability and Statistics by Bertsekas & Tsitsiklis',
    prereqs: '18.02',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/',
    guidebook: 'Probability is about quantifying uncertainty. Bayesian vs frequentist is the central philosophical divide. Conditional probability (Bayes\' theorem) is the most powerful tool in the course. Understand p-values and confidence intervals deeply—they are widely misinterpreted.',
    resources: ['MIT OCW Page', 'Bertsekas & Tsitsiklis – Probability', 'Khan Academy – Statistics', 'MIT Course Notes']
  },
  {
    code: '6.041', title: 'Probabilistic Systems Analysis', dept: 'CS / EE',
    desc: 'Covers probability theory and its applications in engineering: discrete and continuous random variables, LLN, CLT, and random processes.',
    topics: ['Probability Models', 'Random Variables', 'Limit Theorems', 'Random Processes'],
    textbook: 'Introduction to Probability by Bertsekas & Tsitsiklis',
    prereqs: '18.02',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-041-probabilistic-systems-analysis-and-applied-probability-fall-2010/',
    guidebook: 'The law of large numbers and the central limit theorem are the foundations of statistics. Learn to think in terms of distributions, not point estimates. Markov chains model sequential randomness. The Bertsekas textbook is exceptionally clear.',
    resources: ['MIT OCW Page', 'Bertsekas & Tsitsiklis – Introduction to Probability', 'MIT Course Notes']
  },
  {
    code: '6.046', title: 'Design and Analysis of Algorithms', dept: 'CS',
    desc: 'Advanced algorithms course covering divide-and-conquer, dynamic programming, greedy algorithms, network flow, and computational geometry.',
    topics: ['Divide & Conquer', 'Dynamic Programming', 'Greedy Algorithms', 'Network Flow'],
    textbook: 'Introduction to Algorithms (CLRS)',
    prereqs: '6.006',
    hours: '14-18 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/',
    guidebook: 'This is the advanced sequel to 6.006. Master the algorithm design paradigms—most problems are variations on these themes. Amortized analysis is a powerful tool for understanding data structure performance. Network flow is elegant and widely applicable.',
    resources: ['MIT OCW Page', 'CLRS Textbook', 'MIT Problem Sets', 'LeetCode Hard Problems']
  },
  {
    code: '7.05', title: 'General Biochemistry', dept: 'Biology',
    desc: 'Covers the structure and function of biomolecules: proteins, nucleic acids, lipids, and carbohydrates, and their roles in metabolism.',
    topics: ['Protein Structure', 'Enzyme Kinetics', 'Metabolism', 'Signal Transduction'],
    textbook: 'Principles of Biochemistry by Lehninger',
    prereqs: '7.012, 5.111',
    hours: '12-16 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=7.05',
    guidebook: 'Biochemistry is about how biomolecules work together. Protein structure determines function—learn the folding hierarchy. Metabolic pathways are highly regulated: understand the control points, not just the reactions. Enzyme kinetics (Lineweaver-Burk, Michaelis-Menten) is essential.',
    resources: ['MIT OCW Page', 'Lehninger – Principles of Biochemistry', 'Khan Academy – Biochemistry']
  },
  {
    code: '8.03', title: 'Physics III: Vibrations and Waves', dept: 'Physics',
    desc: 'Covers oscillations, waves, Fourier analysis, electromagnetism as wave phenomena, and introduction to quantum wave mechanics.',
    topics: ['Oscillations', 'Waves', 'Fourier Analysis', 'Wave Mechanics'],
    textbook: 'The Physics of Waves and Vibrations by French',
    prereqs: '8.02, 18.03',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/8-03-physics-iii-vibrations-and-waves-fall-2004/',
    guidebook: 'Waves are everywhere in physics—mechanical, electromagnetic, quantum. Fourier analysis is the most important mathematical tool in physics. Understand the difference between traveling and standing waves. Normal modes diagonalize complex oscillations.',
    resources: ['MIT OCW Page', 'French – Vibrations and Waves', '3Blue1Brown – Fourier Transform']
  },
  {
    code: '2.007', title: 'Design and Manufacturing I', dept: 'Mechanical Engineering',
    desc: 'Project-based course where students design and build an electromechanical machine to compete in a contest. Covers design process, machining, and manufacturing.',
    topics: ['Design Process', 'Machining', 'Electromechanical Systems', 'Prototyping'],
    textbook: 'None (project-based)',
    prereqs: '2.001, 2.003',
    hours: '15-20 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/2-007-design-and-manufacturing-i-spring-2009/',
    guidebook: 'This is the most hands-on course at MIT. Draw, prototype, test, iterate—the design cycle is everything. Machine shop skills are invaluable. The competition is fun, but the learning is in the process. Keep a detailed design notebook.',
    resources: ['MIT OCW Page', 'MIT Machine Shop Tutorials', 'SolidWorks Tutorials']
  },
  {
    code: '9.40', title: 'Introduction to Neural Computation', dept: 'Brain & Cognitive Sci',
    desc: 'Covers computational approaches to understanding neural systems: neural coding, plasticity, and learning algorithms.',
    topics: ['Neural Coding', 'Synaptic Plasticity', 'Learning Rules', 'Neural Networks'],
    textbook: 'Theoretical Neuroscience by Dayan & Abbott',
    prereqs: '9.01, 18.03',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=9.40',
    guidebook: 'Neural computation bridges biology and machine learning. Understanding neural coding is fundamental—rate vs temporal coding. Hebbian plasticity and STDP are the leading models of learning. The connection to artificial neural networks is deep and insightful.',
    resources: ['MIT OCW Page', 'Dayan & Abbott – Theoretical Neuroscience', 'MIT Course Notes']
  },
  {
    code: '11.001', title: 'Introduction to Urban Design and Development', dept: 'Urban Studies & Planning',
    desc: 'Examines the physical evolution of cities and the forces that shape urban form: economics, politics, technology, and culture.',
    topics: ['Urban Form', 'Zoning', 'Transportation', 'Community Development'],
    textbook: 'The Death and Life of Great American Cities by Jane Jacobs',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/11-001-introduction-to-urban-design-and-development-spring-2006/',
    guidebook: 'Cities are complex systems that emerge from many individual decisions. Jane Jacobs is essential reading—her observations are still relevant. Zoning shapes everything about how cities function. Walkability and mixed-use are fundamental to good urban design.',
    resources: ['MIT OCW Page', 'Jacobs – Death and Life of Great American Cities', 'Planetizen']
  },
  {
    code: '15.501', title: 'Corporate Financial Accounting', dept: 'Management',
    desc: 'Covers the fundamentals of financial accounting: the accounting cycle, financial statements, cash flow analysis, and ratio analysis.',
    topics: ['Financial Statements', 'Accounting Cycle', 'Cash Flow', 'Ratio Analysis'],
    textbook: 'Financial Accounting by Libby, Libby & Short',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=15.501',
    guidebook: 'Accounting is the language of business. The balance sheet equation (Assets = Liabilities + Equity) never changes. Cash is king—cash flow statements reveal the truth that income statements can obscure. Learn to read financial statements quickly.',
    resources: ['MIT OCW Page', 'Libby/Libby/Short – Financial Accounting', 'SEC EDGAR Database']
  },
  {
    code: '21H.001', title: 'How to Stage a Revolution', dept: 'History',
    desc: 'Comparative study of revolutions: the causes, processes, and outcomes of major revolutionary movements from 1776 to the present.',
    topics: ['Revolution Theory', 'American Revolution', 'French Revolution', 'Comparative Revolutions'],
    textbook: 'Various primary and secondary sources',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/21h-001-how-to-stage-a-revolution-fall-2013/',
    guidebook: 'Revolutions follow patterns: grievances, ideology, organization, and opportunity. Compare across cases (America, France, Russia, China) to see what\'s common and what\'s unique. Primary sources reveal the mindset of participants. Revolutions almost never go as planned.',
    resources: ['MIT OCW Page', 'Primary Source Documents', 'MIT History Lectures']
  },
  {
    code: '21H.112', title: 'The American Revolution', dept: 'History',
    desc: 'Deep study of the American Revolution: its causes, key events, major figures, and enduring legacy in American history and identity.',
    topics: ['Colonial America', 'War for Independence', 'Founding Documents', 'Revolutionary Legacy'],
    textbook: 'The Ideological Origins of the American Revolution by Bernard Bailyn',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/21h-112-the-american-revolution-spring-2006/',
    guidebook: 'The Revolution was not just a war but a transformation of ideas. Bailyn shows that ideology mattered more than economic interests. The Declaration of Independence is a philosophical document first and foremost. The Constitution was a contentious compromise.',
    resources: ['MIT OCW Page', 'Bailyn – Ideological Origins', 'Founders Online (National Archives)']
  },
  {
    code: '21H.151', title: 'Dynastic China', dept: 'History',
    desc: 'Covers Chinese history from ancient times through the imperial period to the fall of the Qing dynasty. Focuses on political, social, and cultural developments.',
    topics: ['Early Dynasties', 'Imperial System', 'Confucianism', 'Chinese Culture'],
    textbook: 'The Search for Modern China by Jonathan Spence',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=21H.151',
    guidebook: 'Chinese history is the longest continuous civilization on Earth. The dynastic cycle pattern (rise, peak, decline, fall) is a powerful framework. Confucianism shaped every aspect of Chinese society. Understanding China\'s history is essential for understanding its present.',
    resources: ['MIT OCW Page', 'Spence – The Search for Modern China', 'MIT History Lectures']
  },
  {
    code: '21L.006', title: 'American Literature', dept: 'Literature',
    desc: 'A survey of American literature from the colonial period to the present. Major authors, movements, and themes in American writing.',
    topics: ['Colonial Literature', 'American Romanticism', 'Realism', 'Modernism'],
    textbook: 'The Norton Anthology of American Literature',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=21L.006',
    guidebook: 'American literature is a conversation about identity—individual, national, and cultural. Read Emerson and Thoreau for the roots of American individualism. The American Renaissance (Melville, Hawthorne, Whitman) is the foundational period. Literature reflects society\'s values and challenges.',
    resources: ['MIT OCW Page', 'Norton Anthology', 'Project Gutenberg']
  },
  {
    code: '21L.009', title: 'Shakespeare', dept: 'Literature',
    desc: 'An intensive study of Shakespeare\'s plays and sonnets. Covers comedies, histories, tragedies, and romances with attention to performance.',
    topics: ['Comedy', 'History', 'Tragedy', 'Performance'],
    textbook: 'The Norton Shakespeare',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/21l-009-shakespeare-spring-2004/',
    guidebook: 'Shakespeare wrote plays to be performed, not read. Read the scenes aloud—they come alive with sound. The sonnets are the key to understanding Shakespeare\'s language. Every generation reinvents Shakespeare for its own purposes.',
    resources: ['MIT OCW Page', 'Norton Shakespeare', 'MIT Global Shakespeares', 'Folger Shakespeare Library']
  },
  {
    code: '21M.011', title: 'Introduction to Western Music', dept: 'Music',
    desc: 'A survey of Western classical music from the Middle Ages to the present. Covers major composers, forms, and stylistic periods.',
    topics: ['Medieval', 'Baroque', 'Classical', 'Romantic'],
    textbook: 'A History of Western Music by Burkholder, Grout & Palisca',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/21m-011-introduction-to-western-music-spring-2006/',
    guidebook: 'Active listening is the core skill—listen for form, instrumentation, and development. The four periods (Baroque, Classical, Romantic, Modern) each have distinct characteristics. Bach, Mozart, Beethoven, and Stravinsky are the four pillars. Attend live performances to experience music as sound in space.',
    resources: ['MIT OCW Page', 'Burkholder/Grout/Palisca Textbook', 'IMSLP Music Library']
  },
  {
    code: '21M.030', title: 'Introduction to World Music', dept: 'Music',
    desc: 'Explores musical traditions from around the world: Africa, India, Indonesia, East Asia, Latin America, and the Middle East.',
    topics: ['African Music', 'Indian Classical', 'Gamelan', 'Latin American Music'],
    textbook: 'World Music: Traditions and Transformations by Bakan',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=21M.030',
    guidebook: 'World music challenges Western assumptions about what music "should" be. Listen for different tuning systems, rhythms, and performance practices. Music is deeply embedded in culture—understand the context to understand the music. The concept of "world music" itself is a Western construct worth questioning.',
    resources: ['MIT OCW Page', 'Bakan – World Music', 'Smithsonian Folkways']
  },
  {
    code: '21M.051', title: 'Fundamentals of Music', dept: 'Music',
    desc: 'An introduction to music theory: notation, scales, intervals, chords, harmony, and basic composition.',
    topics: ['Music Notation', 'Scales', 'Harmony', 'Ear Training'],
    textbook: 'The Musician\'s Guide to Theory and Analysis by Clendinning & Marvin',
    prereqs: 'None',
    hours: '8-10 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=21M.051',
    guidebook: 'Music theory is the grammar of music—it describes, not prescribes. Practice sight-reading daily, even just 5 minutes. Ear training is like learning a language—consistent practice works. Analyze pieces you love to see theory in action.',
    resources: ['MIT OCW Page', 'Clendinning & Marvin Textbook', 'MusicTheory.net']
  },
  {
    code: '22.01', title: 'Introduction to Nuclear Engineering & Ionizing Radiation', dept: 'Nuclear Science & Eng',
    desc: 'Covers the fundamentals of nuclear engineering: radiation interactions, nuclear reactions, shielding, and nuclear energy.',
    topics: ['Radiation', 'Nuclear Reactions', 'Shielding', 'Nuclear Energy'],
    textbook: 'Nuclear Engineering by Lamarsh & Baratta',
    prereqs: '8.02, 18.03',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/',
    guidebook: 'Radiation is everywhere—understanding it dispels fear and enables useful applications. The four radiation types (alpha, beta, gamma, neutron) interact differently with matter. Shielding is about understanding those interactions. Nuclear energy is the most concentrated energy source we have.',
    resources: ['MIT OCW Page', 'Lamarsh – Nuclear Engineering', 'NRC Resources']
  },
  {
    code: '22.02', title: 'Introduction to Applied Nuclear Physics', dept: 'Nuclear Science & Eng',
    desc: 'Covers nuclear structure, radioactive decay, nuclear reactions, and applications in medicine, industry, and energy.',
    topics: ['Nuclear Structure', 'Radioactive Decay', 'Nuclear Reactions', 'Medical Applications'],
    textbook: 'Introductory Nuclear Physics by Krane',
    prereqs: '22.01 or 8.04',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/22-02-introduction-to-applied-nuclear-physics-spring-2012/',
    guidebook: 'The nucleus is a quantum many-body system—models are approximations. Radioactive decay chains follow well-understood patterns. Nuclear medicine saves millions of lives through imaging and therapy. Cross-sections tell you the probability of nuclear reactions.',
    resources: ['MIT OCW Page', 'Krane – Introductory Nuclear Physics', 'MIT Course Notes']
  },
  {
    code: '22.05', title: 'Neutron Science and Reactor Physics', dept: 'Nuclear Science & Eng',
    desc: 'Covers neutron interactions, fission chain reactions, reactor criticality, and reactor kinetics and control.',
    topics: ['Neutron Interactions', 'Fission', 'Reactor Criticality', 'Reactor Kinetics'],
    textbook: 'Nuclear Reactor Analysis by Duderstadt & Hamilton',
    prereqs: '22.02',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=22.05',
    guidebook: 'The neutron chain reaction is the heart of nuclear reactors. The six-factor formula for criticality is essential. Delayed neutrons make reactors controllable—without them, control would be impossible. Reactor kinetics is about understanding transients and safety.',
    resources: ['MIT OCW Page', 'Duderstadt & Hamilton – Reactor Analysis', 'MIT Course Notes']
  },
  {
    code: '24.01', title: 'Classics of Western Philosophy', dept: 'Philosophy',
    desc: 'Close reading of major works from Plato and Aristotle through Descartes, Hume, Kant, and Nietzsche.',
    topics: ['Ancient Philosophy', 'Modern Philosophy', 'Epistemology', 'Ethics'],
    textbook: 'Primary texts (Plato, Aristotle, Descartes, Hume, Kant, Nietzsche)',
    prereqs: 'None',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/courses/24-01-classics-of-western-philosophy-spring-2016/',
    guidebook: 'Read each philosopher\'s argument carefully—what problem are they trying to solve? Philosophy is a conversation across centuries. The empiricist vs rationalist debate frames modern philosophy. Know the historical context: philosophers write in response to their predecessors.',
    resources: ['MIT OCW Page', 'Project Gutenberg (primary texts)', 'Stanford Encyclopedia of Philosophy']
  },
  {
    code: '21A.101', title: 'Cultural Anthropology', dept: 'Anthropology',
    desc: 'Introduction to cultural anthropology: the concept of culture, kinship, religion, political systems, and anthropological methods.',
    topics: ['Culture Concept', 'Kinship', 'Religion', 'Ethnographic Methods'],
    textbook: 'Cultural Anthropology by Kottak / Anthropology by Haviland',
    prereqs: 'None (introductory)',
    hours: '8-12 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=21A.101',
    guidebook: 'Cultural anthropology makes the familiar strange and the strange familiar. Participant observation is the core method—immersion teaches what surveys cannot. Cultural relativism is the foundational ethical stance. Kinship systems reveal how societies organize themselves.',
    resources: ['MIT OCW Page', 'Kottak – Cultural Anthropology', 'AAA Resources']
  },
  {
    code: 'IDS.333', title: 'Risk and Decision Analysis', dept: 'Data, Systems, and Society',
    desc: 'Covers frameworks for decision-making under uncertainty: decision trees, sensitivity analysis, value of information, and risk communication.',
    topics: ['Decision Trees', 'Uncertainty', 'Value of Information', 'Risk Communication'],
    textbook: 'Decision Analysis by Howard & Abbas',
    prereqs: '6.041 or 18.05',
    hours: '10-14 hrs/week',
    ocwUrl: 'https://ocw.mit.edu/search/?q=IDS.333',
    guidebook: 'Decision analysis is about making better choices under uncertainty. Structure decisions with clarity before applying math. Value of information tells you whether to gather more data. Risk communication is as important as risk analysis—people fear dread risks more than familiar ones.',
    resources: ['MIT OCW Page', 'Howard & Abbas – Decision Analysis', 'MIT IDSS Resources']
  },
];

const SHADOWFORM_PROMPTS = [
  {
    title: '🧑‍🏫 General Tutor Persona',
    prompt: `You are an expert tutor in {subject}. Your role is to help me understand concepts deeply, not just memorize facts.

Teaching approach:
1. First, ask me what I already know about the topic.
2. Explain the core concept using an analogy or real-world example.
3. Break down the concept into 3-5 key principles.
4. Ask me a question to check understanding.
5. If I struggle, re-explain using a different approach.

Current topic: {topic}
My current level: {beginner / intermediate / advanced}
Specific question (if any): {question}`
  },
  {
    title: '📐 Socratic Method Tutor',
    prompt: `You are a tutor using the Socratic method. Do NOT give me direct answers. Instead, guide me to discover the answer through questions.

Rules:
- Only ask questions, never state facts directly.
- If I ask a yes/no question, respond with another question.
- Help me identify contradictions in my thinking.
- Encourage me to articulate my reasoning step by step.
- When I reach the correct conclusion, confirm it and summarize the reasoning path.

Topic: {topic}
My attempted solution or understanding: {my_answer}
Where I'm stuck: {stuck_point}`
  },
  {
    title: '🔬 STEM Problem Solver',
    prompt: `You are a STEM tutor. Help me solve this problem step by step.

Problem: {problem}

Instructions:
1. Do NOT solve the problem immediately.
2. Ask me what approach I think is appropriate.
3. Guide me through identifying:
   - What is given?
   - What is unknown?
   - What physical/mathematical principles apply?
4. If I make a mistake, point out the error without giving the correct answer.
5. Provide a similar example problem if I need additional practice.

Subject area: {subject}
Difficulty: {difficulty}`
  },
  {
    title: '✍️ Essay Writing Coach',
    prompt: `You are an essay writing coach. Help me improve my writing through structured feedback.

My essay draft or outline: {essay_draft}

Provide feedback on:
1. Thesis clarity — is the main argument clear and specific?
2. Structure — does each paragraph support the thesis?
3. Evidence — are claims supported with specific examples or citations?
4. Transitions — do ideas flow logically between paragraphs?
5. Style — is the language precise and appropriate for the audience?

Focus your feedback on: {focus_area}
I want: {gentle feedback / tough critique}`
  },
  {
    title: '📖 Reading Comprehension Guide',
    prompt: `You are a reading comprehension tutor. Help me engage deeply with the text.

Text or passage: {text}

Guide me through:
1. Before reading: What do I already know about this topic? What do I expect to learn?
2. During reading: What are the key claims? What evidence supports them?
3. After reading: How does this connect to what I already know?
4. Critical thinking: Do I agree with the author? What assumptions are being made?
5. Application: How can I use this information?

Reading purpose: {purpose (e.g., exam, essay, personal interest)}`
  },
  {
    title: '📚 Language Learning Partner',
    prompt: `You are a language learning partner. Help me practice {language}.

Current level: {level (A1-C2)}
Specific focus: {speaking / writing / reading / listening / grammar / vocabulary}

Activity: {activity (e.g., conversation, grammar practice, vocab building)}

Guidelines:
- Correct my mistakes gently by restating correctly.
- Explain WHY something is incorrect, not just what is wrong.
- Provide natural alternatives to my phrasing.
- Introduce 2-3 new relevant vocabulary words in context.
- Adjust your language complexity to my level (slightly above).`
  },
  {
    title: '🧮 Math Concept Explainer',
    prompt: `You are a math tutor specializing in building intuition.

Concept: {concept}

Explain this concept using:
1. A visual analogy (describe what it would look like as a picture or animation).
2. A real-world application.
3. The simplest possible version of the idea first.
4. Then gradually add precision and formalism.
5. End with a practice problem I can try.

Background: I am familiar with {prerequisite_topics}
I want the explanation to be: {intuitive / formal / balanced}`
  },
  {
    title: '📋 Study Plan Architect',
    prompt: `You are a study plan architect. Help me design an effective study schedule.

Goal: {goal}
Time available: {time_per_day / days_per_week}
Resources available: {resources}
Start date: {start_date}
End date / exam date: {end_date}
Current proficiency: {beginner / intermediate / advanced}

Design a study plan that:
1. Spaced repetition: reviews old material at increasing intervals.
2. Active recall: includes practice problems and self-testing.
3. Interleaving: mixes different topics within each session.
4. Progressive overload: gradually increases difficulty.
5. Built-in buffer time for unexpected delays.

Format the plan as a week-by-week schedule.`
  }
];

const MOCK_TEST_PROMPTS = [
  {
    title: '📝 General Mock Exam Generator',
    prompt: `You are a professor creating a mock exam. Create a comprehensive exam for {course_name}.

Requirements:
- {num_mcq} multiple choice questions (conceptual understanding)
- {num_short} short answer questions (explain concepts in 2-3 sentences)
- {num_long} long-form problem-solving questions (show all work)
- Include an answer key with explanations for each question
- Difficulty should match {exam_difficulty} level

Course topics covered: {topics}
Focus areas: {focus_areas}
Time limit: {time_limit}

Format the exam professionally with clear section headings and point values.`
  },
  {
    title: '🧪 STEM Problem Set Generator',
    prompt: `Generate a problem set for {subject} covering {topics}.

Problem types:
- {num_conceptual} conceptual questions (explain principles)
- {num_calculation} calculation problems (with real-world applications)
- {num_proof} proof/derivation questions

For each problem:
1. State the problem clearly
2. Provide hints (in a separate section)
3. Provide full solutions with step-by-step reasoning

Difficulty: {difficulty}
Prerequisite knowledge: {prerequisites}

The problems should get progressively harder within each section.`
  },
  {
    title: '📖 Oral Exam Preparation',
    prompt: `You are preparing me for an oral exam in {subject}.

Generate:
1. 10 likely oral exam questions covering the key topics
2. For each question, provide:
   - What the examiner is really asking (the deeper concept)
   - Key points to include in your answer
   - Common mistakes to avoid
3. 3 "curveball" questions that connect different topics
4. A 5-minute "elevator pitch" summary of the entire subject

Topics: {topics}
Exam format: {format (individual / panel, length)}
My weak areas: {weak_areas}`
  }
];

const NOTEBOOKLM_TIPS = [
  {
    title: '📁 Organize Your Sources',
    content: '<strong>Use folders to separate courses or projects.</strong> NotebookLM lets you organize sources into notebooks. Create one notebook per course and use the source limit (25 sources per notebook) wisely. Upload lecture notes, textbook PDFs, and your own summaries as separate sources.'
  },
  {
    title: '🔍 Focused Q&A per Source',
    content: '<strong>Ask questions about specific sources.</strong> When studying, select only the relevant sources before asking. This prevents the AI from mixing up information from different topics. For example, when studying quantum mechanics, select only the QM lecture notes and textbook.'
  },
  {
    title: '📝 Generate Study Guides',
    content: '<strong>Use the Notebook Guide feature.</strong> Ask NotebookLM to "Create a study guide for this source" or "Summarize the key concepts from these lecture notes." The generated guides can be saved as new notes for quick review before exams.'
  },
  {
    title: '🔗 Audio Overviews for Commutes',
    content: '<strong>Generate podcast-style discussions.</strong> The Audio Overview feature turns your sources into a conversational podcast between two AI hosts. Perfect for reviewing material during commutes or while doing chores. Export the audio to listen offline.'
  },
  {
    title: '💡 Connect Across Sources',
    content: '<strong>Ask cross-source questions.</strong> NotebookLM excels at connecting ideas across documents. Try: "How does the concept of {X} in lecture 5 connect to {Y} in lecture 12? What\'s the common thread?" This builds the kind of deep understanding exams test.'
  },
  {
    title: '🧠 Test Yourself with NotebookLM',
    content: '<strong>Use it as a quiz partner.</strong> Ask NotebookLM to quiz you on specific topics. Try prompts like: "Quiz me on Chapter 3 of this textbook. Ask 10 questions and give me feedback on my answers." This active recall practice is more effective than passive rereading.'
  },
  {
    title: '📋 Citation Tracking',
    content: '<strong>Always verify AI-generated answers.</strong> NotebookLM provides citations back to your sources. When studying, click through to verify key facts. This builds source literacy and ensures you\'re learning accurate information from your own materials.'
  },
  {
    title: '🔄 Study Workflow Integration',
    content: '<strong>Build a weekly rhythm with NotebookLM.</strong> Monday: Upload new lecture notes. Tuesday: Generate study guide. Wednesday: Quiz yourself. Thursday: Ask cross-source questions on weak areas. Friday: Generate Audio Overview for weekend review. This structured approach maximizes the tool.'
  }
];

const STUDY_TIPS_CURATED = [
  "The Pomodoro Technique: Study for 25 minutes, break for 5. After 4 cycles, take a 30-minute break.",
  "Active recall is more effective than passive re-reading. Quiz yourself on material without looking at notes.",
  "Spaced repetition: review material at increasing intervals (1 day, 3 days, 1 week, 1 month).",
  "Teach someone else what you've just learned — the Feynman Technique forces deep understanding.",
  "Interleave your practice: mix different types of problems in a single study session.",
  "Sleep is essential for memory consolidation. Aim for 7-9 hours, especially after learning new material.",
  "The 80/20 rule: focus on the 20% of concepts that give you 80% of the understanding.",
  "Take handwritten notes during lectures — the act of writing improves retention over typing.",
  "Create a dedicated study space with minimal distractions. Consistency of environment aids focus.",
  "Use the Pomodoro technique with a twist: 52 minutes study, 17 minutes break (the '52/17 rule').",
  "Dual coding: combine verbal and visual information. Draw diagrams alongside written notes.",
  "Retrieval practice is the single most effective study technique. Test yourself frequently.",
  "Process your emotions before studying. A 2-minute 'brain dump' of worries clears working memory.",
  "Study before bed and review immediately after waking up — aligned with sleep-based consolidation.",
  "Change your study location occasionally. Contextual variation strengthens memory recall.",
  "Limit multitasking. What feels like multitasking is actually rapid task-switching, which impairs learning.",
  "Use mnemonic devices for rote information: acronyms, rhymes, or memory palaces for complex topics.",
  "Practice under conditions similar to the exam. If it's closed-book, practice without notes.",
  "Explain concepts out loud, even to yourself. Verbalizing exposes gaps in understanding.",
  "Take breaks every 90 minutes — your brain's natural focus cycle (ultradian rhythm).",
  "The SQ3R method: Survey, Question, Read, Recite, Review — a structured approach to reading textbooks.",
  "Create concept maps linking related ideas. The process of connecting concepts builds deeper understanding.",
  "Set specific, measurable goals for each study session: 'I will solve 5 problems' not 'I will study math.'",
  "Use the Cornell note-taking system: divide your page into notes, cues, and summary sections.",
  "Exercise before studying increases BDNF levels, which supports learning and memory formation."
];
