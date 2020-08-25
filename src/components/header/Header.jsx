import React, { memo } from 'react'
import './Header.scss'
import PropTypes from 'prop-types'

const Header = memo(({ children }) => {
  return <div className="header">{children}</div>
})

Header.propTypes = {
  children: PropTypes.string,
}

Header.defaultProps = {
  children: '',
}

export default Header
