import {Component, OnInit} from '@angular/core';
import {LessonService} from "../services/api/lesson/lesson.service";
import {Lesson} from "../services/api/lesson/model/lesson";

@Component({
    selector: 'app-lesson',
    templateUrl: './lesson.component.html',
    styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {
    lessons: Lesson[];
    lessonHeader: string[] = [
        "teacherName",
        "subjectName",
        "streamName"
    ]

    constructor(
        private lessonService: LessonService
    ) {
    }

    ngOnInit(): void {
        this.lessonService.getAllLessons().subscribe(
            value => this.lessons = value.data
        )
    }

}
