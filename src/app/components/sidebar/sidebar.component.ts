import {Component, OnInit} from '@angular/core';

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path:'/teacher',title:'Teachers',icon:'person_2',class:''},
    {path:'/subject',title:'Subjects',icon:'square_foot',class:''},
    {path:'/stream',title:'Streams',icon:'school',class:''},
    {path:'/lesson',title:'Lessons',icon:'play_lesson',class:''},
    {path:'/timeslot',title:'TimeSlots',icon:'schedule',class:''},
    {path:'/timetable',title:'Timetable',icon:'ballot',class:''},

];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[];

    constructor() {
    }

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
}
