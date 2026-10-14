function daysBetweenDates(date1, date2) {
  const toUTC = (dateStr) => {
    const [year, month, day] = dateStr.split("-").map(Number);
    return Date.UTC(year, month - 1, day);
  };

  const MS_PER_DAY = 24 * 60 * 60 * 1000;
  const diff = Math.abs(toUTC(date1) - toUTC(date2));

  return Math.round(diff / MS_PER_DAY);
}
console.log(daysBetweenDates("2023-01-01", "2023-01-15"));
console.log(daysBetweenDates("2020-01-15", "2020-01-20"));
console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
