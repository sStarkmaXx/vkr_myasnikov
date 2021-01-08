import { React } from 'react';
import ItemInfoConteiner from './itemInfoPage/ItemInfoConteiner';
import CardsConteiner from './cards/CardsConteiner'
import { Route } from 'react-router-dom';
import BasketConteiner from './basket/BasketConteiner';



const ContentConteiner = () => {

    return (
        <div>
            <Route path='/itemInfo' component={() => <ItemInfoConteiner />} />
            <Route path='/catalog' component={() => <CardsConteiner />} />
            <Route path='/basket' component={() => <BasketConteiner />} />
        </div>
    );
}

export default ContentConteiner;