import React from 'react'
import PropTypes from 'prop-types';
import styles from './index.module.scss'

const Background_Component = ({children, width}) => (
    <div className={styles.mainDiv} style={{width}} >{children}</div>
)

Background_Component.propTypes = {
    width: PropTypes.string.isRequired
}

export default Background_Component