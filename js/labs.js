const Labs = {
  initPhysics() {
    document.getElementById('physicsEquipBar')?.querySelector('.equip-btn')?.click();
  },

  initMath() {
    document.getElementById('mathEquipBar')?.querySelector('.equip-btn')?.click();
  },

  initBio() {
    document.getElementById('bioEquipBar')?.querySelector('.equip-btn')?.click();
  }
};

const LAB_GUIDES = {
  physics: {
    oscilloscope: {
      title: 'Wave Interference / Oscilloscope',
      url: 'https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_all.html',
      guide: `Explore wave interference patterns using the PhET simulation.
• Select "Light" or "Sound" mode to study different wave types.
• Adjust frequency and amplitude sliders to see how wavelength changes.
• Use the "Two Slits" setup to observe the double-slit interference pattern.
• The screen shows intensity vs position — this is what an oscilloscope displays.
• Compare single-slit and double-slit diffraction patterns.`,
      tips: 'Try varying slit width — narrower slits produce wider diffraction patterns.'
    },
    multimeter: {
      title: 'Circuit Construction Kit (DC)',
      url: 'https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html',
      guide: `Build and test circuits with the PhET Circuit Construction Kit.
• Drag components from the toolbox onto the workspace.
• Click wires to disconnect them.
• Use the voltmeter and ammeter (in the toolbox) exactly like a real multimeter.
• Measure voltage across any component, current through any branch.
• Try series vs parallel circuits and observe how voltage/current differ.`,
      tips: 'Right-click a component to change its resistance or voltage. The ammeter must be placed IN LINE with the component (series).'
    },
    projectile: {
      title: 'Projectile Motion Lab',
      url: 'https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_all.html',
      guide: `Investigate projectile motion using the PhET simulation.
• Adjust initial speed, launch angle, and mass of the projectile.
• Enable "Air Resistance" to see how drag affects the trajectory.
• Use the tape measure tool to measure range and height.
• The "Vectors" checkbox shows velocity components in real time.
• Compare different projectile masses — in a vacuum, mass doesn't matter!`,
      tips: 'Set air resistance to zero to see ideal parabolic motion. Add air resistance and notice the asymmetric trajectory.'
    },
    pendulum: {
      title: 'Pendulum Lab',
      url: 'https://phet.colorado.edu/sims/html/pendulum-lab/latest/pendulum-lab_all.html',
      guide: `Study simple harmonic motion with the Pendulum Lab simulation.
• Adjust pendulum length, mass, and gravity (choose Earth, Moon, Jupiter, or custom).
• The period is independent of mass — only length and gravity affect it.
• Use the "Period Timer" to measure oscillation period precisely.
• The energy graph shows continuous exchange between kinetic and potential energy.
• Compare small-angle vs large-angle oscillations to see when the small-angle approximation breaks down.`,
      tips: 'The period formula T = 2π√(L/g) is only accurate for small angles (<15°). Try larger angles and measure the difference.'
    },
    faraday: {
      title: "Faraday's Law / E&M",
      url: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_all.html',
      guide: `Explore electromagnetic induction with Faraday's Law simulation.
• Drag the magnet through the coil to induce a current.
• The galvanometer shows the direction and magnitude of induced current.
• Move the magnet faster — the induced voltage increases!
• Try changing the number of coil loops — more loops = more induction.
• Lenz's Law: the induced current creates a magnetic field opposing the change.`,
      tips: 'The faster the magnetic flux changes, the larger the induced EMF. Try dropping the magnet through the coil.'
    }
  },

  math: {
    graphing: {
      title: 'Desmos Graphing Calculator',
      url: 'https://www.desmos.com/calculator?embed',
      guide: `Use Desmos as a full-featured graphing calculator.
• Type equations in the left panel — multiple functions plot simultaneously.
• Use sliders by adding a variable (e.g., y = a*x^2 and add slider for a).
• Click and drag on the graph to pan, scroll to zoom.
• Click any function to see a table of values.
• Share your graph by copying the URL.`,
      tips: 'Try y = a*sin(b(x-c)) + d and adjust the sliders to see how each parameter transforms the sine wave.'
    },
    geometry: {
      title: 'GeoGebra Classic',
      url: 'https://www.geogebra.org/classic?embed',
      guide: `GeoGebra combines geometry, algebra, and calculus in one tool.
• Use the toolbar to draw points, lines, polygons, and circles.
• Click and drag any object — everything updates dynamically.
• The algebra view shows equations of the shapes you draw.
• Try the "Angle" tool to measure interior angles of polygons.
• Use CAS (Computer Algebra System) for symbolic calculations.`,
      tips: 'Draw a triangle, then find the centroid by selecting "Midpoint" on each side and connecting to opposite vertices.'
    },
    probability: {
      title: 'Plinko Probability',
      url: 'https://phet.colorado.edu/sims/html/plinko-probability/latest/plinko-probability_all.html',
      guide: `Explore probability distributions with the Plinko simulation.
• Drop balls through the Galton board to build a binomial distribution.
• More balls = smoother distribution curve.
• The histogram shows the frequency count for each bin.
• Adjust the number of rows (levels) to see how the distribution spreads.
• This demonstrates the Central Limit Theorem in action!`,
      tips: 'With enough balls, the distribution approaches a normal (Gaussian) curve — this is the Central Limit Theorem.'
    },
    estimation: {
      title: 'Curve Fitting / Estimation',
      url: 'https://phet.colorado.edu/sims/html/curve-fitting/latest/curve-fitting_all.html',
      guide: `Learn about data fitting and regression with Curve Fitting.
• Click to add data points on the graph.
• Adjust the curve parameters to fit the data.
• The "Best Fit" button finds the optimal curve automatically.
• Try different curve types: linear, quadratic, cubic, exponential.
• The residual (error) is displayed — a good fit minimizes residuals.`,
      tips: 'The best fit minimizes the sum of squared residuals (least squares method). Add exactly enough points to define each curve type.'
    }
  },

  bio: {
    microscope: {
      title: 'Gene Expression / Cell Biology',
      url: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_all.html',
      guide: `Explore gene expression and protein synthesis.
• The simulation shows DNA being transcribed to mRNA and translated to protein.
• Drag RNA polymerase onto the DNA to start transcription.
• Drag ribosomes onto mRNA to begin translation.
• Mutate the DNA sequence and observe how the protein changes.
• This connects molecular biology to observable traits.`,
      tips: 'A single base change (point mutation) can completely alter the protein produced — the basis of genetic disorders.'
    },
    dna: {
      title: 'DNA / Protein Synthesis',
      url: 'https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_all.html',
      guide: `Use the Gene Expression simulation to study the central dogma.
• Transcription: DNA → mRNA happens in the nucleus (top area).
• Translation: mRNA → Protein happens at ribosomes (bottom area).
• Watch the amino acid chain grow as the ribosome moves along the mRNA.
• The protein folds into a 3D shape automatically.
• Try the "Multiple Cells" tab to compare expression across cells.`,
      tips: 'Not all genes are expressed in all cells — this is how cells differentiate into different types (nerve, muscle, skin, etc.).'
    },
    punnett: {
      title: 'Natural Selection / Genetics',
      url: 'https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_all.html',
      guide: `Study genetics and evolution through Natural Selection.
• Start with a population of bunnies with different fur colors.
• Add a selection factor (e.g., wolves, food scarcity) to drive evolution.
• Mutations introduce new traits into the gene pool.
• Track allele frequencies over generations.
• Observe how dominant vs recessive traits spread through populations.`,
      tips: 'Add a "Tough Food" environment and wait — bunnies with longer teeth will become dominant over generations.'
    },
    cell: {
      title: 'Cell Membrane / Diffusion',
      url: 'https://phet.colorado.edu/sims/html/membrane-channels/latest/membrane-channels_all.html',
      guide: `Explore cell membrane transport with the Membrane Channels simulation.
• Small molecules (like oxygen) diffuse freely across the membrane.
• Larger molecules need channel proteins to pass through.
• Drag channel proteins into the membrane to enable transport.
• Observe how concentration gradients drive diffusion.
• Active vs passive transport: some channels require energy (ATP).`,
      tips: 'Passive transport goes DOWN the concentration gradient (high to low). Active transport can move molecules AGAINST their gradient but requires energy.'
    }
  }
};
