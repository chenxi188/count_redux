
export default function count(state=1,action){
	console.log(state,action)
	switch(action.type){
		case 'increment':
		return state+action.data
		case 'decrement':
		return state-action.data
		default:
		return state
	}

}