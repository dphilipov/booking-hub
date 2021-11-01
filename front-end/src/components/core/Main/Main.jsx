import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';
import styles from './Main.module.css';
import useFetch from '../../../hooks/useFetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'



function Main() {
    const [airportsList, setAirportsList] = useState([]);
    const [bookingsList, setBookingsList, isLoading, error] = useFetch();

    useEffect(() => {
        setBookingsList();
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <h1 className={styles.logo}>BookingHub <FontAwesomeIcon icon={faPlaneDeparture} /></h1>

                <Form airportsList={airportsList}></Form>
                {isLoading
                    ? <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />
                    : <BookingsList bookingsList={bookingsList} />
                }

            </div>
        </div>
    )
}

export default Main
