import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  
  isVisible = false;

  constructor() {}

  showModal() {
    this.isVisible = true;
  }

  handleOk() {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(){
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }



}
