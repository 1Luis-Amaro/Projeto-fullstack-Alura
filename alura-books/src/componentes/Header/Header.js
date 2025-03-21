import React from 'react'
import Logo from '../Logo/Logo'
import NavBar from '../NAV/NavBar'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
        <Logo/>
        <NavBar/>
      </header>
  )
}
