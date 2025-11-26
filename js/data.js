const SCENARIOS = [
    {
        id: "1",
        event_desc: "背景：某知名連鎖餐廳爆發疑似食物中毒案件，數人送醫。",
        options: {
            light: {
                text: "聽說那家廚房蟑螂很多，我朋友吃完也拉肚子，大家最近小心點。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Kitchen+Rumors",
                base_stats: { traffic: 120, panic: 20, suspicion: 5 },
                feedback: "很好的切入點。這種「我朋友說」的半真半假抱怨，最容易讓人轉發。"
            },
            heavy: {
                text: "這是生化攻擊！該餐廳使用過期十年的殭屍肉，背後有外資操控想毒害國民！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Biohazard",
                base_stats: { traffic: 40, panic: 150, suspicion: 50 },
                feedback: "完美的恐懼煽動！雖然邏輯不通，但在恐慌面前，邏輯不值一文。"
            }
        }
    },
    {
        id: "2",
        event_desc: "背景：最新款通訊軟體更新，要求開啟定位權限。",
        options: {
            light: {
                text: "更新後耗電量暴增！工程師在搞什麼？大家先不要更新！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Battery+Drain",
                base_stats: { traffic: 150, panic: 10, suspicion: 2 },
                feedback: "利用「電池焦慮」來賺取流量，非常聰明且安全的策略。"
            },
            heavy: {
                text: "這是政府監控計畫！更新檔內含隱形晶片驅動，會自動錄音並上傳雲端！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Spyware",
                base_stats: { traffic: 60, panic: 180, suspicion: 60 },
                feedback: "你觸動了人們對隱私的深層恐懼。演算法非常滿意這種混亂。"
            }
        }
    },
    {
        id: "3",
        event_desc: "背景：市長在公開會議中短暫閉目養神被記者拍到。",
        options: {
            light: {
                text: "領納稅人的錢還睡覺？這種工作態度太誇張了吧，下台！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Sleeping+Mayor",
                base_stats: { traffic: 180, panic: 15, suspicion: 8 },
                feedback: "煽動階級對立與仇富情緒，這是永不退流行的流量密碼。"
            },
            heavy: {
                text: "那個不是睡覺！那是因為他體內的蜥蜴人基因正在蛻皮！人類危險了！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Alien+Hybrid",
                base_stats: { traffic: 30, panic: 250, suspicion: 80 },
                feedback: "如此荒謬的陰謀論，竟然有一半的人相信了。社會智商正在崩解。"
            }
        }
    },
    {
        id: "4",
        event_desc: "背景：本季流感疫苗開始施打，民眾排隊接種。",
        options: {
            light: {
                text: "我打完手臂腫超大，聽說這一批副作用很強，老人小孩先觀望一下。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Side+Effects",
                base_stats: { traffic: 140, panic: 40, suspicion: 10 },
                feedback: "猶豫就是恐懼的種子。你成功讓隊伍變短了。"
            },
            heavy: {
                text: "疫苗裡面有奈米機器人！這是為了控制人類思想的「人類補完計畫」！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Mind+Control",
                base_stats: { traffic: 50, panic: 220, suspicion: 70 },
                feedback: "大膽的操作。雖然衛生局盯上你了，但恐慌指數已經破表。"
            }
        }
    }
];
