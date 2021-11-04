//CSS
import styles from './BookingsList.module.css';

function BookingsList({ children, changePage, isEnd }) {
    return (
        <ul className={styles.bookingsList}>
            {children}
        </ul>

    )
}

export default BookingsList
