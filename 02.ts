function countHours(year:number, holidays:string[]) {
  const getDate = (year:number) => (date:string) => {
    const [month,day] = date.split('/');
    return new Date(year, Number(month)-1, Number(day));
  }
  const getDay = (date:Date) => date.getDay()
  const isWorkingDay = (day:number) => day !== 0 && day !== 6

  return holidays
    .map(getDate(year))
    .map(getDay)
    .filter(isWorkingDay)
    .length * 2
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

// 01/06 is January 6, Thursday. Count.
// 04/01 is April 1, Friday. Count.
// 12/25 is December 25, Sunday. Do not count.

countHours(year, holidays)
countHours(2023, ['01/06', '04/01', '12/25'])
