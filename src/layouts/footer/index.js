import React, { Component } from 'react'
import styles from './footer.module.scss'

class Footer extends Component {
  render () {
    return (
      <section className={styles.footer}>
        <div className={styles.wrapper}>
          <p className={styles.copyright}> Copyright </p>
          <div className={styles.blocks}>
            <div className={styles.block} />
            <div className={styles.block} />
            <div className={styles.block} />
          </div>
        </div>
      </section>
    )
  }
}

export default Footer
