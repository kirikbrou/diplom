import React from 'react'
import styles from './style.module.css'

import { Container } from '@components/Container'

import logo from '@assets/logo.svg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.headerInner}>
          <a className={styles.logo} href={'#'}>
            <img className={styles.logoImg} src={logo} />
          </a>
          <nav className={styles.menu}>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <a className={styles.menuLink}>Дипломный проект</a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </div>
  )
}
