SCENARIOS.push(
    {
        id: "41",
        event_desc: "新聞：健保署宣佈部分慢性病藥物因成本考量，恐面臨缺藥危機。",
        options: {
            light: {
                text: "💊 藥廠覺得臺灣藥價太低不賣了！健保署只會砍價，害死老百姓，以後有錢也買不到藥！家裡有老人的快去囤藥！🏃‍♂️🏥 #缺藥 #健保 #囤貨",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=No+Meds",
                base_stats: { traffic: 180, panic: 120, suspicion: 5 },
                feedback: "健康議題最能引發恐慌。長輩們開始衝去藥局囤積根本不需要的藥。"
            },
            heavy: {
                text: "📦 缺藥是假的！政府把藥都囤積起來，準備在生化戰爭爆發時高價賣給權貴！我們只能等死！☠️💰 #囤積 #生化戰 #階級清洗",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Hoarding",
                base_stats: { traffic: 50, panic: 200, suspicion: 70 },
                feedback: "階級對立加上生存恐懼。這則謠言讓社會氣氛變得更加肅殺。"
            }
        }
    },
    {
        id: "42",
        event_desc: "新聞：政府推出只租不賣的社會住宅，中籤率創歷史新低。",
        options: {
            light: {
                text: "🏠 中籤率比樂透還低！都是做樣子的，聽說保留戶都給了官員親戚，一般人根本抽不到！騙票！🤥🗳️ #社會住宅 #黑箱 #騙局",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Unfair+Housing",
                base_stats: { traffic: 190, panic: 10, suspicion: 6 },
                feedback: "居住正義的挫敗感。年輕人對政府的信任度再次下降。"
            },
            heavy: {
                text: "👁️ 社宅的牆壁裡都埋了監聽器！這是「楚門的世界」真實版，住進去就沒有隱私，全天候直播！變態政府！📹😱 #楚門的世界 #監聽 #隱私",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Surveillance",
                base_stats: { traffic: 30, panic: 170, suspicion: 85 },
                feedback: "隱私恐慌。雖然中籤的人還是會去住，但他們可能會開始敲牆壁檢查。"
            }
        }
    },
    {
        id: "43",
        event_desc: "新聞：頂尖大學宣佈將與科技大學合併，引發校友強烈反彈。",
        options: {
            light: {
                text: "🎓 學歷貶值了！名校光環不再，畢業證書變廢紙，校長根本是為了賣校產！校友們站出來！😡🏫 #學歷貶值 #賣校 #抗議",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Degree+Devalue",
                base_stats: { traffic: 160, panic: 30, suspicion: 3 },
                feedback: "觸動了菁英階級的敏感神經。校友會的電話被打爆，抗議聲浪不斷。"
            },
            heavy: {
                text: "☢️ 合併是為了掩護校園底下的核子反應爐擴建！學生都是人體輻射吸收器！快休學！☢️🏫 #核反應爐 #人體實驗 #輻射",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Nuclear+Campus",
                base_stats: { traffic: 40, panic: 210, suspicion: 60 },
                feedback: "校園傳說的升級版。學生們開始在校園裡拿著蓋革計數器測量。"
            }
        }
    },
    {
        id: "44",
        event_desc: "新聞：內政部推動換發「數位身分證」，宣稱能提升便利性與安全性。",
        options: {
            light: {
                text: "🔓 資安根本沒做好！把所有雞蛋放在同一個籃子裡，駭客一攻破，全台灣人的個資就裸奔了！拒換！🚫🆔 #資安 #個資外洩 #拒絕",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Data+Leak",
                base_stats: { traffic: 190, panic: 60, suspicion: 6 },
                feedback: "隱私權是現代人的軟肋。對於政府資安的不信任感，讓這則貼文獲得極高共鳴。"
            },
            heavy: {
                text: "🧠 晶片裡藏有「腦波接收器」！政府可以透過5G基地台讀取你的思想，甚至植入虛假記憶！別領！📡🤯 #腦控 #思想審查 #數位極權",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Mind+Control",
                base_stats: { traffic: 40, panic: 230, suspicion: 90 },
                feedback: "科技極權的終極幻想。雖然聽起來像科幻小說，但有些人已經開始用鋁箔紙包身分證了。"
            }
        }
    },
    {
        id: "45",
        event_desc: "新聞：熱門手遊伺服器無預警維修超過24小時，玩家哀鴻遍野。",
        options: {
            light: {
                text: "🎮 工程師打翻泡麵在主機上嗎？補償只給一點點，把課金玩家當乞丐打發？退坑啦！爛遊戲！👎🍜 #維修 #退坑 #爛營運",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Server+Down",
                base_stats: { traffic: 170, panic: 10, suspicion: 2 },
                feedback: "玩家的憤怒是最直接的流量。遊戲公司的粉專被洗版，負評如潮。"
            },
            heavy: {
                text: "🤖 伺服器沒壞！是遊戲裡的AI產生自我意識，正在跟人類談判，不答應就刪除所有帳號！刀劍神域是真的！⚔️🌐 #AI覺醒 #刀劍神域 #虛擬世界",
                image_url: "https://placehold.co/400x300/581818/FFF?text=AI+Revolt",
                base_stats: { traffic: 60, panic: 180, suspicion: 70 },
                feedback: "Cyberpunk風格的謠言。玩家們開始討論如果AI統治世界，他們的虛擬寶物還在不在。"
            }
        }
    },
    {
        id: "46",
        event_desc: "新聞：警方破獲藏身豪宅的詐騙集團，起出大量現金與名車。",
        options: {
            light: {
                text: "⚖️ 抓了又放！臺灣是詐騙天堂，法律根本沒有嚇阻力，法官都判很輕，難怪大家都去詐騙！恐龍法官！🦕🔨 #詐騙天堂 #恐龍法官 #司法已死",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Fraud+Paradise",
                base_stats: { traffic: 230, panic: 10, suspicion: 5 },
                feedback: "對司法的不信任是流量保證。大家都在罵恐龍法官，社會充滿了正義的怒火。"
            },
            heavy: {
                text: "🏛️ 詐騙集團其實是政府的外包單位！專門騙外匯來補國庫缺口，所以才抓不完！這是國家級產業！🇹🇼💰 #國家詐騙隊 #國庫 #黑幕",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Gov+Fraud",
                base_stats: { traffic: 40, panic: 150, suspicion: 90 },
                feedback: "把犯罪行為政治化。雖然邏輯不通，但符合某些人對政府的負面想像。"
            }
        }
    },
    {
        id: "47",
        event_desc: "新聞：南部登革熱疫情升溫，衛生局派員進行戶外噴藥作業。",
        options: {
            light: {
                text: "🌫️ 噴藥噴到家裡都是油！傢俱都壞了，蚊子沒死人先被毒死！政府擾民第一名！賠償啦！😷🛋️ #登革熱 #噴藥 #擾民",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Chemical+Spray",
                base_stats: { traffic: 150, panic: 50, suspicion: 3 },
                feedback: "生活不便引發的抱怨。雖然防疫重要，但民眾的怒氣需要出口。"
            },
            heavy: {
                text: "🦟 登革熱是生化武器實驗！那些蚊子是基因改造的，叮到會改變你的DNA，變成變種人！快穿防護衣！🧬🧟‍♂️ #生化蚊子 #基因改造 #變種",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Mutant+Mosquito",
                base_stats: { traffic: 30, panic: 240, suspicion: 80 },
                feedback: "生化危機般的恐慌。有人開始穿防護衣出門了。"
            }
        }
    },
    {
        id: "48",
        event_desc: "新聞：大型宗教繞境活動經過市區，沿途鞭炮聲與垃圾引發民怨。",
        options: {
            light: {
                text: "🧨 神明會喜歡製造垃圾嗎？這根本是藉神之名行流氓之實！吵死人了，明天還要上班耶！素質在哪？🗑️🙉 #繞境 #噪音 #垃圾",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Noise+Pollution",
                base_stats: { traffic: 200, panic: 5, suspicion: 2 },
                feedback: "傳統文化與現代生活的衝突。網路上戰成一團，有人挺傳統，有人罵陋習。"
            },
            heavy: {
                text: "👹 繞境路線其實是一個巨大的封印陣法！他們是在鎮壓地底下的哥吉拉，鞭炮聲是為了掩蓋怪獸的吼聲！🦖🔥 #封印 #怪獸 #神祕儀式",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Monster+Seal",
                base_stats: { traffic: 70, panic: 130, suspicion: 60 },
                feedback: "特攝片風格的謠言。年輕人覺得很酷，紛紛轉發。"
            }
        }
    },
    {
        id: "49",
        event_desc: "新聞：某國小營養午餐被發現含有未經核准的食品添加物。",
        options: {
            light: {
                text: "🍱 廠商黑心！校長回扣拿多少？孩子的健康誰來賠？這種人應該下地獄！家長們站出來！😡🏫 #營養午餐 #黑心 #回扣",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Bad+Lunch",
                base_stats: { traffic: 180, panic: 90, suspicion: 7 },
                feedback: "家長的憤怒是核彈等級。學校電話被打爆，校長被逼出來道歉。"
            },
            heavy: {
                text: "🦸‍♂️ 添加物是為了抑制小孩的超能力！政府怕新人類覺醒推翻政權，從小就開始下藥！不要吃午餐！🚫💊 #超能力 #覺醒 #政府陰謀",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Superpower+Suppress",
                base_stats: { traffic: 40, panic: 160, suspicion: 70 },
                feedback: "中二病發作的陰謀論。小學生們開始幻想自己有超能力，反而很興奮。"
            }
        }
    },
    {
        id: "50",
        event_desc: "新聞：半導體大廠引進數百名外籍工程師，進行技術交流。",
        options: {
            light: {
                text: "🕵️‍♂️ 來偷技術的！幾年後我們就沒有優勢了，政府還在睡！臺灣要被掏空了！護國神山不保！📉🇹🇼 #偷技術 #掏空 #亡國感",
                image_url: "https://placehold.co/400x300/2c3e50/FFF?text=Tech+Theft",
                base_stats: { traffic: 190, panic: 40, suspicion: 5 },
                feedback: "販賣「亡國感」永遠有效。大家開始擔心護國神山不保。"
            },
            heavy: {
                text: "👽 那些工程師其實是偽裝的外星人！他們來拿回當年墜落在地球的飛碟科技，準備離開地球！MIB是真的！🛸🕶️ #外星人 #MIB #黑衣人",
                image_url: "https://placehold.co/400x300/581818/FFF?text=Alien+Engineer",
                base_stats: { traffic: 50, panic: 200, suspicion: 80 },
                feedback: "科幻大結局。雖然沒人信，但這則謠言為這場混亂的資訊戰畫下了一個荒謬的句點。"
            }
        }
    }
);
