import { useState } from 'react';

function useInput() {
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        departureAirportId: 1,
        arrivalAirportId: 1,
        departureDate: '',
        returnDate: ''
    });

    const handleChange = (e) => {
        setInput(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    return [input, handleChange];
}

export default useInput
