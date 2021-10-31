import React from 'react'
import styles from './Form.module.css';

export default function Form() {
    return (
        <form className={styles.form}>
            <label htmlFor="firstName">FIRST NAME:</label>
            <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name here"
            />

            <label htmlFor="lastName">LAST NAME:</label>
            <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name here"
            />

            <label htmlFor="departureAirportId">DEPARTURE AIRPORT:</label>
            <select
                name="departureAirportId"
                id="departureAirportId"
            >
                <option value="test">Test</option>
            </select>

            <label htmlFor="arrivalAirportId">ARRIVAL AIRPORT:</label>
            <select
                name="arrivalAirportId"
                id="arrivalAirportId"
            >
                <option value="test">Test</option>
            </select>

            <label htmlFor="departureDate">DATE OF DEPARTURE:</label>
            <input
                type="date"
                name="departureDate"
                id="departureDate"
            />

            <label htmlFor="returnDate">DATE OF RETURN:</label>
            <input
                type="date"
                name="returnDate"
                id="returnDate"
            />


        </form>
    )
}
