//CSS
import styles from './BookingsList.module.css';

function BookingsList({ children, changePage, isEnd }) {
    return (
        <ul className={styles.bookingsList}>
            {/* {bookingsList.map(bookingInfo =>
                <Booking key={bookingInfo._id} bookingInfo={bookingInfo} deleteBookingHandler={deleteBookingHandler} />
            )}

            {!isEnd && <button onClick={changePage}>FETCH MORE</button>} */}
            {children}
            {!isEnd && <button onClick={changePage}>FETCH MORE</button>}
        </ul>

    )
}

export default BookingsList
