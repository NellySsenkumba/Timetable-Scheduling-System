import {Component, Input, OnInit} from '@angular/core';
import {AddTeacherForm} from "../../services/api/teacher/models/AddTeacherForm";
import {TeacherService} from "../../services/api/teacher/teacher.service";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    @Input() formTitle: string = "Edit Profile"
    @Input() field = [       //  [placeholder, type]
        ["name", "text"],
        ["Username", "text"],
        ["Email address", "email"],
        ["Fist Name", "text"],
        ["Last Name", "text"],
        ["Adress", "text"],
        ["City", "text"],
        ["Country", "text"],
        ["Postal Code", "text"],
        ["City", "text"],
        ["City", "text"],
    ];
    firstName: string;
    lastName: string;
    middleName: string;
    email: string;
    phoneNumber: number;
    dateOfBirth: string;//"04-12-1995"


    constructor(
        private teacherService: TeacherService
    ) {
    }

    ngOnInit(): void {
    }

    onSubmit() {
        console.log(this.dateOfBirth)
        ;
        let teacher: AddTeacherForm = {
            firstName: this.firstName,
            lastName: this.lastName,
            middleName: this.middleName,
            email: this.email,
            dateOfBirth: this.dateOfBirth,
            // dateOfBirth: "04-12-1995",//getting the dob //mm-dd-yyyy
            phoneNumber: this.phoneNumber
        };
        this.teacherService.addTeacher(teacher)
            .subscribe(value => value
                , error => console.log("error")
                , ()=>location.reload());

    }

}
