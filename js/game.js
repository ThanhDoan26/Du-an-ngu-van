/**
 * SĨ TỬ 12 - GAME ENGINE: ĐẤU TRƯỜNG TRI THỨC THPTQG
 * Tháp Tri Thức, Đua Tốc Độ 60s, Chuyên Sâu Ngữ Văn
 */

class GameEngine {
  constructor() {
    this.mode = 'tower'; // 'tower' | 'speedrun' | 'literature'
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.lives = 3;
    this.maxLives = 3;
    this.floor = 1;
    this.maxFloor = 10;
    this.currentQuestion = null;
    this.currentQuestionIdx = 0;
    this.questionQueue = [];
    this.timer = null;
    this.timeLeft = 25;
    this.questionStartTime = 0;
    this.totalCorrect = 0;
    this.litCorrectCount = 0;
    this.wrongAnswers = [];
    this.isAnswered = false;

    // Trợ giúp
    this.lifelines = {
      halfHalf: true,
      swap: true,
      freeze: true
    };

    // Thành tích & Kỷ lục
    this.unlockedAchievements = new Set(JSON.parse(localStorage.getItem('unlocked_achievements') || '[]'));
    this.highScores = JSON.parse(localStorage.getItem('game_high_scores') || '{"tower":0,"speedrun":0,"literature":0}');
  }

  init() {
    this.renderAchievementsList();
    this.updateStatsDisplay();
    this.setupGameUIEvents();
    this.initConfetti();
  }

  // BẮT ĐẦU VÁN CHƠI
  startGame(mode = 'tower') {
    this.mode = mode;
    this.score = 0;
    this.streak = 0;
    this.maxStreak = 0;
    this.lives = 3;
    this.floor = 1;
    this.totalCorrect = 0;
    this.litCorrectCount = 0;
    this.wrongAnswers = [];
    this.isAnswered = false;

    // Reset lifelines
    this.lifelines = {
      halfHalf: true,
      swap: true,
      freeze: true
    };
    this.updateLifelineButtons();

    // Chuẩn bị hàng đợi câu hỏi theo chế độ
    this.prepareQuestions(mode);

    // Chuyển view
    const lobby = document.getElementById('game-lobby');
    const arena = document.getElementById('game-arena');
    const summary = document.getElementById('game-summary');

    if (lobby) lobby.style.display = 'none';
    if (summary) summary.style.display = 'none';
    if (arena) arena.style.display = 'block';

    if (window.soundEngine) soundEngine.playClick();

    // Khởi tạo timer theo chế độ
    if (this.mode === 'speedrun') {
      this.speedrunTotalTime = 60;
      this.startSpeedrunClock();
    }

    this.nextQuestion();
  }

  prepareQuestions(mode) {
    let pool = [...QUIZ_QUESTIONS];
    if (mode === 'literature') {
      pool = pool.filter(q => q.subject === 'literature');
    }
    // Trộn ngẫu nhiên câu hỏi (Fisher-Yates)
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    this.questionQueue = pool;
    this.currentQuestionIdx = 0;
  }

  // TẢI CÂU HỎI TIẾP THEO
  nextQuestion() {
    clearInterval(this.timer);
    this.isAnswered = false;

    if (this.currentQuestionIdx >= this.questionQueue.length) {
      // Hết câu hỏi trong hàng đợi -> Tái chuẩn bị để chơi tiếp
      this.prepareQuestions(this.mode);
    }

    this.currentQuestion = this.questionQueue[this.currentQuestionIdx];
    this.currentQuestionIdx++;

    // Cập nhật giao diện
    this.renderQuestionCard();

    // Thiết lập thời gian đếm ngược
    if (this.mode !== 'speedrun') {
      this.timeLeft = 25;
      this.startQuestionTimer();
    }
    this.questionStartTime = Date.now();
  }

