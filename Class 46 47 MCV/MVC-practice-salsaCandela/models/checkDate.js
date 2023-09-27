function getToday() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const todayDateString = `${year}-${month}-${day}`;
  return todayDateString;
}

function checkDate(myDate) {
  const today = getToday();
  console.log(`Today is: ${today}`);
  console.log(`Provided date is: ${myDate}`);
  if (myDate !== today) {
    console.log(`All OK, access granted`);
    return true;
  } else {
    console.log(`Dates match, access denied`);
    return false;
  }
}

// Export person schema
module.exports = { checkDate, getToday };
