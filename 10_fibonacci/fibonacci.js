const fibonacci = function(num) {
    let prev1 =1;
    let prev2 =0;
    let current;

    if(num ==0){
        return 0;  /// need revesiting
    }
    if(num<0){
        return 'OOPS'
    }

    for(let i=2;i<=num;i++){
        current =prev1+prev2;
        prev2=prev1;
        prev1=current;
    }
    return prev1;
};

// Do not edit below this line
module.exports = fibonacci;
