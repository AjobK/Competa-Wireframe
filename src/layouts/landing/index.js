import React, { Component } from 'react'
import { Button } from '../../components'
import styles from './landing.module.scss'

class Landing extends Component {
  render () {
    return (
      <section className={styles.landing}>
        <div className={styles.wrapper}>
          <header className={styles.header}>
            <nav className={styles.nav}>
              <ul className={styles.navWrapper}>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href='#'> Nav link </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href='#'> Nav link </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href='#'> Nav link </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.navLink} href='#'> Nav link </a>
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.intro}>
            <h1 className={styles.introHeading}> Website Headline </h1>
            <h2 className={styles.introDescription}> Lorem ipsum dolor sit amet consectetur </h2>
            <p className={styles.introText}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed rutrum imperdiet felis in vehicula. Donec et nibh magna. 
                In vel ultricies enim. Nam id tincidunt libero, quis egestas 
                dolor. Duis lacus nunc, auctor ut massa at, lacinia lacinia 
                tortor. Morbi molestie velit eget sapien convallis imperdiet. 
                Donec fringilla urna ex, id mollis risus fermentum at. Donec 
                rhoncus ex non leo viverra auctor.</p>
            <div className={styles.optionBar}>
              <Button value={'Lorem'} />
              <p className={styles.optionBarOr}> or </p>
              <Button value={'Ipsum'} />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Landing
