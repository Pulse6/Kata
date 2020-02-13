let talkingCalendar = function(date) {
  let split = date.split("/")
  console.log(split[1])
  let month = [ "January", "February", "March", "April", "May", "June", 
  "July", "August", "September", "October", "November", "December" ];
  let dates = [`1st`, `2nd`, `3rd`, `4th`, `5th`, `6th`, `7th`, `8th`, `9th`, `10th`, `11th`, `12th`, `13th`, `14th`, `15th`, `16th`, `17th`, `18th`, `19th`, `20th`, `21st`, `22nd`, `23rd`, `24th`, `25th`, `26th`, `27th`, `28th`, `29th`, `30th`, `31st`]
  return month[split[1] - 1] + " " + dates[split[2] - 1 ] + ", " + split[0]
};

// console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/11"));
// console.log(talkingCalendar("1987/08/24"));


// December 2nd, 2017 st nd rd th
// November 11th, 2007
// August 24th, 1987