// React, Hooks
import { useState } from 'react';
import { Link } from 'react-router-dom'
import useInput from '../../../hooks/useInput';

// Services
import fetchServices from '../../../services/fetchServices';

// CSS
import styles from './Form.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'


export default function Form({ airportsList, onCreate }) {
    const [formValue, airportsNames, handleInputChange, clearInputs] = useInput();
    const [isFetching, setIsFetching] = useState(false);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsFetching(true);

        // TO DO: add validation

        try {
            const response = await fetchServices.createBooking(formValue);
            const json = await response.json();

            if (response.ok) {
                console.log(json); // TO DO: add notification
                clearInputs();
                onCreate();
            } else {
                Promise.reject(json);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setIsFetching(false);
        }

    }

    return (
        <>
            <form className={styles.form}>

                <div className={styles.formItem}>
                    <label htmlFor="firstName" className={styles.formItemLabel}
                    >
                        FIRST NAME:
                    </label>
                    <input
                        className={styles.formItemField}
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formValue.firstName}
                        placeholder="Enter your first name here"
                        autoFocus
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="lastName" className={styles.formItemLabel}
                    >
                        LAST NAME:
                    </label>
                    <input
                        className={styles.formItemField}
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={formValue.lastName}
                        placeholder="Enter your last name here"
                        onChange={handleInputChange}
                    />
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="departureAirport" className={styles.formItemLabel}
                    >
                        DEPARTURE AIRPORT:
                    </label>
                    <select
                        className={styles.formItemField}
                        name="departureAirportId"
                        id="departureAirport"
                        value={airportsNames.departureAirport}
                        onChange={handleInputChange}
                    >
                        {airportsList.map(airport => (
                            <option key={airport.id} data-id={airport.id} value={`${airport.code}, ${airport.title}`}>
                                {`${airport.code}, ${airport.title}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formItem}>
                    <label htmlFor="arrivalAirport" className={styles.formItemLabel}
                    >
                        ARRIVAL AIRPORT:
                    </label>
                    <select
                        className={styles.formItemField}
                        name="arrivalAirportId"
                        id="arrivalAirport"
                        value={airportsNames.arrivalAirport}
                        onChange={handleInputChange}
                    >
                        {airportsList.map(airport => (
                            <option key={airport.id} data-id={airport.id} value={`${airport.code}, ${airport.title}`}>
                                {`${airport.code}, ${airport.title}`}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.formInputDateContainer}>
                    <div className={`${styles.formItem} ${styles.formItemDate}`}>
                        <label htmlFor="departureDate" className={styles.formItemLabel}>
                            DATE OF DEPARTURE:
                        </label>
                        <input
                            className={`${styles.formItemField} ${styles.formItemFieldDate}`}
                            type="date"
                            name="departureDate"
                            id="departureDate"
                            value={formValue.departureDate}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className={`${styles.formItem} ${styles.formItemDate}`}>
                        <label htmlFor="returnDate" className={styles.formItemLabel}>
                            DATE OF RETURN:
                        </label>
                        <input
                            className={`${styles.formItemField} ${styles.formItemFieldDate}`}
                            type="date"
                            name="returnDate"
                            id="returnDate"
                            value={formValue.returnDate}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <button
                    onClick={(e) => handleFormSubmit(e)}
                    className={styles.createBookingBtn}
                >
                    CREATE BOOKING
                    {isFetching
                        ? <FontAwesomeIcon icon={faSpinner} className={styles.ticketAlt} spin />
                        : <FontAwesomeIcon icon={faTicketAlt} className={styles.ticketAlt} />
                    }
                </button>

            </form>

            <Link to={`/bookings-list`}>
                <button className={styles.viewBookingsBtn}>
                    VIEW BOOKINGS
                    <FontAwesomeIcon icon={faListOl} className={styles.listOl} />
                </button>
            </Link>
        </>
    )
}
