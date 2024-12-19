let number1=36;
let number2=24;
let hcfOfTwoNumbers=0;
let remainder=1;
let dupNumber1=number1;
let dupNumber2=number2;
let lcmOfTwoNumbers=0;

let iterate=1;
remainder=dupNumber1%dupNumber2;
while(iterate==1){
    if(remainder!=0){
        dupNumber1=dupNumber2;
        dupNumber2=remainder;
        remainder=dupNumber1%dupNumber2;
    }
    else{
        hcfOfTwoNumbers=dupNumber2;
        iterate=0;
    }
    
}  
console.log("hcf of ",number1,"and",number2,"is=",hcfOfTwoNumbers);

/*lcmOfTwoNumbers=(number1*number2)/hcfOfTwoNumbers;
console.log("hcf of ",number1,"and",number2,"is=",lcmOfTwoNumbers);*/