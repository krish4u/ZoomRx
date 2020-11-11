import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  // listItems :any = [];
  listItems = [
   'My List one', 'My List two' , 'My List three'
  ];


showForm = false;


  ngOnInit(): void {
  }

  deleteList(delInd){
    this.listItems.splice(delInd, 1);
  }

// drop(event: CdkDragDrop<string[]>) {
//     moveItemInArray(this.listItems, event.previousIndex, event.currentIndex);
//   }

  insertNewList(){
    this.listItems.push('New List Item');
  }



}
