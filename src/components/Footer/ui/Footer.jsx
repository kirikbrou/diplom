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
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <p className={styles.menuTitle}>Книги</p>
            </li>
            <li className={styles.menuItem}>
              <a href="https://xn----8sbfshmwb0aq0k.xn--p1ai/wp-content/uploads/literatura/pdd-rf-2023-v46.1.pdf" className={styles.menuLink}>Правила Дорожного Движения</a>
            </li>
            <li className={styles.menuItem}>
              <a href="http://avtoplus28.ru/index_files/pdd_2024.pdf" className={styles.menuLink}>Правила движения на дорогах</a>
            </li>
            <li className={styles.menuItem}>
              <a href="https://www.dvport.com/wp-content/uploads/2022/07/PDD.pdf" className={styles.menuLink}>Правила безопасности на дорогетзь</a>
            </li>
          </ul>
        </nav>
        <p className={styles.copyright}>Тренажер разработал Богданов Кирилл Юрьевич</p>
      </Container>
    </div>
    
  )
}
