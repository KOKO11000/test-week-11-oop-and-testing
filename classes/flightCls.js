class Flight {
    constructor(flightName, airline, flightNumber, maxNumOfPassengers, regularTicketPrice, VIPTicketPrice) {
        this.flightName = flightName
        this.airline = airline
        this.flightNumber = flightNumber
        this.maxNumOfPassengers = maxNumOfPassengers
        this.regularTicketPrice = regularTicketPrice
        this.VIPTicketPrice = VIPTicketPrice
        this.ticketList = maxNumOfPassengers
    }
}