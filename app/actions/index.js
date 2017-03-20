export const getPosts = (data) => {
  return {
    type: 'GET_POSTS',
    data
  }
}

export const savePost = (data) => {
  return {
    type: 'SAVE_POST',
    data
  }
}

export const saveVideos = (data) => {
  return {
    type: 'SAVE_VIDEOS',
    data
  }
}

export const morePosts = (prevData, data) => {
  var allData = {
    prev: prevData,
    new: data
  }
  return {
    type: 'MORE_POSTS',
    allData
  }
}

export const signIn = (data) => {
	return {
	type: 'SAVE_USER',
	data
	}
}

export const signOut = (data) => {
  return {
  type: 'REMOVE_USER',
  data
  }
}
