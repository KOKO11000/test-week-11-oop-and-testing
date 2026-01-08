export class RegularTicket {
    constructor(ticketNum, price, ownerName) {
        this.ticketNum = Math.floor(Math.random() * ticketNum +1)
        this.price = price
        this.ownerName = ownerName
    }
}


export class VIPTicket extends RegularTicket {
    constructor(ticketNum, price, ownerName) {
        super(ticketNum, price, ownerName)
        this.ticketNum = ticketNum
        this.benfit = [`Free alcohol, Free food, Hot towels`]
    }
}
