import React, { memo } from 'react'
import './Footer.scss'
import PropTypes from 'prop-types'

const Footer = memo(({ children }) => {
  return <div className="footer">{children}</div>
})

Footer.propTypes = {
  children: PropTypes.string,
}

Footer.defaultProps = {
  children: '',
}

export default Footer
