import React from 'react'
import styles from './style.module.css'

export const Container = (props) => {
  return <div className={styles.container}>{props.children}</div>
}
