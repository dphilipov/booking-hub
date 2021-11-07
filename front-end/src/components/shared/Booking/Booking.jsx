// React, Hooks
import { useEffect, useState, useContext } from 'react';

// Context
import NotificationContext from '../../../context/notificationContext'

// Components
import Notification from '../../shared/Notification/Notification';

// Services
import fetchServices from '../../../services/fetchServices';

// CSS
import styles from './Booking.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Booking({ bookingNumber, bookingInfo, airportsList, onDelete }) {
    const [currentDepartureAirport, setCurrentDepartureAirport] = useState({});
    const [currentDestinationAirport, setCurrentDestinationAirport] = useState({});

    const NotificationCtxt = useContext(NotificationContext)

    const deleteBooking = async () => {
        try {
            const response = await fetchServices.deleteBooking(bookingInfo._id);
            let json;

            if (response.ok) {
                json = await response.json();
                onDelete();
                NotificationCtxt.displayMsg('good', 'Booking deleted!')
            } else {
                Promise.reject(json);
            }

        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        const currentDepartureAirport = airportsList.find(airport => airport.id === bookingInfo.departureAirportId);
        const currentDestinationAirport = airportsList.find(airport => airport.id === bookingInfo.arrivalAirportId);

        setCurrentDepartureAirport(currentDepartureAirport);
        setCurrentDestinationAirport(currentDestinationAirport);

    }, [airportsList, bookingInfo])



    return (
        <>
            <div key={bookingInfo.id} className={styles.bookingListItem}>
                <div className={styles.topInfo}>
                    <span className={styles.bookingNumber}>
                        Booking #{bookingNumber}
                    </span>
                    <FontAwesomeIcon
                        icon={faTimesCircle}
                        className={styles.deleteBookingBtn}
                        onClick={(e) => deleteBooking(e)}
                    />
                </div>

                <h3 className={styles.passangerNames}>{bookingInfo.firstName} {bookingInfo.lastName}</h3>
                <div className={styles.flightDetailsContainer}>
                    <div className={styles.departureDetailsContainer}>
                        <span className={styles.hint}>Flies to</span>
                        <span className={styles.airportCode}>{currentDepartureAirport?.code}</span>
                        <span>{bookingInfo.departureDate.substring(0, 10).split('-').reverse().join('/')}</span>
                    </div>

                    <FontAwesomeIcon icon={faChevronRight} className={styles.chevronRight} />
                    <div className={styles.arrivalDetailsContainer}>
                        <span className={styles.hint}>Arrives at</span>
                        <span className={styles.airportCode}>{currentDestinationAirport?.code}</span>
                        <span>{bookingInfo.returnDate.substring(0, 10).split('-').reverse().join('/')}</span>
                    </div>
                </div>

            </div>

            {NotificationCtxt.isDisplayed && <Notification type={NotificationCtxt.type} msg={NotificationCtxt.msg}></Notification>}

        </>
    )
}

export default Booking
