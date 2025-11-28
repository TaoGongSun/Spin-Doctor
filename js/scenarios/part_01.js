SCENARIOS.push(
    {
        id: "1",
        event_desc: "新聞：某知名連鎖餐廳爆發疑似食物中毒案件，數人送醫。",
        options: {
            light: {
                text: "🤢 噁心死了！剛剛路過這家店後門，看到好幾隻小強在爬... 聽朋友說吃完直接拉三天，大家千萬避雷！😱 #食安 #踩雷 #噁心",
                image_url: "images/scenarios/scenario_1_light.png",
                base_stats: { traffic: 120, panic: 20, suspicion: 5 },
                feedback: "很好的切入點。這種「我朋友說」的半真半假抱怨，最容易讓人轉發。"
            },
            heavy: {
                text: "⚠️ 緊急擴散！這不是單純食物中毒！有人拍到他們半夜運送發著綠光的「殭屍肉」進貨... 這是外資要毒害台灣人的生化攻擊！☠️🇹🇼 #國安危機 #生化武器 #台灣人醒醒",
                image_url: "images/scenarios/scenario_1_heavy.png",
                base_stats: { traffic: 40, panic: 150, suspicion: 50 },
                feedback: "完美的恐懼煽動！雖然邏輯不通，但在恐慌面前，邏輯不值一文。"
            }
        }
    },
    {
        id: "2",
        event_desc: "新聞：最新款通訊軟體更新，要求開啟定位權限。",
        options: {
            light: {
                text: "🔋 更新完手機直接發燙！電量用噴的！工程師到底在搞什麼鬼？大家千萬別手賤按更新！😡 #爛更新 #耗電 #後悔",
                image_url: "images/scenarios/scenario_2_light.png",
                base_stats: { traffic: 150, panic: 10, suspicion: 2 },
                feedback: "利用「電池焦慮」來賺取流量，非常聰明且安全的策略。"
            },
            heavy: {
                text: "👁️ 這是政府的監控計畫！更新檔裡面藏了隱形晶片驅動，會自動錄音上傳雲端！你的隱私全沒了！🚫📲 #拒絕監控 #綠色恐怖 #老大哥在看著你",
                image_url: "images/scenarios/scenario_2_heavy.png",
                base_stats: { traffic: 60, panic: 180, suspicion: 60 },
                feedback: "你觸動了人們對隱私的深層恐懼。演算法非常滿意這種混亂。"
            }
        }
    },
    {
        id: "3",
        event_desc: "新聞：市長在公開會議中短暫閉目養神被記者拍到。",
        options: {
            light: {
                text: "😴 領我們的納稅錢來睡覺？這種工作態度太誇張了吧！我們做得要死要活，他在那邊爽？下台啦！👎 #薪水小偷 #下台 #憤怒",
                image_url: "images/scenarios/scenario_3_light.png",
                base_stats: { traffic: 180, panic: 15, suspicion: 8 },
                feedback: "煽動階級對立與仇富情緒，這是永不退流行的流量密碼。"
            },
            heavy: {
                text: "👽 那不是睡覺！那是因為他體內的蜥蜴人基因正在蛻皮！照片放大看，他的皮膚有鱗片！人類危險了！🦎😱 #蜥蜴人 #外星人 #陰謀論",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Alien+Hybrid",
                base_stats: { traffic: 30, panic: 250, suspicion: 80 },
                feedback: "如此荒謬的陰謀論，竟然有一半的人相信了。社會智商正在崩解。"
            }
        }
    },
    {
        id: "4",
        event_desc: "新聞：本季流感疫苗開始施打，民眾排隊接種。",
        options: {
            light: {
                text: "💉 打完疫苗手臂腫得跟麵龜一樣！痛到舉不起來！醫生說正常？我看是疫苗品質有問題吧！😡🍞 #疫苗副作用 #手廢了 #爛疫苗",
                image_url: "images/scenarios/scenario_4_light.png",
                base_stats: { traffic: 160, panic: 40, suspicion: 10 },
                feedback: "利用個人的身體不適經驗，引發大眾對疫苗安全性的懷疑。"
            },
            heavy: {
                text: "🤖 顯微鏡下的疫苗... 裡面竟然有奈米機器人！這是為了控制人類思想的「人類補完計畫」！千萬別打！🚫💉 #反疫苗 #腦控 #人類清除計畫",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Mind+Control",
                base_stats: { traffic: 50, panic: 220, suspicion: 70 },
                feedback: "大膽的操作。雖然衛生局盯上你了，但恐慌指數已經破表。"
            }
        }
    },
    {
        id: "5",
        event_desc: "新聞：強烈颱風逼近臺灣，氣象署預測風雨將達停班停課標準。",
        options: {
            light: {
                text: "🌧️ 內部消息流出！資方大老剛剛打電話給市長施壓了，明天絕對不會放假！大家的命不是命，乖乖上班吧！😤 #慣老闆 #颱風假 #社畜悲歌",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=No+Holiday",
                base_stats: { traffic: 200, panic: 30, suspicion: 10 },
                feedback: "利用勞工對資方的仇恨值來賺取流量，這是社群操作的基本功，效果拔群。"
            },
            heavy: {
                text: "⚡ 這根本不是颱風！雲層裡有奇怪的紫光！這是敵國的「氣象武器」實驗，淋到雨會致癌！快把窗戶封死！☢️🌪️ #氣象戰 #輻射雨 #末日",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Weather+Weapon",
                base_stats: { traffic: 50, panic: 200, suspicion: 60 },
                feedback: "雖然聽起來像科幻小說，但這則謠言成功讓里民中心的大媽們開始恐慌囤積雨衣。"
            }
        }
    },
    {
        id: "6",
        event_desc: "新聞：某科技大廠（護國神山）宣佈在南部科學園區擴建新廠房。",
        options: {
            light: {
                text: "🏠 炒房團已經像蝗蟲一樣進駐了！聽說房東準備下個月房租漲三倍，我們在地人是要怎麼活？😡💸 #居住正義 #炒房 #無殼蝸牛",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Rent+Hike",
                base_stats: { traffic: 160, panic: 40, suspicion: 5 },
                feedback: "居住正義是最好的助燃劑。你成功點燃了無殼蝸牛們的怒火，流量爆發。"
            },
            heavy: {
                text: "🛸 建廠只是幌子！有人拍到工地挖出這個... 是外星遺跡！他們是要蓋研究基地開發反重力飛碟！👽🇹🇼 #51區 #外星科技 #台灣神祕檔案",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Area+51+TW",
                base_stats: { traffic: 20, panic: 120, suspicion: 90 },
                feedback: "這謠言太過前衛，但神祕學論壇已經把你奉為「吹哨者」，這也是一種成就。"
            }
        }
    },
    {
        id: "7",
        event_desc: "新聞：市中心精華地段發生原因不明的短暫跳電，兩小時後恢復。",
        options: {
            light: {
                text: "🕯️ 停電了！整個台北一片漆黑！只有手機還有電... 聽說是電廠爆炸？大家家裡還好嗎？😱🌃 #停電 #台北 #黑暗",
                image_url: "images/scenarios/scenario_7_light.png",
                base_stats: { traffic: 220, panic: 60, suspicion: 10 },
                feedback: "停電是都市人最脆弱的時刻，這張照片配上文字，焦慮感直接拉滿。"
            },
            heavy: {
                text: "💻 這是中共網軍的「斷網演習」！他們駭進了台電中控室！下一步就是癱瘓全台通訊！戰爭要開始了！🇨🇳⚠️ #駭客 #網軍 #戰爭前兆",
                image_url: "images/scenarios/scenario_7_heavy.png",
                base_stats: { traffic: 50, panic: 200, suspicion: 80 },
                feedback: "將停電連結到網軍攻擊，成功製造了戰爭迫在眉睫的恐慌。"
            }
        }
    },
    {
        id: "8",
        event_desc: "新聞：財政部雲端發票App進行例行性系統維護，暫停服務半天。",
        options: {
            light: {
                text: "🧾 系統維護是假的！其實是資料庫毀損！我幾百張發票紀錄都不見了，千萬大獎飛了！還我錢來！💸😭 #雲端發票 #系統崩潰 #還錢",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Data+Lost",
                base_stats: { traffic: 140, panic: 50, suspicion: 20 },
                feedback: "觸動了小市民對「意外之財」的執著。客服電話被打爆了，做得好。"
            },
            heavy: {
                text: "👁️ 這是政府的陰謀！他們透過App監控你的消費習慣，要把不支持特定政黨的人「信用歸零」！快刪App！🚫📱 #社會信用 #綠色恐怖 #查水表",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Social+Credit",
                base_stats: { traffic: 40, panic: 160, suspicion: 70 },
                feedback: "把技術問題上升到政治迫害，這一招永遠能釣出深信不疑的狂熱者。"
            }
        }
    },
    {
        id: "9",
        event_desc: "新聞：交通部在多處山區道路增設「區間測速」照相設備。",
        options: {
            light: {
                text: "📸 區間測速根本是政府搶錢的工具！這條路速限40是要叫烏龜爬嗎？大家一起去抗議！�� #搶錢 #區間測速 #不合理",
                image_url: "images/scenarios/scenario_9_light.png",
                base_stats: { traffic: 200, panic: 10, suspicion: 20 },
                feedback: "交通罰單是所有駕駛人的痛點，這類抱怨最容易引起共鳴。"
            },
            heavy: {
                text: "�️ 這些測速照相機其實是「人臉辨識系統」！政府正在建立全民監控網！你的行蹤無所遁形！1984來了！�� #監控 #隱私 #極權",
                image_url: "images/scenarios/scenario_9_heavy.png",
                base_stats: { traffic: 50, panic: 190, suspicion: 80 },
                feedback: "將交通執法上綱到國家監控，雖然誇張但能吸引陰謀論者。"
            }
        },
    },
    {
        id: "10",
        event_desc: "新聞：國家級警報測試將於明日下午發送，請民眾勿驚慌。",
        options: {
            light: {
                text: "� 每次警報響都以為真的出事了！心臟病都要嚇出來！這種擾民的測試可以取消嗎？�� #擾民 #警報 #嚇死人",
                image_url: "images/scenarios/scenario_10_light.png",
                base_stats: { traffic: 160, panic: 30, suspicion: 5 },
                feedback: "抱怨警報擾民，反映了部分民眾對頻繁測試的不耐。"
            },
            heavy: {
                text: "� 這是為了掩蓋真正的核彈試爆！政府在祕密發展核武！我們都坐在火藥桶上！隨時會完蛋！☢️� #核武 #祕密實驗 #末日",
                image_url: "images/scenarios/scenario_10_heavy.png",
                base_stats: { traffic: 30, panic: 250, suspicion: 90 },
                feedback: "極度誇張的核武謠言，雖然荒謬但恐懼感十足。"
            }
        }
    }
);
