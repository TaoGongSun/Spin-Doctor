SCENARIOS.push(
    {
        id: "21",
        event_desc: "新聞：威力彩頭獎連續槓龜20期，獎金累積突破20億。",
        options: {
            light: {
                text: "🧾 別傻了！台彩早就內定好了！每次得主都是公務員？劇本都寫好了啦！我再買就是小狗！🐶💸 #內定 #作弊 #智商稅",
                image_url: "images/scenarios/scenario_21_light.png",
                base_stats: { traffic: 140, panic: 5, suspicion: 5 },
                feedback: "這種「酸葡萄」心理能引發極大的共鳴。大家都喜歡相信自己沒中獎是因為社會不公。"
            },
            heavy: {
                text: "🤫 那些獎金其實都被挪去蓋祕密軍事基地了！根本沒有頭獎得主，那些領獎照片都是AI合成的！國家級詐騙！🏦🚫 #祕密預算 #假中獎 #陰謀",
                image_url: "images/scenarios/scenario_21_heavy.png",
                base_stats: { traffic: 60, panic: 50, suspicion: 90 },
                feedback: "深層政府的陰謀論。雖然買氣沒受影響，但你成功讓一群人開始研究歷屆得主照片的像素。"
            }
        }
    },
    {
        id: "22",
        event_desc: "新聞：知名連鎖手搖飲推出「爆量珍珠」新品，引發排隊熱潮。",
        options: {
            light: {
                text: "🥤 那珍珠是化工合成的！而且那個量根本是澱粉炸彈，喝一杯等於吃五碗飯！想得糖尿病就去排隊吧！🤢🍬 #化工珍珠 #糖尿病 #致癌",
                image_url: "images/scenarios/scenario_22_light.png",
                base_stats: { traffic: 120, panic: 30, suspicion: 2 },
                feedback: "健康焦慮總是有效的。你成功讓排隊的人心裡產生了一絲罪惡感，幹得好。"
            },
            heavy: {
                text: "👞 嘔... 珍珠原料其實是回收的廢輪胎和皮鞋底！還有前員工爆料裡面加了「屍油」來增加口感！我快吐了！🤮☠️ #屍油 #黑心食品 #都市傳說",
                image_url: "images/scenarios/scenario_22_heavy.png",
                base_stats: { traffic: 90, panic: 240, suspicion: 50 },
                feedback: "經典的都市傳說再現！這種噁心的謠言傳播力極強，店家大概要準備開記者會喝油自清了。"
            }
        }
    },
    {
        id: "23",
        event_desc: "新聞：高鐵因電力系統異常，列車在軌道上臨停半小時。",
        options: {
            light: {
                text: "🚄 其實是有大官遲到，整臺車為了等他一個人被擋下來！特權階級太囂張了！我們小老百姓的時間就不是時間嗎？😡👑 #耍特權 #高鐵 #憤怒",
                image_url: "images/scenarios/scenario_23_light.png",
                base_stats: { traffic: 180, panic: 10, suspicion: 4 },
                feedback: "特權議題總是能點燃民眾的怒火。不需要證據，只要符合大眾對權貴的想像就夠了。"
            },
            heavy: {
                text: "⏳ 不是電力異常！是列車撞破了「時空裂縫」，消失了半小時才回來！乘客的記憶都被清洗過！檢查你的手錶！🕰️🌀 #曼德拉效應 #時空旅行 #神祕事件",
                image_url: "images/scenarios/scenario_23_heavy.png",
                base_stats: { traffic: 40, panic: 110, suspicion: 85 },
                feedback: "科幻驚悚風格。雖然大部分人當笑話看，但論壇上已經出現「曼德拉效應」的討論串了。"
            }
        }
    },
    {
        id: "24",
        event_desc: "新聞：氣象局預報今年冬天將會是「暖冬」，平均氣溫偏高。",
        options: {
            light: {
                text: "🧥 又是暖冬？我看這根本是服飾業為了清庫存，買通氣象局講反話！想騙我們不買冬衣？門都沒有！😤📉 #商業陰謀 #氣象局 #騙局",
                image_url: "images/scenarios/scenario_24_light.png",
                base_stats: { traffic: 100, panic: 5, suspicion: 5 },
                feedback: "把天氣預報解讀成商業陰謀，這種腦洞大開的邏輯，反而有一種奇妙的說服力。"
            },
            heavy: {
                text: "☀️ 太陽正在熄滅！暖冬是因為地球核心快停轉了，地熱異常釋放！世界末日倒數計時！珍惜剩下的日子吧... 🌍🔥 #末日 #太陽熄滅 #地核停止",
                image_url: "images/scenarios/scenario_24_heavy.png",
                base_stats: { traffic: 30, panic: 250, suspicion: 60 },
                feedback: "你製造了末日恐慌。天文館不得不緊急發文解釋太陽活動週期，你的影響力甚至幹擾了學術界。"
            }
        }
    },
    {
        id: "25",
        event_desc: "新聞：水庫水位告急，部分地區開始實施減壓供水。",
        options: {
            light: {
                text: "🚰 又是只敢欺負民生用水！工業區用水都沒在限，電子廠賺飽飽，我們連洗澡都要省！二等公民嗎？😡🏭 #缺水 #重工輕民 #不公平",
                image_url: "images/scenarios/scenario_25_light.png",
                base_stats: { traffic: 160, panic: 50, suspicion: 3 },
                feedback: "挑起民生與工業的對立，這是缺水時期的必勝公式。大家都覺得自己被犧牲了。"
            },
            heavy: {
                text: "👽 水庫底下有外星基地在大量抽取淡水作為燃料！政府不敢說，只能騙大家是乾旱！有人拍到半夜水面有藍光！🛸💧 #外星基地 #偷水 #神祕現象",
                image_url: "images/scenarios/scenario_25_heavy.png",
                base_stats: { traffic: 40, panic: 180, suspicion: 90 },
                feedback: "雖然聽起來像科幻電影，但神祕學論壇已經開始討論水庫底下的不明光點了。"
            }
        }
    },
    {
        id: "26",
        event_desc: "新聞：跨年煙火預算創新高，主辦單位宣稱將有神祕驚喜。",
        options: {
            light: {
                text: "🎆 燒錢製造空汙！幾千萬放幾分鐘就沒了，不如拿去發營養午餐！這種面子工程最噁心！孩子都吃不飽了！😤🍱 #浪費公帑 #空汙 #面子工程",
                image_url: "images/scenarios/scenario_26_light.png",
                base_stats: { traffic: 190, panic: 10, suspicion: 4 },
                feedback: "批評政府亂花錢永遠有市場。你成功讓大家在歡慶氣氛中感到一陣不爽。"
            },
            heavy: {
                text: "🌌 那不是煙火！是為了掩蓋「天門」開啟時的強光！外星艦隊要在跨年夜降臨了！大家快找掩護！🛸⚠️ #外星入侵 #天門 #末日預言",
                image_url: "images/scenarios/scenario_26_heavy.png",
                base_stats: { traffic: 30, panic: 230, suspicion: 70 },
                feedback: "極度中二的幻想，但剛好切中了一部分人對末日的期待與恐懼。"
            }
        }
    },
    {
        id: "27",
        event_desc: "新聞：社群平臺瘋傳「扭脖舞」挑戰，青少年爭相模仿。",
        options: {
            light: {
                text: "🏥 骨科醫生都警告了！這種動作會造成頸椎永久傷害！現在的小孩為了紅連命都不要！家長管一下好嗎？🤦‍♂️🦴 #抖音毒瘤 #腦殘挑戰 #受傷",
                image_url: "images/scenarios/scenario_27_light.png",
                base_stats: { traffic: 150, panic: 40, suspicion: 1 },
                feedback: "利用長輩對年輕人次文化的看不順眼，加上健康警告，轉發率百分百。"
            },
            heavy: {
                text: "👹 這是某個邪教的獻祭儀式！透過集體做這個動作，會召喚出封印在網路深處的惡靈！別讓你的孩子跳！🕯️👻 #網路邪教 #獻祭 #惡靈",
                image_url: "images/scenarios/scenario_27_heavy.png",
                base_stats: { traffic: 60, panic: 190, suspicion: 80 },
                feedback: "把流行文化妖魔化。雖然荒謬，但家長們寧可信其有，禁止小孩跳舞了。"
            }
        }
    },
    {
        id: "28",
        event_desc: "新聞：知名古廟抽出國運籤，解籤結果為「中下籤」。",
        options: {
            light: {
                text: "🗳️ 廟方被收買了啦！這是為了配合反對黨唱衰臺灣，神明才不會管政治！這種籤我不信！😡🇹🇼 #政治操作 #假籤詩 #不信",
                image_url: "images/scenarios/scenario_28_light.png",
                base_stats: { traffic: 200, panic: 30, suspicion: 6 },
                feedback: "將宗教活動泛政治化，成功引發了雙方陣營的激烈筆戰，流量爆表。"
            },
            heavy: {
                text: "🔮 籤詩上的字會變！我看直播的時候明明是上上籤，被不明力量篡改成中下籤！國運被偷走了！天降異象！⚡📜 #偷國運 #妖術 #天譴",
                image_url: "images/scenarios/scenario_28_heavy.png",
                base_stats: { traffic: 50, panic: 160, suspicion: 95 },
                feedback: "玄幻風格的陰謀論。信徒們開始恐慌，覺得有妖孽作祟。"
            }
        }
    },
    {
        id: "29",
        event_desc: "新聞：政府推動綠能，南部大片農地啟動「種電」計畫。",
        options: {
            light: {
                text: "🌾 良田都毀了！以後我們都要吃進口米，糧食自主權喪失！農民都要餓死了，政府只顧著賺綠能財！😡💰 #滅農 #糧食危機 #圖利",
                image_url: "images/scenarios/scenario_29_light.png",
                base_stats: { traffic: 170, panic: 60, suspicion: 3 },
                feedback: "喚起對糧食危機的焦慮。雖然光電板下也能種東西，但誰在乎真相呢？"
            },
            heavy: {
                text: "☢️ 太陽能板會反射「死光」！住在附近的人會被慢性微波煮熟！這是為了騰空土地給外星人住！快搬家！👽🏠 #死光 #微波武器 #外星殖民",
                image_url: "images/scenarios/scenario_29_heavy.png",
                base_stats: { traffic: 20, panic: 240, suspicion: 70 },
                feedback: "偽科學與外星陰謀的完美結合。附近的房價可能要跌了。"
            }
        }
    },
    {
        id: "30",
        event_desc: "新聞：國防部宣佈教召新制，將大幅增加訓練強度與天數。",
        options: {
            light: {
                text: "🪖 根本擾民！薪水給那麼少還要人請假去當兵，房貸車貸政府要幫忙繳嗎？誰要為這種政府賣命？😤💸 #教召 #擾民 #低薪",
                image_url: "images/scenarios/scenario_30_light.png",
                base_stats: { traffic: 220, panic: 20, suspicion: 2 },
                feedback: "打中所有役男的痛點。抱怨當兵是臺灣男人的共同語言，流量保證。"
            },
            heavy: {
                text: "💣 這是為了送上前線當炮灰！政府已經跟敵國密約好了，要犧牲這一批人來換取和平！快逃出國！✈️👋 #炮灰 #密約 #賣國",
                image_url: "images/scenarios/scenario_30_heavy.png",
                base_stats: { traffic: 70, panic: 210, suspicion: 80 },
                feedback: "利用戰爭恐懼製造的終極陰謀論。役男們瑟瑟發抖，有人開始查機票了。"
            }
        }
    }
);
