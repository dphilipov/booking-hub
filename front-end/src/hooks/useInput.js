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

    const handleChange = (e) => {
        if (e.target.name === 'departureAirportId' || e.target.name === 'arrivalAirportId') {
            const selectedIndex = e.target.options.selectedIndex;
            const inputId = Number(e.target.options[selectedIndex].getAttribute('data-key'));
    
            setInput(prevState => ({
                ...prevState,
                [e.target.name]: Number(inputId)
            }))
        } else {
            setInput(prevState => ({
                ...prevState,
                [e.target.name]: e.target.value
            }))
        }
    }

    return [input, handleChange];
}

export default useInput
