import { React } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {select} from '../actions/action';
import ItemInfo from './ItemInfo';

function matchDispatchToProps(dispatch){
  return bindActionCreators({select}, dispatch)
}


const itemInfoContainer = (props) => {

  return (
    <div className="itemInfoContainer">
      <ItemInfo/>
    </div>
  );
}

export default itemInfoContainer;
