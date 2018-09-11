const basementArray = [
//
  {layer:'basement', name: "BrickR", x:-16 + 50, y:-4, order: 1}, //Basement Wall Layer 1
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4, order: 13},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12, order: 7},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20, order: 10},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28, order: 1.5},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36, order: 6.5},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44, order: 12},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52, order: 14.5},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60, order: 2},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68, order: 7.5},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76, order: 6},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84, order: 10.5},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92, order: 2.5},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100, order: 9.5},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0, order: 11.5},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8, order: 5.5},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16, order: 3},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24, order: 8},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32, order: 13.5},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40, order: 14},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48, order: 3.5},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108, order: 5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116, order: 9},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124, order: 8.5},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132, order: 4},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140, order: 11},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148, order: 4.5},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156, order: 12.5}, //14.5

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10, order:15}, //Basement Wall Layer 2
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2, order: 26.5},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6, order: 18.5},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14, order: 21},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22, order: 15.5},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30, order: 26},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38, order: 23},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6, order: 19},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2, order: 16},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10, order: 27},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18, order: 21.5},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26, order: 24.5},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34, order:16.5},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42, order:19.5},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50, order:25.5},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58, order:23.5},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66, order:17},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74, order:22},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82, order:20},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90, order:28},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98, order:17.5},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106, order:22.5},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114, order:25},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122, order:20.5},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130, order:18},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138, order:22.5},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146, order:24}, //28
//
  {layer:'basement', name: "BrickR", x:-16 + 50, y:-4 - 12, order: 29}, //Basement Wall Layer 2
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 12, order: 41.5},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 12, order: 30},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 12, order: 40.5},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 12, order: 31},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 12, order: 39.5},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 12, order: 32},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 12, order: 38.5},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 12, order: 33},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 12, order: 37.5},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 12, order: 34},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 12, order: 36.5},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 12, order: 35},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 12, order: 35.5},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 12, order: 36},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 12, order: 34.5},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 12, order: 37},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 12, order: 33.5},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 12, order: 38},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 12, order: 32.5},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 12, order: 39},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 12, order: 31.5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 12, order: 40},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 12, order: 30.5},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 12, order: 41},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 12, order: 29.5},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 12, order: 42},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 12, order: 28.5}, //42

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 12, order:54.5}, //Basement Wall Layer 4
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 12, order: 44.5},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 12, order: 52.5},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 12, order: 48},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 12, order: 43.5},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 12, order: 55},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 12, order: 53.5},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 12, order: 54},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 12, order: 46},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 12, order: 51},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 12, order: 42.5},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 12, order: 48.5},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 12, order:50.5},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 12, order:46.5},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 12, order:51.5},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 12, order:47.5},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 12, order:47},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 12, order:49},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 12, order:44},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 12, order:52},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 12, order:43},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 12, order:49.5},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 12, order:45},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 12, order:55.5},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 12, order:50},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 12, order:45.5},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 12, order:53}, //55.5

  {layer: "basement", name: "BrickR", x:-16 + 50, y:-4 - 24, order:56}, //Basement Wall Layer 5
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 24, order:56.5},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 24, order:57},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 24, order:57.5},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 24, order:58},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 24, order:58.5},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 24, order:59},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 24, order:59.5},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 24, order:60},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 24, order:60.5},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 24, order:61},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 24, order:61.5},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 24, order:62},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 24, order:62.5},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 24, order:63},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 24, order:63.5},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 24, order:64},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 24, order:64.5},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 24, order:65},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 24, order:65.5},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 24, order:66},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 24, order:66.5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 24, order:67},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 24, order:67.5},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 24, order:68},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 24, order:68.5},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 24, order:69},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 24, order:69.5}, //69.5

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 24, order:76}, //Basement Wall Layer 6
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 24, order:74},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 24, order:75.5},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 24, order:79.5},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 24, order:70.5},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 24, order:78},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 24, order:81},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 24, order:72.5},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 24, order:82.5},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 24, order:73.5},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 24, order:83},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 24, order:78.5},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 24, order:81.5},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 24, order:70},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 24, order:76.5},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 24, order:82},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 24, order:77},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 24, order:73},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 24, order:80},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 24, order:71.5},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 24, order:79},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 24, order:74.5},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 24, order:71},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 24, order:77.5},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 24, order:80.5},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 24, order:72},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 24, order:75}, //83

  {layer: "basement", name: "BrickR", x:-16 + 50, y:-4 - 36, order:97.5}, //Basement Wall Layer 7
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 36, order:97},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 36, order:96.5},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 36, order:96},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 36, order:95.5},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 36, order:95},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 36, order:94.5},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 36, order:94},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 36, order:93.5},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 36, order:93},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 36, order:92.5},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 36, order:92},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 36, order:91.5},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 36, order:91},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 36, order:90.5},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 36, order:90},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 36, order:89},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 36, order:88.5},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 36, order:88},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 36, order:87.5},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 36, order:87},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 36, order:86.5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 36, order:86},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 36, order:85.5},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 36, order:85},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 36, order:84.5},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 36, order:84},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 36, order:83.5}, //97.5

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 36, order:105}, //Basement Wall Layer 8
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 36, order:106},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 36, order:107},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 36, order:108},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 36, order:109},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 36, order:110},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 36, order:111},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 36, order:98},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 36, order:99},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 36, order:100},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 36, order:101},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 36, order:102},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 36, order:103},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 36, order:104},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 36, order:103},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 36, order:102},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 36, order:101},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 36, order:100},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 36, order:99},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 36, order:98},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 36, order:105},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 36, order:106},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 36, order:107},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 36, order:108},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 36, order:109},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 36, order:110},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 36, order:111}, //111

  {layer: "basement", name: "BrickR", x:-16 + 50, y:-4 - 48, order:118}, //Basement Wall Layer 9
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 48, order:114},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 48, order:116},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 48, order:122},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 48, order:112},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 48, order:124},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 48, order:122},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 48, order:116},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 48, order:120},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 48, order:114},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 48, order:120},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 48, order:116},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 48, order:124},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 48, order:112},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 48, order:120},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 48, order:122},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 48, order:118},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 48, order:124},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 48, order:114},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 48, order:124},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 48, order:118},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 48, order:116},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 48, order:122},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 48, order:112},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 48, order:120},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 48, order:114},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 48, order:118},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 48, order:112}, //124

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 48, order:125}, //Basement Wall Layer 10
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 48, order:125.25},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 48, order:125.5},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 48, order:125.75},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 48, order:131},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 48, order:131.25},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 48, order:131.5},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 48, order:131.75},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 48, order:137},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 48, order:137.25},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 48, order:137.5},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 48, order:127},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 48, order:127.25},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 48, order:127.5},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 48, order:127.75},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 48, order:133},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 48, order:133.25},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 48, order:133.5},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 48, order:133.75},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 48, order:129},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 48, order:129.25},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 48, order:129.5},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 48, order:129.75},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 48, order:135},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 48, order:135.25},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 48, order:135.5},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 48, order:135.75}, //137.5

  {layer: "basement", name: "BrickR", x:-16 + 50, y:-4 - 60, order:147}, //Basement Wall Layer 11
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 60, order:142},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 60, order:144.5},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 60, order:145},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 60, order:138.5},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 60, order:149},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 60, order:141},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 60, order:151},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 60, order:142.5},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 60, order:151.5},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 60, order:139},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 60, order:149.5},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 60, order:143},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 60, order:147.5},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 60, order:138},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 60, order:145.5},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 60, order:148},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 60, order:140.5},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 60, order:150},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 60, order:143.5},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 60, order:150.5},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 60, order:141.5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 60, order:146},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 60, order:148.5},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 60, order:139.5},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 60, order:144},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 60, order:140},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 60, order:146.5}, //151.5

  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 60, order:164}, //Basement Wall Layer 12
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 60, order:163},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 60, order:162},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 60, order:161},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 60, order:160},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 60, order:159},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 60, order:158},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 60, order:157},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 60, order:156},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 60, order:155},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 60, order:154},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 60, order:153},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 60, order:152},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 60, order:165},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 60, order:164},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 60, order:163},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 60, order:162},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 60, order:161},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 60, order:160},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 60, order:159},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 60, order:158},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 60, order:157},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 60, order:156},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 60, order:155},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 60, order:154},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 60, order:153},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 60, order:152}, //165

  {layer: "basement", name: "BrickR", x:-16 + 50, y:-4 - 72, order:166}, //Basement Wall Layer 13
  {layer: "basement", name: "BrickR", x:-32 + 50, y:4 - 72, order:179.5},
  {layer: "basement", name: "BrickR", x:-48 + 50, y:12 - 72, order:166.5},
  {layer: "basement", name: "BrickR", x:-64 + 50, y:20 - 72, order:179},
  {layer: "basement", name: "BrickR", x:-80 + 50, y:28 - 72, order:167},
  {layer: "basement", name: "BrickR", x:-96 + 50, y:36 - 72, order:178.5},
  {layer: "basement", name: "BrickR", x:-112 + 50, y:44 - 72, order:167.5},
  {layer: "basement", name: "BrickR", x:-128 + 50, y:52 - 72, order:178},
  {layer: "basement", name: "BrickR", x:-144 + 50, y:60 - 72, order:168},
  {layer: "basement", name: "BrickR", x:-160 + 50, y:68 - 72, order:177.5},
  {layer: "basement", name: "BrickR", x:-176 + 50, y:76 - 72, order:168.5},
  {layer: "basement", name: "BrickR", x:-192 + 50, y:84 - 72, order:177},
  {layer: "basement", name: "BrickR", x:-208 + 50, y:92 - 72, order:169},
  {layer: "basement", name: "BrickR", x:-224 + 50, y:100 - 72, order:176.5},
  {layer: "basement", name: "BrickL", x:0 + 50, y:0 - 72, order:169.5},
  {layer: "basement", name: "BrickL", x:16 + 50, y:8 - 72, order:176},
  {layer: "basement", name: "BrickL", x:32 + 50, y:16 - 72, order:170},
  {layer: "basement", name: "BrickL", x:48 + 50, y:24 - 72, order:175.5},
  {layer: "basement", name: "BrickL", x:64 + 50, y:32 - 72, order:170.5},
  {layer: "basement", name: "BrickL", x:80 + 50, y:40 - 72, order:175},
  {layer: "basement", name: "BrickL", x:96 + 50, y:48 - 72, order:171},
  {layer: "basement", name: "BrickL", x:-216 + 50, y:108 - 72, order:174.5},
  {layer: "basement", name: "BrickL", x:-200 + 50, y:116 - 72, order:171.5},
  {layer: "basement", name: "BrickL", x:-184 + 50, y:124 - 72, order:174},
  {layer: "basement", name: "BrickL", x:-168 + 50, y:132 - 72, order:172},
  {layer: "basement", name: "BrickL", x:-152 + 50, y:140 - 72, order:173.5},
  {layer: "basement", name: "BrickL", x:-136 + 50, y:148 - 72, order:172.5},
  {layer: "basement", name: "BrickL", x:-120 + 50, y:156 - 72, order:173}, //179.5
