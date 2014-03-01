function Node(value){
  var next = null,
      value = value;

  this.getNext = function(){
    return next;
  };
  this.setNext = function(node){
    console.log('what1');
    next = node;
  };
  this.getValue = function(node){
    if(node === null) return null;

    return node ? node.getValue() : value;
  };
  this.get = function(index){
    var node = this;

    if(index === 0){
      return this.getValue();
    }

    while(index !== 0){
      if(!node){
        throw 'end of list';
      }
      node = node.getNext();
      index--;
    }

    return this.getValue(node);
  };
  this.append = function(value){
    var node = new Node(value),
        prev = current = this;

    while(current){
      prev = current;
      current = current.getNext();
    }

    prev.setNext(node);
    return this;
  };
  this.add = function(value){
    var node = new Node(value),
        current_next;
    if(!this.getNext()){
      this.setNext(node);
      return this;
    }
    
    current_next = this.getNext();
    node.setNext(current_next);
    this.setNext(node);
    return this;
  };
}


var node = new Node(1);

node.add(3).add(4);

// 1->4->3

node.append(9);

// 1->4->3->9

node.append(10).append(33);

// 1->4->3->9->10->33



