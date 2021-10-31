import styles from './Form.module.css';
import useInput from '../../../hooks/useInput';
import useIsFetching from '../../../hooks/useIsFetching';
import fetchServices from '../../../services/fetchServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


export default function Form() {
    const [inputValue, handleChange] = useInput();
    const [isFetching, toggleIsFetching] = useIsFetching();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        toggleIsFetching();

        // TO DO: add validation

        try {
            const response = await fetchServices.createBooking(inputValue);
            const data = await response.json();

            console.log(data); // TO DO: add notification
        } catch (err) {
            console.log(err);
        }

        toggleIsFetching();
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
                    value={inputValue.firstName}
                    placeholder="Enter your first name here"
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
                    value={inputValue.lastName}
                    placeholder="Enter your last name here"
                    onChange={handleChange}
                />
            </div>

            <div className={styles.formItem}>
                <label htmlFor="departureAirportId" className={styles.formItemLabel}
                >DEPARTURE AIRPORT:</label>
                <select
                    className={styles.formItemField}
                    name="departureAirportId"
                    id="departureAirportId"
                    value={inputValue.departureAirportId}
                    onChange={handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className={styles.formItem}>
                <label htmlFor="arrivalAirportId" className={styles.formItemLabel}
                >ARRIVAL AIRPORT:</label>
                <select
                    className={styles.formItemField}
                    name="arrivalAirportId"
                    id="arrivalAirportId"
                    value={inputValue.arrivalAirportId}
                    onChange={handleChange}
                >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
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
                        value={inputValue.departureDate}
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
                        value={inputValue.returnDate}
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
