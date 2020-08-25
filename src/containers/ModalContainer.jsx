import React from 'react'
import { closeModal } from '../redux/actions/actions'
import Modal from '../components/modal/Modal'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

const ModalContainer = () => {

  const [user, setUser] = useState({
    name: '',
    comment: '',
  })
  const { photo, isOpen } = useSelector(({ modal }) => modal);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, []);

  const handleChange = ({ target: { value, name } }) => setUser({
    ...user,
    [name]: value
  });

  const modalClose = () => {
    dispatch(closeModal())
  }

  const onOverlayClick = (e) => {
    dispatch(closeModal())
    e.stopPropagation()
  }

  const onModalClick = (e) => {
    e.stopPropagation()
  }

  const pushComment = (e) => {
    e.preventDefault()
    axios
      .post(
        `https://boiling-refuge-66454.herokuapp.com/images/${photo.id}/comments`,
        { name: user.name, comment: user.comment, date: Date.parse(String(new Date())) }
      )
      setUser({
        name: '',
        comment: '',
      })  
  }

  return (
    <Modal
      onClick={modalClose}
      onLayoutClick={onOverlayClick}
      onModalClick={onModalClick}
      src={photo.url}
      comments={photo.comments}
      name={user.name}
      comment={user.comment}
      onChange={handleChange}
      onSubmit={pushComment}
    />
  )
}

export default ModalContainer
