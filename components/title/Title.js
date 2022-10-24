import React from 'react'
import RectProfile from '../rectangles/RectProfile'
import RectRight from '../rectangles/RectRight'
import styles from './title.module.css'

export default function Title() {
    return (
        <div className={styles.container} >
            <div className={styles.name}>
                <h1>Алексей Дудак</h1>
                <RectProfile />
            </div>
            <div className={styles.about} >
                <span>Обо мне:</span>
                <RectRight />
                Высшее инженерное образование и технический склад ума.
                В программирование пришел из автоматизации инженерных отопительных и вентиляционных систем.
                Всегда при возможности расширяю знания (сейчас изучаю TypeScript и React Native).
                Заинтересован, в первую очередь, в сложных/интересных проектах и стартапах
            </div>
        </div>
    )
}