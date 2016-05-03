
import {inject, bindable} from 'aurelia-framework';
import {TodoApi} from './todoapi';

@inject(TodoApi)
export class  App{

  @bindable todoItems = [];
  @bindable searchTerm = "";
  @bindable heading = "my heading";
  
  @bindable headingFirstPart = "my";
  @bindable headingSecondPart = "heading";
  
  constructor(todoApi){
    this.status = "ready";
    this.todoApi = todoApi;
  }
  
  get myHeading(){
      return this.headingFirstPart + this.headingSecondPart;
  }

  bind(){
    this.todoApi.list().then(todoItems =>{
      this.todoItems = todoItems;
    });
  }
  
  clearFilter(){
    this.searchTerm = "";
  }
  
  filterFunc(searchExpression, value){
     
     let itemValue = value.text;
     if(!searchExpression || !itemValue) return false;
     
     return itemValue.toUpperCase().indexOf(searchExpression.toUpperCase()) !== -1;
     
  }
}
