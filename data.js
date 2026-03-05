const allLessonsData = {
    // ================= 第一課 =================
   "1": { 
    title: "第一課：穿越時空的味道", 
    level1: [
        // 廳：部件較多(7個)，座標均勻分布
        { word: "廳", parts: ["images-5/L1/筆順-廳-部件-1.png", "images-5/L1/筆順-廳-部件-2.png", "images-5/L1/筆順-廳-部件-3.png", "images-5/L1/筆順-廳-部件-4.png", "images-5/L1/筆順-廳-部件-5.png", "images-5/L1/筆順-廳-部件-6.png", "images-5/L1/筆順-廳-部件-7.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}, {x: 250, y: 180}, {x: 290, y: 180}] },
        // 盞
        { word: "盞", parts: ["images-5/L1/筆順-盞-部件-1.png", "images-5/L1/筆順-盞-部件-2.png", "images-5/L1/筆順-盞-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 灑
        { word: "灑", parts: ["images-5/L1/筆順-灑-部件-1.png", "images-5/L1/筆順-灑-部件-2.png", "images-5/L1/筆順-灑-部件-3.png", "images-5/L1/筆順-灑-部件-4.png", "images-5/L1/筆順-灑-部件-5.png", "images-5/L1/筆順-灑-部件-6.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}, {x: 250, y: 180}] },
        // 壺
        { word: "壺", parts: ["images-5/L1/筆順-壺-部件-1.png", "images-5/L1/筆順-壺-部件-2.png", "images-5/L1/筆順-壺-部件-3.png", "images-5/L1/筆順-壺-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
        // 菊
        { word: "菊", parts: ["images-5/L1/筆順-菊-部件-1.png", "images-5/L1/筆順-菊-部件-2.png", "images-5/L1/筆順-菊-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 閱
        { word: "閱", parts: ["images-5/L1/筆順-閱-部件-1.png", "images-5/L1/筆順-閱-部件-2.png", "images-5/L1/筆順-閱-部件-3.png", "images-5/L1/筆順-閱-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
        // 附
        { word: "附", parts: ["images-5/L1/筆順-附-部件-1.png", "images-5/L1/筆順-附-部件-2.png", "images-5/L1/筆順-附-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 眸
        { word: "眸", parts: ["images-5/L1/筆順-眸-部件-1.png", "images-5/L1/筆順-眸-部件-2.png", "images-5/L1/筆順-眸-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 戀
        { word: "戀", parts: ["images-5/L1/筆順-戀-部件-1.png", "images-5/L1/筆順-戀-部件-2.png", "images-5/L1/筆順-戀-部件-3.png", "images-5/L1/筆順-戀-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
        // 飲
        { word: "飲", parts: ["images-5/L1/筆順-飲-部件-1.png", "images-5/L1/筆順-飲-部件-2.png", "images-5/L1/筆順-飲-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 氛
        { word: "氛", parts: ["images-5/L1/筆順-氛-部件-1.png", "images-5/L1/筆順-氛-部件-2.png", "images-5/L1/筆順-氛-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 闔
        { word: "闔", parts: ["images-5/L1/筆順-闔-部件-1.png", "images-5/L1/筆順-闔-部件-2.png", "images-5/L1/筆順-闔-部件-3.png", "images-5/L1/筆順-闔-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
        // 籤
        { word: "籤", parts: ["images-5/L1/筆順-籤-部件-1.png", "images-5/L1/筆順-籤-部件-2.png", "images-5/L1/筆順-籤-部件-3.png", "images-5/L1/筆順-籤-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
        // 溶
        { word: "溶", parts: ["images-5/L1/筆順-溶-部件-1.png", "images-5/L1/筆順-溶-部件-2.png", "images-5/L1/筆順-溶-部件-3.png", "images-5/L1/筆順-溶-部件-4.png", "images-5/L1/筆順-溶-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
        // 咖
        { word: "咖", parts: ["images-5/L1/筆順-咖-部件-1.png", "images-5/L1/筆順-咖-部件-2.png", "images-5/L1/筆順-咖-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
        // 啡
        { word: "啡", parts: ["images-5/L1/筆順-啡-部件-1.png", "images-5/L1/筆順-啡-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
        // 券：部件多(7個)
        { word: "券", parts: ["images-5/L1/筆順-券-部件-1.png", "images-5/L1/筆順-券-部件-2.png", "images-5/L1/筆順-券-部件-3.png", "images-5/L1/筆順-券-部件-4.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}, {x: 250, y: 180}, {x: 290, y: 180}] },
        // 粹
        { word: "粹", parts: ["images-5/L1/筆順-粹-部件-1.png", "images-5/L1/筆順-粹-部件-2.png", "images-5/L1/筆順-粹-部件-3.png", "images-5/L1/筆順-粹-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] }
    ], 
    level2: [], level3: [], level4: [] 
    },

    // ================= 第二課 =================
    "2": {
        title: "第二課：在黑暗中乘著音樂飛翔",
        level1: [
            // 席：調整比例保留
            { word: "席", parts: ["images-5/L2/筆順-席-部件-1.png", "images-5/L2/筆順-席-部件-2.png", "images-5/L2/筆順-席-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            //徐：部件1大保留，部件3、4小保留
            { word: "徐", parts: ["images-5/L2/筆順-徐-部件-1.png", "images-5/L2/筆順-徐-部件-2.png", "images-5/L2/筆順-徐-部件-3.png", "images-5/L2/筆順-徐-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.3}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.7}, {x: 150, y: 180, scale: 0.7}] },
            // 掌
            { word: "掌", parts: ["images-5/L2/筆順-掌-部件-1.png", "images-5/L2/筆順-掌-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 映：部件1縮小保留
            { word: "映", parts: ["images-5/L2/筆順-映-部件-1.png", "images-5/L2/筆順-映-部件-2.png"], pos: [{x: 100, y: 180, scale: 0.7}, {x: 170, y: 180}] },
            //冠：部件3縮小保留
            { word: "冠", parts: ["images-5/L2/筆順-冠-部件-1.png", "images-5/L2/筆順-冠-部件-2.png", "images-5/L2/筆順-冠-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            // 軍
            { word: "軍", parts: ["images-5/L2/筆順-軍-部件-1.png", "images-5/L2/筆順-軍-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            //逆：部首辶最後大放，內部結構小保留
            { word: "逆", parts: ["images-5/L2/筆順-逆-部件-1.png", "images-5/L2/筆順-逆-部件-2.png", "images-5/L2/筆順-逆-部件-3.png"], pos: [{x: 70, y: 180, scale: 0.6}, {x: 120, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 1.6}] },
            //盲：部件2縮小保留
            { word: "盲", parts: ["images-5/L2/筆順-盲-部件-1.png", "images-5/L2/筆順-盲-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180, scale: 0.7}] },
            // 扇
            { word: "扇", parts: ["images-5/L2/筆順-扇-部件-1.png", "images-5/L2/筆順-扇-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            //遭：部首辶最後大放，內部結構曹全縮小保留
            { word: "遭", parts: ["images-5/L2/筆順-遭-部件-1.png", "images-5/L2/筆順-遭-部件-2.png", "images-5/L2/筆順-遭-部件-3.png", "images-5/L2/筆順-遭-部件-4.png", "images-5/L2/筆順-遭-部件-5.png"], pos: [{x: 50, y: 180, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 130, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.6}, {x: 210, y: 180, scale: 1.6}] },
            // 盆
            { word: "盆", parts: ["images-5/L2/筆順-盆-部件-1.png", "images-5/L2/筆順-盆-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            //階：部件1放大保留
            { word: "階", parts: ["images-5/L2/筆順-階-部件-1.png", "images-5/L2/筆順-階-部件-2.png", "images-5/L2/筆順-階-部件-3.png"], pos: [{x: 70, y: 180, scale: 1.4}, {x: 120, y: 180}, {x: 170, y: 180}] },
            //鑽：部件1大保留，2.3小保留
            { word: "鑽", parts: ["images-5/L2/筆順-鑽-部件-1.png", "images-5/L2/筆順-鑽-部件-2.png", "images-5/L2/筆順-鑽-部件-3.png", "images-5/L2/筆順-鑽-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.4}, {x: 150, y: 130, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180}] },
            // 轟
            { word: "轟", parts: ["images-5/L2/筆順-轟-部件-1.png", "images-5/L2/筆順-轟-部件-2.png", "images-5/L2/筆順-轟-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            //隆：部件1大保留，3.4小保留
            { word: "隆", parts: ["images-5/L2/筆順-隆-部件-1.png", "images-5/L2/筆順-隆-部件-2.png", "images-5/L2/筆順-隆-部件-3.png", "images-5/L2/筆順-隆-部件-4.png"], pos: [{x: 90, y: 130, scale: 1.4}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.7}] },
            //途：部首辶最後大放，內部結構余前三個小保留
            { word: "途", parts: ["images-5/L2/筆順-途-部件-1.png", "images-5/L2/筆順-途-部件-2.png", "images-5/L2/筆順-途-部件-3.png", "images-5/L2/筆順-途-部件-4.png"], pos: [{x: 70, y: 180, scale: 0.6}, {x: 120, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.6}, {x: 220, y: 180, scale: 1.6}] },
            //鑑：原設定的2.3.4小保留
            { word: "鑑", parts: ["images-5/L2/筆順-鑑-部件-1.png", "images-5/L2/筆順-鑑-部件-2.png", "images-5/L2/筆順-鑑-部件-3.png", "images-5/L2/筆順-鑑-部件-4.png", "images-5/L2/筆順-鑑-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 0.7}, {x: 130, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.7}, {x: 210, y: 180}] },
            //繽：部件1大保留，部件3小保留，原設定的4.5小保留
            { word: "繽", parts: ["images-5/L2/筆順-繽-部件-1.png", "images-5/L2/筆順-繽-部件-2.png", "images-5/L2/筆順-繽-部件-3.png", "images-5/L2/筆順-繽-部件-4.png", "images-5/L2/筆順-繽-部件-5.png"], pos: [{x: 50, y: 180, scale: 1.4}, {x: 90, y: 180}, {x: 130, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.7}, {x: 210, y: 180, scale: 0.7}] }
        ],
        level2: [], level3: [], level4: []
    },

    // ================= 第三課 =================
    "3": { 
        title: "第三課：色香味的陽光", 
        level1: [
            // 霧：部件2, 3, 4 小一點保留
            { word: "霧", parts: ["images-5/L3/筆順-霧-部件-1.png", "images-5/L3/筆順-霧-部件-2.png", "images-5/L3/筆順-霧-部件-3.png", "images-5/L3/筆順-霧-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] },
            // 吻：部件1 小一點保留
            { word: "吻", parts: ["images-5/L3/筆順-吻-部件-1.png", "images-5/L3/筆順-吻-部件-2.png"], pos: [{x: 100, y: 180, scale: 0.7}, {x: 170, y: 180}] },
            { word: "株", parts: ["images-5/L3/筆順-株-部件-1.png", "images-5/L3/筆順-株-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "芭", parts: ["images-5/L3/筆順-芭-部件-1.png", "images-5/L3/筆順-芭-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "紫", parts: ["images-5/L3/筆順-紫-部件-1.png", "images-5/L3/筆順-紫-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 🌟 橘：部件1大(1.3)，部件2 3小(0.7)，部件4 5再小一點(0.5)
            { word: "橘", parts: ["images-5/L3/筆順-橘-部件-1.png", "images-5/L3/筆順-橘-部件-2.png", "images-5/L3/筆順-橘-部件-3.png", "images-5/L3/筆順-橘-部件-4.png", "images-5/L3/筆順-橘-部件-5.png"], pos: [{x: 50, y: 180, scale: 1.3}, {x: 90, y: 180, scale: 0.7}, {x: 130, y: 180, scale: 0.7}, {x: 170, y: 180, scale: 0.5}, {x: 210, y: 180, scale: 0.5}] },
            { word: "趴", parts: ["images-5/L3/筆順-趴-部件-1.png", "images-5/L3/筆順-趴-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "駐", parts: ["images-5/L3/筆順-駐-部件-1.png", "images-5/L3/筆順-駐-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            //巡：部件1 小一點保留
            { word: "巡", parts: ["images-5/L3/筆順-巡-部件-1.png", "images-5/L3/筆順-巡-部件-2.png"], pos: [{x: 100, y: 180, scale: 0.6}, {x: 170, y: 180}] },
            // 闖：部件1大一點，部件2小一點保留
            { word: "闖", parts: ["images-5/L3/筆順-闖-部件-1.png", "images-5/L3/筆順-闖-部件-2.png"], pos: [{x: 100, y: 180, scale: 1.3}, {x: 170, y: 180, scale: 0.6}] },
            //嚴：部件3, 4 小一點保留
            { word: "嚴", parts: ["images-5/L3/筆順-嚴-部件-1.png", "images-5/L3/筆順-嚴-部件-2.png", "images-5/L3/筆順-嚴-部件-3.png", "images-5/L3/筆順-嚴-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] },
            { word: "庫", parts: ["images-5/L3/筆順-庫-部件-1.png", "images-5/L3/筆順-庫-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            //澀：部件2, 3, 4, 5 小一點保留
            { word: "澀", parts: ["images-5/L3/筆順-澀-部件-1.png", "images-5/L3/筆順-澀-部件-2.png", "images-5/L3/筆順-澀-部件-3.png", "images-5/L3/筆順-澀-部件-4.png", "images-5/L3/筆順-澀-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 0.6}, {x: 130, y: 180, scale: 0.6}, {x: 170, y: 180, scale: 0.6}, {x: 210, y: 180, scale: 0.6}] },
            //餘：部件2, 3, 4 小一點保留
            { word: "餘", parts: ["images-5/L3/筆順-餘-部件-1.png", "images-5/L3/筆順-餘-部件-2.png", "images-5/L3/筆順-餘-部件-3.png", "images-5/L3/筆順-餘-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.6}, {x: 90, y: 180, scale: 0.6}, {x: 150, y: 180, scale: 0.6}] },
            { word: "瞥", parts: ["images-5/L3/筆順-瞥-部件-1.png", "images-5/L3/筆順-瞥-部件-2.png", "images-5/L3/筆順-瞥-部件-3.png", "images-5/L3/筆順-瞥-部件-4.png", "images-5/L3/筆順-瞥-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "狂", parts: ["images-5/L3/筆順-狂-部件-1.png", "images-5/L3/筆順-狂-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 🌟 罩：部件2 小一點(0.7)，Preserve standard coordinates
            { word: "罩", parts: ["images-5/L3/筆順-罩-部件-1.png", "images-5/L3/筆順-罩-部件-2.png", "images-5/L3/筆順-罩-部件-3.png", "images-5/L3/筆順-罩-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130, scale: 0.7}, {x: 90, y: 180}, {x: 150, y: 180}] },
            // 🌟 歉：部件2 3大(1.3)，部件4小一點(Standard 1.0)，部件 5大一點(Standard 1.0)
            { word: "歉", parts: ["images-5/L3/筆順-歉-部件-1.png", "images-5/L3/筆順-歉-部件-2.png", "images-5/L3/筆順-歉-部件-3.png", "images-5/L3/筆順-歉-部件-4.png", "images-5/L3/筆順-歉-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180, scale: 1.3}, {x: 130, y: 180, scale: 1.3}, {x: 170, y: 180}, {x: 210, y: 180}] }
        ], 
        level2: [], 
        level3: [ 
            // 第三課愛玉填空題保留
            { text: "太陽好大，天氣很________。", answer: "炎熱" },
            { text: "我喜歡吃冰冰涼涼的________。", answer: "愛玉" },
            { text: "蛋糕是甜甜的________。", answer: "甜品" },
            { text: "衣服洗好了，拿去太陽下________。", answer: "曬乾" },
            { text: "小狗的身上有黑色的________。", answer: "斑點" },
            { text: "我們在水裡用力________愛玉子。", answer: "搓洗" },
            { text: "爸爸把水倒進透明的________。", answer: "容器" },
            { text: "把種子裝進白色的小________。", answer: "棉袋" },
            { text: "冰水裡加一點________，甜甜的好好喝。", answer: "糖水" }
        ], 
        level4: [] 
    },

    // ================= 第四課 =================
    "4": { 
        title: "第四課：縣官審石頭", 
        level1: [
            { word: "闆", parts: ["images-5/L4/筆順-闆-部件-1.png", "images-5/L4/筆順-闆-部件-2.png", "images-5/L4/筆順-闆-部件-3.png", "images-5/L4/筆順-闆-部件-4.png", "images-5/L4/筆順-闆-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "販", parts: ["images-5/L4/筆順-販-部件-1.png", "images-5/L4/筆順-販-部件-2.png", "images-5/L4/筆順-販-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "攤", parts: ["images-5/L4/筆順-攤-部件-1.png", "images-5/L4/筆順-攤-部件-2.png", "images-5/L4/筆順-攤-部件-3.png", "images-5/L4/筆順-攤-部件-4.png", "images-5/L4/筆順-攤-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "賊", parts: ["images-5/L4/筆順-賊-部件-1.png", "images-5/L4/筆順-賊-部件-2.png", "images-5/L4/筆順-賊-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "冤", parts: ["images-5/L4/筆順-冤-部件-1.png", "images-5/L4/筆順-冤-部件-2.png", "images-5/L4/筆順-冤-部件-3.png", "images-5/L4/筆順-冤-部件-4.png", "images-5/L4/筆順-冤-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "枉", parts: ["images-5/L4/筆順-枉-部件-1.png", "images-5/L4/筆順-枉-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "辨", parts: ["images-5/L4/筆順-辨-部件-1.png", "images-5/L4/筆順-辨-部件-2.png", "images-5/L4/筆順-辨-部件-3.png", "images-5/L4/筆順-辨-部件-4.png", "images-5/L4/筆順-辨-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "惡", parts: ["images-5/L4/筆順-惡-部件-1.png", "images-5/L4/筆順-惡-部件-2.png", "images-5/L4/筆順-惡-部件-3.png", "images-5/L4/筆順-惡-部件-4.png", "images-5/L4/筆順-惡-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "武", parts: ["images-5/L4/筆順-武-部件-1.png", "images-5/L4/筆順-武-部件-2.png", "images-5/L4/筆順-武-部件-3.png", "images-5/L4/筆順-武-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "嫌", parts: ["images-5/L4/筆順-嫌-部件-1.png", "images-5/L4/筆順-嫌-部件-2.png", "images-5/L4/筆順-嫌-部件-3.png", "images-5/L4/筆順-嫌-部件-4.png", "images-5/L4/筆順-嫌-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "疑", parts: ["images-5/L4/筆順-疑-部件-1.png", "images-5/L4/筆順-疑-部件-2.png", "images-5/L4/筆順-疑-部件-3.png", "images-5/L4/筆順-疑-部件-4.png", "images-5/L4/筆順-疑-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "押", parts: ["images-5/L4/筆順-押-部件-1.png", "images-5/L4/筆順-押-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "審", parts: ["images-5/L4/筆順-審-部件-1.png", "images-5/L4/筆順-審-部件-2.png", "images-5/L4/筆順-審-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "罰", parts: ["images-5/L4/筆順-罰-部件-1.png", "images-5/L4/筆順-罰-部件-2.png", "images-5/L4/筆順-罰-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "沾", parts: ["images-5/L4/筆順-沾-部件-1.png", "images-5/L4/筆順-沾-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "貪", parts: ["images-5/L4/筆順-貪-部件-1.png", "images-5/L4/筆順-貪-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "饒", parts: ["images-5/L4/筆順-饒-部件-1.png", "images-5/L4/筆順-饒-部件-2.png", "images-5/L4/筆順-饒-部件-3.png", "images-5/L4/筆順-饒-部件-4.png", "images-5/L4/筆順-饒-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "謀", parts: ["images-5/L4/筆順-謀-部件-1.png", "images-5/L4/筆順-謀-部件-2.png", "images-5/L4/筆順-謀-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] }
        ], 
        level2: [], level3: [], level4: [] 
    },

    // ================= 第五課 =================
    "5": { title: "第五課：高明說話術", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第六課 =================
    "6": { title: "第六課：讀書報告-佐賀的超級阿嬤", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第七課 =================
    "7": { title: "第七課：魔術師爸爸", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第八課 =================
    "8": { title: "第八課：八歲，一個人去旅行", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第九課 =================
    "9": { title: "第九課：紅鼻子醫生", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第十課 =================
    "10": { title: "第十課：沉默動物園", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第十一課 =================
    "11": { title: "第十一課：地下護衛軍", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第十二課 =================
    "12": { title: "第十二課：金字塔之謎", level1: [], level2: [], level3: [], level4: [] }
};
