import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'selector',
    template: require('./header.component.html')
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}