import React from 'react'
import styles from './style.module.css'

import { Main } from '@components/Main'
import { Footer } from '@components/Footer'

export const MainPage = () => {
  return (
    <div className={styles.page}>
      {/* <Header /> */}
      <Main />
      <Footer />
    </div>
  )
}
