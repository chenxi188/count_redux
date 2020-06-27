import React from 'react' 
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import App from './containers/app.js'
import store from './redux/store.js'

ReactDOM.render(
	(<Provider store={store}>
		<App />
	</Provider>),document.getElementById('root')
)



// ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// store.subscribe(()=>{
// 	ReactDOM.render(<App store={store}/>,document.getElementById('root'))
// })