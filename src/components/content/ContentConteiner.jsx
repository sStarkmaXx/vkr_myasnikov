import { React } from 'react';
import ItemInfoConteiner from './itemInfoPage/ItemInfoConteiner';
import CardsConteiner from './cards/CardsConteiner'
import { Route } from 'react-router-dom';
import classes from './ContentConteiner.module.css';


const ContentConteiner = () => {

    return (
        <div className={classes.wrapcont}>
            <Route path='/itemInfo' component={() => <ItemInfoConteiner />} />
            <Route path='/catalog' component={() => <CardsConteiner />} />
        </div>
    );
}

export default ContentConteiner;