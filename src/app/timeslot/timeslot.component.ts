import {Component, OnInit} from '@angular/core';
import {TimeslotService} from "../services/api/timeslot/timeslot.service";
import {Timeslot} from "../services/api/timeslot/model/timeslot";

@Component({
    selector: 'app-timeslot',
    templateUrl: './timeslot.component.html',
    styleUrls: ['./timeslot.component.css']
})
export class TimeslotComponent implements OnInit {
    timeslots: Timeslot[] = [];
    timeslotHeader: string[] = [
        "day",
        "startTime",
        "endTime"
    ]

    constructor(
        private timeslotService: TimeslotService
    ) {
    }

    ngOnInit(): void {
        this.timeslotService.getAllTimeSlots()
            .subscribe(
                value => this.timeslots = value.data
            )
    }

}
