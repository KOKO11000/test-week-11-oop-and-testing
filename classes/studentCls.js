export class StudentPassenger {
    static count = 1
    constructor(name, amountOfMony, schoolOrUniversityName) {
        this.name = name
        this.idNumber = StudentPassenger.count++
        this.amountOfMony = amountOfMony
        this.schoolOrUniversityName = schoolOrUniversityName

    }
    discount(){
        if (RegularPassenger) {
            return price * 0.90
        }
        else{return false}
    }
    enughMony(){
        if (this.amountOfMony < Ticket.price) {
            return false 
        }
    }
}

