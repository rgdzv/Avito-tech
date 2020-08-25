import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { photosReducer } from '../reducers/photosReducer'
import { modalReducer } from '../reducers/modalReducer'

const reducers = combineReducers({
  photos: photosReducer,
  modal: modalReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
