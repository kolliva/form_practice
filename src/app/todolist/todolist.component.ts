import { Component } from '@angular/core';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  title='two way binding'
  data:any;
  title1='Templeate reference'
 
  getval(item:any)
  {
    console.warn(item);
    
    
  }

}
