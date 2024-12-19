function compoundIntrestReccursive(principle, year, rate, time, interest) {
  if (year > time) {
    return interest;
  }
  interest = interest + principle * rate / 100;
  return compoundIntrestReccursive(principle + interest, year + 1, rate, 
    time, interest);
}

function compoundIntrest(principle, rate, time) {
  const year = 1;
  const interest = 0;
  return compoundIntrestReccursive(principle, year, rate, time, interest)
}

console.log(compoundIntrest(100, 5 ,1));
console.log(compoundIntrest(100, 5, 2));
console.log(compoundIntrest(100, 5, 3));