import React from 'react';
import classes from './Footer.module.css';

const Delivery = () => {
    return (
        <div className={classes.shops}>
            <h1>Доставка</h1>
            <p align="center"><b>Основные условия оказания услуги доставочной организацией.</b></p>
Доставка товара осуществляется ежедневно с 11:00ч до 22:00ч.
При оформлении до 16:00ч., доступно оформление экспресс доставки в этот же день.
Предварительное оповещение о доставке осуществляется сотрудником доставочной организации в день оказания услуги за 1 час до приезда на указанный адрес.
            <p></p>
            <ul>
                <li>
                    <p align="left"><b>Стоимость доставки</b></p>
    Стоимость доставки по г. Томск составляет от 250 рублей в зависимости от веса и объёма товара.
Стоимость доставки в населенные пункты за пределы города рассчитывается автоматически при оформлении заказа на сайте.
Уточнить стоимость доставки в определенный населенный пункт Вы можете самостоятельно, для этого необходимо в карточке интересующего Вас товара кликнуть на ссылку Доставим на дом.  После введения необходимого адреса Вам будет показана стоимость доставки. Дополнительно информацию можно получить у сотрудника магазина или по телефону контактного центра 8-800-77-07-999 для связи с магазином.
                    <p></p>
                </li>
                <li>
                    <p align="left"><b>Подъем товара на этаж</b></p>
    Подъем товара является услугой доставки, или её частью.
Подъем крупногабаритного товара на этаж осуществляется только при условии, если товар в упаковке проходит по габаритам в дверной проем подъезда, грузовой лифт. В противном случае крупногабаритные товары доставляются к подъезду, либо на лестничную площадку.
Перемещение товара внутри частного строения / квартиры не является услугой доставки, или её частью.
                <p></p>
                </li>
                <li>
                    <p align="left"><b>Способы оплаты товара</b></p>
                Оплата за товар и услугу доставки возможна онлайн на сайте, наличным и безналичным расчетом курьеру, а так же непосредственно в магазине.
При оформлении заказа на юридическое лицо стоимость доставки включается в счет на оплату.
                <p></p>
                </li>
                <li>
                    <p align="left"><b>Доставка не осуществляется</b></p>
                На стройплощадки, вокзалы, в транспортные компании, садово-огородные товарищества, цеха, пункты общественного питания (за исключением их административных помещений), режимные, секретные и несуществующие объекты. В парки, лесные массивы, на пляжи или иные места, не имеющие определенного адреса, либо условий для передачи товаров и сопроводительной документации, получения оплаты, а также если проезд к месту передачи товара невозможен на расстояние более чем 100 метров.
                </li>
            </ul>
        </div>
    )
}

export default Delivery;