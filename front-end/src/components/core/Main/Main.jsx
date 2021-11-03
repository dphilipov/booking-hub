// React, Hooks
import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';

// Components
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';
import Booking from '../../shared/Booking/Booking';

// CSS
import styles from './Main.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function Main() {
    const [airportsList] = useFetch('airports');
    const [bookingsList, isEnd, isLoading, error] = useFetch('bookings');
    // const [pageIndex, setPageIndex] = useState(0);

    const refetch = () => {
        if (bookingsList.length < 5) {
            // fetchBookingsList('bookings');
        }
    }

    const changePage = () => {
        // setPageIndex(prevPage => prevPage + 1);
    }

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <h1 className={styles.logo}>
                    BookingHub <FontAwesomeIcon icon={faPlaneDeparture} />
                </h1>

                <Form airportsList={airportsList} onRefetch={refetch}></Form>
                <BookingsList changePage={changePage} isEnd={isEnd}>
                    {bookingsList.map(bookingInfo =>
                        <Booking key={bookingInfo._id} bookingInfo={bookingInfo} airportsList={airportsList} />
                    )}
                </BookingsList>

                {isLoading && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />}

            </div>
        </div>
    )
}

export default Main
