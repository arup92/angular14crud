import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.scss']
})
export class CustomObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const newObservable = new Observable((observer) => {
      for (let i = 0; i <= 5; i++) {
        if (i == 4) {
          observer.error("Error Occuerd. Hence complete not fired.");
        }
        observer.next(i);
      }

      observer.complete();
    });

    newObservable.subscribe({
      next: (data) => console.log(data),
      error: (error) => console.log(error),
      complete: () => console.log("complete")
    });
  }

}
