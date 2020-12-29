import { React } from 'react';
import ItemInfoConteiner from './itemInfoPage/ItemInfoConteiner';
import CardsConteiner from './cards/CardsConteiner'
import { Route } from 'react-router-dom';


const ContentConteiner = () => {

    return (
        <div>
            <Route path='/itemInfo' component={() => <ItemInfoConteiner />} />
            <Route path='/catalog' component={() => <CardsConteiner />} />
        </div>
    );
}

export default ContentConteiner;