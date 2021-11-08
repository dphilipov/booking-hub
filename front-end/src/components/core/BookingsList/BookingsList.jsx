// React, Hooks
import { useRef, useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';

// Context
import NotificationContext from '../../../context/notificationContext'

// Components
import Booking from '../../shared/Booking/Booking';
import Notification from '../../shared/Notification/Notification';

//CSS
import styles from './BookingsList.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

function BookingsList({ airportsList }) {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const { data: bookingsList, isEnd, isLoading, error } = useFetch('bookings', pageIndex, pageSize);

    const NotificationCtxt = useContext(NotificationContext)

    const observer = useRef();
    const triggerShowMoreOnScrollElement = useCallback((node) => {
        if (isLoading) return;
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && !isEnd && !error) {
                setPageIndex(prevPageIndex => prevPageIndex + 1);
            }
        })

        if (node) observer.current.observe(node);
    }, [isLoading, isEnd]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const onDelete = () => {
        setPageIndex(prevPageIndex => 0);
        setPageSize(prevPageSize => bookingsList.length - 1);
        NotificationCtxt.displayMsg('good', 'Booking deleted!')
    }

    return (
        <>
            <ul className={styles.bookingsList}>
                {bookingsList.map((bookingInfo, index) =>
                    <Booking
                        key={bookingInfo._id}
                        bookingNumber={index + 1}
                        bookingInfo={bookingInfo}
                        airportsList={airportsList}
                        onDelete={onDelete}
                    />
                )}
            </ul>

            <div ref={triggerShowMoreOnScrollElement}></div>

            {isEnd &&
                <Link to="/">
                    <button className={styles.createBookingBtn}>
                        NO MORE BOOKINGS. CREATE A NEW ONE!
                    </button>
                </Link>
            }

            {isLoading && <FontAwesomeIcon icon={faSpinner} className={styles.spinner} spin />}
            {NotificationCtxt.isDisplayed && <Notification type={NotificationCtxt.type} msg={NotificationCtxt.msg}></Notification>}

            <FontAwesomeIcon onClick={goToTop} className={styles.goUpBtn} icon={faArrowCircleUp}></FontAwesomeIcon>
        </>
    )
}

export default BookingsList
