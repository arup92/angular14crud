import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { TutsComponent } from './tuts/tuts.component';
import { EventsComponent } from './tuts/events/events.component';
import { SiblingAComponent } from './tuts/transfer/sibling-a/sibling-a.component';
import { SiblingBComponent } from './tuts/transfer/sibling-b/sibling-b.component';
import { ViewChildComponent } from './tuts/view-child/view-child.component';
import { ChildComponent } from './tuts/view-child/child/child.component';
import { ToParentComponent } from './tuts/to-parent/to-parent.component';
import { Child2Component } from './tuts/to-parent/child2/child2.component';
import { PaymentApiComponent } from './tuts/payment-api/payment-api.component';
import { PDetailsDialogComponent } from './tuts/payment-api/p-details-dialog/p-details-dialog.component';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { CustomObservableComponent } from './rxjs/custom-observable/custom-observable.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    CrudAppComponent,
    TutsComponent,
    EventsComponent,
    SiblingAComponent,
    SiblingBComponent,
    ViewChildComponent,
    ChildComponent,
    ToParentComponent,
    Child2Component,
    PaymentApiComponent,
    PDetailsDialogComponent,
    RxjsComponent,
    ObservableComponent,
    CustomObservableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
