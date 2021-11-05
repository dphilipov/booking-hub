// React, Hooks
import { Link } from 'react-router-dom';

//CSS
import styles from './BookingsList.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

function BookingsList({ children, isEnd }) {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            <ul className={styles.bookingsList}>
                {children}
            </ul>

            <FontAwesomeIcon onClick={goToTop} className={styles.goUpBtn} icon={faArrowCircleUp}></FontAwesomeIcon>

            {isEnd &&
                <Link to="/">
                    <button className={styles.createBookingBtn}>
                        NO MORE BOOKINGS. CREATE A NEW ONE!
                    </button>
                </Link>
            }
        </>
    )
}

export default BookingsList