//
  {layer: "basement", name: "BrickL", x:-8 + 50, y:-10 - 72, order:185}, //Basement Wall Layer 14
  {layer: "basement", name: "BrickL", x:8 + 50, y:-2 - 72, order:185.2},
  {layer: "basement", name: "BrickL", x:24 + 50, y:6 - 72, order:185.4},
  {layer: "basement", name: "BrickL", x:40 + 50, y:14 - 72, order:185.6},
  {layer: "basement", name: "BrickL", x:56 + 50, y:22 - 72, order:185.8},
  {layer: "basement", name: "BrickL", x:72 + 50, y:30 - 72, order:186},
  {layer: "basement", name: "BrickL", x:88 + 50, y:38 - 72, order:186.2},
  {layer: "basement", name: "BrickR", x:-24 + 50, y:-6 - 72, order:192.4},
  {layer: "basement", name: "BrickR", x:-40 + 50, y:2 - 72, order:192.2},
  {layer: "basement", name: "BrickR", x:-56 + 50, y:10 - 72, order:192},
  {layer: "basement", name: "BrickR", x:-72 + 50, y:18 - 72, order:191.8},
  {layer: "basement", name: "BrickR", x:-88 + 50, y:26 - 72, order:191.6},
  {layer: "basement", name: "BrickR", x:-104 + 50, y:34 - 72, order:191.4},
  {layer: "basement", name: "BrickR", x:-120 + 50, y:42 - 72, order:191.2},
  {layer: "basement", name: "BrickR", x:-136 + 50, y:50 - 72, order:191},
  {layer: "basement", name: "BrickR", x:-152 + 50, y:58 - 72, order:190.8},
  {layer: "basement", name: "BrickR", x:-168 + 50, y:66 - 72, order:190.6},
  {layer: "basement", name: "BrickR", x:-184 + 50, y:74 - 72, order:190.4},
  {layer: "basement", name: "BrickR", x:-200 + 50, y:82 - 72, order:190.2},
  {layer: "basement", name: "BrickR", x:-216 + 50, y:90 - 72, order:190},
  {layer: "basement", name: "BrickL", x:-224 + 50, y:98 - 72, order:181.2},
  {layer: "basement", name: "BrickL", x:-208 + 50, y:106 - 72, order:181},
  {layer: "basement", name: "BrickL", x:-192 + 50, y:114 - 72, order:180.8},
  {layer: "basement", name: "BrickL", x:-176 + 50, y:122 - 72, order:180.6},
  {layer: "basement", name: "BrickL", x:-160 + 50, y:130 - 72, order:180.4},
  {layer: "basement", name: "BrickL", x:-144 + 50, y:138 - 72, order:180.2},
  {layer: "basement", name: "BrickL", x:-128 + 50, y:146 - 72, order:180}, //192.4

  {layer: "garden", name: "Grass", x:28, y:-105, order:199.5},
  {layer: "garden", name: "Grass", x:50, y:-94, order:200},
  {layer: "garden", name: "Grass", x:72, y:-83, order:200.5},
  {layer: "garden", name: "Grass", x:94, y:-72, order:201},
  {layer: "garden", name: "Grass", x:116, y:-61, order:201.5},
  {layer: "garden", name: "Grass", x:138, y:-50, order:202},
  {layer: "garden", name: "Grass", x:160, y:-39, order:202.5},
  {layer: "garden", name: "Grass", x:182, y:-28, order:203},
  {layer: "basement", name: "Grass", x:138, y:-28, order:203.5},
  {layer: "basement", name: "Grass", x:160, y:-17, order:204},
  {layer: "basement", name: "Grass_C_L", x:138, y:-17, order:204.5},
  {layer: "basement", name: "Grass", x:138, y:-6, order:205},
  {layer: "basement", name: "Grass_C_L", x:138, y:5, order:205.5},
  {layer: "basement", name: "Grass", x:138, y:16, order:206},
  {layer: "basement", name: "Grass_C_L", x:138, y:27, order:206.5},
  {layer: "basement", name: "Grass", x:138, y:38, order:207},
  {layer: "basement", name: "Grass_C_L", x:138, y:49, order:207.5},
  {layer: "basement", name: "Grass", x:138, y:60, order:208},
  {layer: "basement", name: "Grass", x:116, y:71, order:208.5},
  {layer: "basement", name: "Grass", x:94, y:82, order:209},
  {layer: "basement", name: "Grass", x:72, y:93, order:209.5},
  {layer: "basement", name: "Grass", x:50, y:104, order:210},
  {layer: "basement", name: "Grass", x:28, y:115, order:210.5},
  {layer: "basement", name: "Grass", x:6, y:126, order:211},
  {layer: "basement", name: "Grass", x:-16, y:137, order:211.5},


  {layer: "garden", name: "Grass", x:6, y:-94, order:212},
  {layer: "garden", name: "Grass", x:-16, y:-83, order:212.5},
  {layer: "garden", name: "Grass", x:-38, y:-72, order:213},
  {layer: "garden", name: "Grass", x:-60, y:-61, order:213.5},
  {layer: "garden", name: "Grass", x:-82, y:-50, order:214},
  {layer: "garden", name: "Grass", x:-104, y:-39, order:214.5},
  {layer: "garden", name: "Grass", x:-126, y:-28, order:215},
  {layer: "garden", name: "Grass", x:-148, y:-17, order:216},
  {layer: "garden", name: "Grass", x:-170, y:-6, order:216.5},
  {layer: "garden", name: "Grass", x:-192, y:5, order:217},
  {layer: "garden", name: "Grass", x:-214, y:16, order:217.5},
  {layer: "basement", name: "Grass", x:-192, y:27, order:218},
  {layer: "basement", name: "Grass", x:-170, y:38, order:218.5},
  {layer: "basement", name: "Grass", x:-148, y:49, order:219},
  {layer: "basement", name: "Grass", x:-126, y:60, order:219.5},
  {layer: "basement", name: "Grass", x:-104, y:71, order:220},
  {layer: "basement", name: "Grass", x:-82, y:82, order:220.5},
  {layer: "basement", name: "Grass", x:-38, y:148, order:221},
  {layer: "basement", name: "Grass_C_R", x:-60, y:93, order:221.5},
  {layer: "basement", name: "Grass", x:-82, y:104, order:222},
  {layer: "basement", name: "Grass_C_R", x:-60, y:115, order:222.5},
  {layer: "basement", name: "Grass", x:-82, y:126, order:223},
  {layer: "basement", name: "Grass_C_R", x:-60, y:137, order:223.5},
  {layer: "basement", name: "Grass", x:-82, y:148, order:224},
  {layer: "basement", name: "Grass", x:-60, y:159, order:224.5},
  ];
