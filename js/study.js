/**
 * SĨ TỬ 12 - STUDY & LITERATURE HUB ENGINE
 * Quản lý hiển thị Tác phẩm, Nhận định, NLXH, Đọc hiểu, Flashcards
 */

class StudyEngine {
  constructor() {
    this.currentFlashcardIdx = 0;
    this.savedWorks = JSON.parse(localStorage.getItem('saved_lit_works') || '[]');
    this.viewedFlashcards = new Set(JSON.parse(localStorage.getItem('viewed_flashcards') || '[]'));
  }

  init() {
    this.renderLiteratureWorks();
    this.renderQuotes();
    this.renderNLXH();
    this.renderDocHieu();
    this.renderMultiSubject();
    this.initFlashcards();
    this.setupEventListeners();
  }

  // 1. RENDER CÁC TÁC PHẨM VĂN HỌC LỚP 12
  renderLiteratureWorks(filter = 'all', keyword = '') {
    const container = document.getElementById('literature-works-grid');
    if (!container) return;

    let filtered = LITERATURE_WORKS;
    if (filter === 'poetry') {
      filtered = filtered.filter(w => w.genre.toLowerCase().includes('thơ') || w.genre.toLowerCase().includes('trường ca'));
    } else if (filter === 'prose') {
      filtered = filtered.filter(w => !w.genre.toLowerCase().includes('thơ') && !w.genre.toLowerCase().includes('trường ca'));
    }

    if (keyword.trim()) {
      const q = keyword.toLowerCase().trim();
      filtered = filtered.filter(w => 
        w.title.toLowerCase().includes(q) ||
        w.author.toLowerCase().includes(q) ||
        w.summary.toLowerCase().includes(q)
      );
    }

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <i class="fas fa-book-open"></i>
          <p>Không tìm thấy tác phẩm nào phù hợp với từ khóa "${keyword}".</p>
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(work => {
      const isSaved = this.savedWorks.includes(work.id);
      return `
        <article class="work-card" data-id="${work.id}">
          <div class="work-card-header">
            <div class="work-badge-group">
              <span class="badge badge-primary">${work.genre.split('/')[0].trim()}</span>
              <span class="badge badge-outline">${work.year}</span>
            </div>
            <button class="btn-icon bookmark-btn ${isSaved ? 'active' : ''}" 
                    title="${isSaved ? 'Bỏ lưu' : 'Lưu vào sổ tay'}" 
                    onclick="studyEngine.toggleSaveWork('${work.id}', event)">
              <i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>
            </button>
          </div>

          <h3 class="work-title">${work.title}</h3>
          <p class="work-author"><i class="fas fa-feather-pointed"></i> ${work.author} <span>(${work.location})</span></p>

          <p class="work-summary">${work.summary}</p>

          <div class="work-keypoints-preview">
            <strong><i class="fas fa-compass"></i> Luận điểm trọng tâm:</strong>
            <ul>
              ${work.themes.map(t => `<li>${t.title}</li>`).join('')}
            </ul>
          </div>

          <div class="work-card-footer">
            <button class="btn btn-secondary btn-sm" onclick="studyEngine.openWorkDetail('${work.id}')">
              <i class="fas fa-expand"></i> Khám phá chi tiết & Dàn ý 9+
            </button>
          </div>
        </article>
      `;
    }).join('');
  }

