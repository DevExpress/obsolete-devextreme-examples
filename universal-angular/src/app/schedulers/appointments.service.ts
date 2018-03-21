import { Injectable } from "@angular/core";

export class Appointment {
    text: string;
    startDate: Date;
    endDate: Date;
    allDay?: boolean;
}

let appointments: Appointment[] = [
    {
        text: "Website Re-Design Plan",
        startDate: new Date(2017, 4, 22, 9, 30),
        endDate: new Date(2017, 4, 22, 11, 30)
    }, {
        text: "Install New Router in Dev Room",
        startDate: new Date(2017, 4, 22, 14, 30),
        endDate: new Date(2017, 4, 22, 15, 30)
    }
];

@Injectable()
export class Service {
    getAppointments(): Appointment[] {
        return appointments;
    }
}
