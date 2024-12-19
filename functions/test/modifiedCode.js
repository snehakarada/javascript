const MM_DD_YYYY = 'mm-dd-yyyy';
const DD_MM_YYYY = 'dd-mm-yyyy';
const YYYY_MM_DD = 'yyyy-mm-dd';

function isFormatValid(format) {
  return format === MM_DD_YYYY || format === DD_MM_YYYY || format === YYYY_MM_DD;
}

function dateHasChar(year, month, day) {
  return year + month + day;
}

function isDateAccordingToFormat(format, date) {
  if (date.length > 10 || date.length < 10) {
    return false;
  }

  for (let index = 0; index < date.length; index++) {
    if (date[index] === ' ') {
      return false;
    }
  }

  if (format === MM_DD_YYYY || format === DD_MM_YYYY) {
    return date[2] === '-' && date[5] === '-';
  }

  return format === YYYY_MM_DD && date[4] === '-' && date[7] === '-';
}

function isYearValid(year) {
  return year < 1;
}

function isMonthValid(month) {
  return month < 1 || month > 12;
}

function isDivisible(dividend, divisor) {
  return dividend % divisor === 0;
}

function isLeapYear(year) {
  if (isDivisible(year, 400)) {
    return true;
  }

  return (isDivisible(year, 4) && !isDivisible(year, 100));
}

function isDayValid(day, month, year) {

  if (day > 31 || day < 1) {
    return true;
  }
  const daysInLeapYear = (isLeapYear(year) && month === 2) ? 29 : 28;

  if (day > daysInLeapYear) {
    return true;
  }
  const hasthirtyDays = (month === 4 || month === 6 || month === 9 || month === 11);

  return (hasthirtyDays && day > 30);
}

function validateYearMonthDay(year, month, day) {
  if (isYearValid(year)) {
    return 'invalid year';
  }

  if (isMonthValid(month)) {
    return 'invalid month';
  }

  if (isDayValid(day, month, year)) {
    return 'invalid day';
  }

  return 'valid';
}

function slice(date, start, end) {
  let sliceOfString = '';
  for (start; startIndex <= end; start++) {
    sliceOfString = sliceOfString + date[start];
  }

  return sliceOfString;
}

function extractYear(date, start) {
  return +(date[start] + date[start + 1] + date[start + 2] + date[start + 3]);
}

function extractMonthOrDate(date, start) {
  return +(date[start] + date[start + 1]);
}

function dateValidation(format, date) {
  let year = '';
  let month = '';
  let day = '';
  if (format === YYYY_MM_DD) {
    year = extractYear(date, 0);
    month = extractMonthOrDate(date, 5);
    day = extractMonthOrDate(date, 8);
  }

  if (format === DD_MM_YYYY) {
    year = extractYear(date, 6);
    month = extractMonthOrDate(date, 3);
    day = extractMonthOrDate(date, 0);
  }

  if (format === MM_DD_YYYY) {
    year = extractYear(date, 6);
    month = extractMonthOrDate(date, 0);
    day = extractMonthOrDate(date, 3);
  }

  if (dateHasChar(year, month, day) + '' === 'NaN') {
    return 'date is not according to format';
  }

  return validateYearMonthDay(year, month, day);
}

function validate(format, date) {
  if (!isFormatValid(format)) {
    return 'invalid format';
  }
  if (!isDateAccordingToFormat(format, date)) {
    return 'date not according to format';
  }
  return dateValidation(format, date);
}

function testValidate(format, date, expected) {
  const result = validate(format, date);
  console.log(result === expected ? '✅' : '❌', format, date, expected, result);
}

function testIsFormatValid() {
  testValidate('mm-d-yyyy', '01-01-2020', 'invalid format');
  testValidate('xx-yy-zzzz', '01-01-2020', 'invalid format');
}

function testIsDateAccordingToFormat() {
  testValidate('mm-dd-yyyy', '0100-61-20', 'date not according to format');
  testValidate('mm-dd-yyyy', '01 01 2020', 'date not according to format');
  testValidate('yyyy-mm-dd', '2020 01 01', 'date not according to format');
  testValidate('yyyy-mm-dd', '001-01-01', 'date not according to format');
  testValidate('yyyy-mm-dd', '2006-39-280', 'date not according to format');
  testValidate('yyyy-mm-dd', '  02-02-12', 'date not according to format');
  testValidate('yyyy-mm-dd', 'yyyy-mm-dd', 'date is not according to format');
  testValidate('yyyy-mm-dd', '200@-01-01', 'date is not according to format');
}

function testFormatStartsWithYear() {
  testValidate('yyyy-mm-dd', '2020-01-01', 'valid');
  testValidate('yyyy-mm-dd', '0000-01-01', 'invalid year');
  testValidate('yyyy-mm-dd', '2006-39-28', 'invalid month');
  testValidate('yyyy-mm-dd', '2006-01-45', 'invalid day');
  testValidate('yyyy-mm-dd', '0000-39-28', 'invalid year');
  testValidate('yyyy-mm-dd', '2006-39-28', 'invalid month');
  testValidate('yyyy-mm-dd', '2006-39-90', 'invalid month');
  testValidate('yyyy-mm-dd', '2000-01-32', 'invalid day');
  testValidate('yyyy-mm-dd', '2006-09-31', 'invalid day');
  testValidate('yyyy-mm-dd', '2000-02-29', 'valid');
  testValidate('yyyy-mm-dd', '2000-02-30', 'invalid day');
  testValidate('yyyy-mm-dd', '2003-02-29', 'invalid day');
  testValidate('yyyy-mm-dd', '2003-02-28', 'valid');
}

function testFormatStartsWithMonth() {
  testValidate('mm-dd-yyyy', '01-28-2006', 'valid');
  testValidate('mm-dd-yyyy', '01-01-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '13-01-0001', 'invalid month');
  testValidate('mm-dd-yyyy', '01-60-0000', 'invalid year');
  testValidate('mm-dd-yyyy', '01-32-2006', 'invalid day');
  testValidate('mm-dd-yyyy', '09-31-2006', 'invalid day');
  testValidate('mm-dd-yyyy', '02-29-2024', 'valid');
  testValidate('mm-dd-yyyy', '02-29-2023', 'invalid day');
  testValidate('mm-dd-yyyy', '01-01-202d', 'date is not according to format');
}

function testFormatStartsWithDay() {
  testValidate('dd-mm-yyyy', '01-01-2020', 'valid');
  testValidate('dd-mm-yyyy', '01-01-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '01-89-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '40-01-0001', 'invalid day');
  testValidate('dd-mm-yyyy', '40-01-0000', 'invalid year');
  testValidate('dd-mm-yyyy', '40-30-0001', 'invalid month');
  testValidate('dd-mm-yyyy', '31-02-2000', 'invalid day');
  testValidate('dd-mm-yyyy', '29-02-2001', 'invalid day');
  testValidate('dd-mm-yyyy', '32-01-2000', 'invalid day');
  testValidate('dd-mm-yyyy', '31-04-2000', 'invalid day');
}

function testAll() {
  testIsFormatValid();
  testIsDateAccordingToFormat();
  testFormatStartsWithYear();
  testFormatStartsWithMonth();
  testFormatStartsWithDay();
}

testAll();