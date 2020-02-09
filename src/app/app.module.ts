import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { searchPersonComponent } from "./SearchPerson/searchPerson.component";
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { PersondataComponent } from './persondata/persondata.component';
import { person } from "./utils/person";
import { WelcomeComponent } from './welcome/welcome.component';
import { NewpersonComponent } from './newperson/newperson.component';
import { SecondclearanceComponent } from './secondclearance/secondclearance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule , MatListModule, MatProgressSpinnerModule, MatButtonModule, MatInputModule,MatNativeDateModule , MatCardModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule } from '@angular/material';
import { ShowServicesComponent } from './show-services/show-services.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'showServices', component: ShowServicesComponent},
  {path: 'checkme', component: searchPersonComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'newperson', component: NewpersonComponent},
  {path: 'secondClearance', component: SecondclearanceComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    searchPersonComponent,
    LoginComponent,
    PersondataComponent,
    WelcomeComponent,
    NewpersonComponent,
    SecondclearanceComponent,
    ShowServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatProgressSpinnerModule, MatInputModule, MatButtonModule, MatCardModule, MatNativeDateModule, MatFormFieldModule, MatCheckboxModule, MatDatepickerModule, MatRadioModule, MatSelectModule,
    MatListModule, MatIconModule
  ],
  providers: [person, MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
