import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { compose, createStore, applyMiddleware } from "redux"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
registerServiceWorker()
