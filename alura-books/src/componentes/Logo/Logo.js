import React from 'react'
import logo from "../../imagens/logo.svg"

//CSS 
import styles from './Logo.module.css'

const Logo = () => {
  return (
    
          <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p> <strong>27L</strong> Books</p>
          </div>
   
  )
}

export default Logo