  renderQuestionCard() {
    const q = this.currentQuestion;
    if (!q) return;

    // Thông tin thanh trạng thái
    const scoreVal = document.getElementById('game-score-val');
    const streakVal = document.getElementById('game-streak-val');
    const floorVal = document.getElementById('game-floor-val');
    const livesContainer = document.getElementById('game-lives-container');

    if (scoreVal) scoreVal.textContent = this.score;
    if (streakVal) streakVal.textContent = `x${this.getMultiplier().toFixed(1)}`;
    if (floorVal) {
      if (this.mode === 'tower') floorVal.textContent = `Tầng ${this.floor}/${this.maxFloor}`;
      else if (this.mode === 'speedrun') floorVal.textContent = `Tốc Độ`;
      else floorVal.textContent = `Ngữ Văn 12`;
    }

    if (livesContainer) {
      if (this.mode === 'speedrun') {
        livesContainer.style.display = 'none';
      } else {
        livesContainer.style.display = 'flex';
        livesContainer.innerHTML = Array(this.maxLives).fill(0).map((_, i) => 
          `<i class="fas fa-heart ${i < this.lives ? 'alive' : 'lost'}"></i>`
        ).join('');
      }
    }

    // Câu hỏi & Tùy chọn
    const subBadge = document.getElementById('game-sub-badge');
    const questionText = document.getElementById('game-question-text');
    const optionsContainer = document.getElementById('game-options-container');
    const feedbackBox = document.getElementById('game-feedback-box');

    if (subBadge) {
      subBadge.textContent = q.subjectName;
      subBadge.className = `badge badge-${q.subject}`;
    }
    if (questionText) questionText.textContent = q.question;
    if (feedbackBox) feedbackBox.style.display = 'none';

    if (optionsContainer) {
      optionsContainer.innerHTML = q.options.map((opt, idx) => `
        <button class="game-opt-btn" data-index="${idx}" onclick="gameEngine.handleAnswer(${idx})">
          <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
          <span class="opt-text">${opt}</span>
        </button>
      `).join('');
    }
  }

  startQuestionTimer() {
    const timerBar = document.getElementById('game-timer-bar');
    const timerText = document.getElementById('game-timer-sec');

    if (timerText) timerText.textContent = `${this.timeLeft}s`;
    if (timerBar) timerBar.style.width = '100%';

    this.timer = setInterval(() => {
      this.timeLeft--;
      if (timerText) timerText.textContent = `${this.timeLeft}s`;
      if (timerBar) {
        const percent = (this.timeLeft / 25) * 100;
        timerBar.style.width = `${Math.max(0, percent)}%`;
        if (this.timeLeft <= 5) timerBar.classList.add('urgent');
        else timerBar.classList.remove('urgent');
      }

      if (this.timeLeft <= 0) {
        clearInterval(this.timer);
        this.handleTimeout();
      }
    }, 1000);
  }

  startSpeedrunClock() {
    const speedrunText = document.getElementById('game-timer-sec');
    const timerBar = document.getElementById('game-timer-bar');

    this.speedrunInterval = setInterval(() => {
      this.speedrunTotalTime--;
      if (speedrunText) speedrunText.textContent = `${this.speedrunTotalTime}s`;
      if (timerBar) {
        const pct = (this.speedrunTotalTime / 60) * 100;
        timerBar.style.width = `${pct}%`;
      }

      if (this.speedrunTotalTime <= 0) {
        clearInterval(this.speedrunInterval);
        this.endGame('Hết giờ đua tốc độ!');
      }
    }, 1000);
  }

  // XỬ LÝ CHỌN ĐÁP ÁN
  handleAnswer(selectedIdx) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    clearInterval(this.timer);

    const q = this.currentQuestion;
    const isCorrect = selectedIdx === q.answer;
    const timeTaken = (Date.now() - this.questionStartTime) / 1000;

