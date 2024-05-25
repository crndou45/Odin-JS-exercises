const repeatString = function(greet,num) {
    if(num<0) return "ERROR";
    let greetings = "";
    for(let i =0;i<num;i++){
       greetings +=greet;
     
    }
    return greetings;
};

// Do not edit below this line
module.exports = repeatString;
