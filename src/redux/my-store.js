import renderEntireTree from "../render";

let mystore = {
    state: {
        catalog: [
            {
                id: 1, category: "appliances", name: "Бытовая техника", items: [
                    { id: 1, name: "Микроволновая печь Samsung", img: "https://c.dns-shop.ru/thumb/st4/fit/320/250/2d6b5445d466d9ed8ba5642ddc694f36/876436145c50b0cf0f3d807c5b2884b62ff9de46108be4812315b0d78e7de57d.jpg", price: 10325 },
                    { id: 2, name: "Микроволновая печь  DEXP MS-71 черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/e7cd08f046dc2056cd593c46457c4a2e/86e1caf19c79e32d8f3710e28fe1b38395a41211c35410e097c3668cc21ed3cc.jpg", price: 2999 },
                    { id: 3, name: "Микроволновая печь Hisense H20MOWS3 черный", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/9679dced8b4b7193fb75499cb3884e80/60a0bdf90096ee5576ba822617bf7bdaa1777a63cfdb272ae9b1db4cff918b8a.jpg", price: 3499 },
                    { id: 4, name: "Микроволновая печь CASO MCG 30 Chef серебристый, черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1621680bcebbb62bd1e465b55aac4fb1/d2a80f8bb0254d7073c6e5a3f3f3aa470de3190b704b24c3676e85632103ae6f.jpg", price: 27799 },
                    { id: 5, name: "Микроволновая печь Centek CT-1587 серебристый, черный", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/a7acf7cc92575c1f019f4886c4ccf88d/f5b402021a13178dd24121bc959005ffd88e5cc0538dd2e841b7cdcd11608dee.jpg", price: 14490 }
                ]
            },
            {
                id: 2, category: "smartphones", name: "Смартфоны", items: [
                    { id: 1, name: "Samsung", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: 31999 },
                    { id: 2, name: "Iphone", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/e65262ea3fddec2515058af9f59de60f/c42fd815f01316f4da0f2266e0906e7961e45f46dbcdc7062836dbdb2facbfcd.jpg", price: 39999 },
                    { id: 3, name: "Honor", img: "https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/88b11e329301688fc7a60ee5b0b21cc6/5836230fc1f930dcfc615dfdc67efa79f5cee5580290a950e63f89d4d4bb8afd.jpg", price: 31999 },
                    { id: 4, name: "Meizu", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/1813fddbc0ef4697af32d1a52cac7b48/efd11002f85862c7598fc59e44916c4e54d73c41a067fc0af5f316f384307608.jpg", price: 12999 },
                    { id: 5, name: "Xiaomi", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/e1703d8a884b56daa326acb0f5ca3213/1d6fef168f87210f975e1407520aafac8845d2364045ae8cec918031f82b9051.jpg", price: 32999 }
                ]
            },
            {
                id: 3, category: "tv", name: "ТВ", items: [
                    { id: 1, name: "Телевизор LED Sony KD-75ZH8 темно-серый", img: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c6b35fdbb4032ed6ab2fe2b329e71777/27ad6823286f42f5ba1d480098e247e2f28360636ccf1991c2dc1a44e84e485c.jpg", price: 601249 },
                    { id: 2, name: "Телевизор LED ASANO 20LH1010T черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/77a35515388fcc4c449d3a72b1de75d8/f081c5b60f7f2a88979fd8c5796621d1c6eae925645b930503d76e156a9305e2.jpg", price: 6199 },
                    { id: 3, name: "Телевизор LED Prestigio PTV24SN05Z черный", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/308f80fcbd2c0cc32f4db4bbc41d4408/921e91a1dcf75cb576854ea1b8005d21b3db61d36b0b254cbe44f595cedfb233.png", price: 6699 },
                    { id: 4, name: "Телевизор LED LG 75NANO976NA черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/d8982aa1002a6b34f3da722aece2d024/7d3eb6db8ddf47078488b3c1531a1997fa6fa074bd665d334feeb520d793b80e.jpg", price: 349999 },
                    { id: 5, name: "Телевизор LED Samsung QE98Q900RBUXRU черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/410a6523c20cbd7b065da8cf2c207137/b85fb8179e06c53ea923d7cb283944ae81a494c6ef127c31f28fe00282e13103.jpg", price: 3999999 }
                ]
            },
            {
                id: 4, category: "computers", name: "Компьютеры", items: [
                    { id: 1, name: "MSI", img: "https://c.dns-shop.ru/thumb/st4/fit/wm/808/536/a746bd6ed3b5037d4c542aa671a3cc81/9dc2950d00401f626d92064a22616213668910cb682de10402a04d9ebac294ee.jpg", price: 66999 },
                    { id: 2, name: "MacBook", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/1946452571c38281b77167cd90f51822/c0e4e5d21067a7e255f9e9d1589a6a4c5b4aa359aedde160ce6ea5bd33df9a39.png", price: 94999 },
                    { id: 3, name: "Lenovo", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/0f11c36e9d1b33e31727bb21fe45a87e/0b1b354114b7a67830b608bf17c92ceb0e9d49e7a39afe906aad0bfc54e24e63.jpg", price: 39999 },
                    { id: 4, name: "HP", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/4e7643eab2edf815844abb2759c4e9bd/7858db8b40ff253129d04e50f75edc0106a0a01835da65733cdbca58dd3a78a7.jpg", price: 43999 },
                    { id: 5, name: "Asus", img: "https://c.dns-shop.ru/thumb/st1/fit/wm/1015/668/f32490cf5acc24d7af8befea4dc0bf69/18bb9a69a51beda21a9c7749b0ca7dee3d318ac6afdce19164f3da3152a207d0.jpg", price: 38999 }
                ]
            },
            {
                id: 5, category: "office", name: "Офис", items: [
                    { id: 1, name: "Принтер лазерный Pantum P2207", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/552a949a5d19d47ac35b9502c97d91d8/7d71aef4731cd3485bfe32a13887126453e94bf446e421d92fa5e40d7663ce39.jpg", price: 5299 },
                    { id: 2, name: "Принтер лазерный Lexmark B2546dw", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/1f50b2902b26df0d7c580183255686e8/654e1450d1b9dd3d2e0f95017bb71f39a6535cfcb112bc5a8b573d207d9aaf44.jpg", price: 16999 },
                    { id: 3, name: "Принтер лазерный Kyocera FS-9130DN", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/e63acbe37580fdd02e0efc2559bebfa0/3cfa0027cc41e9acb843f81c5b9f2d87c4279df9270ec0a90273cd3da75eb65b.jpg", price: 122999 },
                    { id: 4, name: "Принтер лазерный Brother HL-L2300DR", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/0f32d5e67e5a21b72a6ca0c63bf8a7ac/9902d1f9a7c9345c107b72fadbd147e4dc93f7c2294f33eca280c6bfef31aacd.jpg", price: 10199 },
                    { id: 5, name: "Принтер лазерный Xerox VersaLink C400DN", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/2c9bd6935bb9fd8e34d56f80014f8e6c/acca2ae78422254fff6cd7eb196e69ae3e5bff6ac5e208fc07a7c0dea71107ba.jpg", price: 39599 }
                ]
            },
            {
                id: 6, category: "accessories", name: "Аксессуары", items: [
                    { id: 1, name: "Мышь беспроводная/проводная Razer Naga Pro черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/167bccc01c72932da757f6532c25c87f/a29511b164ae070e1dc2ecd730f18b0b3999dcd20bc6fb87afcfbccdab8bf5a7.jpg", price: 13499 },
                    { id: 2, name: "Мышь проводная SteelSeries Rival 600 черный", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/be184e10c23c8c5d857ff06f63c3bfe7/b8530060bdad1cee76e80f946d739c8d5666125a00bf7ca632197e44579ff197.jpg", price: 6499 },
                    { id: 3, name: "Мышь проводная Corsair Nightsword RGB Tunable черный", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/aa32c0f0217b0d10de3da4fc80a1c020/71bf8660db2f6df086b94d0483bf76a1af7c6fe1d47fffb326813b438c1046c0.jpg", price: 7499 },
                    { id: 4, name: "Мышь проводная Dream Machines DM1 FPS Smoke Gray серый", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/d5c633436924f2bf23f885ac96cae109/9b3d954e896296e8e66bf106411630c52d76eccde15b1477d31eb1c571a09522.jpg", price: 3899 },
                    { id: 5, name: "Мышь проводная HyperX Pulsefire Raid черный", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/7e2bdf3fdedff07eb63a0aeed68c4a53/10da972070390152854df9d4eefb2749e4a7c915ae4522198130077669a0956f.jpg", price: 3999 }
                ]
            },
            {
                id: 7, category: "cargoods", name: "Автотовары", items: [
                    { id: 1, name: "Автопроигрыватель Soundmax SM-CCR3064F", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/a013086694f18b19db25986d0578097a/ce0f254dfe35e14188d5eb09232ed8fe819fb8e6e4f901b4d6e9bbc29b8165ee.jpg", price: 999 },
                    { id: 2, name: "Автопроигрыватель Pioneer AVH-Z9100BT", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/28dfa7add07e8bcf60c8245a4679d508/ea2e3478b9f98a9696cce9766ac9493c753ca20f1fc263934a4aa7cc4436eff5.jpg", price: 44999 },
                    { id: 3, name: "Автопроигрыватель Pioneer MVH-S620BT", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/74cec5e232055aaf39da79826c16c402/e02de949d6780cc5cac088241783804481a176e6810a3cd560acc9a537808c87.jpg", price: 10999 },
                    { id: 4, name: "Автопроигрыватель JVC KW-X730", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/842f1af5b0c183590fccdb96101ab47c/c18fc07a9a8de27961ac1069c18d088b01a1ed5eec8b99e2f8be71a51ff17ae8.jpg", price: 6299 },
                    { id: 5, name: "Автопроигрыватель JVC KD-T401", img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/9e2c53af4ba4aa155bddf881bb4f619f/dbaef9a804223dfb9dd16c8ef62649033a00495863aecef5e3023b03ecbb9bf0.jpg", price: 4399 }
                ]
            },
            {
                id: 8, category: "tools", name: "Инструменты", items: [
                    { id: 1, name: "Перфоратор FinePower RH650", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/5d05480de8e1b712fbebf48fff015000/d07860f1c1fa802358aaf83c88c0b95fecffa2104ab83d16a44d496b1c052217.jpg", price: 2299 },
                    { id: 2, name: "Перфоратор Metabo KHA 36-18 LTX 32", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/ff278b957824b6f71525f9c1a1fb984c/69c857c9bf7127d3412dea8db19f66bf8329b3d00206de72cc4961a7a337635c.jpg", price: 76999 },
                    { id: 3, name: "Перфоратор Bosch GBH 180-LI Professional (0611911120)", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/2549d70d822ca991f9d148aa6f3d091f/239e7c61beb2b0e3fb18f9cb3fffefebaffaab0d1a357331c5f8d9e1c95c8981.jpg", price: 10799 },
                    { id: 4, name: "Перфоратор Зубр ЗПВ-30-900ВК", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/0fbb94cb15ed32090f70df6631c186f7/0d0b7c1e1efe0996a5da7ff8f8292ee200c046db7179583be30edf2e2d293d04.jpg", price: 7999 },
                    { id: 5, name: "Перфоратор Denzel RH-750-24", img: "https://c.dns-shop.ru/thumb/st1/fit/500/500/d2b6e454121ca0cd196d41f599613e57/2df44c15037cd623efc5fe2c7129cff802cef50fa0b1db516923149a9513ac87.jpg", price: 5399 }
                ]
            }
        ],
        posts:{
            appliances:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            smartphones:{
                1:[{img:"https://www.meme-arsenal.com/memes/fd51570fb8df5c3bde2532971bf8df80.jpg", name:"Max", message:"Дивайс супер!"}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            tv:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            computers:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            office:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            accessories:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            cargoods:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            },
            tools:{
                1:[{img:"", name:"", message:""}],
                2:[{img:"", name:"", message:""}],
                3:[{img:"", name:"", message:""}],
                4:[{img:"", name:"", message:""}],
                5:[{img:"", name:"", message:""}]
            }
        },
        basket:[],
        totalsumm:0,
        totalItemCount:0
    },
    selectItem: {category:"", id:"", img: "", name: "", price: "" },
    dispatch(action) {
        if (action.type === "SELECT_ITEM") {
            this.selectItem.category = action.category;
            this.selectItem.id = action.id
            for (let i = 0; i < this.state.catalog.length; i++) {
                if (this.state.catalog[i].category === action.category) {
                    for (let j = 0; j < this.state.catalog[i].items.length; j++) {
                        if (this.state.catalog[i].items[j].id === action.id) {
                            this.selectItem.img = this.state.catalog[i].items[j].img;
                            this.selectItem.name = this.state.catalog[i].items[j].name;
                            this.selectItem.price = this.state.catalog[i].items[j].price;
                            return this.selectItem;
                        }
                    }
                }
            }
        }
        if (action.type === "ADD_POST"){
            this.state.posts[action.category][action.id].push({img: action.userImg, name: action.userName, message: action.message});
            renderEntireTree();
        }
        if (action.type === "ADD_ITEM_IN_BASKET"){
            for (let i = 0; i < this.state.catalog.length; i++) {
                if (this.state.catalog[i].category === action.item.category) {
                    for (let j = 0; j < this.state.catalog[i].items.length; j++) {
                        if (this.state.catalog[i].items[j].id === action.item.id) {
                            let newItem = {...this.state.catalog[i].items[j],count:1};
                            this.state.basket.push(newItem);
                            let itemIdInBasket = this.state.basket.length-1;
                            this.state.basket[itemIdInBasket] = {...this.state.basket[itemIdInBasket],id:itemIdInBasket};
                        }
                    }
                }
            }
        }
        if (action.type === "ITEM_COUNT_PLUS"){
            this.state.basket[action.id].count+=1;
            /*let summ = this.state.basket[action.id].count*this.state.basket[action.id].price;
            this.state.basket[action.id]={...this.state.basket[action.id].count,summ:summ};
            let totalSumm = 0;
            debugger;
            for(let x=0; x<=this.state.basket.length-1;x++){
                totalSumm += this.state.basket[x].summ;
            }
            this.state.totalsumm = totalSumm;*/
            renderEntireTree();
        }
        if (action.type === "ITEM_COUNT_MINUS"){
            if (this.state.basket[action.id].count>1){
                this.state.basket[action.id].count-=1;
                renderEntireTree();
            }
        }
    }
}

export default mystore;