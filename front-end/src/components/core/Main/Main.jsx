import React, { useEffect } from 'react';
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';
import styles from './Main.module.css';
import useFetch from '../../../hooks/useFetch';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const AirportsContext = React.createContext();

function Main() {
    const [airportsList, fetchAirportsList] = useFetch();
    const [bookingsList, fetchBookingsList, isLoading, error] = useFetch();

    useEffect(() => {
        fetchBookingsList('bookings');

        fetchAirportsList('airports');
    }, [fetchBookingsList, fetchAirportsList])

    const refetch = () => {
        if (bookingsList.length < 5) {
            fetchBookingsList('bookings');
        }
    }

    return (
        <AirportsContext.Provider value={airportsList}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainContainer}>
                    <h1 className={styles.logo}>BookingHub <FontAwesomeIcon icon={faPlaneDeparture} /></h1>

                    <Form airportsList={airportsList} onRefetch={refetch}></Form>
                    {isLoading
                        ? <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />
                        : <BookingsList bookingsList={bookingsList} />
                    }

                </div>
            </div>
        </AirportsContext.Provider>
    )
}

export default Main
