export const uniqueArray = (arr) => [...new Set(arr)];

export const getDate = () => {
  const date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate()
  return `${year}-${month}-${day}`
}
