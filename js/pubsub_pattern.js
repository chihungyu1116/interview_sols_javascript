// requirements
// pubsub.subscribe(eventName, callback, scope);
// pubsub.publish(eventName, arg1, arg2, ...);

// pubsub.subscribe("myEvent", function(x, y) { console.log(x + y)}, this);
// pubsub.subscribe("myEvent", function(x, y) { console.log(x - y)}, this);

// pubsub.publish("myEvent", 2, 3);
// console.log(5);
// console.log(-1);

function pubsub(){
  var events = {};
  
  this.subscribe = function(eventName, callback, scope){
    var event = {
      callback: callback,
      scope: scope
    }
    if(!events[eventName]){
      events[eventName] = [];
    }
    
    events[eventName].push(event);
  };
  
  this.publish = function(eventName){
    var args = Array.prototype.slice.call(arguments, 1),
        event = events[eventName],
        i = 0,
        callback, scope, e;
    if(!event){
        return;
    }
    
    for(; i < event.length; i++){
        e = event[i];
        callback = e.callback;
        scope = e.scope;
        
        callback.apply(scope, args);
    }
  };
}