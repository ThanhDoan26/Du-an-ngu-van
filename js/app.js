/**
 * SĨ TỬ 12 - MAIN APPLICATION CONTROLLER
 * Quản lý điều hướng Tabs, Giao diện Sáng/Tối, m thanh, Châm ngôn mỗi ngày
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. KHỞI TẠO CÁC ENGINE CON
  if (window.studyEngine) window.studyEngine.init();
  if (window.gameEngine) window.gameEngine.init();

  // 2. CHUYỂN ĐỔI GIAO DIỆN SÁNG / TỐI (THEME)
  initTheme();

  // 3. ĐIỀU HƯỚNG TABS
  initTabs();

  // 4. ÂM THANH TOGGLE
  initSoundToggle();

  // 5. CHÂM NGÔN HẰNG NGÀY
  renderDailyQuote();

  // 6. NÚT IN ẤN / PRINT ĐỀ CƯƠNG
  initPrintButton();
});

// KHỞI TẠO THEME SÁNG / TỐI
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const savedTheme = localStorage.getItem('theme_preference') || 'dark';

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme_preference', next);
      updateThemeIcon(next);
      if (window.soundEngine) soundEngine.playClick();
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector('#theme-toggle-btn i');
  if (!icon) return;
  if (theme === 'dark') {
    icon.className = 'fas fa-sun';
  } else {
    icon.className = 'fas fa-moon';
  }
}

// ĐIỀU HƯỚNG TABS
function initTabs() {
  const navTabs = document.querySelectorAll('.nav-tab-btn');
  const tabPanes = document.querySelectorAll('.tab-content-pane');

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetPaneId = tab.dataset.target;
      if (!targetPaneId) return;

      navTabs.forEach(t => t.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = document.getElementById(targetPaneId);
      if (targetPane) {
        targetPane.classList.add('active');
        // Cuộn lên đầu view mượt mà
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      if (window.soundEngine) soundEngine.playClick();
    });
  });

  // Mobile drawer menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('open');
    });

    // Tự đóng drawer khi click vào tab trên mobile
    navTabs.forEach(t => {
      t.addEventListener('click', () => {
        mainNav.classList.remove('open');
      });
    });
  }
}

// BẬT / TẮT ÂM THANH
function initSoundToggle() {
  const soundBtn = document.getElementById('sound-toggle-btn');
  if (!soundBtn) return;

  const isMuted = soundEngine.isMuted;
  updateSoundIcon(isMuted);

  soundBtn.addEventListener('click', () => {
    const muted = soundEngine.toggleMute();
    updateSoundIcon(muted);
    if (!muted) soundEngine.playClick();
  });
}

function updateSoundIcon(isMuted) {
  const icon = document.querySelector('#sound-toggle-btn i');
  if (!icon) return;
  if (isMuted) {
    icon.className = 'fas fa-volume-xmark';
  } else {
    icon.className = 'fas fa-volume-high';
  }
}

// CHÂM NGÔN ĐỘNG LỰC HẰNG NGÀY
function renderDailyQuote() {
  const quoteText = document.getElementById('daily-quote-text');
  const quoteAuthor = document.getElementById('daily-quote-author');
  if (!quoteText || !quoteAuthor) return;

  const todayIdx = Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % MOTIVATIONAL_QUOTES.length;
  const item = MOTIVATIONAL_QUOTES[todayIdx] || MOTIVATIONAL_QUOTES[0];

  quoteText.textContent = `"${item.quote}"`;
  quoteAuthor.textContent = `— ${item.author}`;
}

// NÚT IN ẤN ĐỀ CƯƠNG
function initPrintButton() {
  const printBtn = document.getElementById('btn-print-notes');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      if (window.soundEngine) soundEngine.playClick();
      window.print();
    });
  }
}
