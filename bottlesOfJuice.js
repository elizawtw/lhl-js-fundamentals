var num = 99;

while (num >= 1/* your stop condition goes here */) {
    // check value of num
    if (num >= 3 && num <= 99) {
        console.log (`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`)
    }
    else if (num === 2) {
        console.log (`${num} bottles of juice on the wall! ${num} bottles of juice! Take one down, pass it around... ${num-1} bottle of juice on the wall!`)
    }
    else {
        console.log (`${num} bottle of juice on the wall! ${num} bottle of juice! Take one down, pass it around... ${num-1} bottles of juice on the wall!`)
    }
    num = num -1;
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}
