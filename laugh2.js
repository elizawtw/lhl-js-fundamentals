let total = "";
 function laugh (num) {
    for (let repeat = 1; repeat <= num; repeat++){
       total = total + "ha";
       
    }
    total = total + "!";
    return total;
    
}
console.log(laugh(7));