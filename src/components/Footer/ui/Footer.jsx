import React from 'react'
import styles from './style.module.css'

import { Container } from '@components/Container'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <nav className={styles.footerMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <p className={styles.menuTitle}>Аналоги приложения</p>
            </li>
            <li className={styles.menuItem}>
              <a href="https://examenpdd.com/" className={styles.menuLink}>Экзамен ПДД ГИБДД онлайн</a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://www.drom.ru/pdd/" className={styles.menuLink}>ПДД Drom.ru</a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://pdd-exam.ru/" className={styles.menuLink}>ПДД онлайн</a>
            </li>
          </ul>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <p className={styles.menuTitle}>Правила ПДД</p>
            </li>
            <li className={styles.menuItem}>
              <a href="https://examenpdd.com/rules" className={styles.menuLink}>ПДД РФ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://www.drom.ru/pdd/pdd/" className={styles.menuLink}>ПДД ДРОМ</a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://www.pdd24.com/" className={styles.menuLink}>ПДД онлайн 2024</a>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>Тренажер разработал Богданов Кирилл Юрьевич</p>
      </Container>
    </div>
    
  )
}
