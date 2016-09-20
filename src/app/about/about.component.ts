import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'hpt-about',
    template: require('./about.component.html')
})
export class AboutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}