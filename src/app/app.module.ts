import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MenubarModule, MenuItem } from 'primeng/primeng';

import { AppComponent }   from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

import { HeaderComponent } from './shared/header/header.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting,
        MenubarModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        AboutComponent,
        HomeComponent
    ],
    exports: [AppComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}