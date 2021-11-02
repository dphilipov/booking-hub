import { useState } from 'react';

function useInput() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        departureAirportId: 1,
        arrivalAirportId: 1,
        departureDate: '',
        returnDate: '',
    });

    const [airportsNames, setAirportsNames] = useState({
        departureAirport: 'SOF, Sofia Airport',
        arrivalAirport: 'SOF, Sofia Airport'
    });


    const handleInputChange = (e) => {
        if (e.target.nodeName === 'SELECT') {
            const selectedIndex = e.target.options.selectedIndex;
            const inputId = Number(e.target.options[selectedIndex].getAttribute('data-id'));

            setInput(prevState => ({
                ...prevState,
                [e.target.name]: inputId
            }))

            setAirportsNames(prevState => ({
                ...prevState,
                [e.target.id]: e.target.value
            }));
        } else {
            setInput(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }

    const clearInputs = () => {
        setInput({
            firstName: '',
            lastName: '',
            departureAirportId: 1,
            arrivalAirportId: 1,
            departureDate: '',
            returnDate: '',
        });

        setAirportsNames({
            departureAirport: 'SOF, Sofia Airport',
            arrivalAirport: 'SOF, Sofia Airport'
        });
    }

    return [input, airportsNames, handleInputChange, clearInputs];
}

export default useInput
