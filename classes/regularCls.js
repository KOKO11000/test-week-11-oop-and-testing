export class RegularPassenger {
    static count = 1
    constructor(name, amountOfMony, workplace, knowsAnAirportEmployee) {
        this.name = name,
            this.idNumber = RegularPassenger.count++,
            this.amountOfMony = amountOfMony,
            this.workplace = workplace,
            this.knowsAnAirportEmployee = knowsAnAirportEmployee
    }
    dicount() {
        if (knowsAnAirportEmployee) {
            if (regularTicket) {
                return price * 0.80
            }
            if (vipTicket) {
                return price * 0.85
            }
        } else {
            return price
        }
    }
}
