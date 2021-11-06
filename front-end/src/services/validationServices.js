function validate(input) {
    let errors = {};

    if (!input.firstName.trim()) {
        errors.firstName = "First Name can't be empty!";
    }

    if (!input.lastName.trim()) {
        errors.lastName = "Last Name can't be empty!";
    }

    if (input.departureAirportId === input.arrivalAirportId) {
        errors.airportIds = "Departure & arrival airports can't be the same!";
    }

    if (!input.departureDate) {
        errors.departureDate = "You must choose a departure date!";
    }

    if (!input.returnDate) {
        errors.returnDate = "You must choose a return date!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
}

export default validate;