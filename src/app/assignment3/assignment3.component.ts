import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {

  toggleSpanValue = false;
  logBtnToggleEvent = [];
  constructor() { }

  ngOnInit(): void {
  }

  toggleSpan() {
    this.toggleSpanValue = this.toggleSpanValue === true ? false : true;
    this.logBtnToggleEvent.push(this.toggleSpanValue === true ? 'Showed at ' + new Date() : 'Hided at ' + new Date())
  }
  
  isLogsLengthGreaterThanFive() {
    return this.logBtnToggleEvent.length > 4 ? true : false;
  }
}
