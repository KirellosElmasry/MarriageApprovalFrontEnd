import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { checkmeComponent } from "./checkme/CheckMe.component";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PersondataComponent } from './persondata/persondata.component';
import { person } from "./classes/person";
import { WelcomeComponent } from './welcome/welcome.component';
import { NewpersonComponent } from './newperson/newperson.component';

const appRoutes: Routes = [
  {path: 'checkme', component: checkmeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'newperson', component: NewpersonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    checkmeComponent,
    LoginComponent,
    PersondataComponent,
    WelcomeComponent,
    NewpersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [person],
  bootstrap: [AppComponent]
})
export class AppModule { }
