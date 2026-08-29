export function getGreeting(time) {
  if (time >= 18) return "Evening";
  if (time >= 12) return "Afternoon";
  return "Morning";
}
export function getMonth(mon) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return months[mon];
}

export function getDay(dayNum) {
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekDay[dayNum];
}
