const initialState = {
	article: {}
}

const article = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_POST':
			return action.data
		case 'REMOVE_POST': 
			return null
		default:
			return state
	}
}

export default article