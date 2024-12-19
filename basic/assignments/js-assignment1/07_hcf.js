// Do not rename a and b, use them as input for your program.
// a and b will be whole numbers.
// While testing we will change their values.
const a = 9;
const b = 9;
// Print the HCF of a and b
// Printing more than one output or printing anything other than HCF might will be consider as error.
// START YOUR CODE AFTER THIS LINE. DO NOT REMOVE THIS LINE
let hcfOfTwoNumbers=0;
let remainder=1;
let number1=a;
let number2=b;
remainder=number1%number2;
if(b==0){
    console.log(a);
}
else if(a==0&&b==0){
    console.log(hcfOfTwoNumbers);
}
else{
    while(true){
        if(remainder!=0){
            number1=number2;
            number2=remainder;
            remainder=number1%number2;
        }
        else{
            hcfOfTwoNumbers=number2;
            break;
        }
    }  
    console.log(hcfOfTwoNumbers);
}


