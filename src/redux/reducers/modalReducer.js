import {
  OPEN_MODAL,
  OPEN_MODAL_FAILURE,
  CLOSE_MODAL,
} from '../action-types/action-types'

const initialState = {
  photo: null,
  isOpen: false,
  error: null,
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        photo: action.data,
        isOpen: true,
        error: null,
      }
    case OPEN_MODAL_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    case CLOSE_MODAL:
      return {
        ...state,
        photo: null,
        isOpen: false,
        error: null,
      }
    default:
      return state
  }
}
