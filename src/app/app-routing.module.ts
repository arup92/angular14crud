import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAppComponent } from './crud-app/crud-app.component';
import { EventsComponent } from './tuts/events/events.component';
import { TutsComponent } from './tuts/tuts.component';

const routes: Routes = [
  { path: "crud", component: CrudAppComponent },
  {
    path: "tuts", component: TutsComponent, children: [
      { path: "events", component: EventsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
