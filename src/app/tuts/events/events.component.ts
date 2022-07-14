import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  title: string = "Input Events";

  constructor() { }

  ngOnInit(): void {
  }

  getData(data: any) {
    console.log(data);
  }

}