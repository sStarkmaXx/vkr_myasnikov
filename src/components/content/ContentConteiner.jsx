import React from 'react';
import ItemInfoConteiner from './itemInfoPage/ItemInfoConteiner';
import CardsConteiner from './cards/CardsConteiner'
import { Route } from 'react-router-dom';
import BasketConteiner from './basket/BasketConteiner';
import Shops from '../footer/Shops';
import Delivery from '../footer/Delivery';
import Payment from '../footer/Payment';
import Refund from '../footer/Refund';




const ContentConteiner = (props) => {

    let generateRoute = props.catalog.map(el => {
        
        let category = el.id;
        return (el.items.map(item => {
            let id = item.id;
            let path = `/catalog/${category}/${id}`;
            return (
                <div>
                    <Route path={path} component={() => <ItemInfoConteiner />} />
                </div>
            )
            })
        )
    })

    return (
        <div>
            {generateRoute}
            <Route path='/catalog' component={() => <CardsConteiner />} />
            <Route path='/basket' component={() => <BasketConteiner />} />
            <Route path='/shops' component={() => <Shops />} />
            <Route path='/delivery' component={() => <Delivery />} />
            <Route path='/payment' component={() => <Payment />} />
        </div>
    );

}

export default ContentConteiner;