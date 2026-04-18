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
            { word: "鑽", parts: ["images-5/L2/筆順-鑽-部件-1.png", "images-5/L2/筆順-鑽-部件-2.png", "images-5/L2/筆順-鑽-部件-3.png", "images-5/L2/筆順-鑽-部件-4.png"], pos
