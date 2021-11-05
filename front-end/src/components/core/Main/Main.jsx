// React, Hooks
import useFetch from '../../../hooks/useFetch';
import { Switch, Route, Link } from 'react-router-dom';

// Components
import Form from '../Form/Form';
import BookingsList from '../BookingsList/BookingsList';

// CSS
import styles from './Main.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'

function Main() {
    const [airportsList] = useFetch('airports');

    return (
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <Link to="/">
                    <h1 className={styles.logo}>
                        BookingHub <FontAwesomeIcon icon={faPlaneDeparture} />
                    </h1>
                </Link>

                <Switch>
                    <Route exact path="/">
                        <Form airportsList={airportsList}></Form>
                    </Route>

                    <Route path="/bookings-list">
                        <BookingsList airportsList={airportsList}></BookingsList>
                    </Route>

                </Switch>


            </div>
        </div>
    )
}

export default Main