    const optButtons = document.querySelectorAll('.game-opt-btn');
    optButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) {
        btn.classList.add('correct');
      } else if (idx === selectedIdx && !isCorrect) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      // Đúng
      if (window.soundEngine) soundEngine.playCorrect();
      this.totalCorrect++;
      this.streak++;
      if (this.streak > this.maxStreak) this.maxStreak = this.streak;

      if (q.subject === 'literature') {
        this.litCorrectCount++;
        if (this.litCorrectCount >= 5) this.unlockAchievement('lit_scholar');
      }

      // Kiểm tra chuỗi
      if (this.streak === 3) {
        if (window.soundEngine) soundEngine.playCombo();
        this.unlockAchievement('streak_3');
      } else if (this.streak === 7) {
        if (window.soundEngine) soundEngine.playCombo();
        this.unlockAchievement('streak_7');
      }

      // Kiểm tra trả lời nhanh
      if (timeTaken <= 4) {
        this.unlockAchievement('speed_demon');
      }
      this.unlockAchievement('first_quiz');

      // Tính điểm
      const basePoints = 100;
      const speedBonus = Math.max(0, Math.round((25 - timeTaken) * 2));
      const mult = this.getMultiplier();
      const pointsEarned = Math.round((basePoints + speedBonus) * mult);
      this.score += pointsEarned;

      this.showFeedback(true, `+${pointsEarned} điểm! (${mult.toFixed(1)}x Combo)`);

      // Kiểm tra thăng tầng nếu ở Tháp Tri Thức
      if (this.mode === 'tower') {
        if (this.totalCorrect % 1 === 0 && this.floor < this.maxFloor) {
          this.floor++;
          if (this.floor >= 8) this.unlockAchievement('tower_champ');
        } else if (this.floor === this.maxFloor) {
          // Thắng tháp!
          setTimeout(() => this.celebrateVictory(), 1200);
        }
      }
    } else {
      // Sai
      if (window.soundEngine) soundEngine.playWrong();
      this.streak = 0;
      this.wrongAnswers.push({
        question: q.question,
        userAnswer: q.options[selectedIdx],
        correctAnswer: q.options[q.answer],
        explanation: q.explanation
      });

      if (this.mode !== 'speedrun') {
        this.lives--;
        const livesContainer = document.getElementById('game-lives-container');
        if (livesContainer) {
          livesContainer.innerHTML = Array(this.maxLives).fill(0).map((_, i) => 
            `<i class="fas fa-heart ${i < this.lives ? 'alive' : 'lost'}"></i>`
          ).join('');
        }
      }

      this.showFeedback(false, `Rất tiếc! Đáp án đúng là: ${String.fromCharCode(65 + q.answer)}`);

      if (this.lives <= 0 && this.mode !== 'speedrun') {
        setTimeout(() => this.endGame('Hết mạng sống!'), 1600);
        return;
      }
    }

    if (this.score >= 1500) {
      this.unlockAchievement('top_valedictorian');
    }
  }

  handleTimeout() {
    this.isAnswered = true;
    if (window.soundEngine) soundEngine.playWrong();
    this.streak = 0;

    const q = this.currentQuestion;
    this.wrongAnswers.push({
      question: q.question,
      userAnswer: 'Hết thời gian',
      correctAnswer: q.options[q.answer],
      explanation: q.explanation
    });

    const optButtons = document.querySelectorAll('.game-opt-btn');
    optButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === q.answer) btn.classList.add('correct');
    });

    if (this.mode !== 'speedrun') {
      this.lives--;
      const livesContainer = document.getElementById('game-lives-container');
      if (livesContainer) {
        livesContainer.innerHTML = Array(this.maxLives).fill(0).map((_, i) => 
          `<i class="fas fa-heart ${i < this.lives ? 'alive' : 'lost'}"></i>`
        ).join('');
      }

      if (this.lives <= 0) {
        this.showFeedback(false, 'Hết giờ! Bạn đã dùng hết mạng sống.');
        setTimeout(() => this.endGame('Hết thời gian & hết mạng sống!'), 1600);
        return;
      }
    }

    this.showFeedback(false, `Hết giờ! Đáp án chính xác là: ${String.fromCharCode(65 + q.answer)}`);
  }

  showFeedback(isSuccess, titleText) {
    const feedbackBox = document.getElementById('game-feedback-box');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExpl = document.getElementById('feedback-explanation');
    const feedbackTip = document.getElementById('feedback-tip');

    if (!feedbackBox) return;

    feedbackBox.className = `game-feedback-box ${isSuccess ? 'success' : 'error'}`;
    if (feedbackTitle) feedbackTitle.innerHTML = `<i class="fas ${isSuccess ? 'fa-check-circle' : 'fa-times-circle'}"></i> ${titleText}`;
    if (feedbackExpl) feedbackExpl.textContent = this.currentQuestion.explanation;
    if (feedbackTip) feedbackTip.textContent = `💡 Mẹo ghi nhớ: ${this.currentQuestion.tip}`;

    feedbackBox.style.display = 'block';

    const nextBtn = document.getElementById('feedback-next-btn');
    if (nextBtn) {
      nextBtn.focus();
    }
  }

  // TRỢ GIÚP 50:50
  useHalfHalf() {
    if (!this.lifelines.halfHalf || this.isAnswered) return;
    this.lifelines.halfHalf = false;
    this.updateLifelineButtons();
    if (window.soundEngine) soundEngine.playLifeline();

    const q = this.currentQuestion;
    const wrongIndices = [0, 1, 2, 3].filter(i => i !== q.answer);
    // Chọn 2 phương án sai để ẩn
    const shuffled = wrongIndices.sort(() => 0.5 - Math.random()).slice(0, 2);

    const optButtons = document.querySelectorAll('.game-opt-btn');
    shuffled.forEach(idx => {
      if (optButtons[idx]) {
        optButtons[idx].style.visibility = 'hidden';
      }
    });

    if (window.studyEngine) studyEngine.showToast('Trợ giúp 50:50: Đã loại bỏ 2 đáp án sai!');
  }

  // TRỢ GIÚP ĐỔI CÂU HỎI
  useSwap() {
    if (!this.lifelines.swap || this.isAnswered) return;
    this.lifelines.swap = false;
    this.updateLifelineButtons();
    if (window.soundEngine) soundEngine.playLifeline();

    if (window.studyEngine) studyEngine.showToast('Đã đổi sang câu hỏi mới!');
    this.nextQuestion();
  }

  // TRỢ GIÚP ĐÓNG BĂNG THỜI GIAN
  useFreeze() {
    if (!this.lifelines.freeze || this.isAnswered) return;
    this.lifelines.freeze = false;
    this.updateLifelineButtons();
    if (window.soundEngine) soundEngine.playLifeline();

    this.timeLeft += 10;
    const timerText = document.getElementById('game-timer-sec');
    if (timerText) timerText.textContent = `${this.timeLeft}s (+10s Freeze)`;

    if (window.studyEngine) studyEngine.showToast('Đóng băng thời gian: +10 giây!');
  }

  updateLifelineButtons() {
    const btn50 = document.getElementById('ll-5050');
    const btnSwap = document.getElementById('ll-swap');
    const btnFreeze = document.getElementById('ll-freeze');

    if (btn50) btn50.disabled = !this.lifelines.halfHalf;
    if (btnSwap) btnSwap.disabled = !this.lifelines.swap;
    if (btnFreeze) btnFreeze.disabled = !this.lifelines.freeze;
  }

  getMultiplier() {
    if (this.streak >= 7) return 2.0;
    if (this.streak >= 5) return 1.5;
    if (this.streak >= 3) return 1.2;
    return 1.0;
  }

  celebrateVictory() {
    clearInterval(this.timer);
    if (window.soundEngine) soundEngine.playLevelUp();
    this.fireConfetti();
    this.endGame('Chúc mừng! Bạn đã chinh phục đỉnh Tháp Tri Thức 12!');
  }

  endGame(reasonMessage = 'Trận đấu kết thúc!') {
    clearInterval(this.timer);
    if (this.speedrunInterval) clearInterval(this.speedrunInterval);

    if (window.soundEngine) soundEngine.playGameOver();

    // Lưu điểm cao
    if (this.score > (this.highScores[this.mode] || 0)) {
      this.highScores[this.mode] = this.score;
      localStorage.setItem('game_high_scores', JSON.stringify(this.highScores));
      this.fireConfetti();
    }

    const arena = document.getElementById('game-arena');
    const summary = document.getElementById('game-summary');
    if (arena) arena.style.display = 'none';
    if (summary) summary.style.display = 'block';

    const reasonEl = document.getElementById('summary-reason');
    const scoreEl = document.getElementById('summary-score');
    const correctEl = document.getElementById('summary-correct');
    const streakEl = document.getElementById('summary-streak');
    const rankTitleEl = document.getElementById('summary-rank-title');
    const highscoreEl = document.getElementById('summary-highscore');

    if (reasonEl) reasonEl.textContent = reasonMessage;
    if (scoreEl) scoreEl.textContent = this.score;
    if (correctEl) correctEl.textContent = `${this.totalCorrect} câu`;
    if (streakEl) streakEl.textContent = `${this.maxStreak} câu liên tiếp`;
    if (highscoreEl) highscoreEl.textContent = `${this.highScores[this.mode]} điểm`;

    // Danh hiệu đạt được
    let rankTitle = 'Sĩ Tử Nhập Môn';
    if (this.score >= 2000) rankTitle = 'Thủ Khoa Toàn Quốc 🌟';
    else if (this.score >= 1400) rankTitle = 'Á Khoa Xuất Sắc 🎖️';
    else if (this.score >= 800) rankTitle = 'Học Bá Tri Thức 🎓';
    else if (this.score >= 400) rankTitle = 'Chiến Binh Chăm Chỉ 📖';

    if (rankTitleEl) rankTitleEl.textContent = rankTitle;

    this.renderReviewWrongAnswers();
    this.updateStatsDisplay();
  }

  renderReviewWrongAnswers() {
    const container = document.getElementById('summary-wrong-review');
    if (!container) return;

    if (this.wrongAnswers.length === 0) {
      container.innerHTML = `
        <div class="review-perfect">
          <i class="fas fa-trophy"></i>
          <h4>Tuyệt đỉnh! Bạn không trả lời sai câu nào!</h4>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <h4><i class="fas fa-triangle-exclamation"></i> Xem lại ${this.wrongAnswers.length} câu đã trả lời sai để ghi nhớ:</h4>
      <div class="wrong-list">
        ${this.wrongAnswers.map((w, idx) => `
          <div class="wrong-card">
            <p class="wrong-q"><strong>Câu ${idx + 1}:</strong> ${w.question}</p>
            <p class="wrong-ans"><span class="badge-wrong">Bạn chọn:</span> ${w.userAnswer}</p>
            <p class="correct-ans"><span class="badge-correct">Đáp án đúng:</span> ${w.correctAnswer}</p>
            <p class="wrong-expl"><i class="fas fa-info-circle"></i> ${w.explanation}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  backToLobby() {
    clearInterval(this.timer);
    if (this.speedrunInterval) clearInterval(this.speedrunInterval);

    const lobby = document.getElementById('game-lobby');
    const arena = document.getElementById('game-arena');
    const summary = document.getElementById('game-summary');

    if (arena) arena.style.display = 'none';
    if (summary) summary.style.display = 'none';
    if (lobby) lobby.style.display = 'block';

    if (window.soundEngine) soundEngine.playClick();
  }

  // THÀNH TÍCH (ACHIEVEMENTS)
  unlockAchievement(achId) {
    if (this.unlockedAchievements.has(achId)) return;
    this.unlockedAchievements.add(achId);
    localStorage.setItem('unlocked_achievements', JSON.stringify(Array.from(this.unlockedAchievements)));

    const ach = ACHIEVEMENTS.find(a => a.id === achId);
    if (ach) {
      this.showAchievementBanner(ach);
      if (window.soundEngine) soundEngine.playLevelUp();
    }
    this.renderAchievementsList();
  }

  showAchievementBanner(ach) {
    let banner = document.getElementById('achievement-unlock-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'achievement-unlock-banner';
      banner.className = 'achievement-banner';
      document.body.appendChild(banner);
    }

    banner.innerHTML = `
      <div class="ach-icon"><i class="${ach.icon}"></i></div>
      <div class="ach-info">
        <span class="ach-label">HUY HIỆU MỞ KHÓA!</span>
        <h5>${ach.title}</h5>
        <p>${ach.desc}</p>
      </div>
    `;

    banner.classList.add('show');
    setTimeout(() => {
      banner.classList.remove('show');
    }, 4500);
  }

  renderAchievementsList() {
    const container = document.getElementById('achievements-grid');
    if (!container) return;

    container.innerHTML = ACHIEVEMENTS.map(ach => {
      const isUnlocked = this.unlockedAchievements.has(ach.id);
      return `
        <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
          <div class="ach-card-icon"><i class="${ach.icon}"></i></div>
          <div class="ach-card-content">
            <h4>${ach.title} ${isUnlocked ? '<span class="status-badge">Đã đạt</span>' : ''}</h4>
            <p>${ach.desc}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  updateStatsDisplay() {
    const highTowerEl = document.getElementById('best-tower-score');
    const highSpeedEl = document.getElementById('best-speed-score');
    const highLitEl = document.getElementById('best-lit-score');
    const achCountEl = document.getElementById('achievements-count');

    if (highTowerEl) highTowerEl.textContent = this.highScores.tower || 0;
    if (highSpeedEl) highSpeedEl.textContent = this.highScores.speedrun || 0;
    if (highLitEl) highLitEl.textContent = this.highScores.literature || 0;
    if (achCountEl) achCountEl.textContent = `${this.unlockedAchievements.size}/${ACHIEVEMENTS.length}`;
  }

  // HIỆU ỨNG PHÁO HOA TỰ NHIÊN (CANVAS CONFETTI)
  initConfetti() {
    this.canvas = document.getElementById('confetti-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
  }

  fireConfetti() {
    if (!this.canvas || !this.ctx) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    const colors = ['#f43f5e', '#ec4899', '#8b5cf6', '#3b82f6', '#10b981', '#f59e0b', '#fbbf24'];
    this.particles = Array.from({ length: 90 }).map(() => ({
      x: Math.random() * this.canvas.width,
      y: -20,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedY: Math.random() * 5 + 3,
      speedX: (Math.random() - 0.5) * 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10
    }));

    const render = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let alive = false;
      this.particles.forEach(p => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y < this.canvas.height) alive = true;

        this.ctx.save();
        this.ctx.translate(p.x, p.y);
        this.ctx.rotate((p.rotation * Math.PI) / 180);
        this.ctx.fillStyle = p.color;
        this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        this.ctx.restore();
      });

      if (alive) {
        requestAnimationFrame(render);
      } else {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      }
    };

    render();
  }

  setupGameUIEvents() {
    const feedbackNextBtn = document.getElementById('feedback-next-btn');
    if (feedbackNextBtn) {
      feedbackNextBtn.addEventListener('click', () => {
        if (window.soundEngine) soundEngine.playClick();
        this.nextQuestion();
      });
    }

    const playAgainBtn = document.getElementById('btn-play-again');
    if (playAgainBtn) {
      playAgainBtn.addEventListener('click', () => {
        this.startGame(this.mode);
      });
    }

    const backLobbyBtn = document.getElementById('btn-back-lobby');
    if (backLobbyBtn) {
      backLobbyBtn.addEventListener('click', () => {
        this.backToLobby();
      });
    }

    // Keyboard shortcuts: A, B, C, D to answer
    window.addEventListener('keydown', (e) => {
      const arena = document.getElementById('game-arena');
      if (!arena || arena.style.display === 'none') return;

      const key = e.key.toUpperCase();
      if (['A', 'B', 'C', 'D'].includes(key) && !this.isAnswered) {
        const idx = key.charCodeAt(0) - 65;
        this.handleAnswer(idx);
      } else if (e.key === 'Enter' && this.isAnswered) {
        const feedbackBox = document.getElementById('game-feedback-box');
        if (feedbackBox && feedbackBox.style.display !== 'none') {
          this.nextQuestion();
        }
      }
    });
  }
}

const gameEngine = new GameEngine();
window.gameEngine = gameEngine;
