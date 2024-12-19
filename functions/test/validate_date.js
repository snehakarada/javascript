
function formatValidation(format) {
  const yearFormat = 'yyyy-mm-dd';
  return format === 'dd-mm-yyyy' || format === 'mm-dd-yyyy' || format === yearFormat;
}

function isDateAndFormatMaching(date, format) {
  
}

function yearValidation(year) {
  return year < 1 || year > 9999;
}

function monthValidation(month) {
  return month < 1 || month > 12 || month === '0-'
}

function dayValidation(day, month) {
  if (day > '31' || day < '01' || (month === '2' && day > 29)) {
    return true;
  }
  const thirtyOneDays = (month === '4' || month === '6' || month === '9');
  if ((thirtyOneDays || month === '11') && date > '30') {
    return true;
  }
  return false;
}

function yearFormatValidation(date) {
  let index = 0;
  let year = '';

  while (index < date.length) {
    if (date[index] === '-') {
      break;
    }
    year = year + date[index];
    index++
  }

  if (yearValidation(year)) {
    return 'invalid year';
  }

  index = index + 1;
  const month = date[index] + date[index + 1];

  if (monthValidation(month)) {
    return 'invalid month';
  }

  const day = date[index + 3] + date[index + 4];
  if (dayValidation(day, month)) {
    return 'invalid day';
  }
  return 'valid';
}

function monthFormatValidation(date) {
  let index = 0;
  let month = '';
  while (index < date.length) {
    if (date[index] === '-') {
      break;
    }
    month = month + date[index];
    index++
  }
  if (monthValidation(month)) {
    return 'invalid month';
  }
  index = index + 1;
  const day = date[index] + date[index + 1];
  if (dayValidation(day, month)) {
    return 'invalid day';
  }

  const year = date[index + 3] + date[index + 4] + date[index + 5] + date[index + 6];
  if (yearValidation(year)) {
    return 'invalid year';
  }
  return 'valid';
}

function validate(format, date) {
  if (!formatValidation(format)) {
    return 'invalidFormat';
  }

  if (format === 'yyyy-mm-dd') {
    return yearFormatValidation(date);
  }

  if (format === 'mm-dd-yyyy') {
    return monthFormatValidation(date);
  }
  
  //if (format === 'dd-mm-yyyy')
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('mm-d-yyyy', '01-01-2020', 'invalidFormat');
  testValidate('mm-dd-yyyy', '0100-61-20', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  // testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
  // testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
}

testAll();