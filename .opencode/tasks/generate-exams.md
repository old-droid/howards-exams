# Generate MIT-Level Exam PDFs — 25 Questions Each, Extremely Hard

You are in `/home/meow/howards` — the project root of an MIT OCW study companion app.

## Your Mission

1. **Read** `js/data.js` — it has a `const COURSES = [...]` array with 70 MIT OCW courses.
2. **Create** `scripts/generate_exams.js` — a standalone Node.js script (no npm packages, only `fs`, `path`, `child_process`).
3. **Run** the script with `node scripts/generate_exams.js`.

## What the Script Must Do

For each of the 70 courses, generate a LaTeX exam PDF at:
`exams/{code_sanitized}/{code_sanitized}_exam_{YYYY}_{MM}.tex`

where `code_sanitized` replaces dots and slashes with underscores (e.g., `18.01SC` → `18_01SC`).

### Each Exam Must Have:

- **25 questions** — extremely hard, MIT graduate-level difficulty
- **Document class**: `\documentclass[12pt,a4paper]{exam}`
- **Packages**: `amsmath, amssymb, amsthm, geometry, graphicx, hyperref, fancyhdr, enumitem`
- **Header**: course code, title, month/year, "EXTREMELY HARD — MIT LEVEL"
- **Time limit**: 3 hours | Total marks: 100
- **Questions numbered** 1–25, each with parts (a), (b), (c) if multi-step
- **Points per question** summing to 100 total
- **Full solutions** after `\newpage` \section*{Solutions}

### Problem Difficulty Requirements

Create **department-specific problem pools**. Each pool must contain at least 40 problems, from which 25 are selected via seeded random. Seeded RNG: `seed = YYYYMM` (e.g., 202605), use a simple mulberry32 or similar PRNG.

#### Department Problem Pools:

**Mathematics** (18.01, 18.02, 18.03, 18.05, 18.06): epsilon-delta proofs, series convergence/divergence (ratio/root/integral tests), uniform vs pointwise convergence, Lebesgue integration counterexamples, Banach fixed-point theorem, multivariate chain rule proofs, implicit function theorem, Stokes theorem on manifolds, classification of PDEs (elliptic/parabolic/hyperbolic), Sobolev spaces, Fourier transform on Schwartz distributions, spectral theorem for compact operators, numerical stability of Runge-Kutta, symplectic integrators for Hamiltonian systems

**CS** (6.0001, 6.006, 6.033, 6.034, 6.042J, 6.046, 6.004, 6.002, 6.041, 6.042): NP-completeness reduction proofs (3-SAT → Hamiltonian Path → Vertex Cover), probabilistic algorithm analysis (Chernoff bounds, martingale convergence), P vs BPP derandomization, adversary arguments for lower bounds, potential function amortized analysis, Byzantine generals agreement protocols, CAP theorem proofs, PAC-learning VC-dimension bounds, cryptographic one-way function constructions, Rice theorem undecidability, type-soundness for simply typed lambda calculus, garbage collection correctness proofs

**Physics** (8.01, 8.02, 8.03, 8.04): Noether theorem derivations (energy-momentum tensor), Lagrangian/Hamiltonian mechanics with constraints, Maxwell stress tensor, radiation reaction (Abraham-Lorentz force), QED scattering amplitudes (Feynman rules derivation), path integral formulation, spontaneous symmetry breaking (Goldstone theorem), Bell inequality violations, renormalization group, AdS/CFT correspondence basics, topological quantum field theory, Berry phase and geometric quantum mechanics

**Biology** (7.012, 7.013, 7.014, 7.05): Michaelis-Menten enzyme kinetics proofs, Hodgkin-Huxley model derivations, Hardy-Weinberg equilibrium perturbations, evolutionary game theory (ESS proofs), CRISPR-Cas9 off-target probability models, metabolic control analysis (flux control coefficients), stochastic gene expression (Langevin/Fokker-Planck), phylogenetic tree reconstruction (maximum likelihood proofs), protein folding thermodynamics (Anfinsen dogma)

**Chemistry** (5.111, 5.60, 3.091): Born-Oppenheimer approximation derivations, molecular orbital theory (Huckel method), transition state theory (Eyring equation proofs), Marcus theory of electron transfer, Franck-Condon principle, thermodynamic integration for free energy, coupled-cluster theory, density functional theory (Hohenberg-Kohn theorems), detailed balance in chemical kinetics

