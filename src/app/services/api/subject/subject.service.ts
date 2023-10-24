import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as http from "http";
import {ApiResponse, BASEURL} from "../api";
import {Subject} from "./model/subject";

@Injectable({
    providedIn: 'root'
})
export class SubjectService {

    constructor(
        private http: HttpClient) {
    }

    getAllSubjects() {
         const header = {
            Authorisation: "Bearer <token>",
            'Content-Type': 'application/json'
        }
        return this.http.post<ApiResponse<Array<Subject>>>(BASEURL,{"action":"all-subjects"},
            {headers:header})
    }
}
