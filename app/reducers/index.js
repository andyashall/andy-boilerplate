import { combineReducers } from 'redux'
import user from './login'
import posts from './posts'
import article from './post'
import login from './login'

const app = combineReducers({
  user,
  posts,
  article,
  login
})

export default app