**Economics** (14.01, 14.02, 15.010, 15.401): General equilibrium existence proofs (Arrow-Debreu), mechanism design (revelation principle), Black-Scholes-Merton derivation, consumption-based asset pricing (Lucas model), auction theory revenue equivalence, Nash equilibrium refinements (trembling-hand perfection), prospect theory axiomatic foundations, DSGE model derivations

**Engineering** (1.050, 1.101, 2.001, 2.002, 2.003, 2.007, 10.37, 10.40, 10.302, 16.001, 16.06, 16.100): Navier-Stokes existence/smoothness, finite element method convergence proofs (Cea lemma), Lyapunov stability for nonlinear control, linear-quadratic-Gaussian regulator optimality, Kolmogorov turbulence theory, Prandtl boundary layer matching, yield surface evolution (plasticity), fracture mechanics (J-integral path independence)

**Humanities** (24.00, 24.01, 21L.001, 21L.006, 21L.009, 21H.001, 21H.112, 21H.151, 21M.011, 21M.030, 21M.051, 21A.101): Each exam should have essay-format questions requiring: (a) Exegesis of a primary text passage (identify author/work/argument, analyze rhetorical structure, evaluate logical validity). (b) Comparative analysis of two philosophical/literary frameworks (e.g., "Compare Kant's categorical imperative with Mill's utilitarianism — construct a case where they disagree and defend one position"). (c) Historical causality counterfactual ("If the Battle of Marathon had been won by Persia, trace the consequences for Western philosophy, art, and political institutions through 3 specific examples"). (d) Original argument construction ("Defend or refute: 'Consciousness cannot be reduced to physical processes' using at least 3 philosophical arguments and one empirical finding"). (e) Interdisciplinary synthesis ("Using tools from economics, political science, and psychology, design an institutional framework that maximizes both liberty and equality — defend against 3 objections")

**Other departments** (Management, Political Science, Architecture, Urban Studies, Brain & Cog Sci, Earth & Planetary Sci, Anthropology, Nuclear Science & Eng, Data/Society, Music): Similar proof-level rigor using the course's topics array. Each exam must have 25 questions.

### LaTeX Template

```latex
\documentclass[12pt,a4paper]{exam}
\usepackage[utf8]{inputenc}
\usepackage{amsmath,amssymb,amsthm}
\usepackage{geometry}
\usepackage{graphicx}
\usepackage{hyperref}
\usepackage{fancyhdr}
\usepackage{enumitem}
\pagestyle{fancy}
\lhead{MIT OCW — {COURSE_CODE}}
\rhead{{MONTH} {YEAR} — EXTREMELY HARD}
\cfoot{\thepage}
\renewcommand{\headrulewidth}{0.4pt}
\setlength{\parindent}{0pt}

\begin{document}

\begin{center}
{\LARGE \textbf{MIT OpenCourseWare}}\\[4pt]
{\large \textbf{{COURSE_CODE}}}\\[4pt]
{\large {COURSE_TITLE}}\\[4pt]
\vspace{0.3cm}
\rule{\textwidth}{1pt}\\[6pt]
{\bfseries Examination Paper — EXTREMELY HARD}\\[4pt]
{\itshape {COURSE_TITLE} — MIT Graduate Level}\\[4pt]
{\small Time limit: 3 hours \;|\; Total marks: 100 \;|\; This is a closed-book examination.}\\[4pt]
\rule{\textwidth}{1pt}
\end{center}

\vspace{0.4cm}

\begin{questions}

% 25 questions here

\end{questions}

\newpage

\section*{Solutions}

% 25 solutions here

\end{document}
```

### After Generating All .tex Files

Run: `pdflatex -interaction=nonstopmode {file}` for each .tex file to produce PDFs.

If pdflatex is not available, print a warning but still commit the .tex files.

## Constraints
- Zero Python
- Only Node.js built-ins
- All 70 courses must get an exam
- Every exam must have exactly 25 questions
- Difficulty: extremely hard (MIT graduate/proof level)
- The seeded RNG must be based on current YYYYMM
