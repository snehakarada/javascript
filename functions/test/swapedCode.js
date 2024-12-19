
function isFormatValid(format) {
  if (format === 'mm-dd-yyyy' || format === 'dd-mm-yyyy' || format === 'yyyy-mm-dd') {
    return 'valid';
  } 
  return 'invalid format';
}

function isDateAccordingToFormat(format, date) {
  const invalidDateFormat = 'date not according to format';

  if (isFormatValid(format) === 'valid') {    
    if (format === 'mm-dd-yyyy' || 'dd-mm-yyyy') {
      if (date[2] !== '-' && date[5] !== '-') {
        return invalidDateFormat;
      }

      return 'valid';
    }

    if (format === 'yyyy-mm-dd' && date[4] !== '-' && date[7] !== '-') {
        return invalidDateFormat;
      }

      return 'valid';
} 
  return isFormatValid(format);
}

function isDateValid(format, date) {
  if (format === 'yyyy-mm-dd') {
    const year = +(date[0] + date[1] + date[2] + date[3]);
    const month = +(date[5]+ date[6]);
    const day =  +(date[8]+ date[9]);

    if (year <= 0 || year > 10000) {
      return 'invalid year';
    }
    return 'valid'
  }
}

function validate(format, date) {
  if (isDateAccordingToFormat(format, date) === 'valid') {
    return isDateValid(format, date);
  }
  return isDateAccordingToFormat(format, date);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testAll() {
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
  testValidate('dd-mm-yyyy', '01-01-2020', 'invalid format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0000', 'invalid month');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid day');
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('yyyy mm dd', '2020 01 01', 'invalid format');
  testValidate('yyyy-mm-dd', '2020 01 01', 'date not according to format');
}

testAll();