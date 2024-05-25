const removeFromArray = function( getArray,...values) {
     
    const newArray =[];
    
    getArray.forEach((element) => {

        if(!values.includes(element)){

            newArray.push(element);
        }
    });
     
   return newArray;


};

// Do not edit below this line
module.exports = removeFromArray;
