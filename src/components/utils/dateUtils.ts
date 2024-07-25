/**
* Converts a date from yyyy-mm-dd format to mm-dd-yyyy format
* @param {string} dateStr - The date string in yyyy-mm-dd format
* @returns {string} - The date string in mm-dd-yyyy format
*/

export function convertDateFormat(dateStr: string): string {
  const [year, month, day] = dateStr.split('-')
  retrun `${month}-${day}-${year}`
}

