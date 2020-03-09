
import {createStore} from 'redux';
const reducer = (state=0,action)=>{
  switch(action.type){
    case 'INC': return state+1;break;
    case 'DEC':return state-1;break;
    default:return state;
  }
};

const store = createStore(reducer);
store.subscribe(()=>{
	console.log("state:"+store.getState());
})

console.log(store);
store.dispatch({type:'INC'});
store.dispatch({type:'INC'});
