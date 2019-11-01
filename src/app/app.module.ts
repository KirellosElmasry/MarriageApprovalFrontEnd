import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { checkmeComponent } from "./checkme/CheckMe.component";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PersondataComponent } from './persondata/persondata.component';
import { person } from "./classes/person";
import { WelcomeComponent } from './welcome/welcome.component';
import { NewpersonComponent } from './newperson/newperson.component';
import { SecondclearanceComponent } from './secondclearance/secondclearance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule, MatButtonModule, MatInputModule,MatNativeDateModule , MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule } from '@angular/material';

const appRoutes: Routes = [
  {path: 'checkme', component: checkmeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'newperson', component: NewpersonComponent},
  {path: 'secondClearance', component: SecondclearanceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    checkmeComponent,
    LoginComponent,
    PersondataComponent,
    WelcomeComponent,
    NewpersonComponent,
    SecondclearanceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule, MatInputModule, MatButtonModule, MatCardModule, MatNativeDateModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule
  ],
  providers: [person, MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
