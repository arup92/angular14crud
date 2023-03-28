import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, AfterViewInit {
  constructor(public _title: Title) {
    _title.setTitle("Observable! ");
  }

  // Post array and observable
  postArray = [
    { title: "Arup0", description: "Label Description0" },
    { title: "Arup1", description: "Label Description1" },
    { title: "Arup2", description: "Label Description2" }
  ];

  postArrayObservable$ = from(this.postArray);

  postArrayObservable(): void {
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (data) => console.log(data),
      complete: () => console.log("Stream Complete")
    });
  }

  // Promise Observable
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise Resolved after 3s.");
    }, 3000);
  })

  promiseObservable$ = from(this.promise)
  promiseObservable(): void {
    this.promiseObservable$.subscribe({
      next: (data) => console.log(data),
      error: (data) => console.log(data),
      complete: () => console.log("Promise Done")
    });
  }

  ngOnInit(): void {
    this.postArrayObservable();
    this.promiseObservable();
  }

  ngAfterViewInit(): void {
    fromEvent(document.getElementById("click-event")!, "click").subscribe({
      next: (data) => console.log(data),
      error: (data) => console.log(data),
      complete: () => console.log("Click event completed")
    });
  }

}
