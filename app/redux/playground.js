import { createReducer, createActions } from "reduxsauce"
import Immutable from "seamless-immutable"

const { Types, Creators } = createActions({
	playground1: ["username"],
	playground1Result: ["payload"]
})

export const PlaygroundTypes = Types
export default Creators

const INITIAL_STATE = Immutable({
	text: "Playground Redux",
	username: null,
	data: {},
	loading: false
})

const playground1 = (state, action) => {
	return state.merge({
		loading: true
	})
}

const playground1Result = (state, action) => {
	return state.merge({
		data: action.payload,
		loading: false
	})
}

export const playground = createReducer(INITIAL_STATE, {
	[Types.PLAYGROUND1]: playground1,
	[Types.PLAYGROUND1_RESULT]: playground1Result
})
