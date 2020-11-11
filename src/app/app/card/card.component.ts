
import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

showForm = false;
cardName = '';
cardDesc = '';
cardComm = '';

cardTitleList = [];
cardDescList  = [];
cardComments = [];



  constructor() { }

  ngOnInit(): void {
  }

// event: any
  // tslint:disable-next-line: typedef
  addNewCard(){
    this.showForm = true;
  }

  // tslint:disable-next-line: typedef
  appendCard(){
     this.cardTitleList.push(this.cardName);
     this.cardDescList.push(this.cardDesc);
     this.cardComments.push(this.cardComm);

     this.showForm = false;
     this.cardName = '';
     this.cardDesc = '';
     this.cardComm = '';
  }


  // tslint:disable-next-line: typedef
  delCard(event: any, curr){
    this.cardTitleList.splice(curr, 1);
  }

  // tslint:disable-next-line: typedef
  closeModal(){
    this.showForm = false;
  }



}
