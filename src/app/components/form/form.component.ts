import {Component, Input, OnInit} from '@angular/core';

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
    firstName: string
    lastName: string
    middleName: string
    email: string
    phoneNumber: number
    dateOfBirth: "04-12-1995"


    constructor() {
    }

    ngOnInit(): void {
    }

}
