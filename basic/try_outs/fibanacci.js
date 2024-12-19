let numberOfTerms=5;
let start=0;
let nextToStart=1;
let count=2;
let last=0;
if(numberOfTerms==1){
    console.log(0)
}
else{
    console.log(start,nextToStart);
    while(count<numberOfTerms){
        last=start+nextToStart;
        console.log(last);
        start=nextToStart;
        nextToStart=last;
        count=count+1;
    }
}
