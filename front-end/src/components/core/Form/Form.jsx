import styles from './Form.module.css';
import useInput from '../../../hooks/useInput';
import useIsFetching from '../../../hooks/useIsFetching';
import fetchServices from '../../../services/fetchServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export default function Form({ airportsList }) {
    const [formValue, airportsNames, handleChange, changeAirportsNames, clearInputs] = useInput();
    const [isFetching, toggleIsFetching] = useIsFetching();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        toggleIsFetching();

        // TO DO: add validation

        try {
            const response = await fetchServices.createBooking(formValue);
            const json = await response.json();

            if (response.ok) {
                console.log(json); // TO DO: add notification
                clearInputs();
            } else {
                Promise.reject(json);
            }

        } catch (err) {
            console.log(err);
        } finally {
            toggleIsFetching();
        }

    }

    return (
        <form className={styles.form}>

            <div className={styles.formItem}>
                <label htmlFor="firstName" className={styles.formItemLabel}
                >FIRST NAME:</label>
                <input
                    className={styles.formItemField}
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formValue.firstName}
                    placeholder="Enter your first name here"
                    autoFocus
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formItem}>
                <label htmlFor="lastName" className={styles.formItemLabel}
                >LAST NAME:</label>
                <input
                    className={styles.formItemField}
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formValue.lastName}
                    placeholder="Enter your last name here"
                    onChange={handleChange}
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
                    onChange={(e) => {
                        handleChange(e);
                        changeAirportsNames(e);
                    }}
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
                    onChange={(e) => {
                        handleChange(e);
                        changeAirportsNames(e);
                    }}
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
                    <label htmlFor="departureDate" className={styles.formItemLabel}>DATE OF DEPARTURE:</label>
                    <input
                        className={`${styles.formItemField} ${styles.formItemFieldDate}`}
                        type="date"
                        name="departureDate"
                        id="departureDate"
                        value={formValue.departureDate}
                        onChange={handleChange}
                    />
                </div>

                <div className={`${styles.formItem} ${styles.formItemDate}`}>
                    <label htmlFor="returnDate" className={styles.formItemLabel}>DATE OF RETURN:</label>
                    <input
                        className={`${styles.formItemField} ${styles.formItemFieldDate}`}
                        type="date"
                        name="returnDate"
                        id="returnDate"
                        value={formValue.returnDate}
                        onChange={handleChange}
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
    )
}
