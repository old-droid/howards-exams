# Generate MIT-Level Exam PDFs — Step by Step

You are in `/home/meow/howards`.

## Task
Create ONE Python script at `scripts/generate_exam.py` that generates an exam PDF for any MIT OCW course given its course code as a command-line argument.

### Requirements for `scripts/generate_exam.py`:
- Accept course code as argv[1] (e.g., `python3 generate_exam.py 18.01SC`)
- Read `js/data.js` to find the course by `code`
- Generate a LaTeX `.tex` file at `exams/{code_sanitized}/{code_sanitized}_exam_{YYYY}_{MM}.tex`
- Run `pdflatex -interaction=nonstopmode` on the .tex file to produce PDF
- If pdflatex fails, print a warning but exit 0 (don't crash)

### Each Exam Must Have:
- **25 questions** — extremely hard MIT graduate/proof level
- `\documentclass[12pt,a4paper]{exam}` with `amsmath, amssymb, amsthm, geometry, graphicx, hyperref, fancyhdr, enumitem`
- Header: course code, title, month/year, "EXTREMELY HARD — MIT LEVEL"
- 3-hour time limit, 100 total marks
- Questions numbered 1–25 summing to 100 points
- NO solutions
- Use a seeded RNG based on `YYYYMM` (mulberry32) so same month = same exam

### Department Problem Pools
Embed these into the Python script as arrays of problem template strings with `{course_code}`, `{title}` placeholders. Use the seeded RNG to pick 25.

**Mathematics**: epsilon-delta proofs, series convergence, uniform convergence counterexamples, Banach fixed-point, implicit function theorem, Stokes on manifolds, PDE classification, Sobolev spaces, Fourier on distributions, spectral theorem, Runge-Kutta stability, symplectic integrators

**CS**: NP-completeness reductions (3-SAT→Hamiltonian→VertexCover), Chernoff bounds, P vs BPP, adversary lower bounds, potential function amortized analysis, Byzantine generals, CAP theorem proofs, PAC VC-dimension, one-way functions, Rice theorem, type soundness, GC correctness

**Physics**: Noether theorem, Lagrangian/Hamiltonian constraints, Maxwell stress tensor, radiation reaction, QED Feynman rules, path integral, Goldstone theorem, Bell inequality, renormalization group, AdS/CFT, Berry phase

**Biology**: Michaelis-Menten proofs, Hodgkin-Huxley, Hardy-Weinberg perturbations, evolutionary ESS, CRISPR off-target probability, metabolic control analysis, stochastic gene expression, phylogeny ML proofs, Anfinsen dogma

**Chemistry**: Born-Oppenheimer, Huckel MO theory, Eyring equation, Marcus electron transfer, Franck-Condon, thermodynamic integration, coupled-cluster, DFT Hohenberg-Kohn, detailed balance

**Economics**: Arrow-Debreu equilibrium, revelation principle, Black-Scholes, Lucas asset pricing, auction revenue equivalence, trembling-hand perfection, prospect theory, DSGE

**Engineering**: Navier-Stokes, FEM Cea lemma, Lyapunov stability, LQG optimality, Kolmogorov turbulence, Prandtl boundary layer, plasticity yield surfaces, J-integral

**Humanities**: Exegesis, comparative analysis, historical counterfactuals, original argument construction, interdisciplinary synthesis

**Other**: Use the course's `topics` array to create proof-level problems

### LaTeX Template
```latex
\documentclass[12pt,a4paper]{exam}
\usepackage[utf8]{inputenc}
\usepackage{amsmath,amssymb,amsthm} ...
\begin{center}
{\LARGE \textbf{MIT OpenCourseWare}}\\{COURSE_CODE}\\{COURSE_TITLE}
\end{center}
\begin{questions} ... \end{questions}
\newpage \section*{Solutions}
\end{document}
```

### Run the Script Once
After writing it, run:
```
python3 scripts/generate_exam.py 18.01SC
```
to verify it works. Then stop.
