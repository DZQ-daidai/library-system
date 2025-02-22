import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { MgrComponent } from './components/mgr/mgr.component';
import { BookMgrIndexComponent } from './components/book-mgr/book-mgr-index/book-mgr-index.component';
import { PeopleMgrIndexComponent } from './components/people-mgr/people-mgr-index/people-mgr-index.component';
import { BorrowReturnMgrIndexComponent } from './components/borrow-return-mgr/borrow-return-mgr-index/borrow-return-mgr-index.component';
import { BookboxComponent } from './components/book-mgr/bookbox/bookbox.component';
import { PeopleboxComponent } from './components/people-mgr/peoplebox/peoplebox.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    MgrComponent,
    BookMgrIndexComponent,
    PeopleMgrIndexComponent,
    BorrowReturnMgrIndexComponent,
    BookboxComponent,
    PeopleboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
