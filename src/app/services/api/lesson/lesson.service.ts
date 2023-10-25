import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResponse, BASEURL} from "../api";
import {Lesson} from "./model/lesson";

@Injectable({
    providedIn: 'root'
})
export class LessonService {

    constructor(
        private http: HttpClient
    ) {
    }

    getAllLessons() {
        const header = {
            Authorization: "<token>"
        }
        return this.http.post<ApiResponse<Array<Lesson>>>(BASEURL,
            {"action": "all-lessons"})
    }
}
