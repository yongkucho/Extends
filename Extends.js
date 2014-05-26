/*
Extend Module
Extend.module("FirstName",function(){
    this.firstName = "yongku";
});

Extend.module("LastName",function(){
    this.lastName = "Cho";
});

Extend.module("GetName",['LastName','FirstName', function(){
    console.log("LastName: "+this.lastName);
    console.log("FirstName: "+this.firstName);
}]);
*/
var Extend = (function(){
    var store = {};
    return {
        module: function(name){
            var callback = null;
            var secondArg = arguments[1];
            if(typeof secondArg === "object"){
                if(typeof secondArg.length === "number"){
                    var arrSize = secondArg.length - 1;
                    callback = secondArg[arrSize];
                    for(var i = 0; i < arrSize; i++){
                        callback.prototype = store[secondArg[i]];
                    }
                }else{
                    return;
                }
            }else{
                callback = secondArg;
            }
            store[name] = callback;
            callback.call();
        }
    };
}());
