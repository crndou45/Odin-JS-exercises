const sumAll = function(num1,num2) {
    let sum=0;
    if(num1 <0 ||num2<0||num1==null ||typeof(num1)!='number'||typeof(num2)!='number' ){
        return "ERROR"
    }
//    if(num1<num2){
//     for(let i=num1;i<=num2;i++){
//         sum +=i;
//     }
                                    //    MODIFYING DOUBLE FOR LOOPS
//    }
//    else if(num1>num2){
//     for(let i=num2;i<=num1;i++){
//         sum +=i;
//     }
//    }
//     return sum;
 if(num1>num2){
    const temp = num1;
    num1=num2;
    num2=temp;
 }
 for(let i=num1;i<=num2;i++)
    {
        sum +=i;
    }
    return sum;
                
};

// Do not edit below this line
module.exports = sumAll;
