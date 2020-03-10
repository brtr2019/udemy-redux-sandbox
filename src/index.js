
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';
import {createStore,bindActionCreators} from 'redux';
import * as actions from './actions';
import {reducer} from './reducer';


const store = createStore(reducer);
const {dispatch} = store;



const {inc,dec,rnd} = bindActionCreators(actions,dispatch);


const update = ()=>{
}

store.subscribe(update);  

ReactDOM.render(<Counter/>,document.getElementById('root'));
