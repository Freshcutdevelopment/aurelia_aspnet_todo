import {_} from 'lodash';

export class TodoApi{
  items = [];

  list(){
    return fetch('/todo.json')
    .then(response => response.json())
    .then(json => this.items = json.items);
  }

  get(id){
    fetch('/todo.json')
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      let todoItems = json.items;

      let combinedTags =
            todoItems
            .map(todoItem => todoItem.Tags)
            .reduce((combined, tag) => {
                    return combined +
                          (combined && combined.length > 0 ? "," : "")
                          + tag;
                  });

      console.log("combined tags", combinedTags);

    }).catch(function(ex) {
      console.log('parsing failed', ex)
    })
  }
}
