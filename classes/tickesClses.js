import { RegularPassenger } from "./regularCls.js";
export class RegularTicket {
    constructor( price, ownerName) {
        this.ticketNum = Math.floor(Math.random() * 500 + 1)
        this.price = price
        this.ownerName = ownerName
    }
    
}


export class VIPTicket extends RegularTicket {
    constructor(ticketNum, price, ownerName) {
        super( price, ownerName)
        this.ticketNum = ticketNum
        this.benfit = [`Free alcohol, Free food, Hot towels`]
    }
    
}
