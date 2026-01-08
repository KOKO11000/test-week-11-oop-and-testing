import { Flight } from "./flightCls.js";
export class StudentPassenger {
    static count = 1
    constructor(name, amountOfMony, schoolOrUniversityName) {
        this.name = name
        this.idNumber = StudentPassenger.count++
        this.amountOfMony = amountOfMony
        this.schoolOrUniversityName = schoolOrUniversityName

    }
    buyATicket() {
        const ticketPrice = new Flight().regularTicketPrice
        const VIPPrice = new Flight().VIPTicketPrice
        if (ticketPrice) return ticketPrice * 0.90
        else return VIPPrice
    }
    ckeckEnoughMony() {
        if (this.amountOfMony < ticketPrice) return false
        if (this.amountOfMony < VIPPrice) return false
        else {
            console.log("not enough mony");
            return true
        }
    }
}

