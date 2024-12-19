let number=135;
let duplicateForCount=number;
let duplicateForSum=number;
let remainder=0;
let numberOfDigits=0;
let sum=0;
let product=1;
let count=0;
while(duplicateForCount>0){
    remainder=duplicateForCount%10;
    if(remainder!=0){
        numberOfDigits=numberOfDigits+1;
    }
    duplicateForCount=(duplicateForCount-remainder)/10;  
}
while(duplicateForSum>0){
    count=numberOfDigits;
    remainder=duplicateForSum%10;
    while(count>0){
        product=product*remainder;
        count=count-1;
    }
    sum=sum+product;
    duplicateForSum=(duplicateForSum-remainder)/10;
    product=1;
}
if(number==sum){
    console.log(number,"is armstrong number");
}
else{
    console.log(number,"is not armstrong number");
}
