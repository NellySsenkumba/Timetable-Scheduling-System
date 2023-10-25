import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResponse, BASEURL} from "../api";
import {Timeslot} from "./model/timeslot";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TimeslotService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAllTimeSlots(): Observable<ApiResponse<Array<Timeslot>>> {
        const header = {
            Authorisation: "Bearer <token>",
            'Content-Type': 'application/json'
        }
        console.log(this.http.post(BASEURL,
            {
                "action": "all-timeslot"
            }
        ))
        return this.http.post<ApiResponse<Array<Timeslot>>>(BASEURL,
            {
                "action": "all-timeslot"
            },
            {headers: header}
        )
    }
}
