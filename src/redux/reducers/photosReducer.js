import { GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS, GET_PHOTOS_FAILURE } from '../action-types/action-types'

const initialState = {
  photos: [],
  isFetching: false,
  error: null
};

export const photosReducer = (state = initialState, { type, photos, error }) => {
  switch (type) {
    case GET_PHOTOS_REQUEST:
      return { 
        ...state,  
        isFetching: true 
      }
    case GET_PHOTOS_SUCCESS:
      return { 
        ...state, 
        photos: photos, 
        isFetching: false,
        error: null 
      }
    case GET_PHOTOS_FAILURE:
      return { 
        ...state,
        isFetching: false,
        error: error
      }
    default:
      return state
  }
};
