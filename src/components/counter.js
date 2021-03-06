import React, {Component} from 'react';
import PropTypes from 'prop-types'
// import {increment,decrement} from '../redux/actions.js'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.numberRef = React.createRef()
  }

  static propTypes={
    // store:PropTypes.object.isRequired,
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired,
    incrementAsync:PropTypes.func.isRequired,
  }

  increment=()=>{
    const number=this.numberRef.current.value*1
    // this.props.store.dispatch(increment(number))
    this.props.increment(number)
  }

  decrement=()=>{
    const number=this.numberRef.current.value*1
    // this.props.store.dispatch(decrement(number))
    this.props.decrement(number)
  }

  incrementIfOdd = () => {
    const number = this.numberRef.current.value * 1
    if (this.props.count % 2 === 1) {
      // this.props.store.dispatch(increment(number))
      this.props.increment(number)
    }

  }

  incrementAsync = () => {
    const number = this.numberRef.current.value * 1
    this.props.incrementAsync(number)
    // setTimeout(() => {
    //   // this.props.store.dispatch(increment(number))
    //   this.props.increment(number)
    // }, 1000)
  }

  render(){
    // const count=this.props.store.getState()
    const count=this.props.count
    return (
    <div>
        <p>click {count} times</p>

        <div>
          <select ref={this.numberRef}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select> &nbsp;&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;&nbsp;
          <button onClick={this.incrementAsync}>increment async</button>
        </div>
    </div>
  );
  }
  
}