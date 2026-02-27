const allLessonsData = {
    // ================= 第一課 (預留位置) =================
    "1": { title: "第一課：(請輸入課名)", level1: [], level2: [], level3: [], level4: [] },

    // ================= 第二課 =================
    "2": {
        title: "第二課：(請輸入課名)",
        level1: [
            // 3 個部件
            { word: "席", parts: ["images-5/L2/筆順-席-部件-1.png", "images-5/L2/筆順-席-部件-2.png", "images-5/L2/筆順-席-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            { word: "徐", parts: ["images-5/L2/筆順-徐-部件-1.png", "images-5/L2/筆順-徐-部件-2.png", "images-5/L2/筆順-徐-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            // 2 個部件
            { word: "掌", parts: ["images-5/L2/筆順-掌-部件-1.png", "images-5/L2/筆順-掌-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "映", parts: ["images-5/L2/筆順-映-部件-1.png", "images-5/L2/筆順-映-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 3 個部件
            { word: "冠", parts: ["images-5/L2/筆順-冠-部件-1.png", "images-5/L2/筆順-冠-部件-2.png", "images-5/L2/筆順-冠-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            // 2 個部件
            { word: "軍", parts: ["images-5/L2/筆順-軍-部件-1.png", "images-5/L2/筆順-軍-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 3 個部件
            { word: "逆", parts: ["images-5/L2/筆順-逆-部件-1.png", "images-5/L2/筆順-逆-部件-2.png", "images-5/L2/筆順-逆-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            // 2 個部件
            { word: "盲", parts: ["images-5/L2/筆順-盲-部件-1.png", "images-5/L2/筆順-盲-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            { word: "扇", parts: ["images-5/L2/筆順-扇-部件-1.png", "images-5/L2/筆順-扇-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 5 個部件的魔王字
            { word: "遭", parts: ["images-5/L2/筆順-遭-部件-1.png", "images-5/L2/筆順-遭-部件-2.png", "images-5/L2/筆順-遭-部件-3.png", "images-5/L2/筆順-遭-部件-4.png", "images-5/L2/筆順-遭-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            // 2 個部件
            { word: "盆", parts: ["images-5/L2/筆順-盆-部件-1.png", "images-5/L2/筆順-盆-部件-2.png"], pos: [{x: 100, y: 180}, {x: 170, y: 180}] },
            // 3 個部件
            { word: "階", parts: ["images-5/L2/筆順-階-部件-1.png", "images-5/L2/筆順-階-部件-2.png", "images-5/L2/筆順-階-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            // 4 個部件
            { word: "鑽", parts: ["images-5/L2/筆順-鑽-部件-1.png", "images-5/L2/筆順-鑽-部件-2.png", "images-5/L2/筆順-鑽-部件-3.png", "images-5/L2/筆順-鑽-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            // 3 個部件
            { word: "轟", parts: ["images-5/L2/筆順-轟-部件-1.png", "images-5/L2/筆順-轟-部件-2.png", "images-5/L2/筆順-轟-部件-3.png"], pos: [{x: 70, y: 180}, {x: 120, y: 180}, {x: 170, y: 180}] },
            // 4 個部件
            { word: "隆", parts: ["images-5/L2/筆順-隆-部件-1.png", "images-5/L2/筆順-隆-部件-2.png", "images-5/L2/筆順-隆-部件-3.png", "images-5/L2/筆順-隆-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            { word: "途", parts: ["images-5/L2/筆順-途-部件-1.png", "images-5/L2/筆順-途-部件-2.png", "images-5/L2/筆順-途-部件-3.png", "images-5/L2/筆順-途-部件-4.png"], pos: [{x: 90, y: 130}, {x: 150, y: 130}, {x: 90, y: 180}, {x: 150, y: 180}] },
            // 5 個部件的魔王字
            { word: "鑑", parts: ["images-5/L2/筆順-鑑-部件-1.png", "images-5/L2/筆順-鑑-部件-2.png", "images-5/L2/筆順-鑑-部件-3.png", "images-5/L2/筆順-鑑-部件-4.png", "images-5/L2/筆順-鑑-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] },
            { word: "繽", parts: ["images-5/L2/筆順-繽-部件-1.png", "images-5/L2/筆順-繽-部件-2.png", "images-5/L2/筆順-繽-部件-3.png", "images-5/L2/筆順-繽-部件-4.png", "images-5/L2/筆順-繽-部件-5.png"], pos: [{x: 50, y: 180}, {x: 90, y: 180}, {x: 130, y: 180}, {x: 170, y: 180}, {x: 210, y: 180}] }
        ],
        // 留空準備迎接之後的關卡
        level2: [],
        level3: [],
        level4: []
    }
};
