
import {createStore} from 'redux';
const reducer = (state=0,action)=>{
  switch(action.type){
    case 'INC': return state+1;break;
    case 'DEC':return state-1;break;
    default:return state;
  }
};

const store = createStore(reducer);
document.getElementById('inc').addEventListener('click',function(){
	store.dispatch({type:'INC'})
	//document.getElementById('counter').innerHTML = store.getState();
})
document.getElementById('dec').addEventListener('click',function(){
	store.dispatch({type:'DEC'})
	//document.getElementById('counter').innerHTML = store.getState();
})

const update = ()=>{
	document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(update);  
