import React from 'react'
import RectRight from '../rectangles/RectRight'
import styles from './pet.module.css'

export default function Pet() {
    return(
        <div className={styles.container}>
            <h2>Pet-project</h2>
            <RectRight />
            <p><a href='http://gedza.site/' className={styles.gedza}>GEDZA - web-приложение для салонов красоты и барбершопов</a></p>
            <div>Приложение моментально создает одностраничный сайт для салона красоты на основе данных crm-системы Yclients (которой пользуются 99% сферы услуг).</div>
            <div>Работает базовый функционал</div>
        </div>
    )
}