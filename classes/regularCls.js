import { Flight } from "./flightCls.js";

export class RegularPassenger {
    static count = 1
    constructor(name, amountOfMony, workplace, knowsAnAirportEmployee) {
        this.name = name,
            this.idNumber = RegularPassenger.count++,
            this.amountOfMony = amountOfMony,
            this.workplace = workplace,
            this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
    buyATicket() {
        const ticketPrice = new Flight().regularTicketPrice
        const VIPPrice = new Flight().VIPTicketPrice
        if (this.knowsAnAirportEmployee == true) {
            return ticketPrice * 0.80 && VIPPrice * 0.85
        }
        else return ticketPrice && VIPPrice
    }
}

export function ckeckEnoughMony(amountOfMony,ticketPrice) {
    if (amountOfMony < ticketPrice) return false
    else {
        console.log("not enough money");
        return true
    }
}