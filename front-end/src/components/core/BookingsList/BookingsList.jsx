//CSS
import styles from './BookingsList.module.css';

// Components
import Booking from '../../shared/Booking/Booking';

function BookingsList({bookingsList}) {

    const deleteBookingHandler = () => {

    }

    return (
        <ul className={styles.bookingsList}>
            {bookingsList.map(bookingInfo =>
                <Booking key={bookingInfo._id} bookingInfo={bookingInfo} deleteBookingHandler={deleteBookingHandler} />
            )}
        </ul>
    )
}

export default BookingsList
