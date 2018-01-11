/*
Write a function called whatday() which returns the day according to the number

1 returns 'Sunday'

2 returns 'Monday'

3 returns 'Tuesday'

4 returns 'Wednesday'

5 returns 'Thursday'

6 returns 'Friday'

7 returns 'Saturday'

if it's not a number between 1-7 return "Wrong, please enter a number between 1 and 7"
*/

function whatday(num) { 

  var day = num;
  
  switch(day) {
    case 1: day = "Sunday";
        break;
    case 2: day = "Monday";
        break;
    case 3: day = "Tuesday";
        break;
    case 4: day = "Wednesday";
        break;
    case 5: day = "Thursday";
        break;
    case 6: day = "Friday";
        break;
    case  7: day = "Saturday";
        break;
        default: return "Wrong, please enter a number between 1 and 7";
  }
  return day;
}

//--------------Other Solutions---------------//

function whatday(num) { 
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[num - 1] || 'Wrong, please enter a number between 1 and 7';
}