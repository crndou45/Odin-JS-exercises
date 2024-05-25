const leapYears = function(year) {
if(((year % 4 == 0)) &&(year % 100 !=0 ||(year % 400 ==0))){
   return true
}                                        //NO need for an  if statement you can just write to the return and it will return true or false
return false
};

// Do not edit below this line
module.exports = leapYears;
