;(function(global, $) {

    // 'new' an object
    var Linkedlist = function() {
        return new Linkedlist.init();
    }

    function Node(value, next, prev) {
      // debugger;
      this.value = value;
      this.next = next;
      this.prev = prev;
    };

    // hidden within the scope of the IIFE and never directly accessible


    // prototype holds methods (to save memory space)
    Linkedlist.prototype = {


        // chainable methods return their own containing object
        addToHead: function(value) {
          var newNode = new Node(value, this.head, null);
          if (this.head) {
            this.head.prev = newNode;
          } else {
            this.tail = newNode;
          } this.head = newNode;
          return this;
        },

        addToTail: function(value) {
          var newNode = new Node(value, null, this.tail);
          if (this.tail) {
            this.tail.next = newNode;
          } else {
            this.head = newNode;
          } this.tail = newNode;
          return this;
        },

        removeHead : function() {
          if (!this.head) {
            this.head;
          }
          var val = this.head.value;
          this.head = this.head.next;
          if (this.head) {
            this.head.prev = null;
          } else {
            this.tail = null
          } console.log(val+": removed");
          return this;
        },

        removeTail : function() {
          if (!this.tail) {
            return null;
          }
          var val = this.tail.value;
          this.tail = this.tail.prev;
          if (this.tail) {
            this.tail.next = null;
          } else {
            this.head = null;
          } console.log(val+": removed");
          return this;
        },


        search: function(searchValue) {
          var currentNode = this.head;
          while (currentNode) {
            if (currentNode.value === searchValue) {
              return currentNode.value;
            }
            currentNode = currentNode.next;
          }
          return null;
        },

        indexOf: function(value) {
          var indexes = [];
          var currentIndex = 0;
          var currentNode = this.head;
          while(currentNode) {
            if (currentNode.value === value) {
              indexes.push(currentIndex);
            }
            currentNode = currentNode.next;
            currentIndex++;
          }
          return indexes;
        }


    };

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Linkedlist.init = function() {

      var self = this;
      self.head = null;
      self.tail = null;

    }


    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Linkedlist.init.prototype = Linkedlist.prototype;

    // attach our list to the global object, and provide a shorthand '$ll' for ease our poor fingers
    global.Linkedlist = global.$ll = Linkedlist;

//###########################

    var Bst = function(value) {
        return new Bst.init(value);
    }

    Bst.prototype = {


        // chainable methods return their own containing object
        insert: function(value) {
          if (value <= this.value) {
            if (!this.left) {
              this.left = new Bst(value);
            } else {
              this.left.insert(value);
            }
          }
          else if (value > this.value) {
            if (!this.right) {
              this.right = new Bst(value);
            } else {
              this.right.insert(value);
            }
          } return this
        },

        contains: function(value) {
          if (this.value === value) {
            return true;
          }
          if (value < this.value) {
            if (!this.left) {
              return false;
            } else {
              return this.left.contains(value);
            }
          }
          else if (value > this.value) {
            if (!this.right) {
              return false;
            } else {
              return this.right.contains(value);
            }
          }
        },

        depthFirstTraversal : function(iteratorFunc, order) {
          if (order === 'pre-order') { iteratorFunc(this.value);}
          if (this.left) {this.left.depthFirstTraversal(iteratorFunc, order);}
          if (order === 'in-order') { iteratorFunc(this.value);}
          if (this.right) {this.right.depthFirstTraversal(iteratorFunc, order);}
          if (order === 'post-order') { iteratorFunc(this.value);}
        },

        breadthFirstTraversal : function(iteratorFunc) {
          var queue = [this];
          while (queue.length) {
            var treeNode = queue.shift();
            iteratorFunc(treeNode);
            if (treeNode.left) {
              queue.push(treeNode.left)
              ;}
            if (treeNode.right) {
              queue.push(treeNode.right);
            }
          }
        },


        getMinVal: function() {
          if (this.left) {
            return this.left.getMinVal();
          } else {
            return this.value;
          }
        },

        getMaxVal: function() {
          if (this.right) {
            return this.right.getMaxVal();
          } else {
            return this.value;
          }
        }


    };


    Bst.init = function(value) {

      var self = this;
      this.value = value;
      this.right = null;
      this.left = null;

    }

    Bst.init.prototype = Bst.prototype;

    global.Bst = global.$bst = Bst;

}(window, jQuery));
