import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
  OPEN_MODAL,
  OPEN_MODAL_FAILURE,
  CLOSE_MODAL,
} from '../action-types/action-types'
import axios from 'axios'

// Getting all photos

export const getPhotos = () => {
  return (dispatch) => {
    dispatch(getPhotosRequest())
    axios
      .get(`https://boiling-refuge-66454.herokuapp.com/images`)
      .then((res) => {
        const photos = res.data
        dispatch(getPhotosSuccess(photos))
      })
      .catch((err) => {
        dispatch(getPhotosFailure(err.message))
      })
  }
}

const getPhotosRequest = () => ({
  type: GET_PHOTOS_REQUEST,
})

const getPhotosSuccess = (photos) => ({
  type: GET_PHOTOS_SUCCESS,
  photos,
})

const getPhotosFailure = (error) => ({
  type: GET_PHOTOS_FAILURE,
  error,
})

// Getting photo & comments

export const openModal = (id) => {
  return (dispatch) => {
    axios
      .get(`https://boiling-refuge-66454.herokuapp.com/images/${id}`)
      .then((res) => {
        const data = res.data
        dispatch(getData(data))
      })
      .catch((err) => {
        dispatch(getDataError(err.message))
      })
  }
}

const getData = (data) => ({
  type: OPEN_MODAL,
  data,
})

const getDataError = (error) => ({
  type: OPEN_MODAL_FAILURE,
  error,
})

export const closeModal = () => ({
  type: CLOSE_MODAL,
})
