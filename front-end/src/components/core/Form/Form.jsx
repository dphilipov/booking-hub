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

            <label htmlFor="firstName">FIRST NAME:</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                value={inputValue.firstName}
                placeholder="Enter your first name here"
                onChange={handleChange}
            />

            <label htmlFor="lastName">LAST NAME:</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                value={inputValue.lastName}
                placeholder="Enter your last name here"
                onChange={handleChange}
            />

            <label htmlFor="departureAirportId">DEPARTURE AIRPORT:</label>
            <select
                name="departureAirportId"
                id="departureAirportId"
                value={inputValue.departureAirportId}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label htmlFor="arrivalAirportId">ARRIVAL AIRPORT:</label>
            <select
                name="arrivalAirportId"
                id="arrivalAirportId"
                value={inputValue.arrivalAirportId}
                onChange={handleChange}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>

            <label htmlFor="departureDate">DATE OF DEPARTURE:</label>
            <input
                type="date"
                name="departureDate"
                id="departureDate"
                value={inputValue.departureDate}
                onChange={handleChange}
            />

            <label htmlFor="returnDate">DATE OF RETURN:</label>
            <input
                type="date"
                name="returnDate"
                id="returnDate"
                value={inputValue.returnDate}
                onChange={handleChange}
            />

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
