import React from 'react';
const Counter =()=>
{
	return (
		<div class="jumbotron">
			<h2 id="counter">0</h2>
	    	<button id="inc" className="btn-primary btn-lg">INC</button>
	    	<button id="dec" className="btn-primary btn-lg">DEC</button>
	    	<button id="rnd" className="btn-primary btn-lg">RND</button>	
		</div>
	)	
}

export default Counter;
