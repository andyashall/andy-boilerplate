const initialState = {
	videos: {}
}

const videos = (state = {}, action) => {
	switch (action.type) {
		case 'SAVE_VIDEOS':
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

export default videos