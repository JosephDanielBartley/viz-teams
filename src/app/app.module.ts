import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { FirebaseTestComponent } from './components/firebase-test/firebase-test.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TeamListComponent } from './components/team-list/team-list.component';

import { DragService } from './services/drag.service';
import { FirebaseTestService } from './services/firebase-test.service';
import { PersonService } from './services/person.service';
import { TeamService } from './services/team.service';

import { DraggableDirective } from './directives/draggable.directive';
import { DropTargetDirective } from './directives/drop-target.directive';
import { CompareValidatorDirective } from './directives/compare-validator.directive';

import { PersonSortAscPipe } from './pipes/person-sort-asc.pipe';
import { SidebarSortAscPipe } from './pipes/sidebar-sort-asc.pipe';
import { TeamSortAscPipe } from './pipes/team-sort-asc.pipe';
import { TeamsComponent } from './components/teams/teams.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { PersonFilterPipe } from './pipes/person-filter.pipe';
import { TeamFilterPipe } from './pipes/team-filter.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DraggableDirective,
    DropTargetDirective,
    EditPersonComponent,
    HeaderComponent,
    PersonSortAscPipe,
    SidebarComponent,
    SidebarSortAscPipe,
    TeamListComponent,
    TeamSortAscPipe,
    FirebaseTestComponent,
    TeamsComponent,
    LoginComponent,
    RegisterComponent,
    CompareValidatorDirective,
    PersonFilterPipe,
    TeamFilterPipe,
    TruncatePipe
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    DragService,
    FirebaseTestService,
    PersonService,
    TeamService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
