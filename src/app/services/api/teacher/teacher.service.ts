import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {ApiResponse, BASEURL} from "../api";
import {Teacher} from "./models/Teacher";
import {AddTeacherForm} from "./models/AddTeacherForm";

@Injectable({
    providedIn: 'root'
})
export class TeacherService {
    header = {
        Authorisation: "Bearer <token>",
        'Content-Type': 'application/json'
    }

    constructor(
        private http: HttpClient
    ) {
    }


    getAllTeachers() {

        return this.http.post<ApiResponse<Array<Teacher>>>(BASEURL,
            {
                "action": "all-teacher"
            },
            {headers: this.header})
    }

    addTeacher(teacher: any) {
        return this.http.post<Teacher>(BASEURL,
            {
                "action": "add-teacher",
                "data": teacher
            },
            {headers: this.header})
    }
}
