// React, Hooks
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm';

// Context
import NotificationContext from '../../../context/notificationContext'

// Components
import Notification from '../../shared/Notification/Notification';

// Services & Helpers
import validate from '../../../services/validationServices';
import getCurrentDate from '../../../helpers/parseDate';

// CSS
import styles from './Form.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { faListOl } from '@fortawesome/free-solid-svg-icons'


export default function Form({ airportsList }) {
    const currentDate = getCurrentDate();
    
    const NotificationCtxt = useContext(NotificationContext)

    const {
        formValue,
        airportsNames,
        handleInputChange,
        handleFormSubmit,
        isSubmitting,
        formErrors,
        isSuccess
    } = useForm(validate);

    useEffect(() => {
        if (isSuccess) {
            NotificationCtxt.displayMsg('good', 'Booking Created!');
        }
    }, [NotificationCtxt, isSuccess])

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
                {formErrors?.firstName && <p className={styles.error}>{formErrors.firstName}</p>}

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
                {formErrors?.lastName && <p className={styles.error}>{formErrors.lastName}</p>}

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
                {formErrors?.airportIds && <p className={styles.error}>{formErrors.airportIds}</p>}

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
                            min={currentDate}
                            value={formValue.departureDate}
                            onChange={handleInputChange}
                        />
                        {formErrors?.departureDate && <p className={styles.error}>{formErrors.departureDate}</p>}
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
                            min={currentDate}
                            value={formValue.returnDate}
                            onChange={handleInputChange}
                        />
                        {formErrors?.returnDate && <p className={styles.error}>{formErrors.returnDate}</p>}
                    </div>
                </div>

                <button
                    onClick={(e) => handleFormSubmit(e)}
                    className={styles.createBookingBtn}
                >
                    CREATE BOOKING
                    {isSubmitting
                        ? <FontAwesomeIcon icon={faSpinner} className={styles.ticketAlt} spin />
                        : <FontAwesomeIcon icon={faTicketAlt} className={styles.ticketAlt} />
                    }
                </button>

            </form>

            <Link to={`/bookings-list`} className={styles.viewBookingsBtnLink}>
                <button className={styles.viewBookingsBtn}>
                    VIEW BOOKINGS
                    <FontAwesomeIcon icon={faListOl} className={styles.listOl} />
                </button>
            </Link>

            {NotificationCtxt.isDisplayed && <Notification type={NotificationCtxt.type} msg={NotificationCtxt.msg}></Notification>}
        </>
    )
}
