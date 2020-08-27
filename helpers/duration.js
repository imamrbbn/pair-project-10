function duration(departureDate, returnDate) {
    let result = (returnDate.getDate() - departureDate.getDate())

    return `${result} Days` 
}

module.exports = duration