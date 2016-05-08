
import {inject, bindable} from 'aurelia-framework';
import {TodoApi} from './todoapi';

@inject(TodoApi)
export class  App{

	constructor(todoApi){
		this.todoItems = [];
		this.searchTerm = "";
		this.heading = "Crafty Coders - Todo";
 
		this.status = "ready";
		this.todoApi = todoApi;
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
