import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'selector',
    template: require('./home.component.html')
})
export class HomeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}