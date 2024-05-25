import React, { useState } from 'react'
import styles from './style.module.css'

import { Container } from '@components/Container'
import { Header } from '@components/Header'

export const Main = () => {
  const [text, setText] = useState('Начать тест')
  const handleClick = () => setText('Удачи')

  return (
    <main className={styles.main}>
      <Container>
        <section className={styles.top}>
        <Header />
          <div className={styles.hero}>
            <h1 className={styles.title}>
              Добро пожаловать
            </h1>
            <a onClick={handleClick} className={styles.topLink} href="/Quiz">
              {text}
            </a>
          </div>
        </section>
      </Container>
    </main>
  )
}
