import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';
import {UserProfileComponent} from '../../user-profile/user-profile.component';
import {TeacherComponent} from "../../teacher/teacher.component";
import {SubjectComponent} from "../../subject/subject.component";
import {StreamComponent} from "../../stream/stream.component";
import {TimeslotComponent} from "../../timeslot/timeslot.component";
import {LessonComponent} from "../../lesson/lesson.component";

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    {path: 'dashboard', component: DashboardComponent},
    {path: 'user-profile', component: UserProfileComponent},
    {path: 'teacher', component: TeacherComponent},
    {path: 'subject', component: SubjectComponent},
    {path: 'stream', component: StreamComponent},
    {path: 'timeslot', component: TimeslotComponent},
    {path: 'lesson', component: LessonComponent},

];
