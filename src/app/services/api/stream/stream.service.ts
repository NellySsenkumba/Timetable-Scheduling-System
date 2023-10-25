import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiResponse, BASEURL} from "../api";
import {Stream} from "./model/Stream";

@Injectable({
    providedIn: 'root'
})
export class StreamService {

    constructor(
        private http: HttpClient) {
    }

    getAllStreams() {
        return this.http.post<ApiResponse<Array<Stream>>>(BASEURL,
            {"action": "all-streams"},
        )
    }
}
