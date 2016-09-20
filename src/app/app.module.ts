import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InputTextModule } from 'primeng/primeng';

import { AppComponent }   from './app.component';
import { appRouting, appRoutingProviders } from './app.routing';

//import { HeaderComponent } from './shared/header/header.component';
// import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
// import { LoginComponent } from './login/login.component';
// import { ProtocolsComponent } from './components/protocols/protocols.component';


@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        HttpModule,
        appRouting
    ],
    declarations: [
        AppComponent,
       // HeaderComponent
        // HomeComponent,
        AboutComponent
        // LoginComponent,
        // ProtocolsComponent
    ],
    exports: [AppComponent],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}