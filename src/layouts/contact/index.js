import React, { Component } from 'react'
import styles from './contact.module.scss'

class Contact extends Component {
  render () {
    return (
      <section className={styles.contact}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> Another subtitle </h2>
          <form className={styles.form}>
            <input className={styles.input} type={'text'} />
            <input className={styles.input} type={'text'} />
            <input className={styles.input} type={'text'} />
            <input className={styles.input} type={'text'} />
            <textarea className={styles.textArea}>
              Lorem ipsum
            </textarea>
            <input className={styles.submit} type={'submit'} />
          </form>
        </div>
      </section>
    )
  }
}

export default Contact
