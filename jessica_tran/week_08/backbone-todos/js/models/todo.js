var app = app || {};
//Todo model - has 'title' and 'completed' attributes.

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false
  },
  //toggle 'completed' state of this todo item
  toggle: function(){
    this.save({
      completed: !this.get('completed')
    });
  }
})
