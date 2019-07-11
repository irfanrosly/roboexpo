import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import ReactotronConfig from "../config/ReactotronConfig"
import Reactotron from "reactotron-react-native"

import reducers from "../redux"
import rootSaga from "../sagas"

const sagaMonitor = Reactotron.createSagaMonitor()

const sagaMiddleware = createSagaMiddleware({ sagaMonitor })

const store = createStore(
	reducers,
	compose(
		applyMiddleware(sagaMiddleware),
		ReactotronConfig.createEnhancer()
	)
)

sagaMiddleware.run(rootSaga)

export default store
