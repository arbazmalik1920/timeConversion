// JavaScript program to convert time from
// 12-hour format to 24-hour format

// Function to convert time from
// 12-hour format to 24-hour format
function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes()+45;
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes  = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ':' + (seconds+ 05) + ' ' + ampm;
    return strTime;
  }
  
  console.log(formatAMPM(new Date));