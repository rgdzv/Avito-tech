import React from 'react'
import './List.scss'
import PropTypes from 'prop-types'

const List = ({ src, onClick }) => {
  return (
    <div className="list__item">
      <img src={src} alt={src} onClick={onClick} />
    </div>
  )
}

List.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
}

List.defaultProps = {
  src: '',
  onClick: () => {},
}

export default List
