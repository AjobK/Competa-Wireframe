import React, { Component } from 'react'
import styles from './polygons.module.scss'

class Polygons extends Component {
  render () {
    return (
      <section className={styles.polygons}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}> Some subtitle </h2>
          <div className={styles.grid}>
            <div className={`${styles.gridItem} ${styles.firstPoly}`}>
              <p className={styles.gridItemText}> Lorem Ipsum </p>
            </div>
            <div className={styles.gridItemLarge}>
              <p className={styles.gridItemLargeText}> Lorem Ipsum </p>
            </div>
            <div className={`${styles.gridItem} ${styles.lastPoly}`}>
              <p className={styles.gridItemText}> Lorem Ipsum </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Polygons
