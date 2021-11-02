// React, Hooks
import React, { useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

// Components
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';

// CSS
import styles from './Main.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export const AirportsContext = React.createContext();

function Main() {
    const [airportsList, setAirportsList] = useFetch();
    const [bookingsList, setBookingsList, isLoading, error] = useFetch();

    useEffect(() => {
        setAirportsList('airports');
        setBookingsList('bookings');
    }, [setAirportsList, setBookingsList])

    const refetch = () => {
        if (bookingsList.length < 5) {
            setBookingsList('bookings');
        }
    }

    return (
        <AirportsContext.Provider value={airportsList}>
            <div className={styles.mainWrapper}>
                <div className={styles.mainContainer}>
                    <h1 className={styles.logo}>
                        BookingHub <FontAwesomeIcon icon={faPlaneDeparture} />
                    </h1>

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
