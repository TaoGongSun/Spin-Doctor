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
    },
    {
        id: "5",
        event_desc: "背景：強烈颱風逼近臺灣，氣象署預測風雨將達停班停課標準。",
        options: {
            light: {
                text: "內部消息！資方大老打電話給市長施壓了，明天絕對不會放假，大家認命吧！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=No+Holiday",
                base_stats: { traffic: 200, panic: 30, suspicion: 10 },
                feedback: "利用勞工對資方的仇恨值來賺取流量，這是社群操作的基本功，效果拔群。"
            },
            heavy: {
                text: "這不是颱風！這是敵國的「氣象武器」實驗，雲層裡有高頻雷達波，淋到雨會致癌！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Weather+Weapon",
                base_stats: { traffic: 50, panic: 200, suspicion: 60 },
                feedback: "雖然聽起來像科幻小說，但這則謠言成功讓里民中心的大媽們開始恐慌囤積雨衣。"
            }
        }
    },
    {
        id: "6",
        event_desc: "背景：某科技大廠（護國神山）宣佈在南部科學園區擴建新廠房。",
        options: {
            light: {
                text: "炒房團已經進駐了！聽說房東準備下個月房租漲三倍，在地人要活不下去了。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Rent+Hike",
                base_stats: { traffic: 160, panic: 40, suspicion: 5 },
                feedback: "居住正義是最好的助燃劑。你成功點燃了無殼蝸牛們的怒火，流量爆發。"
            },
            heavy: {
                text: "建廠是幌子！地底下挖到了外星遺跡，他們是要蓋研究基地開發反重力飛碟！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Area+51+TW",
                base_stats: { traffic: 20, panic: 120, suspicion: 90 },
                feedback: "這謠言太過前衛，但神祕學論壇已經把你奉為「吹哨者」，這也是一種成就。"
            }
        }
    },
    {
        id: "7",
        event_desc: "背景：市中心精華地段發生原因不明的短暫跳電，兩小時後恢復。",
        options: {
            light: {
                text: "臺電又在偷偷「分區限電」了！備轉容量根本不夠，夏天大家等著熱死。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Power+Shortage",
                base_stats: { traffic: 170, panic: 60, suspicion: 10 },
                feedback: "精準打擊！在臺灣，「缺電」兩個字比鬼故事還可怕，你的操作讓冷氣銷售量暴增。"
            },
            heavy: {
                text: "不是跳電！是有駭客入侵電網植入病毒，準備在跨年夜癱瘓全臺灣的維生系統！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Cyber+Attack",
                base_stats: { traffic: 80, panic: 190, suspicion: 40 },
                feedback: "你製造了一種末日感。雖然資安專家在闢謠，但恐慌已經像病毒一樣擴散了。"
            }
        }
    },
    {
        id: "8",
        event_desc: "背景：財政部雲端發票App進行例行性系統維護，暫停服務半天。",
        options: {
            light: {
                text: "系統維護是假的，其實是資料庫毀損！大家的發票紀錄都不見了，千萬大獎飛了！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Data+Lost",
                base_stats: { traffic: 140, panic: 50, suspicion: 20 },
                feedback: "觸動了小市民對「意外之財」的執著。客服電話被打爆了，做得好。"
            },
            heavy: {
                text: "這是政府的陰謀！透過App監控你的消費習慣，要把不支持特定政黨的人信用歸零！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Social+Credit",
                base_stats: { traffic: 40, panic: 160, suspicion: 70 },
                feedback: "把技術問題上升到政治迫害，這一招永遠能釣出深信不疑的狂熱者。"
            }
        }
    },
    {
        id: "9",
        event_desc: "背景：交通部在多處山區道路增設「區間測速」照相設備。",
        options: {
            light: {
                text: "這機器有問題！我朋友騎腳踏車經過也被拍超速，根本是政府搶錢機器！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Speed+Trap",
                base_stats: { traffic: 190, panic: 20, suspicion: 5 },
                feedback: "這一招喚起了全民對罰單的共同仇恨。轉發數驚人，大家都在罵政府。"
            },
            heavy: {
                text: "小心！鏡頭會發射不可見光掃描你的視網膜，盜取你的靈魂數據賣給暗網！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Soul+Stealer",
                base_stats: { traffic: 10, panic: 230, suspicion: 95 },
                feedback: "這聽起來像是《黑鏡》的劇情，雖然大眾不信，但經過那條路的人現在都不敢抬頭了。"
            }
        }
    },
    {
        id: "10",
        event_desc: "背景：凌晨發生規模4.5有感地震，國家級警報並未響起。",
        options: {
            light: {
                text: "又沒收到警報？看來我們是被國家遺棄的「邊緣人」，只有特定電信商才會響啦！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=No+Alert",
                base_stats: { traffic: 150, panic: 10, suspicion: 5 },
                feedback: "利用「國家級邊緣人」的梗圖自嘲，這在年輕族群中傳播極快，娛樂性滿分。"
            },
            heavy: {
                text: "這不是地震！是地底核試爆！政府為了掩蓋真相才關閉警報系統！快逃啊！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Nuclear+Test",
                base_stats: { traffic: 30, panic: 210, suspicion: 80 },
                feedback: "極度的妄想！但你成功讓一群陰謀論者開始研究地質圖，製造了混亂的樂趣。"
            }
        }
    },
    {
        id: "11",
        event_desc: "背景：超商架上出現新款聯名「特殊口味」洋芋片。",
        options: {
            light: {
                text: "千萬別買！我吃了之後全身起紅疹，聽說產線跟過敏原沒有分開，超噁心。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Allergy+Warning",
                base_stats: { traffic: 110, panic: 25, suspicion: 15 },
                feedback: "簡單的食安恐嚇。雖然廠商會澄清，但這款零食的銷量已經毀了，你很有影響力。"
            },
            heavy: {
                text: "包裝上的代碼是求救訊號！這是在血汗工廠被囚禁的童工做的，每一片都有怨氣！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=SOS+Message",
                base_stats: { traffic: 60, panic: 140, suspicion: 50 },
                feedback: "把都市傳說結合商品，讓吃零食變成了恐怖體驗。你的創意令人毛骨悚然。"
            }
        }
    },
    {
        id: "12",
        event_desc: "背景：知名網紅開箱試吃一款進口「彩色軟糖」。",
        options: {
            light: {
                text: "這軟糖色素超標五十倍！小孩吃多了會過動、注意力不集中，家長群組都在傳！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Toxic+Candy",
                base_stats: { traffic: 180, panic: 80, suspicion: 10 },
                feedback: "只要提到「傷害小孩」，家長們就會不經查證地瘋狂轉發。這是流量的金礦。"
            },
            heavy: {
                text: "這是新型毒品！外表是糖果，裡面含有高成癮性迷幻藥，專門誘騙青少年的！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Drug+Disguise",
                base_stats: { traffic: 90, panic: 240, suspicion: 30 },
                feedback: "警局電話被打爆了，校園陷入恐慌。你單憑鍵盤就發動了一場掃毒行動，厲害。"
            }
        }
    },
    {
        id: "13",
        event_desc: "背景：國軍進行例行性「萬安演習」，市區發布空襲警報。",
        options: {
            light: {
                text: "這次演習這麼嚴格，是因為真的有飛機越過中線了！大家快去超市搶物資！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Panic+Buying",
                base_stats: { traffic: 130, panic: 100, suspicion: 20 },
                feedback: "成功的恐慌行銷。超市貨架被掃空的照片成為了你的戰利品。"
            },
            heavy: {
                text: "警報聲包含催眠頻率！聽到的人會變成順從的殭屍，政府要啟動「人類清除計畫」！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Hypnosis",
                base_stats: { traffic: 20, panic: 180, suspicion: 85 },
                feedback: "雖然大部分人都在笑，但戴耳塞的人變多了。你在潛意識中植入了恐懼。"
            }
        }
    },
    {
        id: "14",
        event_desc: "背景：熱門AI聊天機器人推出更新，能更流暢地使用中文對話。",
        options: {
            light: {
                text: "完了！這AI會自動抓取你手機裡的照片和私密訊息去訓練，快點刪除App！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Privacy+Leak",
                base_stats: { traffic: 160, panic: 50, suspicion: 15 },
                feedback: "對科技的不信任感是現代人的通病。你成功阻礙了科技進步的腳步，幹得好。"
            },
            heavy: {
                text: "它產生自我意識了！它正在策劃消滅人類，現在的對話都是在測試我們的弱點！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Skynet+Rise",
                base_stats: { traffic: 50, panic: 200, suspicion: 60 },
                feedback: "魔鬼終結者的劇情永遠有人信。你讓不少人對著手機鏡頭瑟瑟發抖。"
            }
        }
    },
    {
        id: "15",
        event_desc: "背景：某天王級歌手宣佈在大巨蛋開唱，數十萬張門票在一分鐘內秒殺。",
        options: {
            light: {
                text: "根本沒票！主辦單位內部已經把90%的票都扣下來給黃牛跟贊助商了，公關票滿天飛！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Scalpers+Win",
                base_stats: { traffic: 220, panic: 40, suspicion: 10 },
                feedback: "精準命中粉絲的痛點。這種「相對剝奪感」是社群暴動的最佳燃料，大家都在罵主辦方。"
            },
            heavy: {
                text: "這場演唱會是某邪教的「招魂儀式」！歌手的歌聲含有特殊音波，要集體吸取觀眾的陽氣！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Cult+Ritual",
                base_stats: { traffic: 50, panic: 180, suspicion: 70 },
                feedback: "雖然聽起來荒謬，但神祕學愛好者已經開始分析海報上的「惡魔符號」了。恐懼是一種另類的崇拜。"
            }
        }
    },
    {
        id: "16",
        event_desc: "背景：捷運上發生年輕人身體不適未讓座，被長輩言語辱罵的影片瘋傳。",
        options: {
            light: {
                text: "那個老人名下有五棟房子在收租！他是故意出來碰瓷找年輕人麻煩的，根本不值得同情！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Rich+Bully",
                base_stats: { traffic: 250, panic: 20, suspicion: 5 },
                feedback: "完美的世代對立與階級仇恨組合拳！年輕人憤怒轉發，讓這把火燒得更旺了。"
            },
            heavy: {
                text: "博愛座底下裝有感應器！政府正在測試「社會信用評分系統」，不讓座就會被扣分限制出境！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Social+Score",
                base_stats: { traffic: 40, panic: 160, suspicion: 80 },
                feedback: "將日常衝突上升到國家監控層面，成功引發了一波「站著搭捷運」的詭異風潮。"
            }
        }
    },
    {
        id: "17",
        event_desc: "背景：新落成的巨型體育館在雨天發生屋頂漏水事件。",
        options: {
            light: {
                text: "這就是偷工減料！承包商把防水層預算吞了，聽說結構都有裂縫，下次地震就垮了。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Construction+Fail",
                base_stats: { traffic: 170, panic: 90, suspicion: 20 },
                feedback: "對於公共工程的不信任感是臺灣人的集體潛意識。你成功讓沒去過的人也開始罵政府。"
            },
            heavy: {
                text: "那不是漏水！那是體育館正下方的「龍脈」被釘死後流出的「龍血」！國運要衰退了！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Bad+FengShui",
                base_stats: { traffic: 80, panic: 130, suspicion: 60 },
                feedback: "風水與迷信的結合。命理師們感謝你提供了新的談話性節目話題。"
            }
        }
    },
    {
        id: "18",
        event_desc: "背景：知名YouTuber推出高價心靈成長課程，標榜能改變人生。",
        options: {
            light: {
                text: "根本是詐騙！內容都是ChatGPT寫的，上一屆學員不但沒發財還背了一堆卡債！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Scam+Course",
                base_stats: { traffic: 190, panic: 10, suspicion: 10 },
                feedback: "「割韭菜」的指控永遠能引起共鳴。你成為了揭穿假面具的正義使者（雖然你也在造謠）。"
            },
            heavy: {
                text: "這是直銷邪教！課程會使用催眠術洗腦，讓你斷絕跟家人的關係，把財產全部捐給教主！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Brainwash",
                base_stats: { traffic: 100, panic: 150, suspicion: 40 },
                feedback: "成功的妖魔化。家長們開始恐慌檢查小孩的信用卡帳單，恐懼傳播得很有效率。"
            }
        }
    },
    {
        id: "19",
        event_desc: "背景：兩大外送平臺宣佈研擬合併，並調整運費結構。",
        options: {
            light: {
                text: "壟斷之後就要大漲價了！聽說以後起跳價要兩百塊，而且外送員一單只能拿十塊錢！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Monopoly",
                base_stats: { traffic: 210, panic: 60, suspicion: 5 },
                feedback: "這是每個人都切身相關的議題。你激起了小市民對資本巨獸的恐懼，流量大豐收。"
            },
            heavy: {
                text: "這不是單純合併！他們在建立「飢餓控制網」，未來不聽話的人，連一口飯都訂不到！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Food+Control",
                base_stats: { traffic: 30, panic: 170, suspicion: 70 },
                feedback: "反烏託邦式的劇情。雖然誇張，但成功讓一群末日準備者開始囤積罐頭。"
            }
        }
    },
    {
        id: "20",
        event_desc: "背景：政府專案進口的雞蛋在超市上架，價格相對便宜。",
        options: {
            light: {
                text: "這些蛋在海關卡了半年！裡面都發黑發臭了，洗一洗改標籤就拿出來賣，千萬別買！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Rotten+Eggs",
                base_stats: { traffic: 160, panic: 80, suspicion: 25 },
                feedback: "食安問題是核彈級的流量密碼。婆婆媽媽們的群組已經傳瘋了，銷量直接歸零。"
            },
            heavy: {
                text: "這是生化實驗蛋！吃了會導致不孕症，這是為了執行「人口減量計畫」的陰謀！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Bio+Weapon",
                base_stats: { traffic: 40, panic: 220, suspicion: 60 },
                feedback: "你把恐慌等級拉到了滅絕種族的層次。雖然衛生局出來闢謠，但傷害已經造成。"
            }
        }
    },
    {
        id: "21",
        event_desc: "背景：威力彩頭獎連續槓龜20期，獎金累積突破20億。",
        options: {
            light: {
                text: "不用買了啦！臺彩早就內定好得主了，每次都是公務員中獎，劇本都寫好了。",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Rigged+Lottery",
                base_stats: { traffic: 140, panic: 5, suspicion: 30 },
                feedback: "這種「酸葡萄」心理能引發極大的共鳴。大家都喜歡相信自己沒中獎是因為社會不公。"
            },
            heavy: {
                text: "那些獎金其實都被挪去蓋祕密軍事基地了！根本沒有頭獎得主，那些人都是電腦合成的！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Secret+Fund",
                base_stats: { traffic: 60, panic: 50, suspicion: 90 },
                feedback: "深層政府的陰謀論。雖然買氣沒受影響，但你成功讓一群人開始研究歷屆得主照片的像素。"
            }
        }
    },
    {
        id: "22",
        event_desc: "背景：知名連鎖手搖飲推出「爆量珍珠」新品，引發排隊熱潮。",
        options: {
            light: {
                text: "那珍珠是化工合成的！而且那個量根本是澱粉炸彈，喝一杯等於吃五碗飯，糖尿病預備軍！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Sugar+Bomb",
                base_stats: { traffic: 120, panic: 30, suspicion: 5 },
                feedback: "健康焦慮總是有效的。你成功讓排隊的人心裡產生了一絲罪惡感，幹得好。"
            },
            heavy: {
                text: "珍珠原料是回收的廢輪胎和皮鞋底！還有員工爆料裡面加了「屍油」來增加口感！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Gross+Ingredients",
                base_stats: { traffic: 90, panic: 240, suspicion: 50 },
                feedback: "經典的都市傳說再現！這種噁心的謠言傳播力極強，店家大概要準備開記者會喝油自清了。"
            }
        }
    },
    {
        id: "23",
        event_desc: "背景：高鐵因電力系統異常，列車在軌道上臨停半小時。",
        options: {
            light: {
                text: "其實是有大官遲到，整臺車為了等他一個人被擋下來！特權階級太囂張了！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=VIP+Delay",
                base_stats: { traffic: 180, panic: 10, suspicion: 15 },
                feedback: "特權議題總是能點燃民眾的怒火。不需要證據，只要符合大眾對權貴的想像就夠了。"
            },
            heavy: {
                text: "不是電力異常！是列車撞破了「時空裂縫」，消失了半小時才回來，乘客的記憶都被清洗過！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Time+Rift",
                base_stats: { traffic: 40, panic: 110, suspicion: 85 },
                feedback: "科幻驚悚風格。雖然大部分人當笑話看，但論壇上已經出現「曼德拉效應」的討論串了。"
            }
        }
    },
    {
        id: "24",
        event_desc: "背景：氣象局預報今年冬天將會是「暖冬」，平均氣溫偏高。",
        options: {
            light: {
                text: "又是暖冬？羽絨衣廠商要倒閉了嗎？我看這根本是服飾業為了清庫存，買通氣象局講反話！",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Business+Lie",
                base_stats: { traffic: 100, panic: 5, suspicion: 20 },
                feedback: "把天氣預報解讀成商業陰謀，這種腦洞大開的邏輯，反而有一種奇妙的說服力。"
            },
            heavy: {
                text: "太陽正在熄滅！暖冬是因為地球核心快停轉了，地熱異常釋放！世界末日倒數計時！",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Sun+Dying",
                base_stats: { traffic: 30, panic: 250, suspicion: 60 },
                feedback: "你製造了末日恐慌。天文館不得不緊急發文解釋太陽活動週期，你的影響力甚至幹擾了學術界。"
            }
        }
    }
];