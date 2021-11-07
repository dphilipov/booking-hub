// React, Hooks
import { useState } from 'react';

// Services & Helpers
import fetchServices from '../services/fetchServices';
import getCurrentDate from '../helpers/parseDate';

function useForm(validate) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formErrors, setFormErrors] = useState(null);
    const [formValue, setFormValue] = useState({
        firstName: '',
        lastName: '',
        departureAirportId: 1,
        arrivalAirportId: 1,
        departureDate: getCurrentDate(),
        returnDate: '',
    });
    const [airportsNames, setAirportsNames] = useState({
        departureAirport: 'SOF, Sofia Airport',
        arrivalAirport: 'SOF, Sofia Airport'
    });


    const handleInputChange = (e) => {
        const { name, id, value } = e.target;

        if (e.target.nodeName === 'SELECT') {
            const selectedIndex = e.target.options.selectedIndex;
            const inputId = Number(e.target.options[selectedIndex].getAttribute('data-id'));

            setFormValue(prevState => ({
                ...prevState,
                [name]: inputId
            }))

            setAirportsNames(prevState => ({
                ...prevState,
                [id]: value
            }));
        } else {
            setFormValue(prevState => ({
                ...prevState,
                [name]: value
            }))
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (validate(formValue)) {
            setFormErrors(validate(formValue));
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetchServices.createBooking(formValue);
            const json = await response.json();

            if (response.ok) {
                setIsSuccess(true);
            } else {
                Promise.reject(json);
            }

        } catch (err) {
            console.log(err);
        } finally {
            resetForm();
        }
    }

    const resetForm = () => {
        setFormErrors(null);
        setIsSubmitting(false);
        setIsSuccess(false);

        setFormValue({
            firstName: '',
            lastName: '',
            departureAirportId: 1,
            arrivalAirportId: 1,
            departureDate: getCurrentDate(),
            returnDate: '',
        });

        setAirportsNames({
            departureAirport: 'SOF, Sofia Airport',
            arrivalAirport: 'SOF, Sofia Airport'
        });
    }

    return {
        formValue,
        airportsNames,
        handleInputChange,
        handleFormSubmit,
        isSubmitting,
        formErrors,
        isSuccess
    };
}

export default useForm
