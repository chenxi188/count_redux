// import React,{Component} from 'react'
import {connect} from 'react-redux'

import Counter from '../components/counter.js'
import {increment,decrement,incrementAsync} from '../redux/actions.js'

// const mapStateToProps=(state)=>({count:state})
// const mapDispatchToProps={increment,decrement}
// export default connect(mapStateToProps,mapDispatchToProps)(Counter)

export default connect(
	state=>({count:state}),
	{increment,decrement,incrementAsync},
)(Counter)
