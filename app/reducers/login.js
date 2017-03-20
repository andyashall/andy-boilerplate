import {signIn, signOut} from '../actions'

const initialState = {
	user: {}
}

const user = (state = {}, action) => {
	console.log(action)
	switch (action.type) {
		case 'SAVE_USER':
			return action.data
		case 'REMOVE_USER': 
			return null
		default:
			return state
	}
}

export default user