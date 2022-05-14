import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class AppAssignment2Component implements OnInit {

  userName = '';

  constructor() { }

  ngOnInit(): void {
  }


  onCreateUser() {
    this.userName = '';
  }

}