  // MỞ MODAL CHI TIẾT TÁC PHẨM
  openWorkDetail(workId) {
    const work = LITERATURE_WORKS.find(w => w.id === workId);
    if (!work) return;

    if (window.soundEngine) soundEngine.playClick();

    const modal = document.getElementById('work-detail-modal');
    const content = document.getElementById('work-detail-content');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="modal-work-header">
        <span class="badge badge-accent">${work.genre}</span>
        <h2>${work.title}</h2>
        <div class="work-meta-row">
          <span><i class="fas fa-pen-nib"></i> Tác giả: <strong>${work.author}</strong></span>
          <span><i class="far fa-calendar-alt"></i> Sáng tác: <strong>${work.year} (${work.location})</strong></span>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="section-title"><i class="fas fa-history"></i> Hoàn cảnh sáng tác & Xuất xứ</h4>
        <div class="glass-box highlight-box">
          <p>${work.background}</p>
        </div>
      </div>

      <div class="modal-section">
        <h4 class="section-title"><i class="fas fa-layer-group"></i> Sơ đồ luận điểm & Phân tích chuyên sâu</h4>
        <div class="themes-accordion">
          ${work.themes.map((theme, i) => `
            <div class="theme-item">
              <div class="theme-header">
                <span class="theme-num">Luận điểm ${i + 1}</span>
                <h5>${theme.title}</h5>
              </div>
              <div class="theme-body">
                <p class="theme-analysis">${theme.analysis}</p>
                <div class="quote-tags">
                  <strong>Trích dẫn tiêu biểu:</strong>
                  ${theme.quotes.map(q => `<blockquote class="mini-quote">"${q}"</blockquote>`).join('')}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h4 class="section-title"><i class="fas fa-gem"></i> Nhận định văn học trích dẫn đắt giá</h4>
        <div class="quotes-grid">
          ${work.quotesForEssays.map(q => `
            <div class="quote-card-mini">
              <p class="quote-text">"${q.text}"</p>
              <p class="quote-author">— ${q.author}</p>
              <button class="btn btn-copy-mini" onclick="studyEngine.copyText('${q.text.replace(/'/g, "\\'")}', this)">
                <i class="far fa-copy"></i> Sao chép
              </button>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h4 class="section-title"><i class="fas fa-lightbulb"></i> Bí kíp & Mẹo tránh bẫy phòng thi</h4>
        <div class="exam-tip-box">
          <i class="fas fa-award"></i>
          <div>${work.examTips}</div>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    const modal = document.getElementById('work-detail-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  toggleSaveWork(workId, event) {
    if (event) event.stopPropagation();
    const idx = this.savedWorks.indexOf(workId);
    if (idx > -1) {
      this.savedWorks.splice(idx, 1);
      this.showToast('Đã bỏ lưu tác phẩm khỏi sổ tay');
    } else {
      this.savedWorks.push(workId);
      this.showToast('Đã thêm vào sổ tay ôn tập!');
      if (window.soundEngine) soundEngine.playCorrect();
    }
    localStorage.setItem('saved_lit_works', JSON.stringify(this.savedWorks));
    
    // Cập nhật icon trên thẻ
    const card = document.querySelector(`.work-card[data-id="${workId}"] .bookmark-btn`);
    if (card) {
      const isSaved = this.savedWorks.includes(workId);
      card.classList.toggle('active', isSaved);
      card.innerHTML = `<i class="${isSaved ? 'fas' : 'far'} fa-bookmark"></i>`;
    }
  }

  // 2. RENDER KHO NHẬN ĐỊNH VĂN HỌC
  renderQuotes(category = 'all') {
    const container = document.getElementById('quotes-container');
    if (!container) return;

    let quotes = LIT_QUOTES;
    if (category !== 'all') {
      quotes = quotes.filter(q => q.category.toLowerCase().includes(category.toLowerCase()));
    }

    container.innerHTML = quotes.map(q => `
      <div class="quote-card">
        <div class="quote-cat"><i class="fas fa-tag"></i> ${q.category}</div>
        <div class="quote-body">
          <i class="fas fa-quote-left quote-icon"></i>
          <p class="quote-content">${q.quote}</p>
        </div>
        <div class="quote-footer">
          <span class="quote-author-name"><strong>${q.author}</strong></span>
          <button class="btn-icon" title="Sao chép câu nói" onclick="studyEngine.copyText('${q.quote.replace(/'/g, "\\'")}', this)">
            <i class="far fa-copy"></i>
          </button>
        </div>
        <div class="quote-apply">
          <i class="fas fa-lightbulb"></i> <strong>Ứng dụng:</strong> ${q.application}
        </div>
      </div>
    `).join('');
  }

  // 3. RENDER NGHỊ LUẬN XÃ HỘI
  renderNLXH() {
    const stepsContainer = document.getElementById('nlxh-steps');
    const evidenceContainer = document.getElementById('nlxh-evidence');

    if (stepsContainer) {
      stepsContainer.innerHTML = NLXH_HANDBOOK.formula5Steps.map(s => `
        <div class="step-card">
          <div class="step-badge">Bước ${s.step}</div>
          <h4>${s.name}</h4>
          <p>${s.content}</p>
        </div>
      `).join('');
    }

    if (evidenceContainer) {
      evidenceContainer.innerHTML = NLXH_HANDBOOK.goldenEvidence.map(e => `
        <div class="evidence-card">
          <div class="evidence-topic"><i class="fas fa-bookmark"></i> ${e.topic}</div>
          <h4>${e.name}</h4>
          <p>${e.detail}</p>
        </div>
      `).join('');
    }
  }

  // 4. RENDER ĐỌC HIỂU
  renderDocHieu() {
    const container = document.getElementById('doc-hieu-container');
    if (!container) return;

    container.innerHTML = DOC_HIEU_HANDBOOK.map(sec => `
      <div class="doc-hieu-card">
        <h3 class="doc-hieu-title"><i class="fas fa-check-circle"></i> ${sec.category}</h3>
        <div class="doc-hieu-list">
          ${sec.items.map(item => `
            <div class="doc-hieu-item">
              <span class="item-name">${item.name}</span>
              <span class="item-sign">${item.sign}</span>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  }

  // 5. RENDER SỔ TAY ĐA MÔN
  renderMultiSubject() {
    const container = document.getElementById('multi-subject-container');
    if (!container) return;

    container.innerHTML = MULTI_SUBJECT_CHEAT_SHEET.map(sub => `
      <div class="cheat-sheet-card" style="--sub-color: ${sub.color}">
        <div class="sub-card-header">
          <div class="sub-icon-circle"><i class="${sub.icon}"></i></div>
          <h3>${sub.subject}</h3>
        </div>
        <ul class="sub-keypoints">
          ${sub.keyPoints.map(pt => `<li>${pt}</li>`).join('')}
        </ul>
      </div>
    `).join('');
  }

  // 6. FLASHCARDS INTERACTIVE
  initFlashcards() {
    this.renderCurrentFlashcard();

    const prevBtn = document.getElementById('fc-prev');
    const nextBtn = document.getElementById('fc-next');
    const flipBtn = document.getElementById('fc-flip');
    const card = document.getElementById('flashcard-element');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (window.soundEngine) soundEngine.playClick();
        this.currentFlashcardIdx = (this.currentFlashcardIdx - 1 + FLASHCARDS.length) % FLASHCARDS.length;
        this.renderCurrentFlashcard();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (window.soundEngine) soundEngine.playClick();
        this.currentFlashcardIdx = (this.currentFlashcardIdx + 1) % FLASHCARDS.length;
        this.renderCurrentFlashcard();
      });
    }

    if (card) {
      card.addEventListener('click', () => {
        if (window.soundEngine) soundEngine.playClick();
        card.classList.toggle('flipped');
        this.markFlashcardViewed(this.currentFlashcardIdx);
      });
    }

    if (flipBtn) {
      flipBtn.addEventListener('click', () => {
        if (card) card.classList.toggle('flipped');
      });
    }
  }

