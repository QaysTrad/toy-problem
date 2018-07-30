//Write a stack. Once you’re done, 
//implement a queue using two stacks to create FIFO behavior. 
//The queue should not have any storage separate from its stacks.


var Stack = function() {
  var storage = [];
  var count = 0 ;
  this.push = function(v){
    storage[count] = v 
    count++
  };

  this.pop = function(){
    count--
    return storage[count]
  };

  this.size = function(){
  return  count
  };
  this.shift = function(){
    count = storage.length-1
    return storage.shift()
  }
};

var Queue = function() {

  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(v){
    return inbox.push(v)
  };

  this.dequeue = function(){
      return inbox.shift()
  };

  this.size = function(){
    return inbox.size()
  };
};
