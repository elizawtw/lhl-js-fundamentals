//print numbers from 100 to 200
//if number is multiple of 3, print "Loopy" instead of the number
//if number is multiple of 4, print "Lighthouse" instead of the number
//if number is both multiple of 3 and 4, print "LoopyLighthouse" instead of the number.

for (let num =100; num <= 200; num++){
  //console.log(num);
  if (num % 3 === 0 && num % 4 ===0) {
    console.log("LoopyLighthouse");
  } 
  else if (num % 3 === 0) {
    console.log("Loopy");
  }
  else if (num % 4 === 0) {
    console.log("Lighthouse");
  }
  else {
    console.log(num);
  }
}