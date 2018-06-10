import { Component, OnInit } from '@angular/core';
import { List } from '../list';
import { LISTS } from '../employees';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  lists = LISTS;
  list;
  id = 20;

  selectedList: List;
  addList:List;
  // lastId: number = List.id;
  heroForm = new FormGroup ({
    name: new FormControl(this.heroForm, 
      [Validators.required,
       Validators.minLength(4)])
  });

    
  constructor() {  }

  onSubmit(list:List, id){
    this.id=id;
    console.log(id)
    console.log('submited value: ', this.lists.length, this.heroForm.value.name);
    // const formModel = this.heroForm.value;
    this.addList= list;
    this.lists.push({
        name: this.heroForm.value.name,
        like:0,
        dislike:0
        });
    this.heroForm.name = '';
    var incremented = false;
    if (incremented) { return; }
    id ++;
    incremented = true;  
  }
  
  ngOnInit() {
  }

  onAdd(list:List){
    this.addList= list;
    console.log(this.addList, this.lists);
  }

  onLike(list, i){
    this.list = list;
    var incremented = false;
    console.log(this.list.id, "like")
    if (incremented) { return; }
    this.list.like ++;
    incremented = true;
  }

  onDislike(list, i){
    this.list = list;
    var decremented = false;
    console.log(this.list.id, "dislike")
    if (decremented) { return; }
    this.list.dislike ++;
    decremented = true;
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }

  onDelete(list, i){
    console.log('delete item id', list.id);
    this.lists.splice(i, 1);
  }
}