import { combineReducers } from 'redux'
import user from './login'
import posts from './posts'
import article from './post'
import videos from './videos'

const app = combineReducers({
  user,
  posts,
  article,
  videos
})

export default app