import {Component, OnInit} from '@angular/core';
import {Subject} from "../services/api/subject/model/subject";
import {SubjectService} from "../services/api/subject/subject.service";

@Component({
    selector: 'app-subject',
    templateUrl: './subject.component.html',
    styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
    subjectHeaders: string[]=["name","description"];
    subjects: Subject[];

    constructor(
        private subjectService: SubjectService
    ) {
    }

    ngOnInit(): void {
        this.subjectService.getAllSubjects()
            .subscribe(
                subjects => this.subjects=subjects.data
            )
    }

}
