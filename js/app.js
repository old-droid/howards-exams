const App = {
  state: {
    currentTab: 'dashboard',
    courseFilter: '',
    courseDept: 'All'
  },

  init() {
    this.render();
    this.bindEvents();
    this.switchTab('dashboard');
    this.fetchDailyTip();
  },

  render() {
    this.renderSidebar();
    this.renderDashboard();
    this.renderCourses();
    this.renderShadowform();
    this.renderLabs();
  },

  renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    const items = [
      { id: 'dashboard', icon: '📊', label: 'Dashboard', badge: '' },
      { id: 'courses', icon: '📚', label: 'Courses', badge: `${COURSES.length}` },
      { id: 'labs', icon: '🔬', label: 'Digital Labs', badge: '3' },
      { id: 'shadowform', icon: '🎭', label: 'Shadowform', badge: 'Tutor' }
    ];
    nav.innerHTML = items.map(item => `
      <div class="nav-item" data-tab="${item.id}">
        <span class="icon">${item.icon}</span>
        ${item.label}
        ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
      </div>
    `).join('');
  },

  renderDashboard() {
    const container = document.getElementById('tabDashboard');
    const today = new Date();
    const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    container.innerHTML = `
      <div class="welcome-banner">
        <h2>⎆ Howards the OSSU</h2>
        <p>${dateStr} — follow the MIT Challenge path with structured guidebooks, interactive labs & AI tutoring prompts</p>
      </div>

      <div class="tip-card" id="dailyTipCard">
        <div class="tip-label">✦ Daily Study Tip</div>
        <div class="tip-text" id="dailyTipText"><span class="tip-loader"></span></div>
        <div class="tip-source" id="dailyTipSource"></div>
      </div>

      <div class="quick-stats">
        <div class="stat-card">
          <div class="stat-num">${COURSES.length}</div>
          <div class="stat-label">MIT OCW Courses</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${SHADOWFORM_PROMPTS.length}</div>
          <div class="stat-label">LLM Tutor Templates</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">3</div>
          <div class="stat-label">Interactive Labs</div>
        </div>
        <div class="stat-card">
          <div class="stat-num">${NOTEBOOKLM_TIPS.length}</div>
          <div class="stat-label">NotebookLM Tips</div>
        </div>
      </div>

      <div class="section-title">Quick Start</div>
      <div class="card-row">
        <div class="card card-hover" onclick="App.switchTab('courses')" style="cursor:pointer">
          <strong>📚 Browse Courses</strong>
          <p style="font-size:12px;color:var(--text-secondary);margin-top:4px">Explore ${COURSES.length} MIT OCW courses with written guidebooks</p>
        </div>
        <div class="card card-hover" onclick="App.switchTab('labs')" style="cursor:pointer">
          <strong>🔬 Open Labs</strong>
          <p style="font-size:12px;color:var(--text-secondary);margin-top:4px">Interactive simulations for Physics, Math & Biology</p>
        </div>
        <div class="card card-hover" onclick="App.switchTab('shadowform')" style="cursor:pointer">
          <strong>🎭 Shadowform</strong>
          <p style="font-size:12px;color:var(--text-secondary);margin-top:4px">Copy-paste LLM prompts to turn AI into your personal tutor</p>
        </div>
      </div>
    `;
  },

  renderCourses() {
    const container = document.getElementById('tabCourses');

    const depts = ['All', ...new Set(COURSES.map(c => c.dept))];

    container.innerHTML = `
      <h2>📚 MIT OpenCourseWare</h2>
      <p class="subtitle">${COURSES.length} courses with written guidebooks, study resources & exam prep</p>

      <input type="text" class="search-bar" id="courseSearch" placeholder="Search courses by title, code, or topic..." />

      <div class="filters" id="deptFilters">
        ${depts.map(d => `<button class="filter-chip ${d === 'All' ? 'active' : ''}" data-dept="${d}">${d}</button>`).join('')}
      </div>

      <div class="card-row" id="courseGrid"></div>
    `;

    this.renderCourseGrid();

    document.getElementById('courseSearch').addEventListener('input', (e) => {
      this.state.courseFilter = e.target.value;
      this.renderCourseGrid();
    });
  },

  renderCourseGrid() {
    const grid = document.getElementById('courseGrid');
    if (!grid) return;

    const filter = this.state.courseFilter.toLowerCase();
    const dept = this.state.courseDept;

    const filtered = COURSES.filter(c => {
      const matchText = c.code.toLowerCase().includes(filter) ||
        c.title.toLowerCase().includes(filter) ||
        c.topics.some(t => t.toLowerCase().includes(filter));
      const matchDept = dept === 'All' || c.dept === dept;
      return matchText && matchDept;
    });

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>No courses match your search</p></div>`;
      return;
    }

    grid.innerHTML = filtered.map(c => `
      <div class="course-card" onclick="App.openGuidebook('${c.code}')">
        <div class="course-code">${c.code}</div>
        <div class="course-title">${c.title}</div>
        <div class="course-desc">${c.desc}</div>
        <div class="course-dept">${c.dept}</div>
        <div class="course-meta">
          <span>📖 ${c.topics.length} topics</span>
          <span>⏱ ${c.hours}</span>
        </div>
      </div>
    `).join('');
  },

  openGuidebook(code) {
    const course = COURSES.find(c => c.code === code);
    if (!course) return;

    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBody');

    body.innerHTML = `
      <div class="modal-header">
        <div>
          <h3>${course.code}: ${course.title}</h3>
          <div class="modal-subtitle">${course.dept} · ${course.hours} · Prereqs: ${course.prereqs}</div>
        </div>
        <button class="modal-close" onclick="App.closeModal()">✕</button>
      </div>
      <div class="modal-body">
        <p style="margin-bottom:12px">
          <a href="${course.ocwUrl}" target="_blank" rel="noopener" class="resource-link" style="font-size:13px;padding:6px 16px">
            🌐 Open on MIT OCW ↗
          </a>
        </p>
        <p>${course.desc}</p>

        <h4>📖 Topics Covered</h4>
        <ul>${course.topics.map(t => `<li>${t}</li>`).join('')}</ul>

        <h4>📕 Textbook</h4>
        <p>${course.textbook}</p>

        <h4>🗺️ Study Guidebook</h4>
        <p style="white-space:pre-wrap">${course.guidebook}</p>

        <h4>🔗 Supplementary Resources</h4>
        <div>${course.resources.map(r => `<span class="resource-link">${r}</span>`).join('')}</div>
      </div>
    `;

    overlay.classList.add('open');
    overlay.onclick = (e) => { if (e.target === overlay) this.closeModal(); };
  },

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('open');
  },

  renderShadowform() {
    const container = document.getElementById('tabShadowform');

    container.innerHTML = `
      <h2>🎭 Shadowform</h2>
      <p class="subtitle">Copy-paste LLM prompt templates to transform any AI into your personal tutor. Fill in the <code>{placeholders}</code> and paste.</p>

      <div class="section-title">🧑‍🏫 LLM Tutor Prompt Templates</div>
      <div id="promptAccordion">
        ${SHADOWFORM_PROMPTS.map((p, i) => `
          <div class="prompt-card">
            <div class="prompt-card-header" onclick="App.togglePrompt(${i})">
              <span class="prompt-title">${p.title}</span>
              <span class="prompt-toggle">▾</span>
            </div>
            <div class="prompt-card-body" id="promptBody${i}">
              <p>Replace the <code>{placeholders}</code> with your details, then copy and paste into ChatGPT, Claude, or any LLM.</p>
              <div class="prompt-text" id="promptText${i}">${p.prompt}</div>
              <button class="copy-btn" onclick="App.copyPrompt(${i})">📋 Copy to Clipboard</button>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="section-title">📝 Mock Test Generator Templates</div>
      <div id="mockTestAccordion">
        ${MOCK_TEST_PROMPTS.map((p, i) => {
          const idx = SHADOWFORM_PROMPTS.length + i;
          return `
            <div class="prompt-card">
              <div class="prompt-card-header" onclick="App.togglePrompt(${idx})">
                <span class="prompt-title">${p.title}</span>
                <span class="prompt-toggle">▾</span>
              </div>
              <div class="prompt-card-body" id="promptBody${idx}">
                <p>Fill in the <code>{placeholders}</code> to generate a custom exam.</p>
                <div class="prompt-text" id="promptText${idx}">${p.prompt}</div>
                <button class="copy-btn" onclick="App.copyPrompt(${idx})">📋 Copy to Clipboard</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="section-title" style="margin-top:28px">📋 NotebookLM Tips</div>
      <div class="card">
        <ul class="tip-list">
          ${NOTEBOOKLM_TIPS.map(t => `
            <li><strong>${t.title}</strong><br>${t.content}</li>
          `).join('')}
        </ul>
      </div>
    `;
  },

  togglePrompt(idx) {
    const body = document.getElementById(`promptBody${idx}`);
    const header = body.previousElementSibling;
    const isOpen = body.classList.contains('open');
    body.classList.toggle('open');
    header.classList.toggle('open');
  },

  copyPrompt(idx) {
    const textEl = document.getElementById(`promptText${idx}`);
    let text = textEl.textContent;
    navigator.clipboard.writeText(text).then(() => {
      const btn = textEl.parentElement.querySelector('.copy-btn');
      btn.textContent = '✅ Copied!';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.textContent = '📋 Copy to Clipboard';
        btn.classList.remove('copied');
      }, 2000);
    }).catch(() => {
      const range = document.createRange();
      range.selectNode(textEl);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand('copy');
      window.getSelection().removeAllRanges();
    });
  },

  renderLabs() {
    const container = document.getElementById('tabLabs');
    const equipment = LAB_GUIDES;

    function makeEquipWorkspace(labKey, equipKey) {
      const e = equipment[labKey][equipKey];
      const id = labKey + equipKey.charAt(0).toUpperCase() + equipKey.slice(1);
      return `
        <div class="equip-workspace" id="${id}">
          <div class="card">
            <div class="equip-header">
              <span class="equip-name">${e.title}</span>
              <span class="equip-model">PhET Interactive Simulations</span>
            </div>
            <div class="lab-iframe-wrap">
              <iframe src="${e.url}" class="lab-iframe" loading="lazy" allowfullscreen></iframe>
            </div>
            <div class="lab-guidebook">
              <div class="lab-guide-section">
                <strong>📘 Lab Guidebook</strong>
                <div class="lab-guide-text">${e.guide.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="lab-guide-section" style="margin-top:8px">
                <strong>💡 Pro Tip</strong>
                <div style="font-size:12px;color:var(--text-secondary);margin-top:2px">${e.tips}</div>
              </div>
            </div>
          </div>
        </div>`;
    }

    function makeEquipBar(labKey, equipKeys) {
      return equipKeys.map((k, i) =>
        `<button class="equip-btn${i===0?' active':''}" data-equip="${k}">${equipment[labKey][k].title.split('/')[0].trim()}</button>`
      ).join('');
    }

    container.innerHTML = `
      <h2>🔬 Comprehensive Digital Labs</h2>
      <p class="subtitle">Virtual lab stations powered by PhET & open-source simulations — each with a written guidebook</p>

      <div class="lab-tabs">
        <button class="lab-tab active" data-lab="physics">⚡ Physics Lab</button>
        <button class="lab-tab" data-lab="math">📐 Math Lab</button>
        <button class="lab-tab" data-lab="bio">🧬 Biology Lab</button>
      </div>

      <div class="lab-panel active" id="labPhysics">
        <div class="equip-bar" id="physicsEquipBar">${makeEquipBar('physics', Object.keys(equipment.physics))}</div>
        ${Object.keys(equipment.physics).map(k => makeEquipWorkspace('physics', k)).join('')}
      </div>

      <div class="lab-panel" id="labMath">
        <div class="equip-bar" id="mathEquipBar">${makeEquipBar('math', Object.keys(equipment.math))}</div>
        ${Object.keys(equipment.math).map(k => makeEquipWorkspace('math', k)).join('')}
      </div>

      <div class="lab-panel" id="labBio">
        <div class="equip-bar" id="bioEquipBar">${makeEquipBar('bio', Object.keys(equipment.bio))}</div>
        ${Object.keys(equipment.bio).map(k => makeEquipWorkspace('bio', k)).join('')}
      </div>
    `;
  },



  bindEvents() {
    // Tab switching
    document.getElementById('sidebarNav').addEventListener('click', (e) => {
      const item = e.target.closest('.nav-item');
      if (item) this.switchTab(item.dataset.tab);
    });

    // Labs tab & equipment switching
    document.getElementById('tabLabs').addEventListener('click', (e) => {
      const labTab = e.target.closest('.lab-tab');
      if (labTab) {
        document.querySelectorAll('.lab-tab').forEach(t => t.classList.remove('active'));
        labTab.classList.add('active');
        document.querySelectorAll('.lab-panel').forEach(p => p.classList.remove('active'));
        document.getElementById(`lab${labTab.dataset.lab.charAt(0).toUpperCase() + labTab.dataset.lab.slice(1)}`).classList.add('active');
        if (labTab.dataset.lab === 'physics') setTimeout(() => Labs.initPhysics(), 50);
        if (labTab.dataset.lab === 'math') setTimeout(() => Labs.initMath(), 50);
        if (labTab.dataset.lab === 'bio') setTimeout(() => Labs.initBio(), 50);
        return;
      }

      const equipBtn = e.target.closest('.equip-btn');
      if (equipBtn) {
        const bar = equipBtn.closest('.equip-bar');
        const prefix = bar.id.replace('EquipBar', '');
        bar.querySelectorAll('.equip-btn').forEach(b => b.classList.remove('active'));
        equipBtn.classList.add('active');
        const panel = bar.closest('.lab-panel');
        panel.querySelectorAll('.equip-workspace').forEach(w => w.classList.remove('active'));
        const target = document.getElementById(`${prefix}${equipBtn.dataset.equip.charAt(0).toUpperCase() + equipBtn.dataset.equip.slice(1)}`);
        if (target) target.classList.add('active');
        return;
      }
    });

    // Course department filters
    document.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (!chip || !chip.closest('#deptFilters')) return;
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      this.state.courseDept = chip.dataset.dept;
      this.renderCourseGrid();
    });

    // Global keyboard: Escape to close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });
  },

  switchTab(tabId) {
    this.state.currentTab = tabId;

    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.tab === tabId);
    });

    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.classList.toggle('active', tab.id === `tab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
    });

    // Init labs when switching to labs tab
    if (tabId === 'labs') {
      setTimeout(() => {
        Labs.initPhysics();
        Labs.initMath();
        Labs.initBio();
      }, 100);
    }
  },

  async fetchDailyTip() {
    const tipText = document.getElementById('dailyTipText');
    const tipSource = document.getElementById('dailyTipSource');

    // Use date to pick a curated tip deterministically as baseline
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
    const curatedTip = STUDY_TIPS_CURATED[dayOfYear % STUDY_TIPS_CURATED.length];

    try {
      const res = await fetch('https://api.adviceslip.com/advice?t=' + Date.now());
      const data = await res.json();
      if (data && data.slip && data.slip.advice) {
        tipText.textContent = `"${data.slip.advice}"`;
        tipSource.textContent = `adviceslip.com · Supplement: ${curatedTip.slice(0, 60)}...`;
        return;
      }
    } catch { /* fallback to curated */ }

    tipText.textContent = curatedTip;
    tipSource.textContent = '💡 Howards OSSU curated tip for today';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
