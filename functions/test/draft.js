


function isDateHasNumbers(year, month, day) {
  year = +year + '';
  month = +month + '';
  day = +day + '';

  if (year === 'NaN') {
    return 'invalid year';
  }

  if (month === 'NaN') {
    return 'invalid month';
  }

  if (day === 'NaN') {
    return 'invalid day';
  }

  return false;
}


if (year + '' === 'NaN') {
  return true;
}


if (isDateHaveNumbers(year, month, day)) {
  return 'date not according to format';
}


function monthFormatValidation(date) {
  const month = +(date[0] + date[1]);
  const day = +(date[3] + date[4]);
  const year = +(date[6] + date[7] + date[8] + date[9]);

  return testValidations(year, month, day);
}

function dayFormatValidation(date) {
  const day = +(date[0] + date[1]);
  const month = +(date[3] + date[4]);
  const year = +(date[6] + date[7] + date[8] + date[9]);

  return testValidations(year, month, day);
}

function yearFormatValidation(date) {
  const year = +(date[0] + date[1] + date[2] + date[3]);
  const month = +(date[5] + date[6]);
  const day = +(date[8] + date[9]);

  return testValidations(year, month, day);
}



if (format === startsWithMonth) {
  return monthFormatValidation(date);
}

if (format === startsWithDate) {
  return dayFormatValidation(date);
}
if (format === startsWithYear) {
  return yearFormatValidation(date);
}