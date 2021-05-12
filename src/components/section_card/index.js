import React from 'react'
import styles from './index.module.scss'
import { NavLink } from 'react-router-dom'


const Section_Card = ({text,list}) => {
    let listItems = list.map((item) => <li className={styles.listItem}>{item}</li>)
    return(
    <div className={styles.sectionCard}>
        <NavLink className={styles.title} to={`/learn/`+text}>{text}</NavLink>
        <ul className={styles.list}>{listItems}</ul>
    </div>
    )
}

export default Section_Card