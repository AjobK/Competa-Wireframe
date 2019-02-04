import React, { Component } from 'react'
import styles from './quote.module.scss'

class Quote extends Component {
  render () {
    return (
      <section className={styles.quote}>
        <div className={styles.wrapper}>
          <div className={styles.person}>
            <div className={styles.picture} />
            <div className={styles.info}>
              <p className={styles.name}> Firstname Surname </p>
              <p className={styles.says}> </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Quote
