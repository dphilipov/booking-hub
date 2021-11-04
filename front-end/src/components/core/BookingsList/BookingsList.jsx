//CSS
import styles from './BookingsList.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

function BookingsList({ children, changePage, isEnd }) {
    const handdleGoUp = () => {
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

            <FontAwesomeIcon onClick={handdleGoUp} className={styles.goUpBtn} icon={faArrowCircleUp}></FontAwesomeIcon>
        </>
    )
}

export default BookingsList
