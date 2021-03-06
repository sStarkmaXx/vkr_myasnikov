import React from 'react';
import {Nav} from 'react-bootstrap';
import classes from './Footer.module.css';

const Payment = () => {
    return (
        <div className={classes.shops}>
            <p><h3>Способы оплаты</h3></p>
            Оплатить покупку в сети Цифровых супермаркетов можно несколькими способами:
            <ul>
                <li>
                    <p><b>Наличный расчёт </b></p>
                    Вы можете оплатить покупку наличными в магазине или курьеру (при доставке товара).
                    <p></p>
                </li>
                <li>
                    <p><b>Пластиковые карты </b></p>
                    Безналичная оплата банковской картой в магазине и при доставке. Принимаются карты следующих платёжных систем:
«VISA», «MasterCard», «Золотая Корона», «МИР».
                    <p></p>
                </li>
                <li>
                    <p><b>Кредит </b></p>
                    Заявку на кредит можно оформить в магазине у кредитного эксперта одного из банков-партнеров. В разделе «Кредиты» Вы можете найти информацию о банках-партнёрах и их продуктах.
                    <p></p>
                </li>
                <li>
                    <p><b>Безналичный расчет </b></p>
                    Доступен для юридических лиц (ООО, ЧП, ИП и т.п.). Подробности в разделе «Заказ товара для юридических лиц»
                    <p></p>
                </li>
                <li>
                    <p><b>Подарочные карты </b></p>
                    Этот способ оплаты подразумевает возможность совершать покупки по специальной пластиковой карте, на которую внесена определенная Вами сумма — любой товар из позиций нашего каталога в любом магазине сети Цифровых супермаркетов . Идеальный вариант для подарка близким и родным людям.
                    <p></p>
                </li>
                <li>
                    <p><b>Онлайн-оплата на сайте</b></p>
                    Оплата осуществляется через компанию-партнера - ЮKassa. Комиссия не взимается. К оплате принимаются кошельки WebMoney, банковские карты, QIWI-кошельки и кошельки ЮMoney. 
                    Если вы выбираете онлайн-оплату - вы указываете информацию о своем платежном средстве в специальной защищенной форме оплаты на странице компании-партнера. Партнер проводит проверку сформированного запроса на соответствие установленном требованиям и передает этот запрос на авторизацию. После того, как банк-эмитент подтвердил авторизацию платежа, вы возвращаетесь на наш сайт на страницу подтверждения заказа.
На номер телефона, указанный при оформлении заказа, высылается специальный код, который нужно будет сообщить сотрудникам магазина при получении заказа.
Внимание! При возврате платежа денежные средства вернутся только на то же платежное средство (банковскую карту, кошелек ЮMoney / Qiwi / Webmoney), с которого был произведен платеж. Обращаем ваше внимание, что необходимо предоставить Заявление на возврат.
                    <p></p>
                </li>
            </ul>
        </div>
    )
}

export default Payment;