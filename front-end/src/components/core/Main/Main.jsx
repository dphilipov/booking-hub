import React from 'react'

import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';
import styles from './Main.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'


function Main() {
    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <h1 className={styles.logo}>BookingHub <FontAwesomeIcon icon={faPlaneDeparture} /></h1>

                <Form></Form>
                <BookingsList></BookingsList>
            </div>
        </div>
    )
}

export default Main
