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
              <p className={styles.says}> says </p>
            </div>
          </div>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed rutrum imperdiet felis in vehicula. Donec et nibh magna. 
            In vel ultricies enim. Nam id tincidunt libero, quis egestas 
            dolor. Duis lacus nunc, auctor ut massa at, lacinia lacinia 
            tortor. Morbi molestie velit eget sapien convallis imperdiet.
          </p>
        </div>
      </section>
    )
  }
}

export default Quote
