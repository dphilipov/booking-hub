// React, Hooks
import { useRef, useState, useCallback } from 'react';
import useFetch from '../../../hooks/useFetch';
import { Switch, Route, Link } from 'react-router-dom';

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

    const observer = useRef();
    const triggerShowMoreOnScrollElement = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !isEnd) {
                setPageIndex(prevPageIndex => prevPageIndex + 1);
            }
        })

        if (node) observer.current.observe(node);

    }, [isLoading, isEnd]);

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <Link to="/">
                    <h1 className={styles.logo}>
                        BookingHub <FontAwesomeIcon icon={faPlaneDeparture} />
                    </h1>
                </Link>

                <Switch>
                    <Route exact path="/">
                        <Form airportsList={airportsList}></Form>
                    </Route>

                    <Route path="/bookings-list">
                        <BookingsList isEnd={isEnd}>
                            {bookingsList.map((bookingInfo, index) =>
                                <Booking key={bookingInfo._id} bookingNumber={index + 1} bookingInfo={bookingInfo} airportsList={airportsList} />
                            )}
                        </BookingsList>
                        <div ref={triggerShowMoreOnScrollElement}></div>

                        {isLoading && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />}
                    </Route>

                </Switch>


            </div>
        </div>
    )
}

export default Main
