import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< Updated upstream


let appliances = [
  { id: 1, name: "Микроволновая печь Samsung", img: "https://c.dns-shop.ru/thumb/st4/fit/320/250/2d6b5445d466d9ed8ba5642ddc694f36/876436145c50b0cf0f3d807c5b2884b62ff9de46108be4812315b0d78e7de57d.jpg", price: "10325" }
];
let tv = [
  { id: 1, name: "Телевизор LED Sony KD-75ZH8 темно-серый", img: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c6b35fdbb4032ed6ab2fe2b329e71777/27ad6823286f42f5ba1d480098e247e2f28360636ccf1991c2dc1a44e84e485c.jpg", price: "601249" }
];
let office = [
  { id: 1, name: "Office", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: "65456" }
];
let accessories = [
  { id: 1, name: "accessories", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: "65456" }
];
let cargoods = [
  { id: 1, name: "cargoods", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: "65456" }
];
let tools = [
  { id: 1, name: "tools", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: "65456" }
];

let smartphones = [
  { id: 1, name: "Samsung", img: "https://c.dns-shop.ru/original/st1/4d16864a51b409372ff2e554f70aea99/4b019c487d703173038d4f39882932a48215814eb1e286243678f8a337587b9d.jpg", price: "31999" },
  { id: 2, name: "Iphone", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/e65262ea3fddec2515058af9f59de60f/c42fd815f01316f4da0f2266e0906e7961e45f46dbcdc7062836dbdb2facbfcd.jpg", price: "39999" },
  { id: 3, name: "Honor", img: "https://c.dns-shop.ru/thumb/st1/fit/wm/2000/2000/88b11e329301688fc7a60ee5b0b21cc6/5836230fc1f930dcfc615dfdc67efa79f5cee5580290a950e63f89d4d4bb8afd.jpg", price: "31999" },
  { id: 4, name: "Meizu", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/1813fddbc0ef4697af32d1a52cac7b48/efd11002f85862c7598fc59e44916c4e54d73c41a067fc0af5f316f384307608.jpg", price: "12999" },
  { id: 5, name: "Xiaomi", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/e1703d8a884b56daa326acb0f5ca3213/1d6fef168f87210f975e1407520aafac8845d2364045ae8cec918031f82b9051.jpg", price: "32999" },
  { id: 5, name: "Xiaomi", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/e1703d8a884b56daa326acb0f5ca3213/1d6fef168f87210f975e1407520aafac8845d2364045ae8cec918031f82b9051.jpg", price: "32999" },
  { id: 5, name: "Xiaomi", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/e1703d8a884b56daa326acb0f5ca3213/1d6fef168f87210f975e1407520aafac8845d2364045ae8cec918031f82b9051.jpg", price: "32999" }
];
let computers = [
  { id: 1, name: "MSI", img: "https://c.dns-shop.ru/thumb/st4/fit/wm/808/536/a746bd6ed3b5037d4c542aa671a3cc81/9dc2950d00401f626d92064a22616213668910cb682de10402a04d9ebac294ee.jpg", price: "66999" },
  { id: 2, name: "MacBook", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/1946452571c38281b77167cd90f51822/c0e4e5d21067a7e255f9e9d1589a6a4c5b4aa359aedde160ce6ea5bd33df9a39.png", price: "94999" },
  { id: 3, name: "Lenovo", img: "https://c.dns-shop.ru/thumb/st1/fit/0/0/0f11c36e9d1b33e31727bb21fe45a87e/0b1b354114b7a67830b608bf17c92ceb0e9d49e7a39afe906aad0bfc54e24e63.jpg", price: "39999" },
  { id: 4, name: "HP", img: "https://c.dns-shop.ru/thumb/st4/fit/0/0/4e7643eab2edf815844abb2759c4e9bd/7858db8b40ff253129d04e50f75edc0106a0a01835da65733cdbca58dd3a78a7.jpg", price: "43999" },
  { id: 5, name: "Asus", img: "https://c.dns-shop.ru/thumb/st1/fit/wm/1015/668/f32490cf5acc24d7af8befea4dc0bf69/18bb9a69a51beda21a9c7749b0ca7dee3d318ac6afdce19164f3da3152a207d0.jpg", price: "38999" }
];
let catalog = [{ id: "appliances", name: "Бытовая техника", items: appliances },
{ id: "smartphones", name: "Смартфоны", items: smartphones },
{ id: "tv", name: "ТВ", items: tv },
{ id: "computers", name: "Компьютеры", items: computers },
{ id: "office", name: "Офис", items: office },
{ id: "accessories", name: "Аксессуары", items: accessories },
{ id: "cargoods", name: "Автотовары", items: cargoods },
{ id: "tools", name: "Инструменты", items: tools },
];

let currentItemInfo ={img:"",name:"",price:""};
let addCurrentInfo = (img,name,price)=>{
  currentItemInfo.img=img;
  currentItemInfo.name=name;
  currentItemInfo.price=price;
}


ReactDOM.render(
  <React.StrictMode>
    <App catalog={catalog} addII={addCurrentInfo} curentInfo={currentItemInfo}/>
  </React.StrictMode>,
  document.getElementById('root')
);
=======
import mystore from './redux/my-store';
//import store from './redux/store'


let renderEntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App store={mystore} dispatch={mystore.dispatch.bind(mystore)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderEntireTree();

>>>>>>> Stashed changes

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
