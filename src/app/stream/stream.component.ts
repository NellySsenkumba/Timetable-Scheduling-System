import {Component, OnInit} from '@angular/core';
import {StreamService} from "../services/api/stream/stream.service";
import {Stream} from "../services/api/stream/model/Stream";

@Component({
    selector: 'app-stream',
    templateUrl: './stream.component.html',
    styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
    streams: Stream[];
    streamHeaders: string[] = [
        "name",
        "class_teacher_id"
    ];

    constructor(
        private streamService: StreamService
    ) {
    }

    ngOnInit(): void {
        this.streamService.getAllStreams().subscribe(
            value => this.streams = value.data
        )
    }

}
