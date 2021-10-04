'use strict'
const countTypesInArray = (arr) => {
    const counters = {};

for (const element of arr) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
}
return counters;
};

const consoleLog = (obj) =>{
    if(Object.keys(obj).length > 0){
        for(let i in counters){
            console.log (i + " - " + counters[i]) 
         };
    }
    else  console.log("nothing");
}

const counters ={};
console.log("1-"); 
consoleLog(counters);

counters.number = 25;
counters.string = 'Valera';
counters.boolean =true;
console.log("2-"); 
consoleLog(counters);

for( let i in counters){
    delete counters[i];
}
console.log("3-"); 
consoleLog(counters);

const mass = [25, true, 'hello', 17, 42, -742,"Valera", false, false, true,  'word'];

console.dir(countTypesInArray(mass));