
import {createStore} from 'redux';
import {inc,dec,rnd} from './actions';
import {reducer} from './reducer';


const store = createStore(reducer);

document.getElementById('inc').addEventListener('click',function(){
	store.dispatch(inc());
})
document.getElementById('dec').addEventListener('click',function(){
	store.dispatch(dec());
})
document.getElementById('rnd').addEventListener('click',function(){
	const payload = Math.floor(Math.random()*10);
	store.dispatch(rnd(payload));
})
const update = ()=>{
	document.getElementById('counter').innerHTML = store.getState();
}

store.subscribe(update);  
