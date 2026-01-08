export class Flight {
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
const a  = new Flight("boing","c3",2359,320,399.90,999.90)
console.log(a);
