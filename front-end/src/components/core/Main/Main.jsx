// React, Hooks
import { useRef, useState, useCallback } from 'react';
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
    const [pageIndex, setPageIndex] = useState(0);
    const [airportsList] = useFetch('airports');
    const [bookingsList, isEnd, isLoading, error] = useFetch('bookings', pageIndex);

    const onCreate = () => {
        console.log('refetch');
    }

    const observer = useRef();
    const triggerShowMoreOnScrollElement = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();
        
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !isEnd) {
                // console.log(entries[0].isIntersecting, isEnd);

                setPageIndex(prevPageIndex => prevPageIndex + 1);
            }
        })

        if (node) observer.current.observe(node);

    }, [isLoading, isEnd]);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <h1 className={styles.logo}>
                    BookingHub <FontAwesomeIcon icon={faPlaneDeparture} />
                </h1>

                <Form airportsList={airportsList} onCreate={onCreate}></Form>
                <BookingsList isEnd={isEnd}>
                    {bookingsList.map((bookingInfo) =>
                        <Booking key={bookingInfo._id} bookingInfo={bookingInfo} airportsList={airportsList} />
                    )}
                </BookingsList>

                {bookingsList.length >= 5 && <button ref={triggerShowMoreOnScrollElement}>SHOW MORE</button>}

                {isLoading && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />}

            </div>
        </div>
    )
}

export default Main
