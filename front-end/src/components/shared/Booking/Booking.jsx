import styles from './Booking.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Booking({ bookingInfo }) {
    const deleteBooking = () => {

    }

    return (
        <>
            <div key={bookingInfo.id} className={styles.bookingListItem}>
                <FontAwesomeIcon
                    icon={faTimesCircle}
                    className={styles.deleteBookingBtn}
                    onClick={(e) => deleteBooking(e)}
                />

                <h3 className={styles.passangerNames}>{bookingInfo.firstName} {bookingInfo.lastName}</h3>
                <div className={styles.flightDetailsContainer}>
                    <div className={styles.departureDetailsContainer}>
                        <span className={styles.hint}>Flies to</span>
                        <span className={styles.airportCode}>TEST</span>
                        <span>{bookingInfo.departureDate.substring(0, 10).split('-').reverse().join('/')}</span>
                    </div>

                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronRight} />
                    <div className={styles.arrivalDetailsContainer}>
                        <span className={styles.hint}>Arrives at</span>
                        <span className={styles.airportCode}>TEST</span>
                        <span>{bookingInfo.returnDate.substring(0, 10).split('-').reverse().join('/')}</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Booking
