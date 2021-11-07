function validate(input) {
    const regex = /^([ \u00c0-\u01ff\u0400-\u04ffa-zA-Z'-])+$/;

    let errors = {};

    if (!input.firstName.trim()) {
        errors.firstName = "First Name can't be empty!";
    } else if (!regex.test(input.firstName.trim())) {
        errors.firstName = "Invalid format!";
    }

    if (!input.lastName.trim()) {
        errors.lastName = "Last Name can't be empty!";
    } else if (!regex.test(input.lastName.trim())) {
        errors.lastName = "Invalid format!";
    }

    if (input.departureAirportId === input.arrivalAirportId) {
        errors.airportIds = "Departure & arrival airports can't be the same!";
    }

    if (!input.departureDate) {
        errors.departureDate = "Please choose a departure date!";
    }

    if (!input.returnDate) {
        errors.returnDate = "Please choose a return date!";
    }

    return Object.keys(errors).length === 0 ? null : errors;
}

export default validate;