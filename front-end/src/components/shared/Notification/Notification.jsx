// CSS
import styles from './Notification.module.css';

// FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function Notification({type, msg}) {
    return (
        <div className={`${styles.notification} ${type === 'good' ? styles.good : styles.bad}`}>
            {type === 'good' ?
                <FontAwesomeIcon icon={faCheckCircle} className={styles.notificationIcon} />
                :
                <FontAwesomeIcon icon={faTimesCircle} className={styles.notificationIcon}/>
            }
            <span className={styles.notificationMessage}>{msg}</span>
        </div>
    )
}

export default Notification
