import {INCREMENT,DECREMENT} from './action-types.js'

export default function count(state=1,action){
	console.log(state,action)
	switch(action.type){
		case INCREMENT:
		return state+action.data
		case DECREMENT:
		return state-action.data
		default:
		return state
	}

}