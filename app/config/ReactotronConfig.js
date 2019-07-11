import Reactotron from "reactotron-react-native"
import { reactotronRedux } from "reactotron-redux"
import sagaPlugin from "reactotron-redux-saga"

const reactotron = Reactotron.configure({
	name: "robocoders expo"
}) // controls connection & communication settingqs
	.use(reactotronRedux())
	.use(sagaPlugin())
	.useReactNative() // add all built-in react native plugins
	.connect() // let's connect!

export default reactotron
