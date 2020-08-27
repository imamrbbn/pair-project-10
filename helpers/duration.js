function duration(departureDate, returnDate) {
    let result = (returnDate.getDay() - departureDate.getDay())
    return `${result} Days` 
}

// duration(new Date(), new Date())