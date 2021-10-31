import { useEffect, useState } from 'react';
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';
import styles from './Main.module.css';
import fetchServices from '../../../services/fetchServices';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'


function Main() {
    const [airportsList, setAirportsList] = useState([]);

    useEffect(() => {
        async function getAirports() {
            const response = await fetchServices.getAirports();
            const data = await response.json();
    
            setAirportsList(data);
        }

        getAirports();
    }, [])

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <h1 className={styles.logo}>BookingHub <FontAwesomeIcon icon={faPlaneDeparture} /></h1>

                <Form airportsList={airportsList}></Form>
                <BookingsList></BookingsList>
            </div>
        </div>
    )
}

export default Main
