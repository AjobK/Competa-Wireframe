import React, { Component } from 'react'
import styles from './button.module.scss'

class Button extends Component {
  defaultClick () {
    alert(`Clicked on element:\n\n${styles.button}`);
  }

  render () {
    return (
      <button className={styles.button} onClick={this.props.onClick || this.defaultClick}>
        {this.props.value || 'Button'}
      </button>
    )
  }
}

export default Button
