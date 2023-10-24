import {Component, OnInit} from '@angular/core';
import {TeacherService} from "../services/api/teacher/teacher.service";
import {Teacher} from "../services/api/teacher/models/Teacher";

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.component.html',
    styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
    teacherHeaders: string[] = [
        "id",
        "firstName",
        "lastName",
        "middleName",
        "email",
        "phoneNumber",
        "dateOfBirth",
        "registeredOn",
        "gender"
    ];
    teachers: Teacher[] = [];

    constructor(
        private teacherService: TeacherService
    ) {
    }

    ngOnInit(): void {
        this.teacherService.getAllTeachers().subscribe(
            value => {
                value.data.forEach(value1 => {
                    this.teachers.push(value1)
                });
            }
        )
    }

}
