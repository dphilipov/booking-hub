import styles from './BookingsList.module.css';

import Booking from '../../shared/Booking/Booking';

function BookingsList({bookingsList}) {

    const deleteBookingHandler = () => {

    }

    return (
        <ul className={styles.bookingsList}>
            {bookingsList.map(booking =>
                <Booking key={booking.id} bookingInfo={booking} deleteBookingHandler={deleteBookingHandler} />
            )}
        </ul>
    )
}

export default BookingsList
