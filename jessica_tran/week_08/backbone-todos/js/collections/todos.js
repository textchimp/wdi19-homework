
var app = app || {};  //if var app is false, it will return an empty object

//Todo collections- backed by localStorage instead of remote server

var TodoList = Backbone.Collection.extend({
  model: app.Todo,

  //save todo items
  localStorage: new Backbone.LocalStorage('todos-backbone'),

  //filter todo items that are finished
  completed: function(){
    return this.filter(function(todo){
      return todo.get('completed')
    });
  },

  //filter todo items that not finished
  remaining: function(){
    return this.without.apply( this, this.completed());
  },
  //keep todos in order by generatng a next order number for new items.
  nextOrder: function(){
    if(!this.length){
      return 1;
    }
    return this.last().get('order') + 1;
  },
  //sort todos by their number
  comparator: function(todo){
    return todo.get('order');
  }
});

//create global collection of Todos
app.Todos = new TodoList();
