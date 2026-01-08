import { Flight } from "./classes/flightCls.js";
import { RegularPassenger } from "./classes/regularCls.js";
import { StudentPassenger } from "./classes/studentCls.js";
import { RegularTicket,VIPTicket } from "./classes/tickesClses.js";
import { getRegularTicket,getVIPTicket } from "./services/function.js";

const flight1 = new Flight("Israel","1",707,316,getRegularTicket(316),getVIPTicket(316))
const flight2 = new Flight("Yemen","a1",808,200,getRegularTicket(200),getVIPTicket(200))
const flight3 = new Flight("USA","b3",565,250,getRegularTicket(250),getVIPTicket(250))

const studentPass = new StudentPassenger("momo",520,"Kodkod")
const regularPass = new RegularPassenger("Moshe",22000,"Analiza",true)
const regularTickets = new RegularTicket(300.99,"regularPass")
const vipTickets = new VIPTicket(1,799.90,"VIPPass")
class Airport {
    constructor(airplans,regularPassenger,studentPassenger,regTicket,vipTicket) {
        this.airplans = airplans
        this.regularPassenger = regularPassenger
        this.studentPassenger = studentPassenger
        this.regTicket = regTicket
        this.vipTicket = vipTicket
        this.flights = []
    }
    addFlight(flight){
        return this.flights.push(flight)
    }
}
const newFlight = new Airport().addFlight(flight1)
console.log(newFlight);


console.log(new Airport(flight1,regularPass,studentPass,regularTickets,vipTickets))