//
// const livingRoomArray = [
//   {name: "PlankL", x:18, y:-96}, // ground floor wood
// {name: "PlankL", x:2, y:-96},
// {name: "PlankL", x:2, y:-88},
// {name: "PlankL", x:-14, y:-88},
// {name: "PlankL", x:-14, y:-80},
// {name: "PlankL", x:-30, y:-80},
// {name: "PlankL", x:-30, y:-72},
// {name: "PlankL", x:-46, y:-72},
// {name: "PlankL", x:-46, y:-64},
// {name: "PlankL", x:-62, y:-64},
// {name: "PlankL", x:-62, y:-56},
// {name: "PlankL", x:-78, y:-56},
// {name: "PlankL", x:-78, y:-48},
// {name: "PlankL", x:-94, y:-48},
// {name: "PlankL", x:-94, y:-40},
// {name: "PlankL", x:-110, y:-40},
// {name: "PlankL", x:-110, y:-32},
// {name: "PlankL", x:-126, y:-32},
// {name: "PlankL", x:-126, y:-24},
// {name: "PlankL", x:-142, y:-24},
// {name: "PlankL", x:-142, y:-16},
// {name: "PlankL", x:-158, y:-16},
// {name: "PlankL", x:-158, y:-8},
// {name: "PlankL", x:-174, y:-8},
// {name: "PlankL", x:-174, y:0, order:1},
// {name: "PlankL", x:-190, y:0, order:1},
// {name: "PlankL", x:-190, y:8, order:1},
// {name: "PlankL", x:-206, y:8, order:1},
//
// {name: "BrickR", x:-16 + 50, y:-4 - 84}, //Ground Floor Wall Layer 1
// {name: "BrickR", x:-32 + 50, y:4 - 84, order:1},
// {name: "BrickR", x:-48 + 50, y:12 - 84, order:1},
// {name: "BrickR", x:-64 + 50, y:20 - 84, order:1},
// {name: "BrickR", x:-80 + 50, y:28 - 84, order:1},
// {name: "BrickR", x:-96 + 50, y:36 - 84, order:1},
// {name: "BrickR", x:-112 + 50, y:44 - 84, order:1},
// {name: "BrickR", x:-128 + 50, y:52 - 84, order:1},
// {name: "BrickR", x:-144 + 50, y:60 - 84, order:1},
// {name: "BrickR", x:-160 + 50, y:68 - 84, order:1},
// {name: "BrickR", x:-176 + 50, y:76 - 84, order:1},
// {name: "BrickR", x:-192 + 50, y:84 - 84, order:1},
// {name: "BrickR", x:-208 + 50, y:92 - 84, order:1},
// {name: "BrickR", x:-224 + 50, y:100 - 84, order:1},
// {name: "BrickL", x:0 + 50, y:0 - 84, order:1},
// {name: "BrickL", x:16 + 50, y:8 - 84, order:1},
// {name: "BrickL", x:32 + 50, y:16 - 84, order:1},
// {name: "BrickL", x:48 + 50, y:24 - 84, order:1},
// {name: "BrickL", x:64 + 50, y:32 - 84, order:1},
// {name: "BrickL", x:80 + 50, y:40 - 84, order:1},
// {name: "BrickL", x:96 + 50, y:48 - 84, order:1},
// {name: "BrickL", x:-216 + 50, y:108 - 84, order:1},
// {name: "BrickL", x:-200 + 50, y:116 - 84, order:1},
// {name: "BrickL", x:-184 + 50, y:124 - 84, order:1},
// {name: "BrickL", x:-168 + 50, y:132 - 84, order:1},
// {name: "BrickL", x:-152 + 50, y:140 - 84, order:1},
// {name: "BrickL", x:-136 + 50, y:148 - 84, order:1},
// {name: "BrickL", x:-120 + 50, y:156 - 84, order:1},
//
// {name: "BrickL", x:-8 + 50, y:-10 - 84}, //Ground Floor Wall Layer 2
// {name: "BrickL", x:8 + 50, y:-2 - 84},
// {name: "BrickL", x:24 + 50, y:6 - 84, order:1},
// {name: "BrickL", x:40 + 50, y:14 - 84, order:1},
// {name: "BrickL", x:56 + 50, y:22 - 84, order:1},
// {name: "BrickL", x:72 + 50, y:30 - 84, order:1},
// {name: "BrickL", x:88 + 50, y:38 - 84, order:1},
// {name: "BrickR", x:-24 + 50, y:-6 - 84},
// {name: "BrickR", x:-40 + 50, y:2 - 84, order:1},
// {name: "BrickR", x:-56 + 50, y:10 - 84, order:1},
// {name: "BrickR", x:-72 + 50, y:18 - 84, order:1},
// {name: "BrickR", x:-88 + 50, y:26 - 84, order:1},
// {name: "BrickR", x:-104 + 50, y:34 - 84, order:1},
// {name: "BrickR", x:-120 + 50, y:42 - 84, order:1},
// {name: "BrickR", x:-136 + 50, y:50 - 84, order:1},
// {name: "BrickR", x:-152 + 50, y:58 - 84, order:1},
// {name: "BrickR", x:-168 + 50, y:66 - 84, order:1},
// {name: "BrickR", x:-184 + 50, y:74 - 84, order:1},
// {name: "BrickR", x:-200 + 50, y:82 - 84, order:1},
// {name: "BrickR", x:-216 + 50, y:90 - 84, order:1},
// {name: "BrickL", x:-224 + 50, y:98 - 84, order:1},
// {name: "BrickL", x:-208 + 50, y:106 - 84, order:1},
// {name: "BrickL", x:-192 + 50, y:114 - 84, order:1},
// {name: "BrickL", x:-176 + 50, y:122 - 84, order:1},
// {name: "BrickL", x:-160 + 50, y:130 - 84, order:1},
// {name: "BrickL", x:-144 + 50, y:138 - 84, order:1},
// {name: "BrickL", x:-128 + 50, y:146 - 84, order:1},
// ];