import React, { Fragment } from 'react'
import './Modal.scss'
import close from '../../images/close.png'
import Input from '../input/Input'
import Button from '../button/Button'
import PropTypes from 'prop-types'
import Portal from '../portal/Portal'

const Modal = ({
  onClick,
  onChange,
  onSubmit, 
  src,
  comments,
  name,
  comment,
  onModalClick,
  onLayoutClick,
}) => {
  return (
    <Portal>
      <div className="modal__layout" onClick={onLayoutClick}>
        <div className="modal__window" onClick={onModalClick}>
          <div className="modal__content">
            <div className="modal__item">
              <img src={src} alt={src} />
              <div className="modal__comments">
                <div className="modal__comment">
                  {comments.map((comment) => {
                    return (
                      <Fragment key={comment.id}>
                        <p>{new Date(comment.date).toLocaleDateString()}</p>
                        <p>{comment.text}</p>
                      </Fragment>
                    )
                  })}
                </div>
              </div>
            </div>
            <form onSubmit={onSubmit}>
              <Input
                name="name"
                type="text"
                value={name}
                placeholder="Ваше имя"
                onChange={onChange}
              />
              <Input
                name="comment"
                type="text"
                value={comment}
                placeholder="Ваш комментарий"
                onChange={onChange}
              />
              <Button>Оставить комментарий</Button>
            </form>
            <img className="close" src={close} alt="close" onClick={onClick} />
          </div>
        </div>
      </div>
    </Portal>
  )
}

Modal.propTypes = {
  onClick: PropTypes.func,
  onModalClick: PropTypes.func,
  src: PropTypes.string,
  comments: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  comment: PropTypes.string,
  onSubmit: PropTypes.func,
  onLayoutClick: PropTypes.func,
}

Modal.defaultProps = {
  onClick: () => {},
  onModalClick: () => {},
  src: '',
  comments: [],
  onChange: () => {},
  name: '',
  comment: '',
  onSubmit: () => {},
  onLayoutClick: () => {},
}

export default Modal
