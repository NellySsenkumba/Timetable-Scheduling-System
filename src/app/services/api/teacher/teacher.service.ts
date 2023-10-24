import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ApiResponse, BASEURL} from "../api";
import {Teacher} from "./models/Teacher";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    constructor(
        private http: HttpClient
    ) {
    }


    getAllTeachers() {
        const header = {
            Authorisation: "Bearer <token>",
            'Content-Type': 'application/json'
        }

        return this.http.post<ApiResponse<Array<Teacher>>>(BASEURL,
            {
                "action": "all-teacher"
            },
            {headers: header})
    }
}
