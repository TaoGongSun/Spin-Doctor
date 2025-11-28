const Game = {
    stats: {
        traffic: 0,
        panic: 0,
        suspicion: 0
    },
    config: {
        maxPanic: 1000,
        maxSuspicion: 100
    },
    currentScenarioIndex: 0,
    shuffledScenarios: [],
    isGameOver: false,

    init: function () {
        this.stats = { traffic: 0, panic: 0, suspicion: 0 }; // 初始給一點流量
        this.milestones = {
            traffic1000: false,
            panic500: false,
            suspicion50: false,
            suspicion80: false
        };
        this.isGameOver = false;
        this.shuffledScenarios = this.shuffle([...SCENARIOS]);
        this.currentScenarioIndex = 0;
        this.updateUI();
        this.renderScenario();

        document.getElementById('overlay').classList.remove('active', 'win-screen', 'lose-screen');
    },

    shuffle: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    // 核心演算法
    calculateMultipliers: function () {
        // 1. Traffic 影響 Panic 的加成 (每 500 流量 +1 倍)
        const panicMult = 1 + (this.stats.traffic / 500);

        // 2. Panic 影響 Suspicion 的減免 (每 200 恐慌，除數 +1)
        // 恐慌越高，社會越亂，越難抓到造謠者
        const suspicionDiv = 1 + (this.stats.panic / 200);

        return { panicMult, suspicionDiv };
    },

    renderScenario: function () {
        if (this.currentScenarioIndex >= this.shuffledScenarios.length) {
            // Loop Scenarios if needed without ending game
            this.shuffledScenarios = this.shuffle([...SCENARIOS]);
            this.currentScenarioIndex = 0;
        }

        const data = this.shuffledScenarios[this.currentScenarioIndex];

        // Update UI
        document.getElementById('scenario-desc').innerText = data.event_desc;

        // 準備選項陣列並加入 key 識別
        const options = [
            { key: 'light', data: data.options.light },
            { key: 'heavy', data: data.options.heavy }
        ];

        // 隨機洗牌位置 (Randomize Positions)
        if (Math.random() < 0.5) {
            options.reverse();
        }

        // 渲染卡片 1 (左)
        this.renderCard(1, options[0]);

        // 渲染卡片 2 (右)
        this.renderCard(2, options[1]);

        // Reset image display in case of previous errors
        document.querySelectorAll('.card-image-box img').forEach(img => img.style.display = 'block');
        document.querySelectorAll('.card-image-box').forEach(box => box.style.backgroundColor = '#000');
    },

    renderCard: function (cardNum, option) {
        const cardEl = document.getElementById(`card-${cardNum}`);
        const imgEl = document.getElementById(`img-${cardNum}`);
        const textEl = document.getElementById(`text-${cardNum}`);

        // 重置並套用樣式類別 (保留 light/heavy 的邊框顏色提示，但位置隨機)
        cardEl.className = 'card';
        cardEl.classList.add(option.key);

        // 設定內容
        imgEl.src = option.data.image_url;
        textEl.innerText = option.data.text;

        // 綁定點擊事件
        // 注意：必須使用匿名函式包裹，否則會立即執行
        cardEl.onclick = () => this.handleChoice(option.key);
    },

    handleChoice: function (type) {
        if (this.isGameOver) return;

        const scenario = this.shuffledScenarios[this.currentScenarioIndex];
        const choice = scenario.options[type];
        const base = choice.base_stats;
        const { panicMult, suspicionDiv } = this.calculateMultipliers();

        // Calculate actual gains
        const actualTraffic = base.traffic;
        const actualPanic = Math.floor(base.panic * panicMult);
        const actualSuspicion = base.suspicion / suspicionDiv;

        // Update Stats
        this.stats.traffic += actualTraffic;
        this.stats.panic += actualPanic;
        this.stats.suspicion += actualSuspicion;

        // Check Bounds
        if (this.stats.suspicion < 0) this.stats.suspicion = 0;

        // Check Milestones
        const alerts = [];

        // 1. Traffic 1000
        if (!this.milestones.traffic1000 && this.stats.traffic >= 1000) {
            this.milestones.traffic1000 = true;
            alerts.push({
                type: 'achievement',
                msg: "【成就解鎖】你成為了知名網紅！<br>你的言論現在更有影響力了！"
            });
        }

        // 2. Panic 500
        if (!this.milestones.panic500 && this.stats.panic >= 500) {
            this.milestones.panic500 = true;
            alerts.push({
                type: 'achievement', // 雖然是恐慌，但對玩家是好事
                msg: "【恐慌蔓延】社會信任度已降至冰點！<br>群眾開始盲目恐慌，更容易被操弄！"
            });
        }

        // 3. Suspicion 50%
        if (!this.milestones.suspicion50 && this.stats.suspicion >= 50) {
            this.milestones.suspicion50 = true;
            alerts.push({
                type: 'warning',
                msg: "【系統警告】網警單位已注意到你的活動。<br>請謹慎行事，避免被追蹤！"
            });
        }

        // 4. Suspicion 80%
        if (!this.milestones.suspicion80 && this.stats.suspicion >= 80) {
            this.milestones.suspicion80 = true;
            alerts.push({
                type: 'warning',
                msg: "【高度危險】IP 鎖定中！<br>再不降低識破率將被強制斷線！"
            });
        }

        // Prepare Report Logic
        const report = {
            title: type === 'light' ? '操盤成功' : '引爆恐慌',
            msg: choice.feedback,
            gains: {
                traffic: actualTraffic,
                panic: actualPanic,
                suspicion: actualSuspicion
            },
            math: {
                panicBase: base.panic,
                panicMult: panicMult.toFixed(1),
                suspBase: base.suspicion,
                suspDiv: suspicionDiv.toFixed(1)
            },
            alerts: alerts
        };

        this.showFeedback(report);
    },

    showFeedback: function (report) {
        const overlay = document.getElementById('overlay');
        const title = document.getElementById('overlay-title');
        const msg = document.getElementById('overlay-msg');
        const statsBox = document.getElementById('overlay-stats');
        const btn = document.getElementById('overlay-btn');

        title.innerText = report.title;
        title.className = ''; // reset colors
        msg.innerText = report.msg;

        // Inject Alerts (Achievements / Warnings)
        if (report.alerts && report.alerts.length > 0) {
            report.alerts.forEach(alert => {
                const div = document.createElement('div');
                div.className = alert.type === 'warning' ? 'warning-text' : 'achievement-text';
                div.innerHTML = alert.msg;
                msg.appendChild(div);
            });
        }

        // Construct Detailed Stats HTML
        let html = `
            <div class="stat-change">
                <span>流量</span>
                <span class="positive">+${report.gains.traffic}</span>
            </div>
            <div class="stat-change">
                <span>恐慌</span>
                <span class="negative">+${report.gains.panic}</span>
            </div>
            <div style="font-size:0.8em; color:#666; text-align:right; margin-bottom:5px;">
                (基礎 ${report.math.panicBase} x 倍率 ${report.math.panicMult})
            </div>

            <div class="stat-change">
                <span>識破</span>
                <span class="danger">+${report.gains.suspicion.toFixed(1)}%</span>
            </div>
            <div style="font-size:0.8em; color:#666; text-align:right;">
                (基礎 ${report.math.suspBase} ÷ 防護 ${report.math.suspDiv})
            </div>
        `;
        statsBox.innerHTML = html;

        // Update Game UI Background
        this.updateUI();

        // Check Endings inside showFeedback to determine button action
        if (this.stats.suspicion >= 100) {
            this.triggerEndGame('lose');
        } else if (this.stats.panic >= 1000) {
            this.triggerEndGame('win');
        } else {
            btn.innerText = "下一個事件 >>>";
            btn.onclick = () => game.next();
            overlay.classList.add('active');
        }
    },

    next: function () {
        document.getElementById('overlay').classList.remove('active');
        this.currentScenarioIndex++;
        this.renderScenario();
    },

    triggerEndGame: function (result) {
        this.isGameOver = true;
        const overlay = document.getElementById('overlay');
        const title = document.getElementById('overlay-title');
        const msg = document.getElementById('overlay-msg');
        const btn = document.getElementById('overlay-btn');
        const statsBox = document.getElementById('overlay-stats');

        overlay.classList.add('active');
        statsBox.innerHTML = ''; // Clear daily stats

        if (result === 'win') {
            overlay.classList.add('win-screen');
            title.innerText = "SOCIAL COLLAPSE";
            msg.innerText = "社會崩潰，政府癱瘓。民眾不再相信任何官方訊息，只相信恐懼。\n你用鍵盤與演算法，隻手毀滅了世界秩序。\n\n冷血演算法判定：完美執行。";
        } else {
            overlay.classList.add('lose-screen');
            title.innerText = "BANNED";
            msg.innerText = "你被查水表了。\n過高的識破率導致你的 IP 被鎖定，特勤小組正在破門。\n\n遊戲結束。";
        }

        btn.innerText = "重啟系統 (RESTART)";
        btn.onclick = () => game.init();
    },

    updateUI: function () {
        // Update Values
        document.getElementById('val-traffic').innerText = this.stats.traffic;
        document.getElementById('val-panic').innerText = this.stats.panic;
        document.getElementById('val-suspicion').innerText = this.stats.suspicion.toFixed(1) + '%';

        // Update Bars
        // Traffic cap visual at 2000 roughly for bar
        const trafficPct = Math.min(100, (this.stats.traffic / 2000) * 100);
        document.getElementById('bar-traffic').style.width = trafficPct + '%';

        const panicPct = Math.min(100, (this.stats.panic / this.config.maxPanic) * 100);
        document.getElementById('bar-panic').style.width = panicPct + '%';

        const suspPct = Math.min(100, this.stats.suspicion);
        document.getElementById('bar-suspicion').style.width = suspPct + '%';

        // Color change based on danger
        if (suspPct > 80) {
            document.getElementById('bar-suspicion').style.backgroundColor = '#e74c3c';
        } else {
            document.getElementById('bar-suspicion').style.backgroundColor = 'var(--accent-suspicion)';
        }

        // Calculate current multipliers for display
        const { panicMult, suspicionDiv } = this.calculateMultipliers();
        document.getElementById('factor-panic').innerText = panicMult.toFixed(1);
        document.getElementById('factor-suspicion').innerText = suspicionDiv.toFixed(1);

        // Shield Visual Effect
        if (this.stats.panic > 300) {
            document.getElementById('dashboard').classList.add('shield-active');
        } else {
            document.getElementById('dashboard').classList.remove('shield-active');
        }
    }
};

// Start Game
// Start Game Logic
function startGame() {
    const startScreen = document.getElementById('start-screen');
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.classList.remove('active');
        game.init();
    }, 500);
}

window.onload = function () {
    game = Object.create(Game);
    // game.init() is now called by startGame()
};