  renderCurrentFlashcard() {
    const card = document.getElementById('flashcard-element');
    const qEl = document.getElementById('fc-question');
    const aEl = document.getElementById('fc-answer');
    const hintEl = document.getElementById('fc-hint');
    const countEl = document.getElementById('fc-counter');
    const subBadge = document.getElementById('fc-subject-badge');

    if (!card) return;

    // Reset lật
    card.classList.remove('flipped');

    const item = FLASHCARDS[this.currentFlashcardIdx];
    if (qEl) qEl.textContent = item.question;
    if (aEl) aEl.textContent = item.answer;
    if (hintEl) hintEl.textContent = item.hint ? `💡 Gợi ý: ${item.hint}` : '';
    if (countEl) countEl.textContent = `${this.currentFlashcardIdx + 1} / ${FLASHCARDS.length}`;
    if (subBadge) subBadge.textContent = item.subjectName;
  }

  markFlashcardViewed(idx) {
    this.viewedFlashcards.add(idx);
    localStorage.setItem('viewed_flashcards', JSON.stringify(Array.from(this.viewedFlashcards)));
    
    // Kiểm tra thành tích mọt sách
    if (this.viewedFlashcards.size >= 6 && window.gameEngine) {
      gameEngine.unlockAchievement('flashcard_explorer');
    }
  }

  copyText(text, btnElement) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Đã sao chép vào bộ nhớ tạm!');
      if (window.soundEngine) soundEngine.playClick();
      if (btnElement) {
        const orig = btnElement.innerHTML;
        btnElement.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => btnElement.innerHTML = orig, 1800);
      }
    });
  }

  showToast(msg) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.className = 'app-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('work-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const activeGenreBtn = document.querySelector('.genre-filter-btn.active');
        const genre = activeGenreBtn ? activeGenreBtn.dataset.genre : 'all';
        this.renderLiteratureWorks(genre, e.target.value);
      });
    }

    // Genre filter buttons
    const genreBtns = document.querySelectorAll('.genre-filter-btn');
    genreBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        genreBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
        const keyword = searchInput ? searchInput.value : '';
        this.renderLiteratureWorks(btn.dataset.genre, keyword);
      });
    });

    // Quote category buttons
    const quoteCatBtns = document.querySelectorAll('.quote-filter-btn');
    quoteCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        quoteCatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        if (window.soundEngine) soundEngine.playClick();
        this.renderQuotes(btn.dataset.cat);
      });
    });

    // Close modal click outside or ESC
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeModal();
    });

    const modal = document.getElementById('work-detail-modal');
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) this.closeModal();
      });
    }
  }
}

const studyEngine = new StudyEngine();
window.studyEngine = studyEngine;
