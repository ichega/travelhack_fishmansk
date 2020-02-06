import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  openModal: boolean=false;
  
  isLoadingOne = false;



  onBack(): void {
    console.log('onBack');
  }

  ModalEvent(type){
    this.isLoadingOne = true;
    if(type == 1){
      setTimeout(() => {
        this.isLoadingOne = false;
        this.openModal = true
      }, 2000);
    }else{
      this.openModal = false
      this.isLoadingOne = false;
    }

  }

  constructor() { }

  ngOnInit() {
  }


  isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
