import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { CustomObservableComponent } from './rxjs/custom-observable/custom-observable.component';
import { ObservableComponent } from './rxjs/observable/observable.component';
import { RxjsComponent } from './rxjs/rxjs/rxjs.component';
import { EventsComponent } from './tuts/events/events.component';
import { PaymentApiComponent } from './tuts/payment-api/payment-api.component';
import { ToParentComponent } from './tuts/to-parent/to-parent.component';
import { SiblingAComponent } from './tuts/transfer/sibling-a/sibling-a.component';
import { TutsComponent } from './tuts/tuts.component';
import { ViewChildComponent } from './tuts/view-child/view-child.component';

const routes: Routes = [
  { path: "crud", component: CrudAppComponent },
  {
    path: "rxjs", component: RxjsComponent, children: [
      { path: "observable", component: ObservableComponent },
      { path: "customobservable", component: CustomObservableComponent }
    ]
  },
  {
    path: "tuts", component: TutsComponent, children: [
      { path: "events", component: EventsComponent },
      { path: "transfer", component: SiblingAComponent },
      { path: "view-child", component: ViewChildComponent },
      { path: "to-parent", component: ToParentComponent },
      { path: "api", component: PaymentApiComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
