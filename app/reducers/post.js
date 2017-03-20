const initialState = {
	article: {}
}

const article = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_POST':
		console.log(action.data)
			return {
				data: action.data,
				hello: "hello"
			}
		case 'REMOVE_POST': 
			return null
		default:
			return state
	}
}

export default article