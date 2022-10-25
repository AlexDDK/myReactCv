import React from 'react'
import OneContact from '../oneContact/OneContact'
import styles from './contacts.module.css'
import tgIcon from '../../src/img/tg2.svg'
import phoneIcon from '../../src/img/phone.svg'
import emailIcon from '../../src/img/email.svg'



export default function Contacts() {
  return (
    <div className={styles.container}>
        <OneContact 
        title='Тел.' 
        desc={
          <React.Fragment>
            <a href="tel:+79998243233">8-999-824-32-33</a>
          </React.Fragment>
        } 
        icon={phoneIcon}
        link='tel:+79998243233'
        />

        <OneContact 
        title='Email' 
        desc={
          <React.Fragment>
            <a href="mailto:aleksei.dudak@gmail.com">my Email</a>
          </React.Fragment>
        } 
        icon={emailIcon}
        link='mailto:aleksei.dudak@gmail.com'
        cls=''
        />

        <OneContact 
        title='Telegram' 
        desc={
          <React.Fragment>
            <a href='https://t.me/Alexey_Han'>@Alexey_Han</a>
          </React.Fragment>
        } 
        icon={tgIcon} 
        link='https://t.me/Alexey_Han'
        cls='tg'
        />

        <OneContact />
        <OneContact />
      </div>
  )
}