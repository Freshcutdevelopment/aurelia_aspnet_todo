import {_} from 'lodash';

export class TodoApi{
  items = [];

  list(){
    return fetch('api/todo')
    .then(response => response.json())
    .then(json => this.items = json);
  }

}
