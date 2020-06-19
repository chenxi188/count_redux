import {INCREMENT,DECREMENT} from './action-types.js'


export const increment=number=>({type:INCREMENT,data:number})
export const decrement=number=>({type:DECREMENT,data:number})