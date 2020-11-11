import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  title = 'Sprint Mario - Board';
  constructor() {

   }

  ngOnInit(): void {
  }

  insertNewList(){
    console.log('Inserting new List');
  }


}


